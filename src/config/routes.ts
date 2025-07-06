export const ROUTES = {
  HOME: '/:lang?',
  JSON_TOOLS: '/:lang/json',
  NETWORK_TOOLS: '/:lang/network',
  TEXT_TOOLS: '/:lang/text',
  TIME_TOOLS: '/:lang/time',
  EDITOR: '/:lang/editor',
  // 添加其他路由定义
};

export function buildPath(routeKey: keyof typeof ROUTES, params: Record<string, string | number | undefined> = {}): string {
  let path = ROUTES[routeKey];
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined) {
      path = path.replace(`:${key}`, String(value));
    }
  });
  // 移除未替换的参数
  path = path.replace(/:\w+/g, '');
  // 确保路径不以斜杠结尾
  return path.replace(/\/$/, '') || '/';
};