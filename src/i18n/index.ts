import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      nav: {
        home: 'Home',
        json: 'JSON Tools',
        network: 'Network Tools',
        text: 'Text Tools',
        time: 'Time Tools',
        encryption: 'Encryption',
        markdown: 'Markdown',
        mermaid: 'Mermaid'
      },
      common: {
        theme: 'Theme',
        language: 'Language',
        light: 'Light',
        dark: 'Dark',
        copy: 'Copy',
        clear: 'Clear',
        format: 'Format',
        minify: 'Minify',
        validate: 'Validate',
        convert: 'Convert',
        encrypt: 'Encrypt',
        decrypt: 'Decrypt',
        preview: 'Preview',
        download: 'Download',
        toYaml: 'To YAML',
        toXml: 'To XML',
        toCsv: 'To CSV',
      },
      home: {
        title: 'Developer Tools Hub',
        subtitle: 'Professional development tools with modern neumorphic design',
        description: 'A comprehensive collection of essential developer tools including JSON formatting, text processing, encryption, and more.'
      },
      tools: {
        json: {
          title: 'JSON Tools',
          description: 'Format, validate, and minify JSON data',
          placeholder: 'Paste your JSON here...',
          fieldPath: 'Field Path',
          extractValue: 'Extract Value',
          extractPlaceholder: 'e.g., data.users[0].name',
          extractedValueTitle: 'Extracted Value',
          convertedToYamlTitle: 'Converted to YAML',
          convertedToXmlTitle: 'Converted to XML',
          convertedToCsvTitle: 'Converted to CSV',
        },
        jsonMock: {
          title: 'JSON Mock Data Generator',
          description: 'Generate mock data based on a JSON schema',
          generate: 'Generate',
          schemaTitle: 'JSON Schema',
          resultTitle: 'Generated Mock Data',
          resultPlaceholder: 'Generated mock data will appear here',
          errors: {
            emptySchema: 'Schema cannot be empty.',
            invalidSchema: 'Invalid JSON Schema',
            generationFailed: 'Failed to generate mock data',
          },
          toasts: {
            success: 'Mock data generated successfully.',
          }
        },
        network: {
          title: 'Network Tools',
          description: 'URL encoding, IP lookup, and network utilities'
        },
        text: {
          title: 'Text Tools',
          description: 'Text processing, case conversion, and formatting'
        },
        crypto: {
          title: 'Encryption Tools',
          description: 'Hash generation, encryption, and decryption utilities'
        },
        markdown: {
          title: 'Markdown Tools',
          description: 'Markdown editor with live preview'
        },
        mermaid: {
          title: 'Mermaid Diagrams',
          description: 'Create diagrams and flowcharts with Mermaid'
        },
        timestampConverter: {
          title: 'Timestamp Converter',
          description: 'Convert between Unix timestamps and human-readable dates.',
          timestamp: 'Timestamp',
          timestampPlaceholder: 'e.g., 1672531200',
          dateTime: 'Date & Time (UTC)',
          current: 'Current'
        },
        timezoneConverter: {
          title: 'Timezone Converter',
          description: 'Convert dates and times between different timezones.',
          sourceDateTime: 'Source Date & Time',
          sourceTimezone: 'Source Timezone',
          targetTimezone: 'Target Timezone',
          convertedDateTime: 'Converted Date & Time'
        },
        dateCalculator: {
          title: 'Date Calculator',
          description: 'Add or subtract durations from a date.',
          startDate: 'Start Date',
          add: 'Add',
          subtract: 'Subtract',
          years: 'Years',
          months: 'Months',
          days: 'Days',
          resultDate: 'Result Date'
        },
      },
      toasts: {
        common: {
          error: 'Error',
          success: 'Success',
          info: 'Info',
          notFound: 'Not Found',
        },
        error: {
          invalidJson: 'Please enter valid JSON content',
          invalidJsonFormat: 'Invalid JSON format',
          missingPath: 'Please enter the path of the field to extract',
          notFound: 'Value not found at the specified path',
          extractError: 'Error parsing JSON or extracting value',
          conversionFailed: 'Conversion failed',
          csvConversionRequiresArray: 'CSV conversion requires a JSON array of objects.',
        },
        success: {
          formattedAndCopied: 'Formatted and copied to clipboard',
          minifiedAndCopied: 'Minified and copied to clipboard',
          copied: 'Content copied to clipboard',
          extractedAndCopied: 'Extracted field value and copied to clipboard',
          convertedToYamlAndCopied: 'Converted to YAML and copied to clipboard',
          convertedToXmlAndCopied: 'Converted to XML and copied to clipboard',
          convertedToCsvAndCopied: 'Converted to CSV and copied to clipboard',
        },
        info: {
          emptyContent: 'Content is empty, nothing to copy',
        },
      },
    }
  },
  'zh-CN': {
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
    }
  },
  'zh-TW': {
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
    }
  },
  ja: {
    translation: {
      nav: {
        home: 'ホーム',
        json: 'JSONツール',
        network: 'ネットワークツール',
        text: 'テキストツール',
        time: '時間ツール',
        encryption: '暗号化ツール',
        markdown: 'Markdown',
        mermaid: 'Mermaid図'
      },
      common: {
        theme: 'テーマ',
        language: '言語',
        light: 'ライト',
        dark: 'ダーク',
        copy: 'コピー',
        clear: 'クリア',
        format: 'フォーマット',
        minify: '圧縮',
        validate: '検証',
        convert: '変換',
        encrypt: '暗号化',
        decrypt: '復号化',
        preview: 'プレビュー',
        download: 'ダウンロード',
        toYaml: 'YAMLへ変換',
        toXml: 'XMLへ変換',
        toCsv: 'CSVへ変換',
      },
      home: {
        title: '開発者ツールハブ',
        subtitle: 'モダンなニューモーフィックデザインのプロフェッショナルツール',
        description: 'JSON整形、テキスト処理、暗号化など、開発者必須ツールの包括的なコレクション。'
      },
      tools: {
        json: {
          title: 'JSONツール',
          description: 'JSONデータの整形、検証、圧縮',
          placeholder: 'JSONをここに貼り付けてください...',
          fieldPath: 'フィールドパス',
          extractValue: '値を抽出',
          extractPlaceholder: '例: data.users[0].name',
          extractedValueTitle: '抽出された値',
          convertedToYamlTitle: 'YAMLに変換済み',
          convertedToXmlTitle: 'XMLに変換済み',
          convertedToCsvTitle: 'CSVに変換済み',
        },
        jsonMock: {
          title: 'JSONモックデータジェネレーター',
          description: 'JSONスキーマに基づいてモックデータを生成します',
          generate: '生成',
          schemaTitle: 'JSONスキーマ',
          resultTitle: '生成されたモックデータ',
          resultPlaceholder: '生成されたモックデータはここに表示されます',
          errors: {
            emptySchema: 'スキーマは空にできません。',
            invalidSchema: '無効なJSONスキーマです',
            generationFailed: 'モックデータの生成に失敗しました',
          },
          toasts: {
            success: 'モックデータが正常に生成されました。',
          }
        },
        network: {
          title: 'ネットワークツール',
          description: 'URLエンコード、IP検索、ネットワークユーティリティ'
        },
        text: {
          title: 'テキストツール',
          description: 'テキスト処理、大文字小文字変換、整形'
        },
        crypto: {
          title: '暗号化ツール',
          description: 'ハッシュ生成、暗号化・復号化ユーティリティ'
        },
        markdown: {
          title: 'Markdownツール',
          description: 'ライブプレビュー付きMarkdownエディタ'
        },
        mermaid: {
          title: 'Mermaid図表',
          description: 'Mermaidで図表とフローチャートを作成'
        },
        timestampConverter: {
          title: 'タイムスタンプ変換',
          description: 'Unixタイムスタンプと人間が読める日付を相互に変換します。',
          timestamp: 'タイムスタンプ（秒）',
          timestampPlaceholder: '例: 1672531200',
          dateTime: '日時 (UTC)',
          current: '現在時刻'
        },
        timezoneConverter: {
          title: 'タイムゾーン変換',
          description: '異なるタイムゾーン間で日時を変換します。',
          sourceDateTime: '変換元の日時',
          sourceTimezone: '変換元のタイムゾーン',
          targetTimezone: '変換先のタイムゾーン',
          convertedDateTime: '変換後の日時'
        },
        dateCalculator: {
          title: '日付計算',
          description: '日付に期間を足したり引いたりします。',
          startDate: '開始日',
          add: '加算',
          subtract: '減算',
          years: '年',
          months: '月',
          days: '日',
          resultDate: '計算結果の日付'
        },
      },
      toasts: {
        common: {
          error: 'エラー',
          success: '成功',
          info: '情報',
          notFound: '見つかりません',
        },
        error: {
          invalidJson: '有効なJSONコンテンツを入力してください',
          invalidJsonFormat: '無効なJSON形式です',
          missingPath: '抽出するフィールドのパスを入力してください',
          notFound: '指定されたパスで値が見つかりませんでした',
          extractError: 'JSONの解析または値の抽出中にエラーが発生しました',
          conversionFailed: '変換に失敗しました',
          csvConversionRequiresArray: 'CSVへの変換には、オブジェクトのJSON配列が必要です',
        },
        success: {
          formattedAndCopied: 'フォーマットしてクリップボードにコピーしました',
          minifiedAndCopied: '圧縮してクリップボードにコピーしました',
          copied: 'コンテンツをクリップボードにコピーしました',
          extractedAndCopied: 'フィールド値を抽出してクリップボードにコピーしました',
          convertedToYamlAndCopied: 'YAMLに変換してクリップボードにコピーしました',
          convertedToXmlAndCopied: 'XMLに変換してクリップボードにコピーしました',
          convertedToCsvAndCopied: 'CSVに変換してクリップボードにコピーしました',
        },
        info: {
          emptyContent: 'コンテンツが空なので、コピーする必要はありません',
        },
      },
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
