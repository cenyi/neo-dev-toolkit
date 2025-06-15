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
      description: '您的一站式開發「瑞士軍刀」。提供JSON、文本、加密等工具，以簡化您的工作流程。',
      vercel: 'Vercel',
      github: 'GitHub',
      deepseek: 'DeepSeek',
    },
    about: {
      title: '關於我們',
      missionTitle: '我們的使命',
      missionText: '我們的使命是為開發者提供一個全面、易用且功能強大的工具包，作為他們日常工作的「瑞士軍刀」。我們致力於打造一個開發實用程式的一站式商店，讓每個人的工作流程更有效率、更愉快。',
      featuresTitle: '我們提供什麼',
      feature1: '全面的工具集：從JSON格式化和文字處理到加密和圖表繪製。',
      feature2: '現代化的設計：一個乾淨、直觀且響應迅速的新擬態介面。',
      feature3: '注重隱私：您的任何資料都不會儲存在我們的伺服器上。所有處理都在您的瀏覽器中進行。',
      feature4: '開源精神：我們信奉社群的力量和透明的開發模式。',
    },
    privacy: {
      title: '隱私政策',
      lastUpdated: '最後更新：2025年6月15日',
      introduction: '歡迎來到開發者工具中心。我們致力於保護您的隱私。我們的隱私政策解釋了我們如何處理與我們網站和服務相關的資訊。',
      informationWeCollectTitle: '我們收集的資訊',
      informationWeCollectText: '我們不收集用戶的任何個人身份資訊。所有透過我們工具處理的資料（例如JSON、文本、文件）都保留在您的客戶端，絕不會發送到或儲存在我們的伺服器上。',
      cookiesTitle: 'Cookies 和本地儲存',
      cookiesText: '我們使用瀏覽器本地儲存來保存您的偏好設定，例如您選擇的主題（淺色/深色）和語言。這純粹是為了功能目的，以增強您的用戶體驗，並不會追踪您。',
      thirdPartyServicesTitle: '第三方服務',
      thirdPartyServicesText: '我們的網站未整合任何會收集您個人資料的第三方服務。我們提供指向GitHub等外部網站的連結，但我們對其隱私慣例概不負責。',
      changesToPolicyTitle: '政策變更',
      changesToPolicyText: '我們可能會不時更新我們的隱私政策。如有任何變更，我們會在此頁面上發布新的隱私政策來通知您。建議您定期查看本隱私政策以了解任何變更。',
      contactUsTitle: '聯繫我們',
      contactUsText: '如果您對本隱私政策有任何疑問，請隨時在我們的開源倉庫中與我們聯繫。',
    },
    terms: {
      title: '服務條款',
      lastUpdated: '最後更新：2025年6月15日',
      acceptanceTitle: '接受條款',
      acceptanceText: '通過訪問和使用開發者工具中心（“本服務”），您接受並同意遵守本協議的條款和規定。如果您不同意遵守這些條款，請不要使用本服務。',
      useOfServiceTitle: '服務使用',
      useOfServiceText: '本服務免費提供給個人和商業使用。您同意負責任地使用本服務，不將其用於任何惡意或非法活動。您對使用我們工具處理的任何資料負全部責任。',
      disclaimerTitle: '免責聲明',
      disclaimerText: '本服務按「原樣」和「現有」基礎提供，不附帶任何明示或暗示的保證。我們不保證通過本服務處理的任何工具或資料的準確性、可靠性或完整性。',
      limitationTitle: '責任限制',
      limitationText: '在任何情況下，開發者工具中心或其維護者均不對因使用或無法使用本服務而產生的任何直接、間接、附帶、特殊或後果性損害承擔責任。',
      changesToTermsTitle: '條款變更',
      changesToTermsText: '我們保留隨時修改這些條款的權利。我們將在本頁上發布這些條款的最新版本。您在任何變更後繼續使用本服務即表示您接受新條款。',
    },
  }
};
