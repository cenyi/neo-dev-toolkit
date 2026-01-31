/**
 * Monaco Editor 懒加载和性能优化工具
 */

let monacoLoader: any = null;
let monacoInstance: any = null;

/**
 * 懒加载Monaco Editor
 */
export async function loadMonacoEditor(): Promise<any> {
  if (monacoInstance) {
    return monacoInstance;
  }

  try {
    const loader = await import('@monaco-editor/loader');
    monacoLoader = loader.default;

    // 配置Monaco
    monacoLoader.config({
      paths: {
        vs: 'https://cdn.jsdelivr.net/npm/monaco-editor@0.34.1/min/vs'
      }
    });

    monacoInstance = await monacoLoader.init();
    return monacoInstance;
  } catch (error) {
    console.error('Failed to load Monaco Editor:', error);
    throw error;
  }
}

/**
 * 创建优化的Monaco Editor实例
 */
export async function createOptimizedEditor(
  container: HTMLElement,
  options: any = {}
): Promise<any> {
  const monaco = await loadMonacoEditor();

  const defaultOptions = {
    language: 'json',
    theme: 'vs-light',
    automaticLayout: true,
    minimap: { enabled: false },
    scrollBeyondLastLine: false,
    fontSize: 14,
    lineNumbers: 'on',
    roundedSelection: false,
    cursorStyle: 'line',
    selectOnLineNumbers: true,
    wordWrap: 'on',
    folding: true,
    renderLineHighlight: 'line',
    scrollbar: {
      vertical: 'visible',
      horizontal: 'visible'
    },
    ...options
  };

  const editor = monaco.editor.create(container, defaultOptions);

  // 添加性能优化
  setupPerformanceOptimizations(editor, monaco);

  return editor;
}

/**
 * 设置性能优化
 */
function setupPerformanceOptimizations(editor: any, monaco: any) {
  // 防抖处理内容变化
  let changeTimeout: NodeJS.Timeout;

  editor.onDidChangeModelContent(() => {
    clearTimeout(changeTimeout);
    changeTimeout = setTimeout(() => {
      // 延迟处理内容变化
      handleContentChange(editor);
    }, 300);
  });

  // 内存优化：定期清理不需要的装饰
  setInterval(() => {
    const model = editor.getModel();
    if (model) {
      // 清理过期的装饰
      editor.deltaDecorations([], []);
    }
  }, 30000);

  // 添加JSON验证
  setupJsonValidation(editor, monaco);
}

/**
 * 处理内容变化
 */
function handleContentChange(editor: any) {
  try {
    const value = editor.getValue();
    if (value.trim()) {
      // 尝试格式化JSON
      JSON.parse(value);
      // 如果没有错误，可以触发格式化
    }
  } catch (error) {
    // JSON格式错误，可以显示错误提示
  }
}

/**
 * 设置JSON验证
 */
function setupJsonValidation(editor: any, monaco: any) {
  const validateJson = () => {
    const model = editor.getModel();
    if (!model || model.getLanguageId() !== 'json') {
      return;
    }

    const value = model.getValue();
    if (!value.trim()) {
      monaco.editor.setModelMarkers(model, 'owner', []);
      return;
    }

    try {
      JSON.parse(value);
      monaco.editor.setModelMarkers(model, 'owner', []);
    } catch (error: any) {
      const markers = [{
        severity: monaco.MarkerSeverity.Error,
        startLineNumber: 1,
        startColumn: 1,
        endLineNumber: model.getLineCount(),
        endColumn: model.getLineMaxColumn(model.getLineCount()),
        message: `JSON Error: ${error.message}`
      }];
      monaco.editor.setModelMarkers(model, 'owner', markers);
    }
  };

  // 延迟验证
  let validationTimeout: NodeJS.Timeout;
  editor.onDidChangeModelContent(() => {
    clearTimeout(validationTimeout);
    validationTimeout = setTimeout(validateJson, 500);
  });

  // 初始验证
  validateJson();
}

/**
 * 销毁编辑器实例
 */
export function disposeEditor(editor: any) {
  if (editor) {
    try {
      editor.dispose();
    } catch (error) {
      console.warn('Error disposing editor:', error);
    }
  }
}

/**
 * 格式化JSON内容
 */
export function formatJson(editor: any): boolean {
  try {
    const value = editor.getValue();
    if (!value.trim()) {
      return false;
    }

    const parsed = JSON.parse(value);
    const formatted = JSON.stringify(parsed, null, 2);
    editor.setValue(formatted);
    return true;
  } catch (error) {
    return false;
  }
}

/**
 * 压缩JSON内容
 */
export function minifyJson(editor: any): boolean {
  try {
    const value = editor.getValue();
    if (!value.trim()) {
      return false;
    }

    const parsed = JSON.parse(value);
    const minified = JSON.stringify(parsed);
    editor.setValue(minified);
    return true;
  } catch (error) {
    return false;
  }
}
