export const zh = {
  translation: {
    jsonToolsPage: {
      mainTitle: 'JSON 开发者工具',
      mainDescription: '为开发者提供的全面的 JSON 工具集合。使用我们以 Lovable AI 构建的专业级实用程序，格式化、验证、比较和生成 JSON 数据。',
      tools: {
        formatter: {
          title: 'JSON 格式化与验证器',
          description: '格式化、验证和美化 JSON 数据，具有语法高亮和错误检测功能。'
        },
        schemaValidator: {
          title: 'JSON Schema 验证器',
          description: '根据 JSON Schema 验证 JSON 数据，并提供详细的错误报告。'
        },
        codeGen: {
          title: '生成代码类型',
          description: '从 JSON 数据生成 TypeScript、Python、Java、C# 代码类型。'
        },
        diffTool: {
          title: 'JSON Diff 工具',
          description: '比较和可视化两个 JSON 对象之间的差异。'
        },
        mockDataGenerator: {
          title: '模拟数据生成器',
          description: '为测试和开发生成逼真的模拟 JSON 数据。'
        }
      },
      whyChoose: {
        title: '为什么选择我们的 JSON 工具？',
        privacy: {
          title: '注重隐私',
          description: '所有 JSON 处理都在您的浏览器本地进行。您的数据永远不会离开您的设备。'
        },
        professional: {
          title: '专业级',
          description: '采用现代网络技术构建，专为专业开发人员设计。'
        },
        free: {
          title: '免费开放',
          description: '无需注册。免费使用所有功能，无任何限制。'
        }
      }
    },
    nav: { 
      home: '首页', 
      json: 'JSON', 
      network: '网络', 
      text: '文本', 
      time: '时间', 
      encryption: '加密', 
      markdown: 'Markdown', 
      mermaid: 'Mermaid',
      regex: '正则表达式',
      editor: '编辑器'
    },
    navTitles: {
      home: '首页 - 免费开发者工具中心',
      json: 'JSON工具 - 格式化、验证和处理JSON数据',
      network: '网络工具 - URL编码、IP查询和实用工具',
      text: '文本工具 - 处理和转换文本格式',
      time: '时间工具 - 时间戳和时区转换器',
      encryption: '加密工具 - 哈希生成和加密实用工具',
      regex: '正则表达式工具 - 测试和验证正则表达式模式',
      editor: '代码编辑器 - Markdown和Mermaid图表编辑器'
    },
    common: { 
      theme: '主题', 
      language: '语言', 
      light: '浅色', 
      dark: '深色', 
      copy: '复制', 
      clear: '清除', 
      format: '格式化', 
      minify: '压缩', 
      validate: '验证', 
      convert: '转换', 
      encrypt: '加密', 
      decrypt: '解密', 
      preview: '预览', 
      download: '下载', 
      toYaml: '转为YAML', 
      toXml: '转为XML', 
      toCsv: '转为CSV', 
      blue: '蓝色', 
      system: '系统', 
      comingSoon: '即将推出', 
      error: '错误', 
      success: '成功', 
      info: '信息', 
      notFound: '未找到', 
      compare: '比较',
      test: '测试',
      match: '匹配',
      replace: '替换',
      flags: '标志',
      pattern: '模式',
      input: '输入',
      output: '输出',
      result: '结果',
      graph: '结构图',
      zoomLevel: '缩放级别'
    },
    home: { 
      title: '开发者工具中心', 
      subtitle: '由Lovable AI技术构建的专业开发工具',
      description: '一个全面的基本开发者工具集合，包括JSON格式化、文本处理、加密等。由Lovable AI构建，以实现最佳性能。',
      headerTitle: '免费在线开发者工具中心 - 由Lovable构建',
      toolsCollectionTitle: '专业开发者工具集合',
      whyChooseTitle: '为什么选择DevTools Hub满足您的开发需求？',
      feature1Title: '100%免费且无需注册',
      feature1Description: '所有工具完全免费使用，无需帐户',
      feature2Title: '注重隐私的开发',
      feature2Description: '您的数据保留在您的浏览器中 - 不会发送到我们的服务器',
      feature3Title: '现代响应式界面',
      feature3Description: '由Lovable AI提供支持的简洁、响应式设计，可在所有设备上完美运行'
    },
    tools: { 
      json: { 
        title: 'JSON工具', 
        description: '格式化、验证和压缩JSON数据',
        formatter: 'JSON格式化工具',
        viewerTitle: 'JSON查看器',
        fieldPath: '字段路径',
        extractPlaceholder: '例如：$.user.name或$[0].id',
        extractValue: '提取值',
        placeholder: '在此处输入或粘贴您的JSON...',
        extractedValueTitle: '提取的值',
        generateGraph: '生成图表',
        graphTitle: 'JSON结构',
        syntaxError: 'JSON语法错误',
        unknownParseError: '未知的JSON解析错误',
        syntaxErrorAtPosition: 'JSON语法错误：{{message}}（行{{line}}，列{{column}}）',
        syntaxErrorGeneric: 'JSON语法错误：{{message}}',
        convertedToYamlTitle: '已转换为YAML',
        convertedToXmlTitle: '已转换为XML',
        convertedToCsvTitle: '已转换为CSV',
        viewer: {
          title: 'JSON结构视图',
          invalidJson: '请输入有效的JSON以查看结构',
          expandAll: '全部展开',
          collapseAll: '全部折叠',
          items: '项',
          elements: '元素'
        },
        history: {
          title: '历史记录',
          emptyMessage: '暂无历史记录，开始输入一些JSON数据吧！',
          clearAll: '全部清除',
          removeItem: '删除项目',
          itemRemoved: '历史项目已删除',
          historyCleared: '历史记录已清除',
          loadedFromHistory: '从历史记录加载',
          justNow: '刚刚',
          minutesAgo: '{{count}}分钟前',
          hoursAgo: '{{count}}小时前',
          searchPlaceholder: '搜索历史记录...',
          noResults: '未找到匹配的记录'
        }
      },
      regex: {
        title: '正则表达式工具',
        description: '使用正则表达式进行测试、匹配和替换',
        pattern: '正则表达式模式',
        patternPlaceholder: '输入正则表达式模式...',
        testString: '测试字符串',
        testStringPlaceholder: '输入要测试的文本...',
        replacement: '替换文本',
        replacementPlaceholder: '输入替换文本...',
        flags: '标志',
        global: '全局匹配(g)',
        ignoreCase: '忽略大小写(i)',
        multiline: '多行(m)',
        dotAll: '点匹配换行符(s)',
        unicode: 'Unicode(u)',
        sticky: '粘性(y)',
        matches: '匹配项',
        noMatches: '未找到匹配项',
        replacedText: '替换后的文本',
        invalidRegex: '无效的正则表达式'
      },
      jwtDecoder: {
        title: 'JWT解码器',
        description: '解码和验证JWT令牌',
        encodedToken: '编码令牌',
        header: '头部',
        payload: '有效载荷',
        placeholder: '在此处粘贴您的JWT',
        headerPlaceholder: '解码后的头部将显示在此处',
        payloadPlaceholder: '解码后的有效载荷将显示在此处'
      },
      jsonDiff: {
        title: 'JSON差异比较',
        description: '比较两个JSON对象之间的差异',
        originalJson: '原始JSON',
        newJson: '新JSON',
        originalPlaceholder: '在此处粘贴原始JSON',
        newPlaceholder: '在此处粘贴新JSON',
        diffResult: '差异结果'
      },
      network: { title: '网络工具', description: 'URL编码、IP查询和网络实用工具' }, 
      text: { 
        title: '文本工具', 
        description: '文本处理、大小写转换和格式化',
        textDiff: {
          title: '文本比较工具',
          description: '比较两个文本文档并突出显示差异',
          originalText: '原始文本',
          newText: '新文本',
          originalPlaceholder: '输入原始文本...',
          newPlaceholder: '输入新文本...',
          diffResult: '比较结果',
          compareText: '比较文本',
          clearAll: '全部清除',
          emptyLine: '（空行）',
          compareComplete: '文本比较完成',
          enterTextToCompare: '请输入要比较的文本'
        },
        caseConverter: {
          title: '大小写转换器',
          description: '在不同字母大小写之间转换文本。',
          placeholder: '在此处输入文本...',
          result: '结果',
          upperCase: '大写',
          lowerCase: '小写',
          titleCase: '标题大小写',
          sentenceCase: '句子大小写'
        },
        wordCounter: {
          title: '单词和字符计数器',
          description: '计算文本中的单词、字符、句子和段落。',
          placeholder: '在此处键入或粘贴您的文本...',
          words: '单词',
          characters: '字符',
          charactersNoSpaces: '字符（无空格）',
          sentences: '句子',
          paragraphs: '段落'
        },
        textReverser: {
          title: '文本反转器'
        }
      }
    }
  }
};