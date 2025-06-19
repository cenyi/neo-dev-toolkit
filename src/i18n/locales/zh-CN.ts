
export const zhCN = {
  translation: {
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
    common: { 
      theme: '主题', 
      language: '语言', 
      light: '浅色', 
      dark: '深色', 
      copy: '复制', 
      clear: '清空', 
      format: '格式化', 
      minify: '压缩', 
      validate: '验证', 
      convert: '转换', 
      encrypt: '加密', 
      decrypt: '解密', 
      preview: '预览', 
      download: '下载', 
      toYaml: '转换为 YAML', 
      toXml: '转换为 XML', 
      toCsv: '转换为 CSV', 
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
      result: '结果'
    },
    home: { title: '开发者工具中心', subtitle: '具有现代拟态化设计的专业开发工具', description: '全面的开发者必备工具集合，包括 JSON 格式化、文本处理、加密等功能。' },
    tools: { 
      json: { 
        title: 'JSON 工具', 
        description: '格式化、验证和压缩 JSON 数据',
        fieldPath: '字段路径',
        extractPlaceholder: '例如：$.user.name 或 $[0].id',
        extractValue: '提取值',
        placeholder: '在此输入或粘贴您的 JSON...',
        extractedValueTitle: '提取的值',
        history: {
          title: '历史记录',
          emptyMessage: '暂无历史记录，开始输入JSON数据吧！',
          clearAll: '清空所有',
          removeItem: '删除项目',
          itemRemoved: '历史项目已删除',
          historyCleared: '历史记录已清空',
          loadedFromHistory: '已从历史记录加载',
          justNow: '刚刚',
          minutesAgo: '{{count}}分钟前',
          hoursAgo: '{{count}}小时前',
          searchPlaceholder: '搜索历史记录...',
          noResults: '未找到匹配的记录'
        }
      },
      regex: {
        title: '正则表达式工具',
        description: '测试、匹配和替换正则表达式',
        pattern: '正则表达式模式',
        patternPlaceholder: '输入正则表达式模式...',
        testString: '测试字符串',
        testStringPlaceholder: '输入要测试的文本...',
        replacement: '替换文本',
        replacementPlaceholder: '输入替换文本...',
        flags: '标志',
        global: '全局匹配 (g)',
        ignoreCase: '忽略大小写 (i)',
        multiline: '多行模式 (m)',
        dotAll: '点匹配换行 (s)',
        unicode: 'Unicode (u)',
        sticky: '粘性匹配 (y)',
        matches: '匹配结果',
        noMatches: '无匹配结果',
        replacedText: '替换结果',
        invalidRegex: '无效的正则表达式'
      },
      jwtDecoder: {
        title: 'JWT 解码器',
        description: '解码和验证JWT令牌',
        encodedToken: '编码的令牌',
        header: '头部',
        payload: '载荷',
        placeholder: '在此粘贴您的JWT令牌',
        headerPlaceholder: '解码的头部将在此显示',
        payloadPlaceholder: '解码的载荷将在此显示'
      },
      jsonDiff: {
        title: 'JSON 差异比较',
        description: '比较两个JSON对象的差异',
        originalJson: '原始 JSON',
        newJson: '新 JSON',
        originalPlaceholder: '在此粘贴原始 JSON',
        newPlaceholder: '在此粘贴新 JSON',
        diffResult: '差异结果'
      },
      network: { title: '网络工具', description: 'URL 编码、IP 查询和网络实用程序' }, 
      text: { 
        title: '文本工具', 
        description: '文本处理、大小写转换和格式化',
        caseConverter: {
          title: '大小写转换器',
          description: '在不同的字母大小写之间转换文本。',
          placeholder: '在此输入文本...',
          result: '结果',
          upperCase: '大写',
          lowerCase: '小写',
          titleCase: '标题格式',
          sentenceCase: '句子格式'
        },
        wordCounter: {
          title: '字词与字符计数器',
          description: '计算文本中的字词、字符、句子和段落数量。',
          placeholder: '在此输入或粘贴您的文本...',
          words: '字词',
          characters: '字符',
          charactersNoSpaces: '字符（无空格）',
          sentences: '句子',
          paragraphs: '段落'
        },
        textReverser: {
          title: '文本反转器',
          description: '反转文本的字符顺序。',
          placeholder: '输入要反转的文本',
          reversedText: '反转的文本'
        },
        whitespaceRemover: {
          title: '空白符移除器',
          description: '移除文本中不必要的空格和换行符。',
          placeholder: '在此输入文本...',
          result: '结果',
          removeAll: '移除所有空格',
          removeTrim: '修剪首尾空格',
          removeExtra: '移除多余空格',
          removeLines: '移除换行符'
        },
        urlEncoder: {
          title: 'URL 编码/解码器',
          description: '编码和解码URL',
          input: '输入',
          output: '输出',
          encode: '编码',
          decode: '解码',
          inputPlaceholder: '输入要编码或解码的文本',
          outputPlaceholder: '结果将在此显示'
        },
        base64: {
          title: 'Base64 编码/解码器',
          description: '编码和解码Base64文本',
          input: '输入',
          output: '输出',
          encode: '编码',
          decode: '解码',
          inputPlaceholder: '输入要编码或解码的文本',
          outputPlaceholder: '结果将在此显示'
        },
        ipLookup: {
          title: 'IP地址查询',
          placeholder: '输入IP地址或域名',
          lookup: '查询',
          myIp: '查询我的IP',
          results: '查询结果'
        },
        dateCalculator: {
          title: '日期计算器',
          description: '从给定日期添加或减去年、月、日',
          startDate: '开始日期',
          add: '添加',
          subtract: '减去',
          years: '年',
          months: '月',
          days: '日',
          resultDate: '结果日期'
        }
      },
      timestampConverter: {
        title: '时间戳转换器',
        description: '在Unix时间戳和可读日期之间转换',
        timestamp: 'Unix时间戳',
        timestampPlaceholder: '输入Unix时间戳（秒）',
        dateTime: '日期时间（UTC）',
        current: '当前时间'
      },
      timezoneConverter: {
        title: '时区转换器',
        description: '在不同时区之间转换日期和时间',
        sourceDateTime: '源日期时间',
        sourceTimezone: '源时区',
        targetTimezone: '目标时区',
        convertedDateTime: '转换后的日期时间'
      },
      crypto: { title: '加密工具', description: '哈希生成、加密和解密实用程序' }, 
      markdown: { 
        title: 'Markdown 工具', 
        description: '支持实时预览的 Markdown 编辑器',
        placeholder: '在此输入您的 Markdown 内容...'
      }, 
      mermaid: { 
        title: 'Mermaid 图表', 
        description: '使用 Mermaid 语法创建图表和流程图',
        placeholder: '在此输入您的 Mermaid 语法...',
        syntaxError: '语法错误',
        invalidSyntax: '无效的 Mermaid 语法'
      } 
    },
    toasts: {
      common: {
        success: '成功',
        error: '错误',
        info: '信息',
        notFound: '未找到'
      },
      success: {
        copied: '已复制到剪贴板',
        formattedAndCopied: 'JSON已格式化并复制到剪贴板',
        minifiedAndCopied: 'JSON已压缩并复制到剪贴板',
        extractedAndCopied: '值已提取并复制到剪贴板'
      },
      error: {
        invalidJson: '请输入有效的JSON',
        invalidJsonFormat: 'JSON格式无效',
        missingPath: '请输入提取路径',
        notFound: '在指定路径未找到值',
        extractError: '提取值时出错'
      },
      info: {
        emptyContent: '没有内容可复制'
      }
    },
    editor: {
      copy: '复制内容',
      clear: '清空内容',
      copied: '已复制',
      copySuccess: '内容已复制到剪贴板',
      copyError: '复制失败',
      copyErrorDesc: '无法复制到剪贴板',
      cleared: '已清空',
      clearSuccess: '内容已清空',
      downloadSvg: '下载 SVG',
      downloadPng: '下载 PNG'
    },
    underConstruction: {
      description: '该工具正在开发中，敬请期待。'
    },
    notFound: {
      title: '页面未找到',
      description: '抱歉，您访问的页面不存在或已被移动。',
      backToHome: '返回首页',
      path: '路径'
    },
    encryption: {
      algorithm: '算法',
      selectAlgorithm: '选择算法',
      inputText: '输入文本',
      inputPlaceholder: '输入要处理的文本...',
      output: '输出',
      outputPlaceholder: '处理后的输出将在此显示...',
      regenerate: '重新生成'
    },
    footer: {
      legal: '法律',
      company: '公司',
      friendlyLinks: '友情链接',
      privacy: '隐私政策',
      terms: '服务条款',
      about: '关于我们',
      copyright: '© {{year}} 开发者工具中心。保留所有权利。',
      description: '您的开发一体化"瑞士军刀"。拥有 JSON、文本、加密等工具，优化您的工作流程。',
      vercel: 'Vercel',
      github: 'GitHub',
      deepseek: 'DeepSeek',
    },
    about: {
      title: '关于我们',
      missionTitle: '我们的使命',
      missionText: '我们的使命是为开发者提供一个全面、易用且功能强大的工具包，作为他们日常任务的"瑞士军刀"。我们旨在创建一站式开发实用程序，使每个人的工作流程更加高效和愉快。',
      featuresTitle: '我们提供什么',
      feature1: '全面的工具集：从 JSON 格式化和文本处理到加密和图表制作。',
      feature2: '现代设计：干净、直观、响应式的拟态化界面。',
      feature3: '注重隐私：我们的服务器不存储任何数据。所有处理都在您的浏览器中进行。',
      feature4: '开源：我们相信社区的力量和透明的开发。',
    },
    privacy: {
      title: '隐私政策',
      lastUpdated: '最后更新：2025年6月15日',
      introduction: '欢迎来到开发者工具中心。我们致力于保护您的隐私。我们的隐私政策解释了我们如何处理与我们网站和服务相关的信息。',
      informationWeCollectTitle: '我们收集的信息',
      informationWeCollectText: '我们不收集用户的任何个人身份信息。我们工具处理的所有数据（例如 JSON、文本、文件）都保留在您的客户端，从不发送到我们的服务器或存储在我们的服务器上。',
      cookiesTitle: 'Cookie 和本地存储',
      cookiesText: '我们使用浏览器本地存储来保存您的偏好，如您选择的主题（浅色/深色）和语言。这纯粹是为了功能目的，以增强您的用户体验，不会跟踪您。',
      thirdPartyServicesTitle: '第三方服务',
      thirdPartyServicesText: '我们的网站不与任何会收集您个人数据的第三方服务集成。我们提供到外部网站（如 GitHub）的链接，但我们不对他们的隐私做法负责。',
      changesToPolicyTitle: '政策变更',
      changesToPolicyText: '我们可能会不时更新我们的隐私政策。我们将通过在此页面上发布新的隐私政策来通知您任何更改。建议您定期查看此隐私政策以了解任何更改。',
      contactUsTitle: '联系我们',
      contactUsText: '如果您对此隐私政策有任何疑问，请随时在我们的开源存储库中联系我们。',
    },
    terms: {
      title: '服务条款',
      lastUpdated: '最后更新：2025年6月15日',
      acceptanceTitle: '条款接受',
      acceptanceText: '通过访问和使用开发者工具中心（"本服务"），您接受并同意受本协议条款和规定的约束。如果您不同意遵守这些条款，请不要使用本服务。',
      useOfServiceTitle: '服务使用',
      useOfServiceText: '本服务免费提供个人和商业使用。您同意负责任地使用本服务，不用于任何恶意或非法活动。您对使用我们工具处理的任何数据承担全部责任。',
      disclaimerTitle: '免责声明',
      disclaimerText: '本服务按"原样"和"可用"提供，不提供任何明示或暗示的保证。我们不保证通过服务处理的任何工具或数据的准确性、可靠性或完整性。',
      limitationTitle: '责任限制',
      limitationText: '在任何情况下，开发者工具中心或其维护者都不对因使用或无法使用本服务而产生的任何直接、间接、偶然、特殊或后果性损害承担责任。',
      changesToTermsTitle: '条款变更',
      changesToTermsText: '我们保留随时修改这些条款的权利。我们将在此页面上发布这些条款的最新版本。在任何更改后继续使用本服务即表示您接受新的条款。',
    },
  }
};
