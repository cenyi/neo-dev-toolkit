
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
        crypto: 'Encryption',
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
        download: 'Download'
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
          placeholder: 'Paste your JSON here...'
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
        }
      }
    }
  },
  'zh-CN': {
    translation: {
      nav: {
        home: '首页',
        json: 'JSON工具',
        network: '网络工具',
        text: '文本工具',
        crypto: '加密工具',
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
        download: '下载'
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
          placeholder: '在此粘贴您的JSON数据...'
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
        }
      }
    }
  },
  'zh-TW': {
    translation: {
      nav: {
        home: '首頁',
        json: 'JSON工具',
        network: '網路工具',
        text: '文字工具',
        crypto: '加密工具',
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
        download: '下載'
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
          placeholder: '在此貼上您的JSON資料...'
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
        }
      }
    }
  },
  ja: {
    translation: {
      nav: {
        home: 'ホーム',
        json: 'JSONツール',
        network: 'ネットワークツール',
        text: 'テキストツール',
        crypto: '暗号化ツール',
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
        download: 'ダウンロード'
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
          placeholder: 'JSONをここに貼り付けてください...'
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
        }
      }
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
      escapeValue: false
    }
  });

export default i18n;
