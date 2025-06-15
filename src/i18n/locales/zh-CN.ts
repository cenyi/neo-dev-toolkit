
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
      description: '您的一站式开发“瑞士军刀”。提供JSON、文本、加密等工具，以简化您的工作流程。',
      vercel: 'Vercel',
      github: 'GitHub',
      deepseek: 'DeepSeek',
    },
    about: {
      title: '关于我们',
      missionTitle: '我们的使命',
      missionText: '我们的使命是为开发者提供一个全面、易用且功能强大的工具包，作为他们日常工作的“瑞士军刀”。我们致力于打造一个开发实用程序的一站式商店，让每个人的工作流程更高效、更愉快。',
      featuresTitle: '我们提供什么',
      feature1: '全面的工具集：从JSON格式化和文本处理到加密和图表绘制。',
      feature2: '现代化的设计：一个干净、直观且响应迅速的新拟态界面。',
      feature3: '注重隐私：您的任何数据都不会存储在我们的服务器上。所有处理都在您的浏览器中进行。',
      feature4: '开源精神：我们信奉社区的力量和透明的开发模式。',
    },
    privacy: {
      title: '隐私政策',
      lastUpdated: '最后更新：2025年6月15日',
      introduction: '欢迎来到开发者工具中心。我们致力于保护您的隐私。我们的隐私政策解释了我们如何处理与我们网站和服务相关的信息。',
      informationWeCollectTitle: '我们收集的信息',
      informationWeCollectText: '我们不收集用户的任何个人身份信息。所有通过我们工具处理的数据（例如JSON、文本、文件）都保留在您的客户端，绝不会发送到或存储在我们的服务器上。',
      cookiesTitle: 'Cookies 和本地存储',
      cookiesText: '我们使用浏览器本地存储来保存您的偏好设置，例如您选择的主题（浅色/深色）和语言。这纯粹是为了功能目的，以增强您的用户体验，并不会追踪您。',
      thirdPartyServicesTitle: '第三方服务',
      thirdPartyServicesText: '我们的网站未集成任何会收集您个人数据的第三方服务。我们提供指向GitHub等外部网站的链接，但我们对其隐私惯例概不负责。',
      changesToPolicyTitle: '政策变更',
      changesToPolicyText: '我们可能会不时更新我们的隐私政策。如有任何变更，我们会在此页面上发布新的隐私政策来通知您。建议您定期查看本隐私政策以了解任何变更。',
      contactUsTitle: '联系我们',
      contactUsText: '如果您对本隐私政策有任何疑问，请随时在我们的开源仓库中与我们联系。',
    },
    terms: {
      title: '服务条款',
      lastUpdated: '最后更新：2025年6月15日',
      acceptanceTitle: '接受条款',
      acceptanceText: '通过访问和使用开发者工具中心（“本服务”），您接受并同意遵守本协议的条款和规定。如果您不同意遵守这些条款，请不要使用本服务。',
      useOfServiceTitle: '服务使用',
      useOfServiceText: '本服务免费提供给个人和商业使用。您同意负责任地使用本服务，不将其用于任何恶意或非法活动。您对使用我们工具处理的任何数据负全部责任。',
      disclaimerTitle: '免责声明',
      disclaimerText: '本服务按“原样”和“现有”基础提供，不附带任何明示或暗示的保证。我们不保证通过本服务处理的任何工具或数据的准确性、可靠性或完整性。',
      limitationTitle: '责任限制',
      limitationText: '在任何情况下，开发者工具中心或其维护者均不对因使用或无法使用本服务而产生的任何直接、间接、附带、特殊或后果性损害承担责任。',
      changesToTermsTitle: '条款变更',
      changesToTermsText: '我们保留随时修改这些条款的权利。我们将在本页上发布这些条款的最新版本。您在任何变更后继续使用本服务即表示您接受新条款。',
    },
  }
};
