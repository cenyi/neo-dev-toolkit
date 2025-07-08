

export const en = {
  translation: {
    nav: { 
      home: 'Home', 
      json: 'JSON', 
      network: 'Network', 
      text: 'Text', 
      time: 'Time', 
      encryption: 'Encryption', 
      markdown: 'Markdown', 
      mermaid: 'Mermaid',
      regex: 'RegEx',
      editor: 'Editor'
    },
    navTitles: {
      home: 'Go to Home - Free Developer Tools Hub',
      json: 'JSON Tools - Format, validate and process JSON data',
      network: 'Network Tools - URL encoding, IP lookup and utilities',
      text: 'Text Tools - Process and convert text formats',
      time: 'Time Tools - Timestamp and timezone converters',
      encryption: 'Encryption Tools - Hash generation and crypto utilities',
      regex: 'Regular Expression Tool - Test and validate regex patterns',
      editor: 'Code Editors - Markdown and Mermaid diagram editors'
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
      error: 'Error', 
      success: 'Success', 
      info: 'Info', 
      notFound: 'Not Found', 
      compare: 'Compare',
      test: 'Test',
      match: 'Match',
      replace: 'Replace',
      flags: 'Flags',
      pattern: 'Pattern',
      input: 'Input',
      output: 'Output',
      result: 'Result',
      graph: 'Structure Graph',
      zoomLevel: 'Zoom Level'
    },
    home: { 
      title: 'Developer Tools Hub', 
      subtitle: 'Professional development tools built with Lovable AI technology', 
      description: 'A comprehensive collection of essential developer tools including JSON formatting, text processing, encryption, and more. Built with Lovable AI for optimal performance.',
      headerTitle: 'Free Online Developer Tools Hub - Built with Lovable',
      toolsCollectionTitle: 'Professional Developer Tools Collection',
      whyChooseTitle: 'Why Choose DevTools Hub for Your Development Needs?',
      feature1Title: '100% Free & No Registration',
      feature1Description: 'All tools are completely free to use with no account required',
      feature2Title: 'Privacy Focused Development',
      feature2Description: 'Your data stays in your browser - nothing is sent to our servers',
      feature3Title: 'Modern Responsive Interface',
      feature3Description: 'Clean, responsive design powered by Lovable AI that works perfectly on all devices'
    },
    tools: { 
      json: {
        title: 'JSON Tools',
        description: 'Comprehensive JSON tools for formatting, validation, schema checking, and data manipulation.',
        formatter: {
          title: 'JSON Formatter & Validator',
          description: 'Format, beautify, and validate your JSON data.'
        },
        schemaValidator: {
          title: 'JSON Schema Validator',
          description: 'Validate your JSON objects against a JSON Schema.'
        },
        codegen: {
          title: 'Generate Code Types',
          description: 'Generate code types in various languages from a JSON object.'
        },
        history: {
          title: 'History'
        },
        generateGraph: 'Generate Graph',
        extractValue: 'Extract Value',
        fieldPath: 'Field Path',
        extractPlaceholder: 'Enter JSONPath (e.g., $.users[0].name)',
        graphTitle: 'JSON Structure Graph',
        input: 'Input',
        output: 'Output',
        outputPlaceholder: 'Formatted JSON will appear here',
        validJson: 'Valid JSON',
        invalidJson: 'Invalid JSON',
        diff: {
          title: 'JSON Diff Tool',
          description: 'Compare two JSON objects and highlight the differences.'
        },
        mock: {
          title: 'Mock Data Generator',
          description: 'Generate mock JSON data for testing and development.'
        }
      },
      regex: {
        title: 'Regular Expression Tool',
        description: 'Test, match, and replace with regular expressions',
        pattern: 'Regular Expression Pattern',
        patternPlaceholder: 'Enter regex pattern...',
        testString: 'Test String',
        testStringPlaceholder: 'Enter text to test...',
        replacement: 'Replacement Text',
        replacementPlaceholder: 'Enter replacement text...',
        flags: 'Flags',
        global: 'Global match (g)',
        ignoreCase: 'Ignore case (i)',
        multiline: 'Multiline (m)',
        dotAll: 'Dot matches newline (s)',
        unicode: 'Unicode (u)',
        sticky: 'Sticky (y)',
        matches: 'Matches',
        noMatches: 'No matches found',
        replacedText: 'Replaced Text',
        invalidRegex: 'Invalid regular expression'
      },
      jwtDecoder: {
        title: 'JWT Decoder',
        description: 'Decode and verify JWT tokens',
        encodedToken: 'Encoded Token',
        header: 'Header',
        payload: 'Payload',
        placeholder: 'Paste your JWT here',
        headerPlaceholder: 'Decoded header will appear here',
        payloadPlaceholder: 'Decoded payload will appear here'
      },
      jsonDiff: {
        title: 'JSON Diff',
        description: 'Compare differences between two JSON objects',
        originalJson: 'Original JSON',
        newJson: 'New JSON',
        originalPlaceholder: 'Paste original JSON here',
        newPlaceholder: 'Paste new JSON here',
        diffResult: 'Diff Result'
      },
      network: {
        title: 'Network & Encoding Tools',
        description: 'Free network tools: URL encoder/decoder, Base64 converter, IP lookup & JWT decoder. Secure, client-side processing, no data storage required.',
        subtitle: 'Essential network and encoding utilities for web developers. Handle URL encoding, Base64 conversion, IP lookups, and JWT decoding with our secure, privacy-focused tools.',
        utilityTools: 'Network Utility Tools',
        secureTitle: 'Secure Network Utilities',
        clientSideProcessing: {
          title: 'Client-Side Processing',
          description: 'All encoding and decoding happens in your browser for maximum security.'
        },
        noDataStorage: {
          title: 'No Data Storage',
          description: 'We don\'t store or log any of your input data or results.'
        },
        instantResults: {
          title: 'Instant Results',
          description: 'Fast processing with real-time results as you type.'
        },
        urlEncoder: {
          title: 'URL Encoder / Decoder',
          description: 'Encode URLs for safe transmission or decode percent-encoded URLs.'
        },
        base64Encoder: {
          title: 'Base64 Encoder / Decoder',
          description: 'Encode text to Base64 or decode Base64 strings back to text.'
        },
        ipLookup: {
          title: 'IP Address Lookup',
          description: 'Get geolocation, ISP information, and network details for any IP address.'
        },
        jwtDecoder: {
          title: 'JWT Token Decoder',
          description: 'Decode JSON Web Tokens and view header, payload, and signature information.'
        }
      }, 
      text: {
        title: 'Text Processing Tools',
        description: 'Essential text tools: case converter, word counter, text reverser, whitespace remover & diff checker. Free, fast, client-side processing.',
        subtitle: 'Powerful text manipulation and analysis tools for writers, developers, and content creators. Transform, analyze, and compare text with our comprehensive suite.',
        utilityTools: 'Text Processing Utilities',
        whyUse: {
          title: 'Why Use Our Text Tools?',
          realTime: {
            title: 'Real-Time Processing',
            description: 'See results instantly as you type with real-time text processing.'
          },
          privacy: {
            title: 'Privacy Protected',
            description: 'All text processing happens locally - your content never leaves your browser.'
          },
          multiPurpose: {
            title: 'Multi-Purpose',
            description: 'From simple case conversion to complex text analysis and comparison.'
          }
        },
        caseConverter: {
          title: 'Case Converter',
          description: 'Convert text between uppercase, lowercase, title case, and sentence case.',
          placeholder: 'Enter text to convert case...',
          upperCase: 'UPPERCASE',
          lowerCase: 'lowercase',
          titleCase: 'Title Case',
          sentenceCase: 'Sentence case',
          result: 'Converted Text'
        },
        wordCounter: {
          title: 'Word & Character Counter',
          description: 'Count words, characters, sentences, and paragraphs in your text.',
          placeholder: 'Enter your text here to count words and characters...',
          words: 'Words',
          characters: 'Characters',
          charactersNoSpaces: 'Characters (no spaces)',
          sentences: 'Sentences',
          paragraphs: 'Paragraphs'
        },
        textReverser: {
          title: 'Text Reverser',
          description: 'Reverse the order of characters in your text instantly.',
          placeholder: 'Enter text to reverse...',
          reversedText: 'Reversed Text'
        },
        whitespaceRemover: {
          title: 'Whitespace Remover',
          description: 'Remove extra spaces, trim whitespace, and clean up text formatting.',
          placeholder: 'Enter text to clean up whitespace...',
          result: 'Cleaned Text',
          removeAll: 'Remove All Spaces',
          removeTrim: 'Trim Whitespace',
          removeExtra: 'Remove Extra Spaces',
          removeLines: 'Remove Empty Lines'
        },
        loremIpsumGenerator: {
          title: 'Lorem Ipsum Generator',
          description: 'Generate placeholder text for design and development projects.',
          count: 'Count',
          type: 'Type',
          paragraphs: 'Paragraphs',
          sentences: 'Sentences',
          words: 'Words',
          generate: 'Generate',
          copy: 'Copy',
          copied: 'Copied to clipboard'
        },
        textDiff: {
          title: 'Text Comparison Tool',
          description: 'Compare two texts and highlight differences with visual diff display.',
          compareText: 'Compare Text',
          clearAll: 'Clear All',
          originalText: 'Original Text',
          newText: 'New Text'
        }
      },
      timestampConverter: {
        title: 'Timestamp Converter',
        description: 'Convert between Unix timestamps and human-readable dates',
        timestamp: 'Unix Timestamp',
        timestampPlaceholder: 'Enter Unix timestamp (seconds)',
        dateTime: 'Date & Time (UTC)',
        current: 'Current Time'
      },
      timezoneConverter: {
        title: 'Timezone Converter',
        description: 'Convert date and time between different timezones',
        sourceDateTime: 'Source Date & Time',
        sourceTimezone: 'From Timezone',
        targetTimezone: 'To Timezone',
        convertedDateTime: 'Converted Date & Time'
      },
      time: {
        description: 'Essential date and time utilities for timestamp conversion, timezone handling, and date calculations.',
        meta: {
          title: 'Date & Time Tools - Timestamp, Timezone, and Date Calculators',
          description: 'Free time tools: timestamp converter, timezone calculator & date arithmetic. Accurate, DST-aware, developer-friendly utilities.'
        },
        title: 'Date & Time Tools',
        subtitle: 'Essential date and time utilities for developers and professionals. Handle timestamp conversions, timezone calculations, and date arithmetic with precision.',
        toolsTitle: 'Time Management Tools',
        timestamp: {
          title: 'Timestamp Converter',
          description: 'Convert between Unix timestamps and human-readable dates and times.'
        },
        timezone: {
          title: 'Timezone Converter',
          description: 'Convert date and time between different timezones worldwide with DST support.'
        },
        dateCalculator: {
          title: 'Date Calculator',
          description: 'Add or subtract days, months, and years from dates. Calculate date differences.',
          startDate: 'Start Date',
          add: 'Add',
          subtract: 'Subtract',
          years: 'Years',
          months: 'Months',
          days: 'Days',
          resultDate: 'Result Date'
        },
        calculations: {
          title: 'Accurate Time Calculations',
          precise: {
            title: 'Precise Calculations',
            description: 'Handle complex timezone conversions and date calculations with accuracy.'
          },
          global: {
            title: 'Global Support',
            description: 'Support for all world timezones with automatic daylight saving time adjustments.'
          },
          developerFriendly: {
            title: 'Developer Friendly',
            description: 'Perfect for API development, log analysis, and timestamp debugging.'
          }
        }
      },
      editor: {
        meta: {
          title: 'Code & Document Editors',
          description: 'Free online editors: Markdown with live preview & Mermaid diagram tool. Write, preview, and export professional content easily.'
        },
        title: 'Code & Document Editors',
        subtitle: 'Professional online editors for Markdown documentation and Mermaid diagrams. Create, edit, and preview your content with real-time rendering.',
        toolsTitle: 'Editor Tools',
        experience: {
          title: 'Professional Editing Experience',
          livePreview: {
            title: 'Live Preview',
            description: 'See your Markdown and Mermaid diagrams rendered in real-time as you type.'
          },
          syntaxHighlighting: {
            title: 'Syntax Highlighting',
            description: 'Professional code editor with syntax highlighting and auto-completion.'
          },
          exportReady: {
            title: 'Export Ready',
            description: 'Copy or download your rendered content for use in documentation and presentations.'
          }
        },
        markdown: {
          title: 'Markdown Editor',
          description: 'Write and preview Markdown with syntax highlighting and live preview.'
        },
        mermaid: {
          title: 'Mermaid Diagram Editor',
          description: 'Create flowcharts, sequence diagrams, and other diagrams with Mermaid syntax.'
        }
      },
        markdown: {
          title: 'Markdown Editor',
          description: 'Markdown editor with syntax highlighting and live preview.',
          placeholder: 'Enter your Markdown content here...'
        },
        crypto: { 
        title: 'Crypto Tools',
        description: 'Secure your data with our crypto tools: hash generators (MD5, SHA-1, SHA-256, SHA-512), HMAC, and AES encryption.',
        jwtDecoder: {
          title: 'JWT Decoder',
          description: 'Decode and inspect JSON Web Tokens to view their payload and header data.',
          placeholder: 'Paste your JWT here',
          invalidToken: 'Invalid JWT token'
        },
        encryption: {
          title: 'Encryption Tool',
          description: 'Encrypt and decrypt text using various algorithms like AES, DES, and Rabbit.'
        }
       },
      mermaid: {
        title: 'Mermaid Diagrams',
        description: 'Create diagrams and flowcharts with Mermaid',
        invalidSyntax: 'Invalid Mermaid syntax'
      }
    },
    toasts: {
      common: {
        success: 'Success',
        error: 'Error',
        info: 'Info',
        notFound: 'Not Found'
      },
      success: {
        copied: 'Copied to clipboard',
        formattedAndCopied: 'JSON formatted and copied to clipboard',
        minifiedAndCopied: 'JSON minified and copied to clipboard',
        extractedAndCopied: 'Value extracted and copied to clipboard',
        graphGenerated: 'Graph generated successfully',
        convertedToYamlAndCopied: 'Converted to YAML and copied to clipboard',
        convertedToXmlAndCopied: 'Converted to XML and copied to clipboard',
        convertedToCsvAndCopied: 'Converted to CSV and copied to clipboard'
      },
      error: {
        invalidJson: 'Please enter valid JSON',
        invalidJsonFormat: 'Invalid JSON format',
        missingPath: 'Please enter extraction path',
        notFound: 'No value found at the specified path',
        extractError: 'Error extracting value',
        conversionFailed: 'Conversion failed',
        csvConversionRequiresArray: 'CSV conversion requires an array of objects'
      },
      info: {
        emptyContent: 'No content to copy'
      }
    },
    editor: {
      copy: 'Copy content',
      clear: 'Clear content',
      copied: 'Copied',
      copySuccess: 'Content copied to clipboard',
      copyError: 'Copy failed',
      copyErrorDesc: 'Unable to copy to clipboard',
      cleared: 'Cleared',
      clearSuccess: 'Content cleared',
      downloadSvg: 'Download SVG',
      downloadPng: 'Download PNG'
    },
    availableTools: 'Available Tools',
    whyChooseUs: {
      title: 'Why Choose Our Tools?',
      privacyFocused: {
        title: 'Privacy Focused',
        description: 'All processing happens locally in your browser. Your data never leaves your device.'
      },
      professionalGrade: {
        title: 'Professional Grade',
        description: 'Built with modern web technologies and designed for professional developers.'
      },
      freeAndOpen: {
        title: 'Free & Open',
        description: 'No registration required. Use all features for free with no limitations.'
      }
    },
    underConstruction: {
      description: 'This tool is under development, please stay tuned.'
    },
    notFound: {
      title: 'Page Not Found',
      description: 'Sorry, the page you are looking for does not exist or has been moved.',
      backToHome: 'Back to Home',
      path: 'Path'
    },
    encryption: {
      algorithm: 'Algorithm',
      selectAlgorithm: 'Select an algorithm',
      inputText: 'Input Text',
      inputPlaceholder: 'Enter text to process...',
      output: 'Output',
      outputPlaceholder: 'Processed output will appear here...',
      regenerate: 'Regenerate'
    },
    footer: {
      legal: 'Legal',
      company: 'Company',
      friendlyLinks: 'Friendly links',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      about: 'About us',
      copyright: '© {{year}} Developer Tools Hub. All rights reserved.',
      description: 'Your all-in-one "Swiss Army knife" for development built with Lovable AI. Professional tools for JSON, text, encryption and more to streamline your workflow.',
      lovable: 'Lovable',
      vercel: 'Vercel',
      github: 'GitHub',
      deepseek: 'DeepSeek',
    },
    about: {
      title: 'About Us',
      missionTitle: 'Our Mission',
      missionText: 'Our mission is to provide developers with a comprehensive, easy-to-use, and powerful toolkit built with Lovable AI that acts as a "Swiss Army knife" for their daily tasks. We aim to create a one-stop shop for development utilities, making workflows more efficient and enjoyable for everyone.',
      featuresTitle: 'What We Offer',
      feature1: 'Comprehensive Toolset: From JSON formatting and text manipulation to encryption and diagramming.',
      feature2: 'Modern Design: A clean, intuitive, and responsive interface powered by Lovable AI.',
      feature3: 'Privacy-Focused: No data is stored on our servers. All processing happens in your browser.',
      feature4: 'Built with Lovable: We leverage Lovable AI technology for optimal development experience.',
    },
    privacy: {
      title: 'Privacy Policy',
      lastUpdated: 'Last updated: June 15, 2025',
      introduction: 'Welcome to Developer Tools Hub. We are committed to protecting your privacy. Our Privacy Policy explains how we handle information in relation to our website and services.',
      informationWeCollectTitle: 'Information We Collect',
      informationWeCollectText: 'We do not collect any personally identifiable information from our users. All data processed by our tools (e.g., JSON, text, files) remains on your client-side and is never sent to or stored on our servers.',
      cookiesTitle: 'Cookies and Local Storage',
      cookiesText: 'We use browser local storage to save your preferences, such as your selected theme (light/dark) and language. This is purely for functional purposes to enhance your user experience and does not track you.',
      thirdPartyServicesTitle: 'Third-Party Services',
      thirdPartyServicesText: 'Our website does not integrate with any third-party services that would collect your personal data. We provide links to external sites like GitHub, but we are not responsible for their privacy practices.',
      changesToPolicyTitle: 'Changes to this Policy',
      changesToPolicyText: 'We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.',
      contactUsTitle: 'Contact Us',
      contactUsText: 'If you have any questions about this Privacy Policy, feel free to contact us at our open-source repository.',
    },
    terms: {
      title: 'Terms of Service',
      lastUpdated: 'Last updated: June 15, 2025',
      acceptanceTitle: 'Acceptance of Terms',
      acceptanceText: 'By accessing and using Developer Tools Hub ("the Service"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by these terms, please do not use this Service.',
      useOfServiceTitle: 'Use of Service',
      useOfServiceText: 'The Service is provided free of charge for personal and commercial use. You agree to use the Service responsibly and not for any malicious or illegal activities. You are solely responsible for any data you process using our tools.',
      disclaimerTitle: 'Disclaimer of Warranties',
      disclaimerText: 'The Service is provided "as is" and "as available" without any warranties of any kind, either expressed or implied. We do not warrant the accuracy, reliability, or completeness of any tools or data processed through the service.',
      limitationTitle: 'Limitation of Liability',
      limitationText: 'In no event shall Developer Tools Hub or its maintainers be liable for any direct, indirect, incidental, special, or consequential damages arising out of the use of or inability to use the Service.',
      changesToTermsTitle: 'Changes to Terms',
      changesToTermsText: 'We reserve the right to modify these terms at any time. We will post the most current version of these terms on this page. Your continued use of the Service after any changes constitutes your acceptance of the new Terms.',
    },
  }
};

