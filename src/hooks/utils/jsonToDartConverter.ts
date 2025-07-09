/**
 * JSON to Dart class converter utility
 * Converts JSON objects to Dart class definitions with fromJson and toJson methods
 */

interface DartProperty {
  name: string;
  type: string;
  isNullable: boolean;
}

interface DartClass {
  name: string;
  properties: DartProperty[];
}

/**
 * Converts a camelCase or snake_case string to PascalCase
 */
function toPascalCase(str: string): string {
  return str
    .replace(/[_-](.)/g, (_, char) => char.toUpperCase())
    .replace(/^(.)/, (_, char) => char.toUpperCase());
}

/**
 * Converts a string to camelCase
 */
function toCamelCase(str: string): string {
  return str
    .replace(/[_-](.)/g, (_, char) => char.toUpperCase())
    .replace(/^(.)/, (_, char) => char.toLowerCase());
}

/**
 * Determines the Dart type for a given value
 */
// 1. 类型推断增强：遍历数组所有元素推断类型
function getDartType(value: any, propertyName: string): string {
  if (value === null || value === undefined) {
    return 'dynamic';
  }
  if (typeof value === 'string') {
    return 'String';
  }
  if (typeof value === 'number') {
    return Number.isInteger(value) ? 'int' : 'double';
  }
  if (typeof value === 'boolean') {
    return 'bool';
  }
  if (Array.isArray(value)) {
    if (value.length === 0) {
      return 'List<dynamic>';
    }
    // 新增：遍历所有元素类型
    const types = Array.from(new Set(value.map((el) => getDartType(el, propertyName))));
    if (types.length === 1) {
      return `List<${types[0]}>`;
    } else {
      return 'List<dynamic>';
    }
  }
  if (typeof value === 'object') {
    return toPascalCase(propertyName);
  }
  return 'dynamic';
}

/**
 * Analyzes a JSON object and extracts class definitions
 */
// 2. 支持所有字段默认可空或必填配置
function analyzeJsonStructure(obj: any, className: string, classes: Map<string, DartClass> = new Map(), allNullable: boolean = false): Map<string, DartClass> {
  if (typeof obj !== 'object' || obj === null) {
    return classes;
  }
  const properties: DartProperty[] = [];
  for (const [key, value] of Object.entries(obj)) {
    const propertyName = toCamelCase(key);
    const dartType = getDartType(value, key);
    // 新增：支持全局可空配置
    const isNullable = allNullable ? true : value === null || value === undefined;
    properties.push({
      name: propertyName,
      type: dartType,
      isNullable
    });
    if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
      const nestedClassName = toPascalCase(key);
      analyzeJsonStructure(value, nestedClassName, classes, allNullable);
    }
    if (Array.isArray(value) && value.length > 0) {
      const firstElement = value[0];
      if (typeof firstElement === 'object' && firstElement !== null) {
        const elementClassName = toPascalCase(key.replace(/s$/, ''));
        analyzeJsonStructure(firstElement, elementClassName, classes, allNullable);
      }
    }
  }
  classes.set(className, { name: className, properties });
  return classes;
}

/**
 * Generates Dart class code from a class definition
 */
// 2. 属性命名与原始 key 映射，生成 @JsonKey 注解
// 5. 代码格式与注释增强
function generateDartClass(dartClass: DartClass, originalKeys?: Record<string, string>, comments?: Record<string, string>, usePrivateFields: boolean = false): string {
  const { name, properties } = dartClass;
  let classCode = `/// Dart class generated from JSON\n`;
  classCode += `class ${name} {\n`;
  properties.forEach(prop => {
    const originalKey = originalKeys?.[prop.name] || prop.name;
    if (comments && comments[prop.name]) {
      classCode += `  /// ${comments[prop.name]}\n`;
    }
    const nullableMarker = prop.isNullable ? '?' : '';
    const fieldPrefix = usePrivateFields ? '_' : '';
    classCode += `  ${prop.type}${nullableMarker} ${fieldPrefix}${prop.name};\n`;
  });
  classCode += '\n';
  
  // Generate constructor
  classCode += `  ${name}({\n`;
  properties.forEach((prop, index) => {
    const required = prop.isNullable ? '' : 'required ';
    const comma = index < properties.length - 1 ? ',' : '';
    const fieldPrefix = usePrivateFields ? '_' : '';
    classCode += `    ${required}this.${fieldPrefix}${prop.name}${comma}\n`;
  });
  classCode += '  });\n\n';
  
  // Generate getters for private fields
  if (usePrivateFields) {
    properties.forEach(prop => {
      const nullableMarker = prop.isNullable ? '?' : '';
      classCode += `  ${prop.type}${nullableMarker} get ${prop.name} => _${prop.name};\n`;
    });
    classCode += '\n';
  }
  
  // Generate fromJson method
  classCode += `  factory ${name}.fromJson(Map<String, dynamic> json) {\n`;
  classCode += `    return ${name}(\n`;
  properties.forEach((prop, index) => {
    const comma = index < properties.length - 1 ? ',' : '';
    const originalKey = properties.find(p => toCamelCase(p.name) === prop.name)?.name || prop.name;
    const fieldPrefix = usePrivateFields ? '_' : '';
    
    if (prop.type.startsWith('List<')) {
      const elementType = prop.type.match(/List<(.+)>/)?.[1] || 'dynamic';
      if (elementType !== 'dynamic' && elementType !== 'String' && elementType !== 'int' && elementType !== 'double' && elementType !== 'bool') {
        classCode += `      ${fieldPrefix}${prop.name}: json['${originalKey}'] != null ? (json['${originalKey}'] as List).map((e) => ${elementType}.fromJson(e)).toList() : null${comma}\n`;
      } else {
        classCode += `      ${fieldPrefix}${prop.name}: json['${originalKey}'] != null ? List<${elementType}>.from(json['${originalKey}']) : null${comma}\n`;
      }
    } else if (prop.type !== 'String' && prop.type !== 'int' && prop.type !== 'double' && prop.type !== 'bool' && prop.type !== 'dynamic') {
      classCode += `      ${fieldPrefix}${prop.name}: json['${originalKey}'] != null ? ${prop.type}.fromJson(json['${originalKey}']) : null${comma}\n`;
    } else {
      classCode += `      ${fieldPrefix}${prop.name}: json['${originalKey}']${comma}\n`;
    }
  });
  classCode += '    );\n';
  classCode += '  }\n\n';
  
  // Generate toJson method
  classCode += `  Map<String, dynamic> toJson() {\n`;
  classCode += '    return {\n';
  properties.forEach((prop, index) => {
    const comma = index < properties.length - 1 ? ',' : '';
    const originalKey = properties.find(p => toCamelCase(p.name) === prop.name)?.name || prop.name;
    const fieldRef = usePrivateFields ? `_${prop.name}` : prop.name;
    
    if (prop.type.startsWith('List<')) {
      const elementType = prop.type.match(/List<(.+)>/)?.[1] || 'dynamic';
      if (elementType !== 'dynamic' && elementType !== 'String' && elementType !== 'int' && elementType !== 'double' && elementType !== 'bool') {
        classCode += `      '${originalKey}': ${fieldRef}?.map((e) => e.toJson()).toList()${comma}\n`;
      } else {
        classCode += `      '${originalKey}': ${fieldRef}${comma}\n`;
      }
    } else if (prop.type !== 'String' && prop.type !== 'int' && prop.type !== 'double' && prop.type !== 'bool' && prop.type !== 'dynamic') {
      classCode += `      '${originalKey}': ${fieldRef}?.toJson()${comma}\n`;
    } else {
      classCode += `      '${originalKey}': ${fieldRef}${comma}\n`;
    }
  });
  classCode += '    };\n';
  classCode += '  }\n';
  
  classCode += '}\n';
  
  return classCode;
}

/**
 * Main function to convert JSON to Dart classes
 */
// 6. 异常处理与提示增强
export function jsonToDart(jsonObj: any, rootClassName: string = 'RootClass', usePrivateFields: boolean = false): string {
  try {
    const classes = analyzeJsonStructure(jsonObj, rootClassName);
    let dartCode = '// Generated Dart classes from JSON\n\n';
    const classNames = Array.from(classes.keys());
    const sortedClassNames = classNames.sort((a, b) => {
      if (a === rootClassName) return 1;
      if (b === rootClassName) return -1;
      return a.localeCompare(b);
    });
    sortedClassNames.forEach((className, index) => {
      const dartClass = classes.get(className)!;
      dartCode += generateDartClass(dartClass, undefined, undefined, usePrivateFields);
      if (index < sortedClassNames.length - 1) {
        dartCode += '\n';
      }
    });
    return dartCode;
  } catch (error: any) {
    throw new Error(`Failed to convert JSON to Dart: ${error?.message || error}`);
  }
}

// 4. 嵌套类与数组类名优化，支持不规则复数和自定义类名
function getClassNameFromKey(key: string, customClassNames?: Record<string, string>): string {
  if (customClassNames && customClassNames[key]) {
    return customClassNames[key];
  }
  // 简单复数处理，可扩展更复杂规则
  if (key.endsWith('ies')) return toPascalCase(key.slice(0, -3) + 'y');
  if (key.endsWith('ses')) return toPascalCase(key.slice(0, -2));
  if (key.endsWith('s')) return toPascalCase(key.slice(0, -1));
  return toPascalCase(key);
}