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
        description: 'Herramientas JSON integrales para formateo, validación, verificación de esquemas y manipulación de datos.',
        formatter: {
          title: 'Formateador y Validador JSON',
          description: 'Formatea, embellece y valida tus datos JSON.'
        },
        schemaValidator: {
          title: 'Validador de Esquemas JSON',
          description: 'Valida tus objetos JSON contra un Esquema JSON.'
        },
        codegen: {
          title: 'Generar Tipos de Código',
          description: 'Genera tipos de código en varios lenguajes desde un objeto JSON.'
        },
        history: {
          title: 'Historial'
        },
        generateGraph: 'Generar Gráfico',
        extractValue: 'Extraer Valor',
        fieldPath: 'Ruta del Campo',
        extractPlaceholder: 'Ingrese JSONPath (ej: $.users[0].name)',
        graphTitle: 'Gráfico de Estructura JSON',
        input: 'Entrada',
        output: 'Salida',
        outputPlaceholder: 'El JSON formateado aparecerá aquí',
        validJson: 'JSON válido',
        invalidJson: 'JSON inválido',
        diff: {
          title: 'Herramienta de Diferencias JSON',
          description: 'Compara dos objetos JSON y resalta las diferencias.'
        },
        mock: {
          title: 'Generador de Datos Mock',
          description: 'Genera datos JSON simulados para pruebas y desarrollo.'
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
        title: 'Herramientas de Red y Codificación',
        description: 'Herramientas de red gratuitas: codificador/decodificador de URL, convertidor de Base64, búsqueda de IP y decodificador de JWT. Procesamiento seguro del lado del cliente, no se requieren datos de almacenamiento.',
        subtitle: 'Utilidades esenciales de red y codificación para desarrolladores web. Maneje la codificación de URL, la conversión de Base64, las búsquedas de IP y la decodificación de JWT con nuestras herramientas seguras y centradas en la privacidad.',
        utilityTools: 'Herramientas de Utilidad de Red',
        secureTitle: 'Utilidades de Red Seguras',
        clientSideProcessing: {
          title: 'Procesamiento del Lado del Cliente',
          description: 'Toda la codificación y decodificación se realiza en su navegador para una máxima seguridad.'
        },
        noDataStorage: {
          title: 'Sin Almacenamiento de Datos',
          description: 'No almacenamos ni registramos ninguno de sus datos de entrada o resultados.'
        },
        instantResults: {
          title: 'Resultados Instantáneos',
          description: 'Procesamiento rápido con resultados en tiempo real a medida que escribe.'
        },
        urlEncoder: {
          title: 'Codificador / Decodificador de URL',
          description: 'Codifique las URL para una transmisión segura o decodifique las URL codificadas en porcentaje.'
        },
        base64Encoder: {
          title: 'Codificador / Decodificador de Base64',
          description: 'Codifique texto a Base64 o decodifique cadenas de Base64 de nuevo a texto.'
        },
        ipLookup: {
          title: 'Búsqueda de Dirección IP',
          description: 'Obtenga geolocalización, información del ISP y detalles de la red para cualquier dirección IP.'
        },
        jwtDecoder: {
          title: 'Decodificador de Token JWT',
          description: 'Decodifique los Tokens Web JSON y vea la información del encabezado, la carga útil y la firma.'
        }
      },
      text: {
        title: 'Herramientas de Procesamiento de Texto',
        description: 'Herramientas de texto esenciales: convertidor de mayúsculas y minúsculas, contador de palabras, inversor de texto, eliminador de espacios en blanco y verificador de diferencias. Procesamiento gratuito, rápido y del lado del cliente.',
        subtitle: 'Potentes herramientas de manipulación y análisis de texto para escritores, desarrolladores y creadores de contenido. Transforme, analice y compare texto con nuestra completa suite.',
        utilityTools: 'Utilidades de Procesamiento de Texto',
        whyUse: {
          title: '¿Por Qué Usar Nuestras Herramientas de Texto?',
          realTime: {
            title: 'Procesamiento en Tiempo Real',
            description: 'Vea los resultados al instante mientras escribe con el procesamiento de texto en tiempo real.'
          },
          privacy: {
            title: 'Privacidad Protegida',
            description: 'Todo el procesamiento de texto se realiza localmente: su contenido nunca abandona su navegador.'
          },
          multiPurpose: {
            title: 'Multiuso',
            description: 'Desde la simple conversión de mayúsculas y minúsculas hasta el complejo análisis y comparación de texto.'
          }
        },
        caseConverter: {
          title: 'Convertidor de Mayúsculas y Minúsculas',
          description: 'Convierte texto entre mayúsculas, minúsculas, mayúsculas de título y mayúsculas de oración.',
          placeholder: 'Ingrese texto para convertir mayúsculas y minúsculas...',
          upperCase: 'MAYÚSCULAS',
          lowerCase: 'minúsculas',
          titleCase: 'Mayúsculas de Título',
          sentenceCase: 'Mayúsculas de oración',
          result: 'Texto Convertido'
        },
        wordCounter: {
          title: 'Contador de Palabras y Caracteres',
          description: 'Cuente palabras, caracteres, oraciones y párrafos en su texto.',
          placeholder: 'Ingrese su texto aquí para contar palabras y caracteres...',
          words: 'Palabras',
          characters: 'Caracteres',
          charactersNoSpaces: 'Caracteres (sin espacios)',
          sentences: 'Oraciones',
          paragraphs: 'Párrafos'
        },
        textReverser: {
          title: 'Inversor de Texto',
          description: 'Invierta el orden de los caracteres en su texto al instante.',
          placeholder: 'Ingrese texto para invertir...',
          reversedText: 'Texto Invertido'
        },
        whitespaceRemover: {
          title: 'Eliminador de Espacios en Blanco',
          description: 'Elimine espacios adicionales, recorte espacios en blanco y limpie el formato del texto.',
          placeholder: 'Ingrese texto para limpiar espacios en blanco...',
          result: 'Texto Limpio',
          removeAll: 'Eliminar Todos los Espacios',
          removeTrim: 'Recortar Espacios en Blanco',
          removeExtra: 'Eliminar Espacios Adicionales',
          removeLines: 'Eliminar Líneas Vacías'
        },
        loremIpsumGenerator: {
          title: 'Generador de Lorem Ipsum',
          description: 'Genere texto de marcador de posición para proyectos de diseño y desarrollo.',
          count: 'Cantidad',
          type: 'Tipo',
          paragraphs: 'Párrafos',
          sentences: 'Oraciones',
          words: 'Palabras',
          generate: 'Generar',
          copy: 'Copiar',
          copied: 'Copiado al portapapeles'
        },
        textDiff: {
          title: 'Herramienta de Comparación de Texto',
          description: 'Compare dos textos y resalte las diferencias con visualización de diferencias.',
          compareText: 'Comparar Texto',
          clearAll: 'Limpiar Todo',
          originalText: 'Texto Original',
          newText: 'Texto Nuevo'
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
        description: 'Utilidades esenciales de fecha y hora para conversión de marcas de tiempo, manejo de zonas horarias y cálculos de fechas.',
      meta: {
        title: 'Herramientas de Fecha y Hora - Calculadoras de Marca de Tiempo, Zona Horaria y Fecha',
        description: 'Herramientas de tiempo gratuitas: convertidor de marca de tiempo, calculadora de zona horaria y aritmética de fechas. Utilidades precisas, compatibles con DST y amigables para desarrolladores.'
      },
      title: 'Herramientas de Fecha y Hora',
      subtitle: 'Utilidades esenciales de fecha y hora para desarrolladores y profesionales. Maneje conversiones de marca de tiempo, cálculos de zona horaria y aritmética de fechas con precisión.',
      toolsTitle: 'Herramientas de Gestión del Tiempo',
      timestamp: {
        title: 'Convertidor de Marca de Tiempo',
        description: 'Convierta entre marcas de tiempo de Unix y fechas y horas legibles por humanos.'
      },
      timezone: {
        title: 'Convertidor de Zona Horaria',
        description: 'Convierta fechas y horas entre diferentes zonas horarias de todo el mundo con soporte para DST.'
      },
      dateCalculator: {
        title: 'Calculadora de Fecha',
        description: 'Sume o reste días, meses y años de las fechas. Calcule las diferencias de fecha.'
      },
      calculations: {
        title: 'Cálculos de Tiempo Precisos',
        precise: {
          title: 'Cálculos Precisos',
          description: 'Maneje conversiones complejas de zonas horarias y cálculos de fechas con precisión.'
        },
        global: {
          title: 'Soporte Global',
          description: 'Soporte para todas las zonas horarias del mundo con ajustes automáticos de horario de verano.'
        },
        developerFriendly: {
          title: 'Amigable para Desarrolladores',
          description: 'Perfecto para el desarrollo de API, análisis de registros y depuración de marcas de tiempo.'
        }
      }
    },
      editor: {
        meta: {
          title: 'Editores de Código y Documentos',
          description: 'Editores en línea gratuitos: Markdown con vista previa en vivo y herramienta de diagramas Mermaid. Escriba, previsualice y exporte contenido profesional fácilmente.'
        },
        title: 'Editores de Código y Documentos',
        subtitle: 'Editores profesionales en línea para documentación Markdown y diagramas Mermaid. Cree, edite y previsualice su contenido con renderizado en tiempo real.',
        toolsTitle: 'Herramientas de Edición',
        experience: {
          title: 'Experiencia de Edición Profesional',
          livePreview: {
            title: 'Vista Previa en Vivo',
            description: 'Vea sus diagramas de Markdown y Mermaid renderizados en tiempo real mientras escribe.'
          },
          syntaxHighlighting: {
            title: 'Resaltado de Sintaxis',
            description: 'Editor de código profesional con resaltado de sintaxis y autocompletado.'
          },
          exportReady: {
            title: 'Listo para Exportar',
            description: 'Copie o descargue su contenido renderizado para usarlo en documentación y presentaciones.'
          }
        },
        markdown: {
          title: 'Editor de Markdown',
          description: 'Escriba y previsualice Markdown con resaltado de sintaxis y vista previa en vivo.'
        },
        mermaid: {
          title: 'Editor de Diagramas Mermaid',
          description: 'Cree diagramas de flujo, diagramas de secuencia y otros diagramas con la sintaxis de Mermaid.'
        }
      },
        markdown: {
          title: 'Editor de Markdown',
          description: 'Editor de Markdown con resaltado de sintaxis y vista previa en vivo.',
          placeholder: 'Ingrese su contenido de Markdown aquí...'
        },
        crypto: {
        title: 'Herramientas de Criptografía',
        description: 'Asegure sus datos con nuestras herramientas de criptografía: generadores de hash (MD5, SHA-1, SHA-256, SHA-512), HMAC y cifrado AES.',
        jwtDecoder: {
          title: 'Decodificador JWT',
          description: 'Decodifica e inspecciona JSON Web Tokens para ver su carga útil y datos de encabezado.',
          placeholder: 'Pega tu JWT aquí',
          invalidToken: 'Token JWT inválido'
        },
        encryption: {
          title: 'Herramienta de Cifrado',
          description: 'Cifre y descifre texto utilizando diversos algoritmos como AES, DES y Rabbit.'
        },
        mermaid: {
          title: 'Diagramas Mermaid',
          description: 'Crear diagramas y diagramas de flujo con Mermaid',
          invalidSyntax: 'Sintaxis de Mermaid inválida'
        }
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
    availableTools: 'Herramientas Disponibles',
    whyChooseUs: {
      title: '¿Por Qué Elegir Nuestras Herramientas?',
      privacyFocused: {
        title: 'Enfoque en la Privacidad',
        description: 'Todo el procesamiento ocurre localmente en su navegador. Sus datos nunca abandonan su dispositivo.'
      },
      professionalGrade: {
        title: 'Grado Profesional',
        description: 'Construido con tecnologías web modernas y diseñado para desarrolladores profesionales.'
      },
      freeAndOpen: {
        title: 'Gratis y Abierto',
        description: 'No se requiere registro. Use todas las funciones de forma gratuita sin limitaciones.'
      }
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
