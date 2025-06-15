
export const en = {
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
      description: "Your one-stop 'Swiss Army knife' for development. Featuring tools for JSON, text, encryption, and more to streamline your workflow.",
      vercel: 'Vercel',
      github: 'GitHub',
      deepseek: 'DeepSeek',
    },
    about: {
      title: 'About Us',
      missionTitle: 'Our Mission',
      missionText: "Our mission is to provide developers with a comprehensive, easy-to-use, and powerful toolkit that acts as a 'Swiss Army knife' for their daily tasks. We aim to create a one-stop-shop for development utilities, making workflows more efficient and enjoyable for everyone.",
      featuresTitle: 'What We Offer',
      feature1: 'Comprehensive Toolset: From JSON formatting and text manipulation to encryption and diagramming.',
      feature2: 'Modern Design: A clean, intuitive, and responsive neumorphic interface.',
      feature3: 'Privacy-Focused: No data is stored on our servers. All processing happens in your browser.',
      feature4: 'Open Source: We believe in the power of community and transparent development.',
    },
    privacy: {
      title: 'Privacy Policy',
      lastUpdated: 'Last updated: June 15, 2025',
      introduction: 'Welcome to Developer Tools Hub. We are committed to protecting your privacy. Our Privacy Policy explains how we handle information in connection with our website and services.',
      informationWeCollectTitle: 'Information We Collect',
      informationWeCollectText: 'We do not collect any personally identifiable information from our users. All data processed by our tools (e.g., JSON, text, files) remains on your client-side and is never sent to or stored on our servers.',
      cookiesTitle: 'Cookies and Local Storage',
      cookiesText: 'We use browser local storage to save your preferences, such as your selected theme (light/dark) and language. This is purely for functional purposes to enhance your user experience and does not track you.',
      thirdPartyServicesTitle: 'Third-Party Services',
      thirdPartyServicesText: 'Our website does not integrate with any third-party services that would collect your personal data. We provide links to external sites like GitHub, but we are not responsible for their privacy practices.',
      changesToPolicyTitle: 'Changes to This Policy',
      changesToPolicyText: 'We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.',
      contactUsTitle: 'Contact Us',
      contactUsText: 'If you have any questions about this Privacy Policy, please feel free to reach out to us on our open source repository.',
    },
    terms: {
      title: 'Terms of Service',
      lastUpdated: 'Last updated: June 15, 2025',
      acceptanceTitle: 'Acceptance of Terms',
      acceptanceText: 'By accessing and using Developer Tools Hub ("the Service"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by these terms, please do not use this Service.',
      useOfServiceTitle: 'Use of the Service',
      useOfServiceText: 'The Service is provided for free for both personal and commercial use. You agree to use the Service responsibly and not for any malicious or illegal activities. You are solely responsible for any data you process using our tools.',
      disclaimerTitle: 'Disclaimer of Warranties',
      disclaimerText: "The Service is provided 'as is' and 'as available' without any warranties of any kind, express or implied. We do not guarantee the accuracy, reliability, or completeness of any tool or data processed through the service.",
      limitationTitle: 'Limitation of Liability',
      limitationText: 'In no event shall Developer Tools Hub or its maintainers be liable for any direct, indirect, incidental, special, or consequential damages arising out of the use or inability to use the Service.',
      changesToTermsTitle: 'Changes to Terms',
      changesToTermsText: 'We reserve the right to modify these terms at any time. We will post the most current version of these terms on this page. Your continued use of the Service after any changes constitutes your acceptance of the new Terms.',
    },
  }
};
