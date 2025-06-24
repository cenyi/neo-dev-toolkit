
// 自定义 JSON 解析器，保持大整数精度
export const parseJsonWithBigInt = (jsonString: string): any => {
  // 先检查是否包含大于 Number.MAX_SAFE_INTEGER 的整数
  const bigIntPattern = /:\s*(-?\d{16,})\s*[,\}\]]/g;
  const hasLargeBigInt = bigIntPattern.test(jsonString);
  
  if (!hasLargeBigInt) {
    // 如果没有大整数，使用标准解析
    return JSON.parse(jsonString);
  }
  
  // 对于包含大整数的情况，我们需要特殊处理
  // 将大整数用引号包围来保持精度
  let processedString = jsonString.replace(
    /:\s*(-?\d{16,})\s*([,\}\]])/g, 
    ': "$1"$2'
  );
  
  // 处理数组中的大整数
  processedString = processedString.replace(
    /\[\s*(-?\d{16,})\s*([,\]])/g,
    '["$1"$2'
  );
  
  // 处理数组中间的大整数
  processedString = processedString.replace(
    /,\s*(-?\d{16,})\s*([,\]])/g,
    ', "$1"$2'
  );
  
  return JSON.parse(processedString);
};

export const stringifyJsonWithBigInt = (obj: any, space?: number): string => {
  return JSON.stringify(obj, (key, value) => {
    // 保持字符串形式的大整数
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
    throw error;
  }
};
