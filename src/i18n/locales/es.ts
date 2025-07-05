export const es = {
  translation: {
    nav: {
      home: 'Inicio',
      json: 'JSON',
      network: 'Red',
      text: 'Texto',
      time: 'Tiempo',
      encryption: 'Encriptación',
      markdown: 'Markdown',
      mermaid: 'Mermaid',
      regex: 'RegEx',
      editor: 'Editor'
    },
    navTitles: {
      home: 'Ir al Inicio - Hub Gratuito de Herramientas para Desarrolladores',
      json: 'Herramientas JSON - Formatear, validar y procesar datos JSON',
      network: 'Herramientas de Red - Codificación URL, búsqueda IP y utilidades',
      text: 'Herramientas de Texto - Procesar y convertir formatos de texto',
      time: 'Herramientas de Tiempo - Convertidores de timestamp y zona horaria',
      encryption: 'Herramientas de Encriptación - Generación hash y utilidades crypto',
      regex: 'Herramienta de Expresiones Regulares - Probar y validar patrones regex',
      editor: 'Editores de Código - Editores Markdown y diagramas Mermaid'
    },
    common: {
      theme: 'Tema',
      language: 'Idioma',
      light: 'Claro',
      dark: 'Oscuro',
      copy: 'Copiar',
      clear: 'Limpiar',
      format: 'Formatear',
      minify: 'Minificar',
      validate: 'Validar',
      convert: 'Convertir',
      encrypt: 'Encriptar',
      decrypt: 'Desencriptar',
      preview: 'Vista previa',
      download: 'Descargar',
      toYaml: 'A YAML',
      toXml: 'A XML',
      toCsv: 'A CSV',
      blue: 'Azul',
      system: 'Sistema',
      comingSoon: 'Próximamente',
      error: 'Error',
      success: 'Éxito',
      info: 'Información',
      notFound: 'No encontrado',
      compare: 'Comparar',
      test: 'Probar',
      match: 'Coincidir',
      replace: 'Reemplazar',
      flags: 'Banderas',
      pattern: 'Patrón',
      input: 'Entrada',
      output: 'Salida',
      result: 'Resultado',
      graph: 'Gráfico de Estructura',
      zoomLevel: 'Nivel de Zoom'
    },
    home: { 
      title: 'Hub de Herramientas para Desarrolladores',
      subtitle: 'Herramientas de desarrollo profesionales construidas con tecnología Lovable AI',
      description: 'Una colección completa de herramientas esenciales para desarrolladores que incluye formato JSON, procesamiento de texto, encriptación y más. Construido con Lovable AI para rendimiento óptimo.',
      headerTitle: 'Hub Gratuito de Herramientas para Desarrolladores Online - Construido con Lovable',
      toolsCollectionTitle: 'Colección Profesional de Herramientas para Desarrolladores',
      whyChooseTitle: '¿Por qué Elegir DevTools Hub para tus Necesidades de Desarrollo?',
      feature1Title: '100% Gratis y Sin Registro',
      feature1Description: 'Todas las herramientas son completamente gratuitas sin necesidad de cuenta',
      feature2Title: 'Desarrollo Enfocado en Privacidad',
      feature2Description: 'Tus datos permanecen en tu navegador - nada se envía a nuestros servidores',
      feature3Title: 'Interfaz Moderna y Responsiva',
      feature3Description: 'Diseño limpio y responsivo potenciado por Lovable AI que funciona perfectamente en todos los dispositivos'
    },
    tools: {
      json: {
        title: 'Herramientas JSON',
        description: 'Formatear, validar y minificar datos JSON',
        formatter: 'Formateador JSON',
        viewerTitle: 'Visor JSON',
        fieldPath: 'Ruta del campo',
        extractPlaceholder: 'ej., $.user.name o $[0].id',
        extractValue: 'Extraer valor',
        placeholder: 'Ingresa o pega tu JSON aquí...',
        extractedValueTitle: 'Valor extraído',
        generateGraph: 'Generar Gráfico',
        graphTitle: 'Estructura JSON',
        syntaxError: 'Error de sintaxis JSON',
        unknownParseError: 'Error de análisis JSON desconocido',
        syntaxErrorAtPosition: 'Error de sintaxis JSON: {{message}} (línea {{line}}, columna {{column}})',
        syntaxErrorGeneric: 'Error de sintaxis JSON: {{message}}',
        convertedToYamlTitle: 'Convertido a YAML',
        convertedToXmlTitle: 'Convertido a XML',
        convertedToCsvTitle: 'Convertido a CSV',
        viewer: {
          title: 'Vista de Estructura JSON',
          invalidJson: 'Por favor ingrese JSON válido para ver la estructura',
          expandAll: 'Expandir Todo',
          collapseAll: 'Contraer Todo',
          items: 'elementos',
          elements: 'elementos'
        },
        history: {
          title: 'Historial',
          emptyMessage: '¡Aún no hay historial, comienza ingresando algunos datos JSON!',
          clearAll: 'Limpiar Todo',
          removeItem: 'Eliminar Elemento',
          itemRemoved: 'Elemento del historial eliminado',
          historyCleared: 'Historial limpiado',
          loadedFromHistory: 'Cargado desde el historial',
          justNow: 'Ahora mismo',
          minutesAgo: 'hace {{count}} minutos',
          hoursAgo: 'hace {{count}} horas',
          searchPlaceholder: 'Buscar en el historial...',
          noResults: 'No se encontraron registros coincidentes'
        }
      },
      regex: {
        title: 'Herramienta de Expresiones Regulares',
        description: 'Probar, coincidir y reemplazar con expresiones regulares',
        pattern: 'Patrón de Expresión Regular',
        patternPlaceholder: 'Ingresar patrón regex...',
        testString: 'Cadena de Prueba',
        testStringPlaceholder: 'Ingresar texto para probar...',
        replacement: 'Texto de Reemplazo',
        replacementPlaceholder: 'Ingresar texto de reemplazo...',
        flags: 'Banderas',
        global: 'Coincidencia global (g)',
        ignoreCase: 'Ignorar mayúsculas (i)',
        multiline: 'Multilínea (m)',
        dotAll: 'Punto coincide con nueva línea (s)',
        unicode: 'Unicode (u)',
        sticky: 'Pegajoso (y)',
        matches: 'Coincidencias',
        noMatches: 'No se encontraron coincidencias',
        replacedText: 'Texto Reemplazado',
        invalidRegex: 'Expresión regular inválida'
      },
      jwtDecoder: {
        title: 'Decodificador JWT',
        description: 'Decodificar y verificar tokens JWT',
        encodedToken: 'Token Codificado',
        header: 'Encabezado',
        payload: 'Carga útil',
        placeholder: 'Pegar tu JWT aquí',
        headerPlaceholder: 'El encabezado decodificado aparecerá aquí',
        payloadPlaceholder: 'La carga útil decodificada aparecerá aquí'
      },
      jsonDiff: {
        title: 'Diferencias JSON',
        description: 'Comparar diferencias entre dos objetos JSON',
        originalJson: 'JSON Original',
        newJson: 'JSON Nuevo',
        originalPlaceholder: 'Pegar JSON original aquí',
        newPlaceholder: 'Pegar JSON nuevo aquí',
        diffResult: 'Resultado de Diferencias'
      },
      network: { 
        title: 'Herramientas de Red', 
        description: 'Codificación de URL, búsqueda de IP y utilidades de red' 
      },
      text: { 
        title: 'Herramientas de Texto', 
        description: 'Procesamiento de texto, conversión de mayúsculas y formato',
        textDiff: {
          title: 'Herramienta de Comparación de Texto',
          description: 'Comparar dos documentos de texto y resaltar diferencias',
          originalText: 'Texto Original',
          newText: 'Texto Nuevo',
          originalPlaceholder: 'Ingresar texto original...',
          newPlaceholder: 'Ingresar texto nuevo...',
          diffResult: 'Resultado de Comparación',
          compareText: 'Comparar Texto',
          clearAll: 'Limpiar Todo',
          emptyLine: '(línea vacía)',
          compareComplete: 'Comparación de texto completada',
          enterTextToCompare: 'Por favor ingrese texto para comparar'
        },
        caseConverter: {
          title: 'Convertidor de Mayúsculas',
          description: 'Convertir texto entre diferentes tipos de mayúsculas.',
          placeholder: 'Ingresar texto aquí...',
          result: 'Resultado',
          upperCase: 'MAYÚSCULAS',
          lowerCase: 'minúsculas',
          titleCase: 'Título',
          sentenceCase: 'Oración'
        },
        wordCounter: {
          title: 'Contador de Palabras y Caracteres',
          description: 'Contar palabras, caracteres, oraciones y párrafos en tu texto.',
          placeholder: 'Escribir o pegar tu texto aquí...',
          words: 'Palabras',
          characters: 'Caracteres',
          charactersNoSpaces: 'Caracteres (sin espacios)',
          sentences: 'Oraciones',
          paragraphs: 'Párrafos'
        },
        textReverser: {
          title: 'Inversor de Texto',
          description: 'Invertir los caracteres de tu texto.',
          placeholder: 'Ingresar texto para invertir',
          reversedText: 'Texto invertido'
        },
        whitespaceRemover: {
          title: 'Removedor de Espacios en Blanco',
          description: 'Remover espacios y saltos de línea innecesarios de tu texto.',
          placeholder: 'Ingresar texto aquí...',
          result: 'Resultado', 
          removeAll: 'Remover Todos los Espacios',
          removeTrim: 'Recortar Inicio/Final',
          removeExtra: 'Remover Espacios Extra',
          removeLines: 'Remover Saltos de Línea'
        },
        urlEncoder: {
          title: 'Codificador / Decodificador de URL',
          description: 'Codificar y decodificar URLs',
          input: 'Entrada',
          output: 'Salida',
          encode: 'Codificar',
          decode: 'Decodificar',
          inputPlaceholder: 'Ingresar texto para codificar o decodificar',
          outputPlaceholder: 'El resultado aparecerá aquí'
        },
        base64: {
          title: 'Codificador / Decodificador Base64',
          description: 'Codificar y decodificar texto Base64',
          input: 'Entrada',
          output: 'Salida',
          encode: 'Codificar',
          decode: 'Decodificar',
          inputPlaceholder: 'Ingresar texto para codificar o decodificar',
          outputPlaceholder: 'El resultado aparecerá aquí'
        },
        ipLookup: {
          title: 'Búsqueda de Dirección IP',
          placeholder: 'Ingresar dirección IP o dominio',
          lookup: 'Buscar',
          myIp: 'Buscar Mi IP',
          results: 'Resultados de Búsqueda'
        },
        dateCalculator: {
          title: 'Calculadora de Fechas',
          description: 'Sumar o restar años, meses y días de una fecha dada',
          startDate: 'Fecha de Inicio',
          add: 'Sumar',
          subtract: 'Restar',
          years: 'Años',
          months: 'Meses',
          days: 'Días',
          resultDate: 'Fecha Resultado'
        }
      },
      timestampConverter: {
        title: 'Convertidor de Timestamp',
        description: 'Convertir entre timestamps Unix y fechas legibles',
        timestamp: 'Timestamp Unix',
        timestampPlaceholder: 'Ingresar timestamp Unix (segundos)',
        dateTime: 'Fecha y Hora (UTC)',
        current: 'Hora Actual'
      },
      timezoneConverter: {
        title: 'Convertidor de Zona Horaria',
        description: 'Convertir fecha y hora entre diferentes zonas horarias',
        sourceDateTime: 'Fecha y Hora de Origen',
        sourceTimezone: 'Desde Zona Horaria',
        targetTimezone: 'A Zona Horaria',
        convertedDateTime: 'Fecha y Hora Convertida'
      },
      time: { 
        title: 'Herramientas de Tiempo', 
        description: 'Convertidores de timestamp, herramientas de zona horaria y calculadoras de fecha'
      },
      editor: { 
        title: 'Editores de Código', 
        description: 'Editores Markdown y diagramas Mermaid con vista previa en vivo'
      },
      crypto: { 
        title: 'Herramientas Cripto', 
        description: 'Generación de hash, utilidades de encriptación y desencriptación' 
      }, 
      markdown: { 
        title: 'Herramientas Markdown', 
        description: 'Editor Markdown con vista previa en vivo' 
      }, 
      mermaid: { 
        title: 'Diagramas Mermaid', 
        description: 'Crear diagramas y diagramas de flujo con Mermaid' 
      }
    },
    toasts: {
      common: {
        error: 'Error',
        success: 'Éxito',
        info: 'Información',
        notFound: 'No encontrado'
      },
      error: {
        invalidJson: 'Por favor ingresa un JSON válido',
        invalidJsonFormat: 'Formato JSON inválido',
        missingPath: 'Por favor ingresa la ruta de extracción',
        notFound: 'No se encontró valor en la ruta especificada',
        extractError: 'Error al extraer el valor',
        conversionFailed: 'La conversión falló',
        csvConversionRequiresArray: 'La conversión CSV requiere un array de objetos'
      },
      success: {
        copied: 'Copiado al portapapeles',
        formattedAndCopied: 'JSON formateado y copiado al portapapeles',
        minifiedAndCopied: 'JSON minificado y copiado al portapapeles',
        extractedAndCopied: 'Valor extraído y copiado al portapapeles',
        graphGenerated: 'Gráfico generado exitosamente',
        convertedToYamlAndCopied: 'Convertido a YAML y copiado al portapapeles',
        convertedToXmlAndCopied: 'Convertido a XML y copiado al portapapeles',
        convertedToCsvAndCopied: 'Convertido a CSV y copiado al portapapeles'
      },
      info: {
        emptyContent: 'No hay contenido para copiar'
      }
    },
    editor: {
      copy: 'Copiar contenido',
      clear: 'Limpiar contenido',
      copied: 'Copiado',
      copySuccess: 'Contenido copiado al portapapeles',
      copyError: 'Falló la copia',
      copyErrorDesc: 'No se pudo copiar al portapapeles',
      cleared: 'Limpiado',
      clearSuccess: 'Contenido limpiado',
      downloadSvg: 'Descargar SVG',
      downloadPng: 'Descargar PNG'
    },
    underConstruction: {
      description: 'Esta herramienta está en desarrollo, por favor mantente al tanto.'
    },
    notFound: {
      title: 'Página No Encontrada',
      description: 'Lo siento, la página que buscas no existe o ha sido movida.',
      backToHome: 'Volver al Inicio',
      path: 'Ruta'
    },
    encryption: {
      algorithm: 'Algoritmo',
      selectAlgorithm: 'Seleccionar un algoritmo',
      inputText: 'Texto de Entrada',
      inputPlaceholder: 'Ingresar texto para procesar...',
      output: 'Salida',
      outputPlaceholder: 'La salida procesada aparecerá aquí...',
      regenerate: 'Regenerar'
    },
    footer: {
      legal: 'Legal',
      company: 'Empresa',
      friendlyLinks: 'Enlaces amigables',
      privacy: 'Política de Privacidad',
      terms: 'Términos de Servicio',
      about: 'Acerca de nosotros',
      copyright: '© {{year}} Hub de Herramientas para Desarrolladores. Todos los derechos reservados.',
      description: 'Tu "navaja suiza" todo en uno para desarrollo construido con Lovable AI. Herramientas profesionales para JSON, texto, encriptación y más para optimizar tu flujo de trabajo.',
      lovable: 'Lovable',
      vercel: 'Vercel',
      github: 'GitHub',
      deepseek: 'DeepSeek'
    },
    about: {
      title: 'Acerca de Nosotros',
      missionTitle: 'Nuestra Misión',
      missionText: 'Nuestra misión es proporcionar a los desarrolladores un conjunto de herramientas integral, fácil de usar y potente construido con Lovable AI que actúe como una "navaja suiza" para sus tareas diarias. Nuestro objetivo es crear una tienda única para utilidades de desarrollo, haciendo que los flujos de trabajo sean más eficientes y agradables para todos.',
      featuresTitle: 'Lo que Ofrecemos',
      feature1: 'Conjunto de herramientas integral: Desde formato JSON y manipulación de texto hasta encriptación y diagramas.',
      feature2: 'Diseño moderno: Una interfaz limpia, intuitiva y responsiva potenciada por Lovable AI.',
      feature3: 'Enfocado en la privacidad: No se almacenan datos en nuestros servidores. Todo el procesamiento ocurre en tu navegador.',
      feature4: 'Construido con Lovable: Aprovechamos la tecnología Lovable AI para una experiencia de desarrollo óptima.'
    },
    privacy: {
      title: 'Política de Privacidad',
      lastUpdated: 'Última actualización: 15 de junio de 2025',
      introduction: 'Bienvenido al Hub de Herramientas para Desarrolladores. Estamos comprometidos a proteger tu privacidad. Nuestra Política de Privacidad explica cómo manejamos la información en relación con nuestro sitio web y servicios.',
      informationWeCollectTitle: 'Información que Recopilamos',
      informationWeCollectText: 'No recopilamos ninguna información de identificación personal de nuestros usuarios. Todos los datos procesados por nuestras herramientas (por ejemplo, JSON, texto, archivos) permanecen en tu lado del cliente y nunca se envían o almacenan en nuestros servidores.',
      cookiesTitle: 'Cookies y Almacenamiento Local',
      cookiesText: 'Utilizamos el almacenamiento local del navegador para guardar tus preferencias, como el tema seleccionado (claro/oscuro) y el idioma. Esto es puramente con fines funcionales para mejorar tu experiencia de usuario y no te rastrea.',
      thirdPartyServicesTitle: 'Servicios de Terceros',
      thirdPartyServicesText: 'Nuestro sitio web no se integra con ningún servicio de terceros que recopile tus datos personales. Proporcionamos enlaces a sitios externos como GitHub, pero no somos responsables de sus prácticas de privacidad.',
      changesToPolicyTitle: 'Cambios a esta Política',
      changesToPolicyText: 'Podemos actualizar nuestra Política de Privacidad de vez en cuando. Te notificaremos de cualquier cambio publicando la nueva Política de Privacidad en esta página. Se te aconseja revisar esta Política de Privacidad periódicamente para cualquier cambio.',
      contactUsTitle: 'Contáctanos',
      contactUsText: 'Si tienes alguna pregunta sobre esta Política de Privacidad, no dudes en contactarnos en nuestro repositorio de código abierto.'
    },
    terms: {
      title: 'Términos de Servicio',
      lastUpdated: 'Última actualización: 15 de junio de 2025',
      acceptanceTitle: 'Aceptación de Términos',
      acceptanceText: 'Al acceder y usar el Hub de Herramientas para Desarrolladores ("el Servicio"), aceptas y acuerdas estar sujeto a los términos y disposiciones de este acuerdo. Si no estás de acuerdo en cumplir con estos términos, por favor no uses este Servicio.',
      useOfServiceTitle: 'Uso del Servicio',
      useOfServiceText: 'El Servicio se proporciona de forma gratuita para uso personal y comercial. Aceptas usar el Servicio de manera responsable y no para actividades maliciosas o ilegales. Eres el único responsable de cualquier dato que proceses usando nuestras herramientas.',
      disclaimerTitle: 'Renuncia de Garantías',
      disclaimerText: 'El Servicio se proporciona "tal como está" y "según disponibilidad" sin garantías de ningún tipo, ya sean expresas o implícitas. No garantizamos la precisión, confiabilidad o completitud de cualquier herramienta o dato procesado a través del servicio.',
      limitationTitle: 'Limitación de Responsabilidad',
      limitationText: 'En ningún caso el Hub de Herramientas para Desarrolladores o sus mantenedores serán responsables de cualquier daño directo, indirecto, incidental, especial o consecuente que surja del uso o la incapacidad de usar el Servicio.',
      changesToTermsTitle: 'Cambios a los Términos',
      changesToTermsText: 'Nos reservamos el derecho de modificar estos términos en cualquier momento. Publicaremos la versión más actual de estos términos en esta página. Tu uso continuado del Servicio después de cualquier cambio constituye tu aceptación de los nuevos Términos.'
    }
  }
};
