
export const zhCN = {
  translation: {
    nav: {
      home: '首页',
      json: 'JSON工具',
      network: '网络工具',
      text: '文本工具',
      time: '时间工具',
      encryption: '加密工具',
      markdown: 'Markdown',
      mermaid: 'Mermaid图表'
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
      toYaml: '转为YAML',
      toXml: '转为XML',
      toCsv: '转为CSV',
      blue: '蓝色',
      system: '跟随系统',
      comingSoon: '敬请期待',
    },
    home: {
      title: '开发者工具中心',
      subtitle: '现代化新拟态设计的专业开发工具',
      description: '全面的开发者必备工具集合，包括JSON格式化、文本处理、加密解密等功能。'
    },
    tools: {
      json: {
        title: 'JSON工具',
        description: '格式化、验证和压缩JSON数据',
        placeholder: '在此粘贴您的JSON数据...',
        fieldPath: '字段路径',
        extractValue: '提取值',
        extractPlaceholder: '例如: data.users[0].name',
        extractedValueTitle: '提取的值',
        convertedToYamlTitle: '已转换为 YAML',
        convertedToXmlTitle: '已转换为 XML',
        convertedToCsvTitle: '已转换为 CSV',
      },
      jsonMock: {
        title: 'JSON模拟数据生成器',
        description: '根据JSON Schema生成模拟数据',
        generate: '生成',
        schemaTitle: 'JSON Schema',
        resultTitle: '生成的模拟数据',
        resultPlaceholder: '生成的模拟数据将在此显示',
        errors: {
          emptySchema: 'Schema不能为空。',
          invalidSchema: '无效的JSON Schema',
          generationFailed: '生成模拟数据失败',
        },
        toasts: {
          success: '模拟数据生成成功。',
        }
      },
      network: {
        title: '网络工具',
        description: 'URL编码、IP查询和网络实用工具'
      },
      text: {
        title: '文本工具',
        description: '文本处理、大小写转换和格式化'
      },
      crypto: {
        title: '加密工具',
        description: '哈希生成、加密和解密实用工具'
      },
      markdown: {
        title: 'Markdown工具',
        description: '带实时预览的Markdown编辑器'
      },
      mermaid: {
        title: 'Mermaid图表',
        description: '使用Mermaid创建图表和流程图'
      },
      timestampConverter: {
        title: '时间戳转换器',
        description: '在Unix时间戳和人类可读日期之间进行转换。',
        timestamp: '时间戳 (秒)',
        timestampPlaceholder: '例如: 1672531200',
        dateTime: '日期和时间 (UTC)',
        current: '当前时间'
      },
      timezoneConverter: {
        title: '时区转换器',
        description: '在不同时区之间转换日期和时间。',
        sourceDateTime: '源日期和时间',
        sourceTimezone: '源时区',
        targetTimezone: '目标时区',
        convertedDateTime: '转换后的日期和时间'
      },
      dateCalculator: {
        title: '日期计算器',
        description: '对日期进行加减计算。',
        startDate: '开始日期',
        add: '增加',
        subtract: '减少',
        years: '年',
        months: '月',
        days: '日',
        resultDate: '结果日期'
      },
    },
    toasts: {
      common: {
        error: '错误',
        success: '成功',
        info: '提示',
        notFound: '未找到',
      },
      error: {
        invalidJson: '请输入有效的JSON内容',
        invalidJsonFormat: '无效的JSON格式',
        missingPath: '请输入要提取的字段路径',
        notFound: '在指定路径未找到值',
        extractError: '解析JSON或提取值时出错',
        conversionFailed: '转换失败',
        csvConversionRequiresArray: 'CSV转换需要一个对象数组格式的JSON',
      },
      success: {
        formattedAndCopied: '已格式化并复制到剪贴板',
        minifiedAndCopied: '已压缩并复制到剪贴板',
        copied: '内容已复制到剪贴板',
        extractedAndCopied: '已提取字段值并复制到剪贴板',
        convertedToYamlAndCopied: '已转换为YAML并复制到剪贴板',
        convertedToXmlAndCopied: '已转换为XML并复制到剪贴板',
        convertedToCsvAndCopied: '已转换为CSV并复制到剪贴板',
      },
      info: {
        emptyContent: '内容为空，无需复制',
      },
    },
    footer: {
      legal: '法律',
      company: '公司',
      friendlyLinks: '友情链接',
      privacy: '隐私政策',
      terms: '服务条款',
      about: '关于我们',
      copyright: '© {{year}} 开发者工具中心. 保留所有权利.',
    },
  }
};
