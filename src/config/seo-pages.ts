// SEO页面配置汇总 - 统一管理所有页面的TDK信息
// 这个文件用于集中管理所有页面的SEO配置，便于维护和优化
// 支持多语言SEO优化

// 支持的语言列表
export const SUPPORTED_LANGUAGES = ['en', 'es', 'fr', 'de', 'pt', 'ru', 'ja', 'ko', 'zh'] as const;
export type SupportedLanguage = typeof SUPPORTED_LANGUAGES[number];

// 多语言TDK信息
export interface MultiLanguageTDK {
  en: { title: string; description: string; keywords: string };
  es: { title: string; description: string; keywords: string };
  fr: { title: string; description: string; keywords: string };
  de: { title: string; description: string; keywords: string };
  pt: { title: string; description: string; keywords: string };
  ru: { title: string; description: string; keywords: string };
  ja: { title: string; description: string; keywords: string };
  ko: { title: string; description: string; keywords: string };
  zh: { title: string; description: string; keywords: string };
}

export interface SEOPageConfig {
  path: string;
  tdk: MultiLanguageTDK;
  priority: 'high' | 'medium' | 'low';
  category: string;
}

// 兼容性接口（用于向后兼容）
export interface LegacySEOPageConfig {
  path: string;
  title: string;
  description: string;
  keywords: string;
  priority: 'high' | 'medium' | 'low';
  category: string;
}

// 所有页面的SEO配置（多语言版本）
export const SEO_PAGES: SEOPageConfig[] = [
  // 首页
  {
    path: '/:lang',
    tdk: {
      en: {
        title: 'DevTools Hub - Free Online Developer Tools',
        description: '',
        keywords: 'developer tools, JSON formatter, text converter, encryption, hash generator, URL encoder, Base64, timestamp converter, free dev tools'
      },
      es: {
        title: 'DevTools Hub - Herramientas Gratuitas para Desarrolladores',
        description: '',
        keywords: 'herramientas desarrollador, formateador JSON, conversor texto, cifrado, generador hash, codificador URL, Base64, conversor timestamp'
      },
      fr: {
        title: 'DevTools Hub - Outils Gratuits pour Développeurs',
        description: '',
        keywords: 'outils développeur, formateur JSON, convertisseur texte, chiffrement, générateur hash, encodeur URL, Base64, convertisseur timestamp'
      },
      de: {
        title: 'DevTools Hub - Kostenlose Entwicklertools',
        description: '',
        keywords: 'entwicklertools, JSON formatierer, text konverter, verschlüsselung, hash generator, URL encoder, Base64, timestamp konverter'
      },
      pt: {
        title: 'DevTools Hub - Ferramentas Gratuitas para Desenvolvedores',
        description: '',
        keywords: 'ferramentas desenvolvedor, formatador JSON, conversor texto, criptografia, gerador hash, codificador URL, Base64, conversor timestamp'
      },
      ru: {
        title: 'DevTools Hub - Бесплатные Инструменты для Разработчиков',
        description: '',
        keywords: 'инструменты разработчика, форматтер JSON, конвертер текста, шифрование, генератор хеш, кодировщик URL, Base64'
      },
      ja: {
        title: 'DevTools Hub - 無料開発者ツール',
        description: '',
        keywords: '開発者ツール, JSONフォーマッター, テキストコンバーター, 暗号化, ハッシュ生成, URLエンコーダー, Base64, タイムスタンプ変換'
      },
      ko: {
        title: 'DevTools Hub - 무료 개발자 도구',
        description: '',
        keywords: '개발자 도구, JSON 포맷터, 텍스트 변환기, 암호화, 해시 생성기, URL 인코더, Base64, 타임스탬프 변환기'
      },
      zh: {
        title: 'DevTools Hub - 免费在线开发者工具',
        description: '',
        keywords: '开发者工具, JSON格式化, 文本转换, 加密, 哈希生成, URL编码, Base64, 时间戳转换, 免费开发工具'
      }
    },
    priority: 'high',
    category: 'Home'
  },

  // JSON 도구
  {
    path: '/:lang/json',
    tdk: {
      en: {
        title: 'JSON Tools - Professional JSON Utilities',
        description: '',
        keywords: 'JSON tools, JSON formatter, JSON validator, JSON schema, JSON code generator, JSON diff, mock data generator'
      },
      es: {
        title: 'Herramientas JSON - Utilidades Profesionales JSON',
        description: '',
        keywords: 'herramientas JSON, formateador JSON, validador JSON, esquema JSON, generador código JSON, diff JSON'
      },
      fr: {
        title: 'Outils JSON - Utilitaires Professionnels JSON',
        description: '',
        keywords: 'outils JSON, formateur JSON, validateur JSON, schéma JSON, générateur code JSON, diff JSON'
      },
      de: {
        title: 'JSON-Tools - Professionelle JSON-Dienstprogramme',
        description: '',
        keywords: 'JSON tools, JSON formatierer, JSON validator, JSON schema, JSON code generator, JSON diff'
      },
      pt: {
        title: 'Ferramentas JSON - Utilitários Profissionais JSON',
        description: '',
        keywords: 'ferramentas JSON, formatador JSON, validador JSON, esquema JSON, gerador código JSON, diff JSON'
      },
      ru: {
        title: 'JSON Инструменты - Профессиональные JSON Утилиты',
        description: '',
        keywords: 'JSON инструменты, JSON форматтер, JSON валидатор, JSON схема, JSON генератор кода, JSON diff'
      },
      ja: {
        title: 'JSONツール - プロフェッショナルJSONユーティリティ',
        description: '',
        keywords: 'JSONツール, JSONフォーマッター, JSONバリデーター, JSONスキーマ, JSONコードジェネレーター, JSON差分'
      },
      ko: {
        title: 'JSON 도구 - 전문 JSON 유틸리티',
        description: '',
        keywords: 'JSON 도구, JSON 포맷터, JSON 검증기, JSON 스키마, JSON 코드 생성기, JSON 차이점'
      },
      zh: {
        title: 'JSON 工具 - 专业 JSON 实用程序',
        description: '',
        keywords: 'JSON工具, JSON格式化, JSON验证器, JSON模式, JSON代码生成器, JSON差异, 模拟数据生成器'
      }
    },
    priority: 'high',
    category: 'JSON Tools'
  },

  // JSON 포맷터
  {
    path: '/:lang/json/formatter',
    tdk: {
      en: {
        title: 'JSON Formatter & Validator - Free Online Tool',
        description: '',
        keywords: 'JSON formatter, JSON validator, JSON beautifier, JSON minifier, online JSON tool, free JSON formatter'
      },
      es: {
        title: 'Formateador y Validador JSON - Herramienta Gratuita',
        description: '',
        keywords: 'formateador JSON, validador JSON, embellecedor JSON, minificador JSON, herramienta JSON online'
      },
      fr: {
        title: 'Formateur et Validateur JSON - Outil Gratuit',
        description: '',
        keywords: 'formateur JSON, validateur JSON, beautificateur JSON, minificateur JSON, outil JSON en ligne'
      },
      de: {
        title: 'JSON-Formatierer & Validator - Kostenloses Tool',
        description: '',
        keywords: 'JSON formatierer, JSON validator, JSON verschönerer, JSON minifizierer, online JSON tool'
      },
      pt: {
        title: 'Formatador e Validador JSON - Ferramenta Gratuita',
        description: '',
        keywords: 'formatador JSON, validador JSON, embelezador JSON, minificador JSON, ferramenta JSON online'
      },
      ru: {
        title: 'JSON Форматтер и Валидатор - Бесплатный Инструмент',
        description: '',
        keywords: 'JSON форматтер, JSON валидатор, JSON beautifier, JSON минификатор, онлайн JSON инструмент'
      },
      ja: {
        title: 'JSONフォーマッター＆バリデーター - 無料オンラインツール',
        description: '',
        keywords: 'JSONフォーマッター, JSONバリデーター, JSON整形, JSON最小化, オンラインJSONツール'
      },
      ko: {
        title: 'JSON 포맷터 & 검증기 - 무료 온라인 도구',
        description: '',
        keywords: 'JSON 포맷터, JSON 검증기, JSON 정리기, JSON 최소화기, 온라인 JSON 도구, 무료 JSON 포맷터'
      },
      zh: {
        title: 'JSON 格式化和验证器 - 免费在线工具',
        description: '',
        keywords: 'JSON格式化, JSON验证器, JSON美化, JSON压缩, 在线JSON工具, 免费JSON格式化程序'
      }
    },
    priority: 'high',
    category: 'JSON Tools'
  },

  // JSON Schema Validator
  {
    path: '/:lang/json/schema-validator',
    tdk: {
      en: {
        title: 'JSON Schema Validator - Free Online Tool',
        description: '',
        keywords: 'JSON schema validator, JSON validation, schema validation, JSON schema checker, data validation'
      },
      es: {
        title: 'Validador de Esquema JSON - Herramienta Gratuita',
        description: '',
        keywords: 'validador esquema JSON, validación JSON, validación esquema, verificador esquema JSON, validación datos'
      },
      zh: {
        title: 'JSON 模式验证器 - 免费在线工具',
        description: '',
        keywords: 'JSON模式验证器, JSON验证, 模式验证, JSON模式检查器, 数据验证'
      },
      fr: {
        title: 'Validateur de Schéma JSON - Outil Gratuit',
        description: '',
        keywords: 'validateur schéma JSON, validation JSON, validation schéma, vérificateur schéma JSON, validation données'
      },
      de: {
        title: 'JSON-Schema-Validator - Kostenloses Tool',
        description: '',
        keywords: 'JSON Schema Validator, JSON Validierung, Schema Validierung, JSON Schema Checker, Datenvalidierung'
      },
      pt: {
        title: 'Validador de Esquema JSON - Ferramenta Gratuita',
        description: '',
        keywords: 'validador esquema JSON, validação JSON, validação esquema, verificador esquema JSON, validação dados'
      },
      ru: {
        title: 'Валидатор JSON Схем - Бесплатный Инструмент',
        description: '',
        keywords: 'валидатор JSON схем, валидация JSON, валидация схем, проверка JSON схем, валидация данных'
      },
      ja: {
        title: 'JSONスキーマバリデーター - 無料オンラインツール',
        description: '',
        keywords: 'JSONスキーマバリデーター, JSON検証, スキーマ検証, JSONスキーマチェッカー, データ検証'
      },
      ko: {
        title: 'JSON 스키마 검증기 - 무료 온라인 도구',
        description: '',
        keywords: 'JSON 스키마 검증기, JSON 검증, 스키마 검증, JSON 스키마 체커, 데이터 검증'
      }
    },
    priority: 'medium',
    category: 'JSON Tools'
  },

  // JSON Code Generator
  {
    path: '/:lang/json/codegen',
    tdk: {
      en: {
        title: 'Generate Code Types from JSON - Free Tool',
        description: '',
        keywords: 'JSON code generator, TypeScript generator, Python types, Java classes, C# models, code generation'
      },
      es: {
        title: 'Generar Tipos de Código desde JSON - Herramienta Gratuita',
        description: '',
        keywords: 'generador código JSON, generador TypeScript, tipos Python, clases Java, modelos C#, generación código'
      },
      fr: {
        title: 'Générer des Types de Code depuis JSON - Outil Gratuit',
        description: '',
        keywords: 'générateur code JSON, générateur TypeScript, types Python, classes Java, modèles C#, génération code'
      },
      de: {
        title: 'Code-Typen aus JSON generieren - Kostenloses Tool',
        description: '',
        keywords: 'JSON Code Generator, TypeScript Generator, Python Typen, Java Klassen, C# Modelle, Code Generierung'
      },
      pt: {
        title: 'Gerar Tipos de Código a partir de JSON - Ferramenta Gratuita',
        description: '',
        keywords: 'gerador código JSON, gerador TypeScript, tipos Python, classes Java, modelos C#, geração código'
      },
      ru: {
        title: 'Генератор Типов Кода из JSON - Бесплатный Инструмент',
        description: '',
        keywords: 'генератор кода JSON, генератор TypeScript, типы Python, классы Java, модели C#, генерация кода'
      },
      ja: {
        title: 'JSONからコード型を生成 - 無料ツール',
        description: '',
        keywords: 'JSONコードジェネレーター, TypeScriptジェネレーター, Python型, Javaクラス, C#モデル, コード生成'
      },
      ko: {
        title: 'JSON에서 코드 타입 생성 - 무료 도구',
        description: '',
        keywords: 'JSON 코드 생성기, TypeScript 생성기, Python 타입, Java 클래스, C# 모델, 코드 생성'
      },
      zh: {
        title: '从 JSON 生成代码类型 - 免费工具',
        description: '',
        keywords: 'JSON代码生成器, TypeScript生成器, Python类型, Java类, C#模型, 代码生成'
      }
    },
    priority: 'medium',
    category: 'JSON Tools'
  },

  // JSON Diff Tool
  {
    path: '/:lang/json/diff',
    tdk: {
      en: {
        title: 'JSON Diff Tool - Compare JSON Objects',
        description: '',
        keywords: 'JSON diff, JSON compare, JSON comparison, data comparison, JSON difference checker'
      },
      es: {
        title: 'Herramienta de Diferencias JSON - Comparar Objetos JSON',
        description: '',
        keywords: 'diff JSON, comparar JSON, comparación JSON, comparación datos, verificador diferencias JSON'
      },
      fr: {
        title: 'Outil de Différence JSON - Comparer les Objets JSON',
        description: '',
        keywords: 'diff JSON, comparer JSON, comparaison JSON, comparaison données, vérificateur différences JSON'
      },
      de: {
        title: 'JSON-Diff-Tool - JSON-Objekte vergleichen',
        description: '',
        keywords: 'JSON Diff, JSON vergleichen, JSON Vergleich, Datenvergleich, JSON Unterschiede Checker'
      },
      pt: {
        title: 'Ferramenta de Diferença JSON - Comparar Objetos JSON',
        description: '',
        keywords: 'diff JSON, comparar JSON, comparação JSON, comparação dados, verificador diferenças JSON'
      },
      ru: {
        title: 'Инструмент Сравнения JSON - Сравнить JSON Объекты',
        description: '',
        keywords: 'JSON diff, сравнить JSON, сравнение JSON, сравнение данных, проверка различий JSON'
      },
      ja: {
        title: 'JSON差分ツール - JSONオブジェクト比較',
        description: '',
        keywords: 'JSON差分, JSON比較, JSONコンペア, データ比較, JSON違いチェッカー'
      },
      ko: {
        title: 'JSON 차이점 도구 - JSON 객체 비교',
        description: '',
        keywords: 'JSON 차이점, JSON 비교, JSON 비교 도구, 데이터 비교, JSON 차이점 검사기'
      },
      zh: {
        title: 'JSON 差异工具 - 比较 JSON 对象',
        description: '',
        keywords: 'JSON差异, JSON比较, JSON对比, 数据比较, JSON差异检查器'
      }
    },
    priority: 'medium',
    category: 'JSON Tools'
  },

  // JSON Mock Data Generator
  {
    path: '/:lang/json/mock',
    tdk: {
      en: {
        title: 'JSON Mock Data Generator - Free Testing Tool',
        description: '',
        keywords: 'mock data generator, JSON mock data, test data generator, fake data, API testing data'
      },
      es: {
        title: 'Generador de Datos Mock JSON - Herramienta de Pruebas Gratuita',
        description: '',
        keywords: 'generador datos mock, datos mock JSON, generador datos prueba, datos falsos, datos prueba API'
      },
      fr: {
        title: 'Générateur de Données Mock JSON - Outil de Test Gratuit',
        description: '',
        keywords: 'générateur données mock, données mock JSON, générateur données test, fausses données, données test API'
      },
      de: {
        title: 'JSON Mock-Daten-Generator - Kostenloses Test-Tool',
        description: '',
        keywords: 'Mock Daten Generator, JSON Mock Daten, Test Daten Generator, Fake Daten, API Test Daten'
      },
      pt: {
        title: 'Gerador de Dados Mock JSON - Ferramenta de Teste Gratuita',
        description: '',
        keywords: 'gerador dados mock, dados mock JSON, gerador dados teste, dados falsos, dados teste API'
      },
      ru: {
        title: 'Генератор Mock JSON Данных - Бесплатный Инструмент Тестирования',
        description: '',
        keywords: 'генератор mock данных, mock JSON данные, генератор тестовых данных, фальшивые данные, данные для тестирования API'
      },
      ja: {
        title: 'JSONモックデータジェネレーター - 無料テストツール',
        description: '',
        keywords: 'モックデータジェネレーター, JSONモックデータ, テストデータジェネレーター, フェイクデータ, APIテストデータ'
      },
      ko: {
        title: 'JSON 모의 데이터 생성기 - 무료 테스트 도구',
        description: '',
        keywords: '모의 데이터 생성기, JSON 모의 데이터, 테스트 데이터 생성기, 가짜 데이터, API 테스트 데이터'
      },
      zh: {
        title: 'JSON 模拟数据生成器 - 免费测试工具',
        description: '',
        keywords: '模拟数据生成器, JSON模拟数据, 测试数据生成器, 假数据, API测试数据'
      }
    },
    priority: 'medium',
    category: 'JSON Tools'
  },

  // Text Tools Category
  {
    path: '/:lang/text',
    tdk: {
      en: {
        title: 'Text Tools - Comprehensive Text Processing',
        description: '',
        keywords: 'text tools, text processing, case converter, word counter, text manipulation, text utilities'
      },
      es: {
        title: 'Herramientas de Texto - Procesamiento Integral de Texto',
        description: '',
        keywords: 'herramientas texto, procesamiento texto, conversor mayúsculas, contador palabras, manipulación texto'
      },
      fr: {
        title: 'Outils de Texte - Traitement Complet du Texte',
        description: '',
        keywords: 'outils texte, traitement texte, convertisseur casse, compteur mots, manipulation texte'
      },
      de: {
        title: 'Text-Tools - Umfassende Textverarbeitung',
        description: '',
        keywords: 'text tools, textverarbeitung, case converter, wortzähler, textmanipulation'
      },
      pt: {
        title: 'Ferramentas de Texto - Processamento Abrangente de Texto',
        description: '',
        keywords: 'ferramentas texto, processamento texto, conversor maiúsculas, contador palavras, manipulação texto'
      },
      ru: {
        title: 'Текстовые Инструменты - Комплексная Обработка Текста',
        description: '',
        keywords: 'текстовые инструменты, обработка текста, конвертер регистра, счетчик слов, манипуляция текстом'
      },
      ja: {
        title: 'テキストツール - 包括的テキスト処理',
        description: '',
        keywords: 'テキストツール, テキスト処理, 大文字小文字変換, 文字数カウント, テキスト操作'
      },
      ko: {
        title: '텍스트 도구 - 포괄적 텍스트 처리',
        description: '',
        keywords: '텍스트 도구, 텍스트 처리, 대소문자 변환기, 단어 카운터, 텍스트 조작'
      },
      zh: {
        title: '文本工具 - 全面的文本处理',
        description: '',
        keywords: '文本工具, 文本处理, 大小写转换器, 字数统计, 文本操作, 文本实用程序'
      }
    },
    priority: 'high',
    category: 'Text Tools'
  },

  // Case Converter
  {
    path: '/:lang/text/case-converter',
    tdk: {
      en: {
        title: 'Text Case Converter - Upper, Lower, Title Case',
        description: '',
        keywords: 'case converter, text converter, uppercase, lowercase, title case, camelCase, snake_case'
      },
      es: {
        title: 'Conversor de Mayúsculas y Minúsculas - Herramienta Gratuita',
        description: '',
        keywords: 'conversor mayúsculas, conversor texto, mayúsculas, minúsculas, título, camelCase, snake_case'
      },
      fr: {
        title: 'Convertisseur de Casse - Majuscules, Minuscules, Titre',
        description: '',
        keywords: 'convertisseur casse, convertisseur texte, majuscules, minuscules, titre, camelCase, snake_case'
      },
      de: {
        title: 'Text-Groß-/Kleinschreibung-Konverter - Kostenlos',
        description: '',
        keywords: 'case converter, text konverter, großbuchstaben, kleinbuchstaben, titel, camelCase, snake_case'
      },
      pt: {
        title: 'Conversor de Maiúsculas e Minúsculas - Ferramenta Gratuita',
        description: '',
        keywords: 'conversor maiúsculas, conversor texto, maiúsculas, minúsculas, título, camelCase, snake_case'
      },
      ru: {
        title: 'Конвертер Регистра Текста - Бесплатный Инструмент',
        description: '',
        keywords: 'конвертер регистра, конвертер текста, верхний регистр, нижний регистр, заглавные, camelCase'
      },
      ja: {
        title: 'テキスト大文字小文字変換 - 無料ツール',
        description: '',
        keywords: '大文字小文字変換, テキスト変換, 大文字, 小文字, タイトルケース, camelCase, snake_case'
      },
      ko: {
        title: '텍스트 대소문자 변환기 - 무료 도구',
        description: '',
        keywords: '대소문자 변환기, 텍스트 변환기, 대문자, 소문자, 제목 케이스, camelCase, snake_case'
      },
      zh: {
        title: '文本大小写转换器 - 大写、小写、标题大小写',
        description: '',
        keywords: '大小写转换器, 文本转换器, 大写, 小写, 标题大小写, 驼峰命名, 蛇形命名'
      }
    },
    priority: 'high',
    category: 'Text Tools'
  },

  // Network Tools Category
  {
    path: '/:lang/network',
    tdk: {
      en: {
        title: 'Network Tools - Encoding & Security Utilities',
        description: '',
        keywords: 'network tools, URL encoder, Base64 converter, IP lookup, JWT decoder, encoding tools'
      },
      es: {
        title: 'Herramientas de Red - Utilidades de Codificación y Seguridad',
        description: '',
        keywords: 'herramientas red, codificador URL, conversor Base64, búsqueda IP, decodificador JWT'
      },
      fr: {
        title: 'Outils Réseau - Utilitaires d\'Encodage et de Sécurité',
        description: '',
        keywords: 'outils réseau, encodeur URL, convertisseur Base64, recherche IP, décodeur JWT'
      },
      de: {
        title: 'Netzwerk-Tools - Kodierungs- und Sicherheitsdienstprogramme',
        description: '',
        keywords: 'netzwerk tools, URL encoder, Base64 konverter, IP lookup, JWT decoder'
      },
      pt: {
        title: 'Ferramentas de Rede - Utilitários de Codificação e Segurança',
        description: '',
        keywords: 'ferramentas rede, codificador URL, conversor Base64, pesquisa IP, decodificador JWT'
      },
      ru: {
        title: 'Сетевые Инструменты - Утилиты Кодирования и Безопасности',
        description: '',
        keywords: 'сетевые инструменты, URL кодировщик, Base64 конвертер, IP поиск, JWT декодер'
      },
      ja: {
        title: 'ネットワークツール - エンコーディング＆セキュリティユーティリティ',
        description: '',
        keywords: 'ネットワークツール, URLエンコーダー, Base64コンバーター, IP検索, JWTデコーダー'
      },
      ko: {
        title: '네트워크 도구 - 인코딩 및 보안 유틸리티',
        description: '',
        keywords: '네트워크 도구, URL 인코더, Base64 변환기, IP 조회, JWT 디코더, 인코딩 도구'
      },
      zh: {
        title: '网络工具 - 编码和安全实用程序',
        description: '',
        keywords: '网络工具, URL编码器, Base64转换器, IP查询, JWT解码器, 编码工具'
      }
    },
    priority: 'high',
    category: 'Network Tools'
  },

  // Regex Tool
  {
    path: '/:lang/regex',
    tdk: {
      en: {
        title: 'Regular Expression Tester & Generator',
        description: '',
        keywords: 'regex tester, regular expression, regex generator, pattern matching, text search, regex validator'
      },
      es: {
        title: 'Probador y Generador de Expresiones Regulares',
        description: '',
        keywords: 'probador regex, expresión regular, generador regex, coincidencia patrones, búsqueda texto'
      },
      fr: {
        title: 'Testeur et Générateur d\'Expressions Régulières',
        description: '',
        keywords: 'testeur regex, expression régulière, générateur regex, correspondance motifs, recherche texte'
      },
      de: {
        title: 'Regulärer Ausdruck Tester & Generator',
        description: '',
        keywords: 'regex tester, regulärer ausdruck, regex generator, muster matching, text suche'
      },
      pt: {
        title: 'Testador e Gerador de Expressões Regulares',
        description: '',
        keywords: 'testador regex, expressão regular, gerador regex, correspondência padrões, busca texto'
      },
      ru: {
        title: 'Тестер и Генератор Регулярных Выражений',
        description: '',
        keywords: 'тестер regex, регулярное выражение, генератор regex, поиск шаблонов, поиск текста'
      },
      zh: {
        title: '正则表达式测试器和生成器',
        description: '',
        keywords: 'regex测试器, 正则表达式, regex生成器, 模式匹配, 文本搜索, regex验证器'
      },
      ja: {
        title: '正規表現テスター＆ジェネレーター',
        description: '',
        keywords: '正規表現テスター, 正規表現, 正規表現ジェネレーター, パターンマッチング, テキスト検索'
      },
      ko: {
        title: '정규 표현식 테스터 및 생성기',
        description: '',
        keywords: '정규식 테스터, 정규 표현식, 정규식 생성기, 패턴 매칭, 텍스트 검색, 정규식 검증기'
      }
    },
    priority: 'medium',
    category: 'Regex Tools'
  },

  // Encryption Tool
  {
    path: '/:lang/encryption',
    tdk: {
      en: {
        title: 'Encryption Tool - AES, Hash & Password Generator',
        description: '',
        keywords: 'encryption tool, AES encryption, password generator, hash calculator, data security, cryptography'
      },
      es: {
        title: 'Herramienta de Cifrado - AES, Hash y Generador de Contraseñas',
        description: '',
        keywords: 'herramienta cifrado, cifrado AES, generador contraseñas, calculadora hash, seguridad datos'
      },
      fr: {
        title: 'Outil de Chiffrement - AES, Hash et Générateur de Mots de Passe',
        description: '',
        keywords: 'outil chiffrement, chiffrement AES, générateur mots de passe, calculateur hash, sécurité données'
      },
      de: {
        title: 'Verschlüsselungstool - AES, Hash & Passwort-Generator',
        description: '',
        keywords: 'verschlüsselungstool, AES verschlüsselung, passwort generator, hash rechner, datensicherheit'
      },
      pt: {
        title: 'Ferramenta de Criptografia - AES, Hash e Gerador de Senhas',
        description: '',
        keywords: 'ferramenta criptografia, criptografia AES, gerador senhas, calculadora hash, segurança dados'
      },
      ru: {
        title: 'Инструмент Шифрования - AES, Hash и Генератор Паролей',
        description: '',
        keywords: 'инструмент шифрования, AES шифрование, генератор паролей, калькулятор хеш, безопасность данных'
      },
      ja: {
        title: '暗号化ツール - AES、ハッシュ、パスワード生成',
        description: '',
        keywords: '暗号化ツール, AES暗号化, パスワード生成器, ハッシュ計算機, データセキュリティ, 暗号学'
      },
      ko: {
        title: '암호화 도구 - AES, 해시 및 비밀번호 생성기',
        description: '',
        keywords: '암호화 도구, AES 암호화, 비밀번호 생성기, 해시 계산기, 데이터 보안, 암호학'
      },
      zh: {
        title: '加密工具 - AES、哈希和密码生成器',
        description: '',
        keywords: '加密工具, AES加密, 密码生成器, 哈希计算器, 数据安全, 密码学'
      }
    },
    priority: 'medium',
    category: 'Security Tools'
  },

  // Time Tools Category
  {
    path: '/:lang/time',
    tdk: {
      en: {
        title: 'Date & Time Tools - Timestamp & Timezone Converter',
        description: '',
        keywords: 'time tools, timestamp converter, timezone converter, date calculator'
      },
      es: {
        title: 'Herramientas de Fecha y Hora - Conversor de Timestamp y Zona Horaria',
        description: '',
        keywords: 'herramientas tiempo, conversor timestamp, conversor zona horaria, calculadora fechas'
      },
      fr: {
        title: 'Outils de Date et Heure - Convertisseur Timestamp et Fuseau Horaire',
        description: '',
        keywords: 'outils temps, convertisseur timestamp, convertisseur fuseau horaire, calculateur dates'
      },
      de: {
        title: 'Datum & Zeit Tools - Timestamp & Zeitzone Konverter',
        description: '',
        keywords: 'zeit tools, timestamp konverter, zeitzone konverter, datum rechner'
      },
      pt: {
        title: 'Ferramentas de Data e Hora - Conversor Timestamp e Fuso Horário',
        description: '',
        keywords: 'ferramentas tempo, conversor timestamp, conversor fuso horário, calculadora datas'
      },
      ru: {
        title: 'Инструменты Даты и Времени - Конвертер Timestamp и Часовых Поясов',
        description: '',
        keywords: 'инструменты времени, конвертер timestamp, конвертер часовых поясов, калькулятор дат'
      },
      ja: {
        title: '日付・時刻ツール - タイムスタンプ・タイムゾーン変換',
        description: '',
        keywords: '時刻ツール, タイムスタンプ変換, タイムゾーン変換, 日付計算機'
      },
      ko: {
        title: '날짜 및 시간 도구 - 타임스탬프 및 시간대 변환기',
        description: '',
        keywords: '시간 도구, 타임스탬프 변환기, 시간대 변환기, 날짜 계산기'
      },
      zh: {
        title: '日期和时间工具 - 时间戳和时区转换器',
        description: '',
        keywords: '时间工具, 时间戳转换器, 时区转换器, 日期计算器'
      }
    },
    priority: 'medium',
    category: 'Time Tools'
  },

  // Editor Tools Category
  {
    path: '/:lang/editor',
    tdk: {
      en: {
        title: 'Editor Tools - Markdown & Mermaid Editors',
        description: '',
        keywords: 'editor tools, Markdown editor, Mermaid editor, diagram editor, documentation tools'
      },
      es: {
        title: 'Herramientas de Editor - Editores Markdown y Mermaid',
        description: '',
        keywords: 'herramientas editor, editor Markdown, editor Mermaid, editor diagramas, herramientas documentación'
      },
      fr: {
        title: 'Outils d\'Éditeur - Éditeurs Markdown et Mermaid',
        description: '',
        keywords: 'outils éditeur, éditeur Markdown, éditeur Mermaid, éditeur diagrammes, outils documentation'
      },
      de: {
        title: 'Editor-Tools - Markdown & Mermaid Editoren',
        description: '',
        keywords: 'editor tools, Markdown editor, Mermaid editor, diagramm editor, dokumentations tools'
      },
      pt: {
        title: 'Ferramentas de Editor - Editores Markdown e Mermaid',
        description: '',
        keywords: 'ferramentas editor, editor Markdown, editor Mermaid, editor diagramas, ferramentas documentação'
      },
      ru: {
        title: 'Инструменты Редактора - Редакторы Markdown и Mermaid',
        description: '',
        keywords: 'инструменты редактора, редактор Markdown, редактор Mermaid, редактор диаграмм, инструменты документации'
      },
      ja: {
        title: 'エディターツール - Markdown & Mermaid エディター',
        description: '',
        keywords: 'エディターツール, Markdownエディター, Mermaidエディター, 図表エディター, ドキュメントツール'
      },
      ko: {
        title: '편집기 도구 - Markdown 및 Mermaid 편집기',
        description: '',
        keywords: '편집기 도구, Markdown 편집기, Mermaid 편집기, 다이어그램 편집기, 문서화 도구'
      },
      zh: {
        title: '编辑器工具 - Markdown 和 Mermaid 编辑器',
        description: '',
        keywords: '编辑器工具, Markdown编辑器, Mermaid编辑器, 图表编辑器, 文档工具'
      }
    },
    priority: 'medium',
    category: 'Editor Tools'
  },

  // Site Map
  {
    path: '/:lang/sitemap',
    tdk: {
      en: {
        title: 'Site Map - All Developer Tools Directory',
        description: '',
        keywords: 'sitemap, developer tools, JSON tools, text tools, network utilities, free online tools'
      },
      es: {
        title: 'Mapa del Sitio - Directorio de Todas las Herramientas para Desarrolladores',
        description: '',
        keywords: 'mapa sitio, herramientas desarrollador, herramientas JSON, herramientas texto, utilidades red'
      },
      fr: {
        title: 'Plan du Site - Répertoire de Tous les Outils pour Développeurs',
        description: '',
        keywords: 'plan site, outils développeur, outils JSON, outils texte, utilitaires réseau'
      },
      zh: {
        title: '网站地图 - 所有开发者工具目录',
        description: '',
        keywords: '网站地图, 开发者工具, JSON工具, 文本工具, 网络实用程序, 免费在线工具'
      },
      de: {
        title: 'Sitemap - Verzeichnis Aller Entwicklertools',
        description: '',
        keywords: 'sitemap, entwicklertools, JSON tools, text tools, netzwerk utilities'
      },
      pt: {
        title: 'Mapa do Site - Diretório de Todas as Ferramentas para Desenvolvedores',
        description: '',
        keywords: 'mapa site, ferramentas desenvolvedor, ferramentas JSON, ferramentas texto, utilitários rede'
      },
      ru: {
        title: 'Карта Сайта - Каталог Всех Инструментов для Разработчиков',
        description: '',
        keywords: 'карта сайта, инструменты разработчика, JSON инструменты, текстовые инструменты, сетевые утилиты'
      },
      ja: {
        title: 'サイトマップ - 全開発者ツールディレクトリ',
        description: '',
        keywords: 'サイトマップ, 開発者ツール, JSONツール, テキストツール, ネットワークユーティリティ, 無料オンラインツール'
      },
      ko: {
        title: '사이트 맵 - 모든 개발자 도구 디렉토리',
        description: '',
        keywords: '사이트맵, 개발자 도구, JSON 도구, 텍스트 도구, 네트워크 유틸리티, 무료 온라인 도구'
      }
    },
    priority: 'medium',
    category: 'Navigation'
  },

  // About Us
  {
    path: '/:lang/about',
    tdk: {
      en: {
        title: 'About Us - DevTools Hub Team & Mission',
        description: '',
        keywords: 'about us, developer tools, mission, team, company information'
      },
      es: {
        title: 'Acerca de Nosotros - Equipo y Misión de DevTools Hub',
        description: '',
        keywords: 'acerca nosotros, herramientas desarrollador, misión, equipo, información empresa'
      },
      fr: {
        title: 'À Propos de Nous - Équipe et Mission de DevTools Hub',
        description: '',
        keywords: 'à propos nous, outils développeur, mission, équipe, informations entreprise'
      },
      de: {
        title: 'Über Uns - DevTools Hub Team & Mission',
        description: '',
        keywords: 'über uns, entwicklertools, mission, team, unternehmensinformationen'
      },
      pt: {
        title: 'Sobre Nós - Equipe e Missão do DevTools Hub',
        description: '',
        keywords: 'sobre nós, ferramentas desenvolvedor, missão, equipe, informações empresa'
      },
      ru: {
        title: 'О Нас - Команда и Миссия DevTools Hub',
        description: '',
        keywords: 'о нас, инструменты разработчика, миссия, команда, информация о компании'
      },
      ja: {
        title: '私たちについて - DevTools Hub チーム＆ミッション',
        description: '',
        keywords: '私たちについて, 開発者ツール, ミッション, チーム, 会社情報'
      },
      ko: {
        title: '회사 소개 - DevTools Hub 팀 및 미션',
        description: '',
        keywords: '회사 소개, 개발자 도구, 미션, 팀, 회사 정보'
      },
      zh: {
        title: '关于我们 - DevTools Hub 团队与使命',
        description: '',
        keywords: '关于我们, 开发者工具, 使命, 团队, 公司信息'
      }
    },
    priority: 'low',
    category: 'Company'
  },

  // Privacy Policy
  {
    path: '/:lang/privacy',
    tdk: {
      en: {
        title: 'Privacy Policy - Data Protection & User Rights',
        description: '',
        keywords: 'privacy policy, data protection, personal information, privacy rights'
      },
      es: {
        title: 'Política de Privacidad - Protección de Datos y Derechos del Usuario',
        description: '',
        keywords: 'política privacidad, protección datos, información personal, derechos privacidad'
      },
      fr: {
        title: 'Politique de Confidentialité - Protection des Données et Droits des Utilisateurs',
        description: '',
        keywords: 'politique confidentialité, protection données, informations personnelles, droits confidentialité'
      },
      de: {
        title: 'Datenschutzrichtlinie - Datenschutz & Nutzerrechte',
        description: '',
        keywords: 'datenschutzrichtlinie, datenschutz, persönliche informationen, datenschutzrechte'
      },
      pt: {
        title: 'Política de Privacidade - Proteção de Dados e Direitos do Usuário',
        description: '',
        keywords: 'política privacidade, proteção dados, informações pessoais, direitos privacidade'
      },
      ru: {
        title: 'Политика Конфиденциальности - Защита Данных и Права Пользователей',
        description: '',
        keywords: 'политика конфиденциальности, защита данных, личная информация, права конфиденциальности'
      },
      ja: {
        title: 'プライバシーポリシー - データ保護とユーザー権利',
        description: '',
        keywords: 'プライバシーポリシー, データ保護, 個人情報, プライバシー権'
      },
      ko: {
        title: '개인정보 처리방침 - 데이터 보호 및 사용자 권리',
        description: '',
        keywords: '개인정보 처리방침, 데이터 보호, 개인정보, 개인정보 보호 권리'
      },
      zh: {
        title: '隐私政策 - 数据保护与用户权利',
        description: '',
        keywords: '隐私政策, 数据保护, 个人信息, 隐私权'
      }
    },
    priority: 'low',
    category: 'Legal'
  },

  // Terms of Service
  {
    path: '/:lang/terms',
    tdk: {
      en: {
        title: 'Terms of Service - User Agreement & Legal Terms',
        description: '',
        keywords: 'terms of service, legal agreement, terms and conditions, user agreement'
      },
      es: {
        title: 'Términos de Servicio - Acuerdo de Usuario y Términos Legales',
        description: '',
        keywords: 'términos servicio, acuerdo legal, términos condiciones, acuerdo usuario'
      },
      fr: {
        title: 'Conditions de Service - Accord Utilisateur et Conditions Légales',
        description: '',
        keywords: 'conditions service, accord légal, termes conditions, accord utilisateur'
      },
      de: {
        title: 'Nutzungsbedingungen - Benutzervereinbarung & Rechtliche Bedingungen',
        description: '',
        keywords: 'nutzungsbedingungen, rechtliche vereinbarung, geschäftsbedingungen, benutzervereinbarung'
      },
      pt: {
        title: 'Termos de Serviço - Acordo do Usuário e Termos Legais',
        description: '',
        keywords: 'termos serviço, acordo legal, termos condições, acordo usuário'
      },
      ru: {
        title: 'Условия Обслуживания - Пользовательское Соглашение и Правовые Условия',
        description: '',
        keywords: 'условия обслуживания, правовое соглашение, условия и положения, пользовательское соглашение'
      },
      ja: {
        title: '利用規約 - ユーザー契約と法的条件',
        description: '',
        keywords: '利用規約, 法的合意, 利用条件, ユーザー契約'
      },
      ko: {
        title: '서비스 약관 - 사용자 계약 및 법적 조건',
        description: '',
        keywords: '서비스 약관, 법적 계약, 이용약관, 사용자 계약'
      },
      zh: {
        title: '服务条款 - 用户协议与法律条款',
        description: '',
        keywords: '服务条款, 法律协议, 条款与条件, 用户协议'
      }
    },
    priority: 'low',
    category: 'Legal'
  },

  // 404 Not Found
  {
    path: '*',
    tdk: {
      en: {
        title: '404 Not Found - Page Not Found',
        description: '',
        keywords: '404 error, page not found, DevTools Hub'
      },
      es: {
        title: '404 No Encontrado - Página No Encontrada',
        description: '',
        keywords: 'error 404, página no encontrada, DevTools Hub'
      },
      fr: {
        title: '404 Non Trouvé - Page Non Trouvée',
        description: '',
        keywords: 'erreur 404, page non trouvée, DevTools Hub'
      },
      de: {
        title: '404 Nicht Gefunden - Seite Nicht Gefunden',
        description: '',
        keywords: '404 fehler, seite nicht gefunden, DevTools Hub'
      },
      pt: {
        title: '404 Não Encontrado - Página Não Encontrada',
        description: '',
        keywords: 'erro 404, página não encontrada, DevTools Hub'
      },
      ru: {
        title: '404 Не Найдено - Страница Не Найдена',
        description: '',
        keywords: 'ошибка 404, страница не найдена, DevTools Hub'
      },
      ja: {
        title: '404 見つかりません - ページが見つかりません',
        description: '',
        keywords: '404エラー, ページが見つかりません, DevTools Hub'
      },
      ko: {
        title: '404 찾을 수 없음 - 페이지를 찾을 수 없음',
        description: '',
        keywords: '404 오류, 페이지를 찾을 수 없음, DevTools Hub'
      },
      zh: {
        title: '404 未找到 - 页面未找到',
        description: '',
        keywords: '404错误, 页面未找到, DevTools Hub'
      }
    },
    priority: 'low',
    category: 'Error'
  },

  // Timestamp Converter
  {
    path: '/:lang/timestamp',
    tdk: {
      en: {
        title: 'Timestamp Converter - Unix Time & Date Converter',
        description: '',
        keywords: 'timestamp converter, Unix time, date converter, epoch time, time conversion'
      },
      es: {
        title: 'Conversor de Timestamp - Conversor de Tiempo Unix y Fecha',
        description: '',
        keywords: 'conversor timestamp, tiempo Unix, conversor fecha, tiempo epoch, conversión tiempo'
      },
      fr: {
        title: 'Convertisseur Timestamp - Convertisseur Temps Unix et Date',
        description: '',
        keywords: 'convertisseur timestamp, temps Unix, convertisseur date, temps epoch, conversion temps'
      },
      de: {
        title: 'Timestamp-Konverter - Unix-Zeit & Datum-Konverter',
        description: '',
        keywords: 'timestamp konverter, Unix zeit, datum konverter, epoch zeit, zeit konvertierung'
      },
      pt: {
        title: 'Conversor de Timestamp - Conversor de Tempo Unix e Data',
        description: '',
        keywords: 'conversor timestamp, tempo Unix, conversor data, tempo epoch, conversão tempo'
      },
      ru: {
        title: 'Конвертер Timestamp - Конвертер Unix Времени и Даты',
        description: '',
        keywords: 'конвертер timestamp, Unix время, конвертер даты, epoch время, конвертация времени'
      },
      ja: {
        title: 'タイムスタンプ変換 - Unix時間・日付変換ツール',
        description: '',
        keywords: 'タイムスタンプ変換, Unix時間, 日付変換, エポック時間, 時間変換'
      },
      ko: {
        title: '타임스탬프 변환기 - Unix 시간 및 날짜 변환기',
        description: '',
        keywords: '타임스탬프 변환기, Unix 시간, 날짜 변환기, 에포크 시간, 시간 변환'
      },
      zh: {
        title: '时间戳转换器 - Unix时间和日期转换器',
        description: '',
        keywords: '时间戳转换器, Unix时间, 日期转换器, epoch时间, 时间转换'
      }
    },
    priority: 'high',
    category: 'Time Tools'
  },

  // Timezone Converter
  {
    path: '/:lang/timezone',
    tdk: {
      en: {
        title: 'Timezone Converter - World Time Zone Converter',
        description: '',
        keywords: 'timezone converter, world time, time zone conversion, global time, UTC converter'
      },
      es: {
        title: 'Conversor de Zona Horaria - Conversor de Zona Horaria Mundial',
        description: '',
        keywords: 'conversor zona horaria, tiempo mundial, conversión zona horaria, tiempo global, conversor UTC'
      },
      fr: {
        title: 'Convertisseur Fuseau Horaire - Convertisseur Fuseau Horaire Mondial',
        description: '',
        keywords: 'convertisseur fuseau horaire, heure mondiale, conversion fuseau horaire, heure globale, convertisseur UTC'
      },
      de: {
        title: 'Zeitzone-Konverter - Weltzeit-Konverter',
        description: '',
        keywords: 'zeitzone konverter, weltzeit, zeitzone konvertierung, globale zeit, UTC konverter'
      },
      pt: {
        title: 'Conversor de Fuso Horário - Conversor de Fuso Horário Mundial',
        description: '',
        keywords: 'conversor fuso horário, tempo mundial, conversão fuso horário, tempo global, conversor UTC'
      },
      ru: {
        title: 'Конвертер Часовых Поясов - Мировой Конвертер Часовых Поясов',
        description: '',
        keywords: 'конвертер часовых поясов, мировое время, конвертация часовых поясов, глобальное время, UTC конвертер'
      },
      ja: {
        title: 'タイムゾーン変換 - 世界時間帯変換ツール',
        description: '',
        keywords: 'タイムゾーン変換, 世界時間, 時間帯変換, グローバル時間, UTC変換'
      },
      ko: {
        title: '시간대 변환기 - 세계 시간대 변환기',
        description: '',
        keywords: '시간대 변환기, 세계 시간, 시간대 변환, 글로벌 시간, UTC 변환기'
      },
      zh: {
        title: '时区转换器 - 世界时区转换器',
        description: '',
        keywords: '时区转换器, 世界时间, 时区转换, 全球时间, UTC转换器'
      }
    },
    priority: 'high',
    category: 'Time Tools'
  },

  // Date Calculator
  {
    path: '/:lang/date-calculator',
    tdk: {
      en: {
        title: 'Date Calculator - Date Difference & Duration Calculator',
        description: '',
        keywords: 'date calculator, date difference, date arithmetic, duration calculator, days between dates'
      },
      es: {
        title: 'Calculadora de Fechas - Calculadora de Diferencia y Duración de Fechas',
        description: '',
        keywords: 'calculadora fechas, diferencia fechas, aritmética fechas, calculadora duración, días entre fechas'
      },
      fr: {
        title: 'Calculateur de Dates - Calculateur de Différence et Durée de Dates',
        description: '',
        keywords: 'calculateur dates, différence dates, arithmétique dates, calculateur durée, jours entre dates'
      },
      de: {
        title: 'Datum-Rechner - Datum-Differenz & Dauer-Rechner',
        description: '',
        keywords: 'datum rechner, datum differenz, datum arithmetik, dauer rechner, tage zwischen daten'
      },
      pt: {
        title: 'Calculadora de Datas - Calculadora de Diferença e Duração de Datas',
        description: '',
        keywords: 'calculadora datas, diferença datas, aritmética datas, calculadora duração, dias entre datas'
      },
      ru: {
        title: 'Калькулятор Дат - Калькулятор Разности и Продолжительности Дат',
        description: '',
        keywords: 'калькулятор дат, разность дат, арифметика дат, калькулятор продолжительности, дни между датами'
      },
      ja: {
        title: '日付計算機 - 日付差分・期間計算ツール',
        description: '',
        keywords: '日付計算機, 日付差分, 日付演算, 期間計算機, 日付間の日数'
      },
      ko: {
        title: '날짜 계산기 - 날짜 차이 및 기간 계산기',
        description: '',
        keywords: '날짜 계산기, 날짜 차이, 날짜 연산, 기간 계산기, 날짜 간 일수'
      },
      zh: {
        title: '日期计算器 - 日期差异和持续时间计算器',
        description: '',
        keywords: '日期计算器, 日期差异, 日期算术, 持续时间计算器, 日期之间的天数'
      }
    },
    priority: 'medium',
    category: 'Time Tools'
  },

  // URL Encoder/Decoder
  {
    path: '/:lang/url-encoder',
    tdk: {
      en: {
        title: 'URL Encoder/Decoder - Encode & Decode URLs Online',
        description: '',
        keywords: 'URL encoder, URL decoder, percent encoding, URL encoding, web development'
      },
      es: {
        title: 'Codificador/Decodificador URL - Codificar y Decodificar URLs Online',
        description: '',
        keywords: 'codificador URL, decodificador URL, codificación porcentual, codificación URL, desarrollo web'
      },
      fr: {
        title: 'Encodeur/Décodeur URL - Encoder et Décoder les URLs en Ligne',
        description: '',
        keywords: 'encodeur URL, décodeur URL, encodage pourcentage, encodage URL, développement web'
      },
      de: {
        title: 'URL-Encoder/Decoder - URLs Online Kodieren & Dekodieren',
        description: '',
        keywords: 'URL encoder, URL decoder, prozent kodierung, URL kodierung, webentwicklung'
      },
      pt: {
        title: 'Codificador/Decodificador URL - Codificar e Decodificar URLs Online',
        description: '',
        keywords: 'codificador URL, decodificador URL, codificação percentual, codificação URL, desenvolvimento web'
      },
      ru: {
        title: 'URL Кодировщик/Декодировщик - Кодирование и Декодирование URL Онлайн',
        description: '',
        keywords: 'URL кодировщик, URL декодировщик, процентное кодирование, URL кодирование, веб разработка'
      },
      ja: {
        title: 'URLエンコーダー/デコーダー - URLのエンコード・デコードオンライン',
        description: '',
        keywords: 'URLエンコーダー, URLデコーダー, パーセントエンコーディング, URLエンコーディング, Web開発'
      },
      ko: {
        title: 'URL 인코더/디코더 - URL 인코딩 및 디코딩 온라인',
        description: '',
        keywords: 'URL 인코더, URL 디코더, 퍼센트 인코딩, URL 인코딩, 웹 개발'
      },
      zh: {
        title: 'URL编码/解码器 - 在线编码和解码URL',
        description: '',
        keywords: 'URL编码器, URL解码器, 百分号编码, URL编码, web开发'
      }
    },
    priority: 'high',
    category: 'Network Tools'
  },

  // Base64 Encoder/Decoder
  {
    path: '/:lang/base64',
    tdk: {
      en: {
        title: 'Base64 Encoder/Decoder - Encode & Decode Base64 Online',
        description: '',
        keywords: 'Base64 encoder, Base64 decoder, Base64 conversion, encode decode, data encoding'
      },
      es: {
        title: 'Codificador/Decodificador Base64 - Codificar y Decodificar Base64 Online',
        description: '',
        keywords: 'codificador Base64, decodificador Base64, conversión Base64, codificar decodificar, codificación datos'
      },
      fr: {
        title: 'Encodeur/Décodeur Base64 - Encoder et Décoder Base64 en Ligne',
        description: '',
        keywords: 'encodeur Base64, décodeur Base64, conversion Base64, encoder décoder, encodage données'
      },
      de: {
        title: 'Base64-Encoder/Decoder - Base64 Online Kodieren & Dekodieren',
        description: '',
        keywords: 'Base64 encoder, Base64 decoder, Base64 konvertierung, kodieren dekodieren, daten kodierung'
      },
      pt: {
        title: 'Codificador/Decodificador Base64 - Codificar e Decodificar Base64 Online',
        description: '',
        keywords: 'codificador Base64, decodificador Base64, conversão Base64, codificar decodificar, codificação dados'
      },
      ru: {
        title: 'Base64 Кодировщик/Декодировщик - Кодирование и Декодирование Base64 Онлайн',
        description: '',
        keywords: 'Base64 кодировщик, Base64 декодировщик, Base64 конвертация, кодировать декодировать, кодирование данных'
      },
      ja: {
        title: 'Base64エンコーダー/デコーダー - Base64エンコード・デコードオンライン',
        description: '',
        keywords: 'Base64エンコーダー, Base64デコーダー, Base64変換, エンコード デコード, データエンコーディング'
      },
      ko: {
        title: 'Base64 인코더/디코더 - Base64 인코딩 및 디코딩 온라인',
        description: '',
        keywords: 'Base64 인코더, Base64 디코더, Base64 변환, 인코드 디코드, 데이터 인코딩'
      },
      zh: {
        title: 'Base64编码/解码器 - 在线编码和解码Base64',
        description: '',
        keywords: 'Base64编码器, Base64解码器, Base64转换, 编码解码, 数据编码'
      }
    },
    priority: 'high',
    category: 'Network Tools'
  },

  // IP Lookup
  {
    path: '/:lang/ip-lookup',
    tdk: {
      en: {
        title: 'IP Lookup - IP Address Information & Geolocation',
        description: '',
        keywords: 'IP lookup, IP address, geolocation, ISP lookup, network information'
      },
      es: {
        title: 'Búsqueda IP - Información de Dirección IP y Geolocalización',
        description: '',
        keywords: 'búsqueda IP, dirección IP, geolocalización, búsqueda ISP, información red'
      },
      fr: {
        title: 'Recherche IP - Informations Adresse IP et Géolocalisation',
        description: '',
        keywords: 'recherche IP, adresse IP, géolocalisation, recherche FAI, informations réseau'
      },
      de: {
        title: 'IP-Suche - IP-Adress-Informationen & Geolokalisierung',
        description: '',
        keywords: 'IP suche, IP adresse, geolokalisierung, ISP suche, netzwerk informationen'
      },
      pt: {
        title: 'Consulta IP - Informações de Endereço IP e Geolocalização',
        description: '',
        keywords: 'consulta IP, endereço IP, geolocalização, consulta ISP, informações rede'
      },
      ru: {
        title: 'IP Поиск - Информация об IP Адресе и Геолокация',
        description: '',
        keywords: 'IP поиск, IP адрес, геолокация, ISP поиск, сетевая информация'
      },
      ja: {
        title: 'IP検索 - IPアドレス情報・位置情報',
        description: '',
        keywords: 'IP検索, IPアドレス, 位置情報, ISP検索, ネットワーク情報'
      },
      ko: {
        title: 'IP 조회 - IP 주소 정보 및 위치 정보',
        description: '',
        keywords: 'IP 조회, IP 주소, 위치 정보, ISP 조회, 네트워크 정보'
      },
      zh: {
        title: 'IP查询 - IP地址信息和地理位置',
        description: '',
        keywords: 'IP查询, IP地址, 地理位置, ISP查询, 网络信息'
      }
    },
    priority: 'medium',
    category: 'Network Tools'
  },

  // JWT Decoder
  {
    path: '/:lang/jwt',
    tdk: {
      en: {
        title: 'JWT Decoder - JSON Web Token Decoder & Validator',
        description: '',
        keywords: 'JWT decoder, JSON Web Token, JWT validator, token decoder, authentication'
      },
      es: {
        title: 'Decodificador JWT - Decodificador y Validador de JSON Web Token',
        description: '',
        keywords: 'decodificador JWT, JSON Web Token, validador JWT, decodificador token, autenticación'
      },
      fr: {
        title: 'Décodeur JWT - Décodeur et Validateur JSON Web Token',
        description: '',
        keywords: 'décodeur JWT, JSON Web Token, validateur JWT, décodeur token, authentification'
      },
      de: {
        title: 'JWT-Decoder - JSON Web Token Decoder & Validator',
        description: '',
        keywords: 'JWT-Decoder, JSON Web Token, JWT-Validator, Token-Decoder, Authentifizierung'
      },
      pt: {
        title: 'Decodificador JWT - Decodificador e Validador de JSON Web Token',
        description: '',
        keywords: 'decodificador JWT, JSON Web Token, validador JWT, decodificador token, autenticação'
      },
      ru: {
        title: 'JWT Декодер - Декодер и Валидатор JSON Web Token',
        description: '',
        keywords: 'JWT декодер, JSON Web Token, JWT валидатор, декодер токена, аутентификация'
      },
      ja: {
        title: 'JWTデコーダー - JSON Web Tokenデコーダー＆バリデーター',
        description: '',
        keywords: 'JWTデコーダー, JSON Web Token, JWTバリデーター, トークンデコーダー, 認証'
      },
      ko: {
        title: 'JWT 디코더 - JSON 웹 토큰 디코더 및 유효성 검사기',
        description: '',
        keywords: 'JWT 디코더, JSON 웹 토큰, JWT 유효성 검사기, 토큰 디코더, 인증'
      },
      zh: {
        title: 'JWT解码器 - JSON Web Token解码器和验证器',
        description: '',
        keywords: 'JWT解码器, JSON Web Token, JWT验证器, 令牌解码器, 身份验证'
      }
    },
    priority: 'high',
    category: 'Network Tools'
  },

  // Markdown Editor
  {
    path: '/:lang/markdown',
    tdk: {
      en: {
        title: 'Markdown Editor - Live Preview Markdown Editor',
        description: '',
        keywords: 'Markdown editor, live preview, Markdown converter, documentation editor, text editor'
      },
      es: {
        title: 'Editor Markdown - Editor Markdown con Vista Previa en Vivo',
        description: '',
        keywords: 'editor Markdown, vista previa vivo, conversor Markdown, editor documentación, editor texto'
      },
      fr: {
        title: 'Éditeur Markdown - Éditeur Markdown avec Aperçu en Direct',
        description: '',
        keywords: 'éditeur Markdown, aperçu direct, convertisseur Markdown, éditeur documentation, éditeur texte'
      },
      de: {
        title: 'Markdown-Editor - Live-Vorschau Markdown-Editor',
        description: '',
        keywords: 'Markdown editor, live vorschau, Markdown konverter, dokumentations editor, text editor'
      },
      pt: {
        title: 'Editor Markdown - Editor Markdown com Visualização ao Vivo',
        description: '',
        keywords: 'editor Markdown, visualização vivo, conversor Markdown, editor documentação, editor texto'
      },
      ru: {
        title: 'Markdown Редактор - Редактор Markdown с Живым Предпросмотром',
        description: '',
        keywords: 'Markdown редактор, живой предпросмотр, Markdown конвертер, редактор документации, текстовый редактор'
      },
      ja: {
        title: 'Markdownエディター - ライブプレビューMarkdownエディター',
        description: '',
        keywords: 'Markdownエディター, ライブプレビュー, Markdown変換, ドキュメントエディター, テキストエディター'
      },
      ko: {
        title: 'Markdown 편집기 - 실시간 미리보기 Markdown 편집기',
        description: '',
        keywords: 'Markdown 편집기, 실시간 미리보기, Markdown 변환기, 문서 편집기, 텍스트 편집기'
      },
      zh: {
        title: 'Markdown编辑器 - 实时预览Markdown编辑器',
        description: '',
        keywords: 'Markdown编辑器, 实时预览, Markdown转换器, 文档编辑器, 文本编辑器'
      }
    },
    priority: 'high',
    category: 'Editor Tools'
  },

  // Mermaid Diagram Editor
  {
    path: '/:lang/mermaid',
    tdk: {
      en: {
        title: 'Mermaid Diagram Editor - Create Flowcharts & Diagrams',
        description: '',
        keywords: 'Mermaid editor, flowchart creator, diagram editor, sequence diagram, chart maker'
      },
      es: {
        title: 'Editor de Diagramas Mermaid - Crear Diagramas de Flujo y Diagramas',
        description: '',
        keywords: 'editor Mermaid, creador diagramas flujo, editor diagramas, diagrama secuencia, creador gráficos'
      },
      fr: {
        title: 'Éditeur de Diagrammes Mermaid - Créer des Organigrammes et Diagrammes',
        description: '',
        keywords: 'éditeur Mermaid, créateur organigrammes, éditeur diagrammes, diagramme séquence, créateur graphiques'
      },
      de: {
        title: 'Mermaid-Diagramm-Editor - Flussdiagramme & Diagramme Erstellen',
        description: '',
        keywords: 'Mermaid editor, flussdiagramm ersteller, diagramm editor, sequenz diagramm, diagramm ersteller'
      },
      pt: {
        title: 'Editor de Diagramas Mermaid - Criar Fluxogramas e Diagramas',
        description: '',
        keywords: 'editor Mermaid, criador fluxogramas, editor diagramas, diagrama sequência, criador gráficos'
      },
      ru: {
        title: 'Редактор Диаграмм Mermaid - Создание Блок-схем и Диаграмм',
        description: '',
        keywords: 'Mermaid редактор, создатель блок-схем, редактор диаграмм, диаграмма последовательности, создатель диаграмм'
      },
      ja: {
        title: 'Mermaid図表エディター - フローチャート・図表作成',
        description: '',
        keywords: 'Mermaidエディター, フローチャート作成, 図表エディター, シーケンス図, チャート作成'
      },
      ko: {
        title: 'Mermaid 다이어그램 편집기 - 플로우차트 및 다이어그램 생성',
        description: '',
        keywords: 'Mermaid 편집기, 플로우차트 생성기, 다이어그램 편집기, 시퀀스 다이어그램, 차트 생성기'
      },
      zh: {
        title: 'Mermaid图表编辑器 - 创建流程图和图表',
        description: '',
        keywords: 'Mermaid编辑器, 流程图创建器, 图表编辑器, 序列图, 图表制作器'
      }
    },
    priority: 'high',
    category: 'Editor Tools'
  },

  // Word & Character Counter
  {
    path: '/:lang/word-counter',
    tdk: {
      en: {
        title: 'Word & Character Counter - Text Statistics Tool',
        description: '',
        keywords: 'word counter, character counter, text statistics, word count, character count'
      },
      es: {
        title: 'Contador de Palabras y Caracteres - Herramienta de Estadísticas de Texto',
        description: '',
        keywords: 'contador palabras, contador caracteres, estadísticas texto, conteo palabras, conteo caracteres'
      },
      fr: {
        title: 'Compteur de Mots et Caractères - Outil de Statistiques de Texte',
        description: '',
        keywords: 'compteur mots, compteur caractères, statistiques texte, compte mots, compte caractères'
      },
      de: {
        title: 'Wort- & Zeichenzähler - Text-Statistik-Tool',
        description: '',
        keywords: 'wort zähler, zeichen zähler, text statistiken, wort anzahl, zeichen anzahl'
      },
      pt: {
        title: 'Contador de Palavras e Caracteres - Ferramenta de Estatísticas de Texto',
        description: '',
        keywords: 'contador palavras, contador caracteres, estatísticas texto, contagem palavras, contagem caracteres'
      },
      ru: {
        title: 'Счетчик Слов и Символов - Инструмент Статистики Текста',
        description: '',
        keywords: 'счетчик слов, счетчик символов, статистика текста, подсчет слов, подсчет символов'
      },
      zh: {
        title: '单词和字符计数器 - 文本统计工具',
        description: '',
        keywords: '单词计数器, 字符计数器, 文本统计, 词数, 字符数'
      },
      ja: {
        title: '文字・単語カウンター - テキスト統計ツール',
        description: '',
        keywords: '単語カウンター, 文字カウンター, テキスト統計, 単語数, 文字数'
      },
      ko: {
        title: '단어 및 문자 카운터 - 텍스트 통계 도구',
        description: '',
        keywords: '단어 카운터, 문자 카운터, 텍스트 통계, 단어 수, 문자 수'
      }
    },
    priority: 'medium',
    category: 'Text Tools'
  },

  // Text Reverser
  {
    path: '/:lang/text-reverser',
    tdk: {
      en: {
        title: 'Text Reverser - Reverse Text & String Tool',
        description: '',
        keywords: 'text reverser, reverse text, string reverser, text manipulation, reverse words'
      },
      es: {
        title: 'Inversor de Texto - Herramienta de Inversión de Texto y Cadenas',
        description: '',
        keywords: 'inversor texto, invertir texto, inversor cadenas, manipulación texto, invertir palabras'
      },
      fr: {
        title: 'Inverseur de Texte - Outil d\'Inversion de Texte et Chaînes',
        description: '',
        keywords: 'inverseur texte, inverser texte, inverseur chaînes, manipulation texte, inverser mots'
      },
      de: {
        title: 'Text-Umkehrer - Text & String Umkehr-Tool',
        description: '',
        keywords: 'text umkehrer, text umkehren, string umkehrer, text manipulation, wörter umkehren'
      },
      pt: {
        title: 'Inversor de Texto - Ferramenta de Inversão de Texto e Strings',
        description: '',
        keywords: 'inversor texto, inverter texto, inversor strings, manipulação texto, inverter palavras'
      },
      ru: {
        title: 'Обращатель Текста - Инструмент Обращения Текста и Строк',
        description: '',
        keywords: 'обращатель текста, обратить текст, обращатель строк, манипуляция текстом, обратить слова'
      },
      ja: {
        title: 'テキスト反転 - テキスト・文字列反転ツール',
        description: '',
        keywords: 'テキスト反転, テキスト逆順, 文字列反転, テキスト操作, 単語反転'
      },
      ko: {
        title: '텍스트 뒤집기 - 텍스트 및 문자열 뒤집기 도구',
        description: '',
        keywords: '텍스트 뒤집기, 텍스트 역순, 문자열 뒤집기, 텍스트 조작, 단어 뒤집기'
      },
      zh: {
        title: '文本反向器 - 反转文本和字符串的工具',
        description: '',
        keywords: '文本反向器, 反向文本, 字符串反向器, 文本操作, 反向单词'
      }
    },
    priority: 'low',
    category: 'Text Tools'
  },

  // Whitespace Remover
  {
    path: '/:lang/whitespace-remover',
    tdk: {
      en: {
        title: 'Whitespace Remover - Remove Extra Spaces & Line Breaks',
        description: '',
        keywords: 'whitespace remover, remove spaces, text cleaner, format text, remove line breaks'
      },
      es: {
        title: 'Eliminador de Espacios en Blanco - Eliminar Espacios Extra y Saltos de Línea',
        description: '',
        keywords: 'eliminador espacios blanco, eliminar espacios, limpiador texto, formatear texto, eliminar saltos línea'
      },
      fr: {
        title: 'Suppresseur d\'Espaces - Supprimer les Espaces Supplémentaires et Sauts de Ligne',
        description: '',
        keywords: 'suppresseur espaces, supprimer espaces, nettoyeur texte, formater texte, supprimer sauts ligne'
      },
      de: {
        title: 'Leerraum-Entferner - Extra Leerzeichen & Zeilenumbrüche Entfernen',
        description: '',
        keywords: 'leerraum entferner, leerzeichen entfernen, text reiniger, text formatieren, zeilenumbrüche entfernen'
      },
      pt: {
        title: 'Removedor de Espaços em Branco - Remover Espaços Extra e Quebras de Linha',
        description: '',
        keywords: 'removedor espaços branco, remover espaços, limpador texto, formatar texto, remover quebras linha'
      },
      ru: {
        title: 'Удалитель Пробелов - Удаление Лишних Пробелов и Переносов Строк',
        description: '',
        keywords: 'удалитель пробелов, удалить пробелы, очиститель текста, форматировать текст, удалить переносы строк'
      },
      ja: {
        title: '空白文字削除 - 余分なスペース・改行削除ツール',
        description: '',
        keywords: '空白文字削除, スペース削除, テキストクリーナー, テキスト整形, 改行削除'
      },
      ko: {
        title: '공백 제거기 - 여분의 공백 및 줄바꿈 제거',
        description: '',
        keywords: '공백 제거기, 스페이스 제거, 텍스트 정리기, 텍스트 형식, 줄바꿈 제거'
      },
      zh: {
        title: '空格移除器 - 删除多余的空格和换行符',
        description: '',
        keywords: '空格移除器, 删除空格, 文本清理器, 格式化文本, 删除换行符'
      }
    },
    priority: 'low',
    category: 'Text Tools'
  },

  // Lorem Ipsum Generator
  {
    path: '/:lang/lorem-ipsum',
    tdk: {
      en: {
        title: 'Lorem Ipsum Generator - Placeholder Text Generator',
        description: '',
        keywords: 'Lorem Ipsum generator, placeholder text, dummy text, text generator, design text'
      },
      es: {
        title: 'Generador Lorem Ipsum - Generador de Texto de Relleno',
        description: '',
        keywords: 'generador Lorem Ipsum, texto relleno, texto ficticio, generador texto, texto diseño'
      },
      fr: {
        title: 'Générateur Lorem Ipsum - Générateur de Texte de Remplissage',
        description: '',
        keywords: 'générateur Lorem Ipsum, texte remplissage, texte factice, générateur texte, texte design'
      },
      de: {
        title: 'Lorem Ipsum Generator - Platzhalter-Text-Generator',
        description: '',
        keywords: 'Lorem Ipsum generator, platzhalter text, dummy text, text generator, design text'
      },
      pt: {
        title: 'Gerador Lorem Ipsum - Gerador de Texto de Preenchimento',
        description: '',
        keywords: 'gerador Lorem Ipsum, texto preenchimento, texto fictício, gerador texto, texto design'
      },
      ru: {
        title: 'Генератор Lorem Ipsum - Генератор Текста-Заполнителя',
        description: '',
        keywords: 'генератор Lorem Ipsum, текст заполнитель, фиктивный текст, генератор текста, дизайн текст'
      },
      ja: {
        title: 'Lorem Ipsum生成器 - プレースホルダーテキスト生成',
        description: '',
        keywords: 'Lorem Ipsum生成器, プレースホルダーテキスト, ダミーテキスト, テキスト生成器, デザインテキスト'
      },
      ko: {
        title: 'Lorem Ipsum 생성기 - 플레이스홀더 텍스트 생성기',
        description: '',
        keywords: 'Lorem Ipsum 생성기, 플레이스홀더 텍스트, 더미 텍스트, 텍스트 생성기, 디자인 텍스트'
      },
      zh: {
        title: 'Lorem Ipsum 生成器 - 占位符文本生成器',
        description: '',
        keywords: 'Lorem Ipsum 生成器, 占位符文本, 虚拟文本, 文本生成器, 设计文本'
      }
    },
    priority: 'medium',
    category: 'Text Tools'
  },

  // Text Comparison Tool
{
    path: '/:lang/text-diff',
    tdk: {
      en: {
        title: 'Text Comparison Tool - Compare & Diff Text Online',
        description: '',
        keywords: 'text comparison, text diff, compare text, text differences, diff tool'
      },
      es: {
        title: 'Herramienta de Comparación de Texto - Comparar y Diferenciar Texto Online',
        description: '',
        keywords: 'comparación texto, diff texto, comparar texto, diferencias texto, herramienta diff'
      },
      fr: {
        title: 'Outil de Comparaison de Texte - Comparer et Différencier le Texte en Ligne',
        description: '',
        keywords: 'comparaison texte, diff texte, comparer texte, différences texte, outil diff'
      },
      de: {
        title: 'Text-Vergleichs-Tool - Text Online Vergleichen & Unterscheiden',
        description: '',
        keywords: 'text vergleich, text diff, text vergleichen, text unterschiede, diff tool'
      },
      pt: {
        title: 'Ferramenta de Comparação de Texto - Comparar e Diferenciar Texto Online',
        description: '',
        keywords: 'comparação texto, diff texto, comparar texto, diferenças texto, ferramenta diff'
      },
      ru: {
        title: 'Инструмент Сравнения Текста - Сравнение и Различия Текста Онлайн',
        description: '',
        keywords: 'сравнение текста, diff текста, сравнить текст, различия текста, инструмент diff'
      },
      ja: {
        title: 'テキスト比較ツール - テキスト比較・差分表示オンライン',
        description: '',
        keywords: 'テキスト比較, テキスト差分, テキスト比較, テキスト違い, 差分ツール'
      },
      ko: {
        title: '텍스트 비교 도구 - 텍스트 비교 및 차이점 온라인',
        description: '',
        keywords: '텍스트 비교, 텍스트 차이, 텍스트 비교, 텍스트 차이점, 차이 도구'
      },
      zh: {
        title: '文本比较工具 - 在线比较和区分文本',
        description: '',
        keywords: '文本比较, 文本差异, 比较文本, 文本不同, 差异工具'
      }
    },
    priority: 'medium',
    category: 'Text Tools'
  },

  // Case Converter
  {
    path: '/:lang/case-converter',
    tdk: {
      en: {
        title: 'Case Converter - Convert Text Case Online',
        description: '',
        keywords: 'case converter, text case, uppercase, lowercase, title case, camelCase, snake_case'
      },
      es: {
        title: 'Conversor de Mayúsculas y Minúsculas - Convertir Caso de Texto Online',
        description: '',
        keywords: 'conversor caso, caso texto, mayúsculas, minúsculas, caso título, camelCase, snake_case'
      },
      fr: {
        title: 'Convertisseur de Casse - Convertir la Casse du Texte en Ligne',
        description: '',
        keywords: 'convertisseur casse, casse texte, majuscules, minuscules, casse titre, camelCase, snake_case'
      },
      de: {
        title: 'Groß-/Kleinschreibung-Konverter - Text-Groß-/Kleinschreibung Online Konvertieren',
        description: '',
        keywords: 'groß kleinschreibung konverter, text groß kleinschreibung, großbuchstaben, kleinbuchstaben, titelfall, camelCase, snake_case'
      },
      pt: {
        title: 'Conversor de Maiúsculas e Minúsculas - Converter Caso de Texto Online',
        description: '',
        keywords: 'conversor caso, caso texto, maiúsculas, minúsculas, caso título, camelCase, snake_case'
      },
      ru: {
        title: 'Конвертер Регистра - Конвертация Регистра Текста Онлайн',
        description: '',
        keywords: 'конвертер регистра, регистр текста, верхний регистр, нижний регистр, заглавный регистр, camelCase, snake_case'
      },
      ja: {
        title: '大文字小文字変換 - テキストケース変換オンライン',
        description: '',
        keywords: '大文字小文字変換, テキストケース, 大文字, 小文字, タイトルケース, camelCase, snake_case'
      },
      ko: {
        title: '대소문자 변환기 - 텍스트 케이스 온라인 변환',
        description: '',
        keywords: '대소문자 변환기, 텍스트 케이스, 대문자, 소문자, 제목 케이스, camelCase, snake_case'
      },
      zh: {
        title: '大小写转换器 - 在线转换文本大小写',
        description: '',
        keywords: '大小写转换器, 文本大小写, 大写, 小写, 标题大小写, 驼峰命名,蛇形命名'
      }
    },
    priority: 'high',
    category: 'Text Tools'
  }
];

// 헬퍼 함수들

// 특정 언어의 TDK 정보 가져오기
export const getTDKForLanguage = (page: SEOPageConfig, lang: SupportedLanguage) => {
  return page.tdk[lang] || page.tdk.en; // 기본값으로 영어 사용
};

// 레거시 형식으로 변환 (기존 코드와의 호환성을 위해)
export const convertToLegacyFormat = (pages: SEOPageConfig[], lang: SupportedLanguage = 'en'): LegacySEOPageConfig[] => {
  return pages.map(page => ({
    path: page.path,
    title: getTDKForLanguage(page, lang).title,
    description: getTDKForLanguage(page, lang).description,
    keywords: getTDKForLanguage(page, lang).keywords,
    priority: page.priority,
    category: page.category
  }));
};

// 기존 함수들 (레거시 호환성)
export const getPagesByCategory = (category: string, lang: SupportedLanguage = 'en'): LegacySEOPageConfig[] => {
  const filteredPages = SEO_PAGES.filter(page => page.category === category);
  return convertToLegacyFormat(filteredPages, lang);
};

export const getPagesByPriority = (priority: 'high' | 'medium' | 'low', lang: SupportedLanguage = 'en'): LegacySEOPageConfig[] => {
  const filteredPages = SEO_PAGES.filter(page => page.priority === priority);
  return convertToLegacyFormat(filteredPages, lang);
};

export const getAllCategories = (): string[] => {
  return [...new Set(SEO_PAGES.map(page => page.category))];
};

export const getHighPriorityPages = (lang: SupportedLanguage = 'en'): LegacySEOPageConfig[] => {
  return getPagesByPriority('high', lang);
};

// 새로운 다국어 함수들
export const getMultiLanguagePagesByCategory = (category: string): SEOPageConfig[] => {
  return SEO_PAGES.filter(page => page.category === category);
};

export const getMultiLanguagePagesByPriority = (priority: 'high' | 'medium' | 'low'): SEOPageConfig[] => {
  return SEO_PAGES.filter(page => page.priority === priority);
};

export const getMultiLanguageHighPriorityPages = (): SEOPageConfig[] => {
  return getMultiLanguagePagesByPriority('high');
};

// 특정 경로의 페이지 찾기
export const findPageByPath = (path: string): SEOPageConfig | undefined => {
  return SEO_PAGES.find(page => page.path === path);
};

// 면포 탐색 생성 (다국어 지원)
export const generateBreadcrumbs = (currentPath: string, lang: SupportedLanguage = 'en') => {
  const pathSegments = currentPath.split('/').filter(segment => segment && segment !== lang);
  const breadcrumbs = [{ title: 'Home', path: `/${lang}` }];
  
  let currentFullPath = `/${lang}`;
  
  pathSegments.forEach((segment, index) => {
    currentFullPath += `/${segment}`;
    const page = SEO_PAGES.find(p => p.path.replace('/:lang', `/${lang}`) === currentFullPath);
    
    if (page) {
      const tdk = getTDKForLanguage(page, lang);
      breadcrumbs.push({
        title: tdk.title,
        path: currentFullPath
      });
    } else {
      // 정확한 일치를 찾을 수 없으면 일반 제목 생성
      const title = segment.split('-').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
      ).join(' ');
      
      breadcrumbs.push({
        title,
        path: currentFullPath
      });
    }
  });
  
  return breadcrumbs;
};

// 언어별 사이트맵 생성
export const generateSitemapForLanguage = (lang: SupportedLanguage) => {
  return SEO_PAGES.map(page => ({
    path: page.path.replace('/:lang', `/${lang}`),
    tdk: getTDKForLanguage(page, lang),
    priority: page.priority,
    category: page.category
  }));
};

// 모든 언어의 사이트맵 생성
export const generateAllLanguageSitemaps = () => {
  const sitemaps: Record<SupportedLanguage, any[]> = {} as any;
  
  SUPPORTED_LANGUAGES.forEach(lang => {
    sitemaps[lang] = generateSitemapForLanguage(lang);
  });
  
  return sitemaps;
};
