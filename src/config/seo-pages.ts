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

  // JSON to Dart Converter
  {
    path: '/:lang/json/to-dart',
    tdk: {
      en: {
        title: 'json to dart ,convert json to dart',
        description: 'JSON to Dart Converter: Instantly generate type-safe Dart classes from JSON. Convert JSON to Dart code with null safety, nested objects support, and json_serializable compatibility for Flutter apps. Free online tool for developers.',
        keywords: 'JSON to Dart, JSON converter, Dart class generator, JSON to code, Dart model generator, JSON parser'
      },
      es: {
        title: 'Convertir JSON a Dart, Objective-C, Go, Java, C++, Dart y más • Herramientas de Desarrollador',
        description: 'toJsons puede proporcionar herramientas de codificación en línea para varios lenguajes como Java, Dart, JavaScript, Flow, Python, TypeScript, Go, Rust, Objective-C, Kotlin, C++ y otros, incluyendo JSON, Tiempo, Cripto, Texto, Red, etc.',
        keywords: 'JSON a Dart, convertidor JSON, generador clases Dart, JSON a código, generador modelos Dart'
      },
      fr: {
        title: 'Convertir JSON en Dart, Objective-C, Go, Java, C++, Dart et plus • Outils Développeur',
        description: 'toJsons peut fournir des outils de codage en ligne pour divers langages tels que Java, Dart, JavaScript, Flow, Python, TypeScript, Go, Rust, Objective-C, Kotlin, C++ et autres, y compris JSON, Temps, Crypto, Texte, Réseau, etc.',
        keywords: 'JSON vers Dart, convertisseur JSON, générateur classes Dart, JSON vers code, générateur modèles Dart'
      },
      de: {
        title: 'JSON zu Dart, Objective-C, Go, Java, C++, Dart und mehr konvertieren • Entwicklertools',
        description: 'toJsons kann Online-Codierungstools für verschiedene Sprachen wie Java, Dart, JavaScript, Flow, Python, TypeScript, Go, Rust, Objective-C, Kotlin, C++ und andere bereitstellen, einschließlich JSON, Zeit, Krypto, Text, Netzwerk usw.',
        keywords: 'JSON zu Dart, JSON Konverter, Dart Klassen Generator, JSON zu Code, Dart Modell Generator'
      },
      pt: {
        title: 'Converter JSON para Dart, Objective-C, Go, Java, C++, Dart e mais • Ferramentas Desenvolvedor',
        description: 'toJsons pode fornecer ferramentas de codificação online para várias linguagens como Java, Dart, JavaScript, Flow, Python, TypeScript, Go, Rust, Objective-C, Kotlin, C++ e outras, incluindo JSON, Tempo, Cripto, Texto, Rede, etc.',
        keywords: 'JSON para Dart, conversor JSON, gerador classes Dart, JSON para código, gerador modelos Dart'
      },
      ru: {
        title: 'Конвертировать JSON в Dart, Objective-C, Go, Java, C++, Dart и другие • Инструменты Разработчика',
        description: 'toJsons может предоставить онлайн-инструменты кодирования для различных языков, таких как Java, Dart, JavaScript, Flow, Python, TypeScript, Go, Rust, Objective-C, Kotlin, C++ и других, включая JSON, Время, Криптография, Текст, Сеть и т.д.',
        keywords: 'JSON в Dart, конвертер JSON, генератор классов Dart, JSON в код, генератор моделей Dart'
      },
      ja: {
        title: 'JSONをDart、Objective-C、Go、Java、C++、Dartなどに変換 • 開発者ツール',
        description: 'toJsonsは、Java、Dart、JavaScript、Flow、Python、TypeScript、Go、Rust、Objective-C、Kotlin、C++などの様々な言語のオンラインエンコーディングツールを提供でき、JSON、時間、暗号、テキスト、ネットワークなどを含みます。',
        keywords: 'JSON to Dart, JSONコンバーター, Dartクラスジェネレーター, JSONからコード, Dartモデルジェネレーター'
      },
      ko: {
        title: 'JSON을 Dart, Objective-C, Go, Java, C++, Dart 등으로 변환 • 개발자 도구',
        description: 'toJsons는 Java, Dart, JavaScript, Flow, Python, TypeScript, Go, Rust, Objective-C, Kotlin, C++ 등 다양한 언어의 온라인 인코딩 도구를 제공할 수 있으며, JSON, 시간, 암호화, 텍스트, 네트워크 등을 포함합니다.',
        keywords: 'JSON to Dart, JSON 변환기, Dart 클래스 생성기, JSON을 코드로, Dart 모델 생성기'
      },
      zh: {
        title: '将JSON转换为Dart、Objective-C、Go、Java、C++、Dart等 • 开发者工具',
        description: 'toJsons可以提供各种语言的在线编码工具，如Java、Dart、JavaScript、Flow、Python、TypeScript、Go、Rust、Objective-C、Kotlin、C++等，包括JSON、时间、加密、文本、网络等。',
        keywords: 'JSON转Dart, JSON转换器, Dart类生成器, JSON转代码, Dart模型生成器'
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
    path: '/:lang/crypto/encryption',
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
  }
];

// 辅助函数

// 获取特定语言的TDK信息
export const getTDKForLanguage = (page: SEOPageConfig, lang: SupportedLanguage) => {
  return page.tdk[lang] || page.tdk.en; // 默认使用英语
};

// 转换为旧版格式（为了与现有代码兼容）
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

// 现有函数（旧版兼容性）
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

// 新的多语言函数
export const getMultiLanguagePagesByCategory = (category: string): SEOPageConfig[] => {
  return SEO_PAGES.filter(page => page.category === category);
};

export const getMultiLanguagePagesByPriority = (priority: 'high' | 'medium' | 'low'): SEOPageConfig[] => {
  return SEO_PAGES.filter(page => page.priority === priority);
};

export const getMultiLanguageHighPriorityPages = (): SEOPageConfig[] => {
  return getMultiLanguagePagesByPriority('high');
};

// 查找特定路径的页面
export const findPageByPath = (path: string): SEOPageConfig | undefined => {
  return SEO_PAGES.find(page => page.path === path);
};

// 生成面包屑导航（多语言支持）
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
      // 如果找不到精确匹配，则生成通用标题
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

// 生成特定语言的站点地图
export const generateSitemapForLanguage = (lang: SupportedLanguage) => {
  return SEO_PAGES.map(page => ({
    path: page.path.replace('/:lang', `/${lang}`),
    tdk: getTDKForLanguage(page, lang),
    priority: page.priority,
    category: page.category
  }));
};

// 生成所有语言的站点地图
export const generateAllLanguageSitemaps = () => {
  const sitemaps: Record<SupportedLanguage, any[]> = {} as any;

  SUPPORTED_LANGUAGES.forEach(lang => {
    sitemaps[lang] = generateSitemapForLanguage(lang);
  });

  return sitemaps;
};
