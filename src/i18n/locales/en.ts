
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
    },
  }
};
