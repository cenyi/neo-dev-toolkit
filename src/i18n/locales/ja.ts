
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
      description: '開発のためのワンストップ「スイスアーミーナイフ」。JSON、テキスト、暗号化などのツールでワークフローを効率化します。',
      vercel: 'Vercel',
      github: 'GitHub',
      deepseek: 'DeepSeek',
    },
    about: {
      title: '私たちについて',
      missionTitle: '私たちの使命',
      missionText: '私たちの使命は、開発者の日常業務のための「スイスアーミーナイフ」として機能する、包括的で使いやすく、強力なツールキットを提供することです。開発ユーティリティのワンストップショップを作り、すべての人のワークフローをより効率的で楽しいものにすることを目指しています。',
      featuresTitle: '私たちが提供するもの',
      feature1: '包括的なツールセット：JSONフォーマットやテキスト操作から、暗号化や図表作成まで。',
      feature2: 'モダンなデザイン：クリーンで直感的、レスポンシブなニューモーフィックインターフェース。',
      feature3: 'プライバシー重視：データはサーバーに保存されません。すべての処理はブラウザ内で行われます。',
      feature4: 'オープンソース：私たちはコミュニティと透明性のある開発の力を信じています。',
    },
    privacy: {
      title: 'プライバシーポリシー',
      lastUpdated: '最終更新日：2025年6月15日',
      introduction: '開発者ツールハブへようこそ。私たちはあなたのプライバシー保護に努めています。当社のプライバシーポリシーは、当社のウェブサイトとサービスに関連する情報の取り扱い方法を説明するものです。',
      informationWeCollectTitle: '収集する情報',
      informationWeCollectText: '私たちはユーザーから個人を特定できる情報を収集しません。私たちのツールで処理されるすべてのデータ（JSON、テキスト、ファイルなど）はクライアント側に留まり、サーバーに送信されたり保存されたりすることはありません。',
      cookiesTitle: 'Cookieとローカルストレージ',
      cookiesText: '私たちは、選択したテーマ（ライト/ダーク）や言語など、あなたの好みを保存するためにブラウザのローカルストレージを使用します。これは純粋にユーザーエクスペリエンスを向上させるための機能的な目的であり、あなたを追跡するものではありません。',
      thirdPartyServicesTitle: '第三者サービス',
      thirdPartyServicesText: '当社のウェブサイトは、個人データを収集する第三者サービスとは統合されていません。GitHubのような外部サイトへのリンクを提供していますが、それらのプライバシー慣行については責任を負いません。',
      changesToPolicyTitle: '本ポリシーの変更',
      changesToPolicyText: '私たちはプライバシーポリシーを随時更新することがあります。変更があった場合は、このページに新しいプライバシーポリシーを掲載してお知らせします。定期的にこのプライバシーポリシーを確認して変更を確認することをお勧めします。',
      contactUsTitle: 'お問い合わせ',
      contactUsText: 'このプライバシーポリシーについてご不明な点がございましたら、私たちのオープンソースリポジトリまでお気軽にお問い合わせください。',
    },
    terms: {
      title: '利用規約',
      lastUpdated: '最終更新日：2025年6月15日',
      acceptanceTitle: '規約への同意',
      acceptanceText: '開発者ツールハブ（「本サービス」）にアクセスし、利用することにより、あなたはこの契約の条項に同意し、それに拘束されることに同意したものとみなされます。これらの条項に従うことに同意しない場合は、本サービスを利用しないでください。',
      useOfServiceTitle: 'サービスの利用',
      useOfServiceText: '本サービスは個人および商用利用のために無料で提供されます。あなたは本サービスを責任を持って利用し、悪意のあるまたは違法な活動には使用しないことに同意します。私たちのツールを使用して処理するデータについては、あなたが単独で責任を負います。',
      disclaimerTitle: '保証の否認',
      disclaimerText: '本サービスは「現状有姿」かつ「提供可能な範囲」で提供され、明示または黙示を問わずいかなる種類の保証もありません。私たちは、本サービスを通じて処理されるツールやデータの正確性、信頼性、完全性を保証しません。',
      limitationTitle: '責任の制限',
      limitationText: 'いかなる場合においても、開発者ツールハブまたはそのメンテナーは、本サービスの利用または利用不能から生じる直接的、間接的、付随的、特別、または結果的な損害について責任を負わないものとします。',
      changesToTermsTitle: '規約の変更',
      changesToTermsText: '私たちはいつでもこれらの規約を変更する権利を留保します。私たちはこのページにこれらの規約の最新版を掲載します。変更後も本サービスを継続して利用することにより、新しい規約に同意したものとみなされます。',
    },
  }
};
