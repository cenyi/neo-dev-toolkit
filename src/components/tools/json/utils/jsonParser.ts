
// 自定义 JSON 解析器，保持大整数精度
export const parseJsonWithBigInt = (jsonString: string): any => {
  // 更精确的大整数检测，匹配超过 JavaScript 安全整数范围的数字
  const bigIntPattern = /:\s*(-?\d{16,})\b/g;
  const arrayBigIntPattern = /(?:\[|,)\s*(-?\d{16,})\b/g;
  
  let processedString = jsonString;
  
  // 检查是否包含大整数
  if (bigIntPattern.test(jsonString) || arrayBigIntPattern.test(jsonString)) {
    // 重置正则表达式索引
    bigIntPattern.lastIndex = 0;
    arrayBigIntPattern.lastIndex = 0;
    
    // 处理对象属性中的大整数
    processedString = processedString.replace(
      /:\s*(-?\d{16,})\b/g, 
      ': "$1"'
    );
    
    // 处理数组开头的大整数
    processedString = processedString.replace(
      /\[\s*(-?\d{16,})\b/g,
      '["$1"'
    );
    
    // 处理数组中间的大整数
    processedString = processedString.replace(
      /,\s*(-?\d{16,})\b/g,
      ', "$1"'
    );
    
    console.log('处理大整数前:', jsonString);
    console.log('处理大整数后:', processedString);
  }
  
  return JSON.parse(processedString);
};

export const stringifyJsonWithBigInt = (obj: any, space?: number): string => {
  return JSON.stringify(obj, (key, value) => {
    // 保持字符串形式的大整数不变
    if (typeof value === 'string' && /^-?\d{16,}$/.test(value)) {
      return value;
    }
    return value;
  }, space);
};

export const formatJsonSafely = (jsonString: string): string => {
  try {
    const parsed = parseJsonWithBigInt(jsonString);
    return stringifyJsonWithBigInt(parsed, 2);
  } catch (error) {
    console.error('JSON格式化错误:', error);
    throw error;
  }
};
