
export const ja = {
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
};
