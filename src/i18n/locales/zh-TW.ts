
export const zhTW = {
  translation: {
    nav: {
      home: '首頁',
      json: 'JSON工具',
      network: '網路工具',
      text: '文字工具',
      time: '時間工具',
      encryption: '加密工具',
      markdown: 'Markdown',
      mermaid: 'Mermaid圖表'
    },
    common: {
      theme: '主題',
      language: '語言',
      light: '淺色',
      dark: '深色',
      copy: '複製',
      clear: '清空',
      format: '格式化',
      minify: '壓縮',
      validate: '驗證',
      convert: '轉換',
      encrypt: '加密',
      decrypt: '解密',
      preview: '預覽',
      download: '下載',
      toYaml: '轉為YAML',
      toXml: '轉為XML',
      toCsv: '轉為CSV',
      blue: '藍色',
      system: '跟隨系統',
      comingSoon: '敬請期待',
    },
    home: {
      title: '開發者工具中心',
      subtitle: '現代化新擬態設計的專業開發工具',
      description: '全面的開發者必備工具集合，包括JSON格式化、文字處理、加密解密等功能。'
    },
    tools: {
      json: {
        title: 'JSON工具',
        description: '格式化、驗證和壓縮JSON資料',
        placeholder: '在此貼上您的JSON資料...',
        fieldPath: '欄位路徑',
        extractValue: '提取值',
        extractPlaceholder: '例如: data.users[0].name',
        extractedValueTitle: '提取的值',
        convertedToYamlTitle: '已轉換為 YAML',
        convertedToXmlTitle: '已轉換為 XML',
        convertedToCsvTitle: '已轉換為 CSV',
      },
      jsonMock: {
        title: 'JSON模擬資料產生器',
        description: '根據JSON Schema產生模擬資料',
        generate: '產生',
        schemaTitle: 'JSON Schema',
        resultTitle: '產生的模擬資料',
        resultPlaceholder: '產生的模擬資料將在此顯示',
        errors: {
          emptySchema: 'Schema不能為空。',
          invalidSchema: '無效的JSON Schema',
          generationFailed: '產生模擬資料失敗',
        },
        toasts: {
          success: '模擬資料產生成功。',
        }
      },
      network: {
        title: '網路工具',
        description: 'URL編碼、IP查詢和網路實用工具'
      },
      text: {
        title: '文字工具',
        description: '文字處理、大小寫轉換和格式化'
      },
      crypto: {
        title: '加密工具',
        description: '雜湊生成、加密和解密實用工具'
      },
      markdown: {
        title: 'Markdown工具',
        description: '帶即時預覽的Markdown編輯器'
      },
      mermaid: {
        title: 'Mermaid圖表',
        description: '使用Mermaid創建圖表和流程圖'
      },
      timestampConverter: {
        title: '時間戳轉換器',
        description: '在Unix時間戳和人類可讀日期之間進行轉換。',
        timestamp: '時間戳 (秒)',
        timestampPlaceholder: '例如: 1672531200',
        dateTime: '日期和時間 (UTC)',
        current: '當前時間'
      },
      timezoneConverter: {
        title: '時區轉換器',
        description: '在不同時區之間轉換日期和時間。',
        sourceDateTime: '源日期和時間',
        sourceTimezone: '源時區',
        targetTimezone: '目標時區',
        convertedDateTime: '轉換後的日期和時間'
      },
      dateCalculator: {
        title: '日期計算器',
        description: '對日期進行加減計算。',
        startDate: '開始日期',
        add: '增加',
        subtract: '減少',
        years: '年',
        months: '月',
        days: '日',
        resultDate: '結果日期'
      },
    },
    toasts: {
      common: {
        error: '錯誤',
        success: '成功',
        info: '提示',
        notFound: '未找到',
      },
      error: {
        invalidJson: '請輸入有效的JSON內容',
        invalidJsonFormat: '無效的JSON格式',
        missingPath: '請輸入要提取的欄位路徑',
        notFound: '在指定路徑未找到值',
        extractError: '解析JSON或提取值時出錯',
        conversionFailed: '轉換失敗',
        csvConversionRequiresArray: 'CSV轉換需要一個物件陣列格式的JSON',
      },
      success: {
        formattedAndCopied: '已格式化並複製到剪貼簿',
        minifiedAndCopied: '已壓縮並複製到剪貼簿',
        copied: '內容已複製到剪貼簿',
        extractedAndCopied: '已提取欄位值並複製到剪貼簿',
        convertedToYamlAndCopied: '已轉換為YAML並複製到剪貼簿',
        convertedToXmlAndCopied: '已轉換為XML並複製到剪貼簿',
        convertedToCsvAndCopied: '已轉換為CSV並複製到剪貼簿',
      },
      info: {
        emptyContent: '內容為空，無需複製',
      },
    },
    footer: {
      legal: '法律',
      company: '公司',
      friendlyLinks: '友情鏈接',
      privacy: '隱私政策',
      terms: '服務條款',
      about: '關於我們',
      copyright: '© {{year}} 開發者工具中心. 保留所有權利.',
    },
  }
};
