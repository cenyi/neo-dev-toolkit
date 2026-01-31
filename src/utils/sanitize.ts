import DOMPurify from 'dompurify';

/**
 * 安全地净化HTML内容，防止XSS攻击
 * @param html - 需要净化的HTML字符串
 * @returns 净化后的安全HTML
 */
export function sanitizeHTML(html: string): string {
  if (typeof window === 'undefined') {
    // 服务端渲染时使用较宽松的配置
    return DOMPurify.sanitize(html, {
      ALLOWED_TAGS: ['div', 'span', 'br', 'p', 'ul', 'ol', 'li', 'strong', 'em'],
      ALLOWED_ATTR: ['class', 'style']
    });
  }

  // 客户端使用严格配置
  return DOMPurify.sanitize(html, {
    ALLOWED_TAGS: [], // 不允许任何HTML标签
    ALLOWED_ATTR: []
  });
}

/**
 * 安全地设置文本内容
 * @param element - 目标DOM元素
 * @param text - 文本内容
 */
export function safeSetTextContent(element: HTMLElement, text: string): void {
  if (element) {
    element.textContent = text;
  }
}

/**
 * 安全地清空元素内容
 * @param element - 目标DOM元素
 */
export function safeClearElement(element: HTMLElement): void {
  if (element) {
    element.innerHTML = '';
  }
}
