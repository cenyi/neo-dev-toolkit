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
        blue: 'Blue',
        system: 'System',
        comingSoon: 'Coming Soon',
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
      footer: {
        legal: 'Legal',
        company: 'Company',
        friendlyLinks: 'Friendly Links',
        privacy: 'Privacy Policy',
        terms: 'Terms of Service',
        about: 'About Us',
        copyright: '© {{year}} Developer Tools Hub. All Rights Reserved.',
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
        blue: '青色',
        system: 'システムに従う',
        comingSoon: '近日公開',
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
      footer: {
        legal: '法務',
        company: '会社',
        friendlyLinks: 'フレンドリーリンク',
        privacy: 'プライバシーポリシー',
        terms: '利用規約',
        about: '会社概要',
        copyright: '© {{year}} 開発者ツールハブ. 全著作権所有.',
      },
    }
  },
  es: {
    translation: {
      nav: { home: 'Inicio', json: 'JSON', network: 'Red', text: 'Texto', time: 'Tiempo', encryption: 'Cifrado', markdown: 'Markdown', mermaid: 'Mermaid' },
      common: { theme: 'Tema', language: 'Idioma', light: 'Claro', dark: 'Oscuro', copy: 'Copiar', clear: 'Limpiar', format: 'Formatear', minify: 'Minimizar', validate: 'Validar', convert: 'Convertir', encrypt: 'Cifrar', decrypt: 'Descifrar', preview: 'Vista previa', download: 'Descargar', toYaml: 'A YAML', toXml: 'A XML', toCsv: 'A CSV', blue: 'Azul', system: 'Sistema', comingSoon: 'Próximamente' },
      home: { title: 'Centro de Herramientas para Desarrolladores', subtitle: 'Herramientas de desarrollo profesionales con diseño neumórfico moderno', description: 'Una colección completa de herramientas esenciales para desarrolladores que incluye formato JSON, procesamiento de texto, cifrado y más.' },
      tools: { json: { title: 'Herramientas JSON', description: 'Formatear, validar y minimizar datos JSON' }, network: { title: 'Herramientas de Red', description: 'Codificación de URL, búsqueda de IP y utilidades de red' }, text: { title: 'Herramientas de Texto', description: 'Procesamiento de texto, conversión de mayúsculas y minúsculas y formato' }, crypto: { title: 'Herramientas de Cifrado', description: 'Generación de hash, utilidades de cifrado y descifrado' }, markdown: { title: 'Herramientas Markdown', description: 'Editor de Markdown con vista previa en vivo' }, mermaid: { title: 'Diagramas Mermaid', description: 'Crear diagramas y organigramas con Mermaid' } },
      footer: { legal: 'Legal', company: 'Empresa', friendlyLinks: 'Enlaces amigos', privacy: 'Política de Privacidad', terms: 'Términos de Servicio', about: 'Sobre nosotros', copyright: '© {{year}} Centro de Herramientas para Desarrolladores. Todos los derechos reservados.' }
    }
  },
  fr: {
    translation: {
      nav: { home: 'Accueil', json: 'JSON', network: 'Réseau', text: 'Texte', time: 'Temps', encryption: 'Chiffrement', markdown: 'Markdown', mermaid: 'Mermaid' },
      common: { theme: 'Thème', language: 'Langue', light: 'Clair', dark: 'Sombre', copy: 'Copier', clear: 'Effacer', format: 'Formater', minify: 'Minifier', validate: 'Valider', convert: 'Convertir', encrypt: 'Chiffrer', decrypt: 'Déchiffrer', preview: 'Aperçu', download: 'Télécharger', toYaml: 'Vers YAML', toXml: 'Vers XML', toCsv: 'Vers CSV', blue: 'Bleu', system: 'Système', comingSoon: 'Bientôt disponible' },
      home: { title: 'Hub d\'outils pour développeurs', subtitle: 'Outils de développement professionnels avec un design neumorphique moderne', description: 'Une collection complète d\'outils essentiels pour les développeurs, y compris le formatage JSON, le traitement de texte, le chiffrement, et plus encore.' },
      tools: { json: { title: 'Outils JSON', description: 'Formater, valider et minifier les données JSON' }, network: { title: 'Outils Réseau', description: 'Encodage d\'URL, recherche IP et utilitaires réseau' }, text: { title: 'Outils Texte', description: 'Traitement de texte, conversion de casse et formatage' }, crypto: { title: 'Outils de Chiffrement', description: 'Génération de hash, utilitaires de chiffrement et de déchiffrement' }, markdown: { title: 'Outils Markdown', description: 'Éditeur Markdown avec aperçu en direct' }, mermaid: { title: 'Diagrammes Mermaid', description: 'Créez des diagrammes et des organigrammes avec Mermaid' } },
      footer: { legal: 'Légal', company: 'Entreprise', friendlyLinks: 'Liens amis', privacy: 'Politique de confidentialité', terms: 'Conditions d\'utilisation', about: 'À propos', copyright: '© {{year}} Hub d\'outils pour développeurs. Tous droits réservés.' }
    }
  },
  de: {
    translation: {
      nav: { home: 'Startseite', json: 'JSON', network: 'Netzwerk', text: 'Text', time: 'Zeit', encryption: 'Verschlüsselung', markdown: 'Markdown', mermaid: 'Mermaid' },
      common: { theme: 'Thema', language: 'Sprache', light: 'Hell', dark: 'Dunkel', copy: 'Kopieren', clear: 'Löschen', format: 'Formatieren', minify: 'Minimieren', validate: 'Validieren', convert: 'Konvertieren', encrypt: 'Verschlüsseln', decrypt: 'Entschlüsseln', preview: 'Vorschau', download: 'Herunterladen', toYaml: 'Zu YAML', toXml: 'Zu XML', toCsv: 'Zu CSV', blue: 'Blau', system: 'System', comingSoon: 'Demnächst verfügbar' },
      home: { title: 'Entwickler-Tools-Hub', subtitle: 'Professionelle Entwicklungstools mit modernem neumorphischem Design', description: 'Eine umfassende Sammlung wichtiger Entwickler-Tools, einschließlich JSON-Formatierung, Textverarbeitung, Verschlüsselung und mehr.' },
      tools: { json: { title: 'JSON-Tools', description: 'JSON-Daten formatieren, validieren und minimieren' }, network: { title: 'Netzwerk-Tools', description: 'URL-Kodierung, IP-Suche und Netzwerk-Dienstprogramme' }, text: { title: 'Text-Tools', description: 'Textverarbeitung, Groß-/Kleinschreibung und Formatierung' }, crypto: { title: 'Verschlüsselungs-Tools', description: 'Hash-Generierung, Ver- und Entschlüsselungs-Dienstprogramme' }, markdown: { title: 'Markdown-Tools', description: 'Redakteur Markdown mit Live-Vorschau' }, mermaid: { title: 'Diagramme Mermaid', description: 'Erstellen Sie Diagramme und Flussdiagramme mit Mermaid' } },
      footer: { legal: 'Rechtliches', company: 'Unternehmen', friendlyLinks: 'Freundliche Links', privacy: 'Datenschutzerklärung', terms: 'Nutzungsbedingungen', about: 'Über uns', copyright: '© {{year}} Entwickler-Tools-Hub. Alle Rechte vorbehalten.' }
    }
  },
  ru: {
    translation: {
      nav: { home: 'Главная', json: 'JSON', network: 'Сеть', text: 'Текст', time: 'Время', encryption: 'Шифрование', markdown: 'Markdown', mermaid: 'Mermaid' },
      common: { theme: 'Тема', language: 'Язык', light: 'Светлая', dark: 'Темная', copy: 'Копировать', clear: 'Очистить', format: 'Форматировать', minify: 'Минифицировать', validate: 'Проверить', convert: 'Конвертировать', encrypt: 'Зашифровать', decrypt: 'Расшифровать', preview: 'Предпросмотр', download: 'Скачать', toYaml: 'В YAML', toXml: 'В XML', toCsv: 'В CSV', blue: 'Синий', system: 'Системная', comingSoon: 'Скоро будет' },
      home: { title: 'Центр инструментов для разработчиков', subtitle: 'Профессиональные инструменты для разработки с современным неоморфным дизайном', description: 'Полная коллекция основных инструментов для разработчиков, включая форматирование JSON, обработку текста, шифрование и многое другое.' },
      tools: { json: { title: 'Инструменты JSON', description: 'Форматирование, проверка и минимизация данных JSON' }, network: { title: 'Сетевые инструменты', description: 'Кодирование URL, поиск IP и сетевые утилиты' }, text: { title: 'Текстовые инструменты', description: 'Обработка текста, преобразование регистра и форматирование' }, crypto: { title: 'Инструменты шифрования', description: 'Генерация хешей, утилиты для шифрования и дешифрования' }, markdown: { title: 'Инструменты Markdown', description: 'Редактор Markdown с живым предпросмотром' }, mermaid: { title: 'Диаграммы Mermaid', description: 'Создавайте диаграммы и блок-схемы с помощью Mermaid' } },
      footer: { legal: 'Правовая информация', company: 'Компания', friendlyLinks: 'Дружественные ссылки', privacy: 'Политика конфиденциальности', terms: 'Условия использования', about: 'О нас', copyright: '© {{year}} Центр инструментов для разработчиков. Все права защищены.' }
    }
  },
  pt: {
    translation: {
      nav: { home: 'Início', json: 'JSON', network: 'Rede', text: 'Texto', time: 'Tempo', encryption: 'Criptografia', markdown: 'Markdown', mermaid: 'Mermaid' },
      common: { theme: 'Tema', language: 'Idioma', light: 'Claro', dark: 'Escuro', copy: 'Copiar', clear: 'Limpar', format: 'Formatar', minify: 'Minimizar', validate: 'Validar', convert: 'Converter', encrypt: 'Criptografar', decrypt: 'Descriptografar', preview: 'Visualizar', download: 'Baixar', toYaml: 'Para YAML', toXml: 'Para XML', toCsv: 'Para CSV', blue: 'Azul', system: 'Sistema', comingSoon: 'Em breve' },
      home: { title: 'Hub de Ferramentas para Desenvolvedores', subtitle: 'Ferramentas de desenvolvimento profissionais com design neomórfico moderno', description: 'Uma coleção abrangente de ferramentas essenciais para desenvolvedores, incluindo formatação JSON, processamento de texto, criptografia e muito mais.' },
      tools: { json: { title: 'Ferramentas JSON', description: 'Formatar, validar e minimizar dados JSON' }, network: { title: 'Ferramentas de Rede', description: 'Codificação de URL, consulta de IP e utilitários de rede' }, text: { title: 'Ferramentas de Texto', description: 'Processamento de texto, conversão de maiúsculas/minúsculas e formatação' }, crypto: { title: 'Ferramentas de Criptografia', description: 'Geração de hash, utilitários de criptografia и descriptografia' }, markdown: { title: 'Ferramentas Markdown', description: 'Editor de Markdown com visualização ao vivo' }, mermaid: { title: 'Diagramas Mermaid', description: 'Crie diagramas e fluxogramas com o Mermaid' } },
      footer: { legal: 'Legal', company: 'Empresa', friendlyLinks: 'Links amigáveis', privacy: 'Política de Privacidade', terms: 'Termos de Serviço', about: 'Sobre nós', copyright: '© {{year}} Hub de Ferramentas para Desenvolvedores. Todos os direitos reservados.' }
    }
  },
  ko: {
    translation: {
      nav: { home: '홈', json: 'JSON', network: '네트워크', text: '텍스트', time: '시간', encryption: '암호화', markdown: 'Markdown', mermaid: 'Mermaid' },
      common: { theme: '테마', language: '언어', light: '라이트', dark: '다크', copy: '복사', clear: '지우기', format: '형식 지정', minify: '최소화', validate: '유효성 검사', convert: '변환', encrypt: '암호화', decrypt: '복호화', preview: '미리보기', download: '다운로드', toYaml: 'YAML로', toXml: 'XML로', toCsv: 'CSV로', blue: '파란색', system: '시스템', comingSoon: '곧 출시 예정' },
      home: { title: '개발자 도구 허브', subtitle: '현대적인 뉴모피즘 디자인의 전문 개발 도구', description: 'JSON 서식 지정, 텍스트 처리, 암호화 등을 포함한 필수 개발자 도구 모음입니다.' },
      tools: { json: { title: 'JSON 도구', description: 'JSON 데이터 형식 지정, 유효성 검사 및 최소화' }, network: { title: '네트워크 도구', description: 'URL 인코딩, IP 조회 및 네트워크 유틸리티' }, text: { title: '텍스트 도구', description: '텍스트 처리, 대소문자 변환 및 서식 지정' }, crypto: { title: '암호화 도구', description: '해시 생성, 암호화 및 복호화 유틸리티' }, markdown: { title: 'Markdown 도구', description: '실시간 미리보기가 포함된 Markdown 편집기' }, mermaid: { title: 'Mermaid 다이어그램', description: 'Mermaid로 다이어그램 및 순서도 만들기' } },
      footer: { legal: '법률', company: '회사', friendlyLinks: '관련 링크', privacy: '개인정보 처리방침', terms: '서비스 약관', about: '소개', copyright: '© {{year}} 개발자 도구 허브. 모든 권리 보유.' }
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
