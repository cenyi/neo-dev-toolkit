import fs from 'fs';
import path from 'path';

// 改进的提取对象函数
function extractObject(fileContent, fileName) {
  try {
    console.log(`正在处理 ${fileName}...`);
    console.log(`文件内容前50个字符: ${fileContent.substring(0, 50)}...`);

    // 尝试匹配 export const xxx = {...} 结构，允许更多的格式变化
    const pattern = /export\s+const\s+(\w+)\s*=\s*({[\s\S]*?})(?:;|\s*$)/;
    console.log(`尝试匹配模式: ${pattern.toString()}`);
    const matched = fileContent.match(pattern);

    if (!matched || !matched[2]) {
      console.error(`无法从 ${fileName} 中提取对象`);
      console.error(`文件内容前200个字符: ${fileContent.substring(0, 200)}...`);
      // 尝试手动提取对象
      try {
        console.log(`尝试手动提取对象...`);
        const startIndex = fileContent.indexOf('export const') + 'export const'.length;
        const endIndex = fileContent.lastIndexOf('}');
        if (startIndex > -1 && endIndex > startIndex) {
          const objStr = fileContent.substring(startIndex, endIndex + 1).trim();
          console.log(`手动提取的对象字符串前50个字符: ${objStr.substring(0, 50)}...`);
          const obj = new Function(`return ${objStr}`)();
          console.log(`成功手动提取 ${fileName} 中的对象，包含 ${Object.keys(obj).length} 个键`);
          return obj;
        } else {
          console.error(`无法手动提取 ${fileName} 中的对象`);
          return null;
        }
      } catch (e) {
        console.error(`手动提取 ${fileName} 中的对象时出错: ${e.message}`);
        return null;
      }
    }

    console.log(`成功匹配 ${fileName} 中的模式`);
    const objName = matched[1];
    let objStr = matched[2];

    // 处理可能的语法问题
    objStr = objStr.replace(/;\s*}/, '}');
    objStr = objStr.replace(/\s+\}/, '}');

    // 尝试使用 Function 构造函数解析对象
    try {
      console.log(`尝试解析对象: ${objStr.substring(0, 50)}...`);
      const obj = new Function(`return ${objStr}`)();
      console.log(`成功解析 ${fileName} 中的对象，包含 ${Object.keys(obj).length} 个键`);
      return obj;
    } catch (e) {
      console.error(`解析 ${fileName} 中的对象时出错: ${e.message}`);
      console.error(`有问题的对象字符串: ${objStr.substring(0, 100)}...`);
      return null;
    }
  } catch (e) {
    console.error(`处理 ${fileName} 时出错: ${e.message}`);
    return null;
  }
}

// 读取文件函数
function readFile(filePath) {
  try {
    return fs.readFileSync(filePath, 'utf8');
  } catch (e) {
    console.error(`无法读取文件 ${filePath}: ${e.message}`);
    return null;
  }
}

// 写入文件函数
function writeFile(filePath, content) {
  try {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`成功写入文件 ${filePath}`);
    return true;
  } catch (e) {
    console.error(`无法写入文件 ${filePath}: ${e.message}`);
    return false;
  }
}

// 同步本地化文件函数
function syncLocales() {
  const localesDir = path.join('src', 'i18n', 'locales');
  const enFilePath = path.join(localesDir, 'en.ts');

  // 读取英文文件
  const enContent = readFile(enFilePath);
  if (!enContent) {
    console.error('无法读取英文文件');
    return;
  }

  // 从英文文件中提取对象
  const enObj = extractObject(enContent, 'en.ts');
  if (!enObj) {
    console.error('无法从英文文件中提取对象');
    return;
  }

  // 读取所有语言文件
  try {
    const files = fs.readdirSync(localesDir);
    const langFiles = files.filter(file => file.endsWith('.ts') && file !== 'en.ts');

    // 处理每个语言文件
    langFiles.forEach(file => {
      const filePath = path.join(localesDir, file);
      const content = readFile(filePath);
      if (!content) {
        return;
      }

      // 从语言文件中提取对象
      const langObj = extractObject(content, file);
      if (!langObj) {
        return;
      }

      // 合并对象
      const mergedObj = { ...enObj, ...langObj };

      // 构建新的文件内容
      const langCode = file.replace('.ts', '');
      const newContent = `export const ${langCode} = ${JSON.stringify(mergedObj, null, 2)};

export default ${langCode};`;

      // 写入文件
      writeFile(filePath, newContent);
    });

    console.log('同步完成');
  } catch (e) {
    console.error(`读取语言文件时出错: ${e.message}`);
  }
}

// 运行同步函数
console.log('开始同步本地化文件...');
syncLocales();