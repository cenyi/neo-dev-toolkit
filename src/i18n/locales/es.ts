export const es = {
  translation: {
    nav: { home: 'Inicio', json: 'JSON', network: 'Red', text: 'Texto', time: 'Tiempo', encryption: 'Cifrado', markdown: 'Markdown', mermaid: 'Mermaid' },
    common: { theme: 'Tema', language: 'Idioma', light: 'Claro', dark: 'Oscuro', copy: 'Copiar', clear: 'Limpiar', format: 'Formatear', minify: 'Minimizar', validate: 'Validar', convert: 'Convertir', encrypt: 'Cifrar', decrypt: 'Descifrar', preview: 'Vista previa', download: 'Descargar', toYaml: 'A YAML', toXml: 'A XML', toCsv: 'A CSV', blue: 'Azul', system: 'Sistema', comingSoon: 'Próximamente', error: 'Error' },
    home: { title: 'Centro de Herramientas para Desarrolladores', subtitle: 'Herramientas de desarrollo profesionales con diseño neumórfico moderno', description: 'Una colección completa de herramientas esenciales para desarrolladores que incluye formato JSON, procesamiento de texto, cifrado y más.' },
    tools: { 
      json: { 
        title: 'Herramientas JSON', 
        description: 'Formatear, validar y minimizar datos JSON',
        fieldPath: 'Ruta del Campo',
        extractPlaceholder: 'ej., $.user.name o $[0].id',
        extractValue: 'Extraer Valor',
        placeholder: 'Introduce o pega tu JSON aquí...',
        extractedValueTitle: 'Valor Extraído'
      },
      network: { title: 'Herramientas de Red', description: 'Codificación de URL, búsqueda de IP y utilidades de red' }, 
      text: { 
        title: 'Herramientas de Texto', 
        description: 'Procesamiento de texto, conversión de mayúsculas y minúsculas y formato',
        caseConverter: {
          title: 'Conversor de Mayúsculas/Minúsculas',
          description: 'Convierte texto entre diferentes tipos de letras.',
          placeholder: 'Introduce texto aquí...',
          result: 'Resultado',
          upperCase: 'MAYÚSCULAS',
          lowerCase: 'minúsculas',
          titleCase: 'Formato de Título',
          sentenceCase: 'Formato de oración'
        },
        wordCounter: {
          title: 'Contador de Palabras y Caracteres',
          description: 'Cuenta palabras, caracteres, oraciones y párrafos en tu texto.',
          placeholder: 'Escribe o pega tu texto aquí...',
          words: 'Palabras',
          characters: 'Caracteres',
          charactersNoSpaces: 'Caracteres (sin espacios)',
          sentences: 'Oraciones',
          paragraphs: 'Párrafos'
        },
        textReverser: {
          title: 'Inversor de Texto',
          description: 'Invierte el orden de los caracteres del texto.',
          placeholder: 'Introduce texto para invertir',
          reversedText: 'Texto invertido'
        },
        whitespaceRemover: {
          title: 'Eliminador de Espacios en Blanco',
          description: 'Elimina espacios y saltos de línea innecesarios del texto.',
          placeholder: 'Introduce texto aquí...',
          result: 'Resultado',
          removeAll: 'Eliminar Todos los Espacios',
          removeTrim: 'Recortar Espacios Iniciales/Finales',
          removeExtra: 'Eliminar Espacios Extra',
          removeLines: 'Eliminar Saltos de Línea'
        },
        urlEncoder: {
          title: 'Codificador/Decodificador URL',
          description: 'Codifica y decodifica URLs',
          input: 'Entrada',
          output: 'Salida',
          encode: 'Codificar',
          decode: 'Decodificar',
          inputPlaceholder: 'Introduce texto para codificar o decodificar',
          outputPlaceholder: 'El resultado aparecerá aquí'
        },
        base64: {
          title: 'Codificador/Decodificador Base64',
          description: 'Codifica y decodifica texto Base64',
          input: 'Entrada',
          output: 'Salida',
          encode: 'Codificar',
          decode: 'Decodificar',
          inputPlaceholder: 'Introduce texto para codificar o decodificar',
          outputPlaceholder: 'El resultado aparecerá aquí'
        },
        ipLookup: {
          title: 'Búsqueda de Dirección IP',
          placeholder: 'Introduce dirección IP o dominio',
          lookup: 'Buscar',
          myIp: 'Buscar Mi IP',
          results: 'Resultados de Búsqueda'
        },
        dateCalculator: {
          title: 'Calculadora de Fechas',
          description: 'Suma o resta años, meses y días de una fecha dada',
          startDate: 'Fecha de Inicio',
          add: 'Sumar',
          subtract: 'Restar',
          years: 'Años',
          months: 'Meses',
          days: 'Días',
          resultDate: 'Fecha Resultado'
        }
      },
      crypto: { title: 'Herramientas de Cifrado', description: 'Generación de hash, utilidades de cifrado y descifrado' }, 
      markdown: { title: 'Herramientas Markdown', description: 'Editor de Markdown con vista previa en vivo' }, 
      mermaid: { title: 'Diagramas Mermaid', description: 'Crear diagramas y organigramas con Mermaid' } 
    },
    editor: {
      copy: 'Copiar contenido',
      clear: 'Limpiar contenido',
      copied: 'Copiado',
      copySuccess: 'Contenido copiado al portapapeles',
      copyError: 'Error al copiar',
      copyErrorDesc: 'No se pudo copiar al portapapeles',
      cleared: 'Limpiado',
      clearSuccess: 'Contenido limpiado',
      downloadSvg: 'Descargar SVG',
      downloadPng: 'Descargar PNG'
    },
    underConstruction: {
      description: 'Esta herramienta está en desarrollo, manténganse atentos.'
    },
    notFound: {
      title: 'Página No Encontrada',
      description: 'Lo sentimos, la página que busca no existe o ha sido movida.',
      backToHome: 'Volver al Inicio',
      path: 'Ruta'
    },
    encryption: {
      algorithm: 'Algoritmo',
      selectAlgorithm: 'Selecciona un algoritmo',
      inputText: 'Texto de Entrada',
      inputPlaceholder: 'Introduce texto para procesar...',
      output: 'Salida',
      outputPlaceholder: 'La salida procesada aparecerá aquí...',
      regenerate: 'Regenerar'
    },
    footer: {
      legal: 'Legal',
      company: 'Empresa',
      friendlyLinks: 'Enlaces amigos',
      privacy: 'Política de Privacidad',
      terms: 'Términos de Servicio',
      about: 'Sobre nosotros',
      copyright: '© {{year}} Centro de Herramientas para Desarrolladores. Todos los derechos reservados.',
      description: 'Su "navaja suiza" todo en uno para el desarrollo. Con herramientas para JSON, texto, cifrado y más para agilizar su flujo de trabajo.',
      vercel: 'Vercel',
      github: 'GitHub',
      deepseek: 'DeepSeek',
    },
    about: {
      title: 'Sobre Nosotros',
      missionTitle: 'Nuestra Misión',
      missionText: 'Nuestra misión es proporcionar a los desarrolladores un conjunto de herramientas completo, fácil de usar y potente que actúe como una "navaja suiza" para sus tareas diarias. Nuestro objetivo es crear una ventanilla única para utilidades de desarrollo, haciendo los flujos de trabajo más eficientes y agradables para todos.',
      featuresTitle: 'Qué Ofrecemos',
      feature1: 'Conjunto de Herramientas Completo: Desde formateo JSON y manipulación de texto hasta cifrado y diagramación.',
      feature2: 'Diseño Moderno: Una interfaz neumórfica limpia, intuitiva y responsiva.',
      feature3: 'Enfocado en la Privacidad: No se almacenan datos en nuestros servidores. Todo el procesamiento ocurre en su navegador.',
      feature4: 'Código Abierto: Creemos en el poder de la comunidad y el desarrollo transparente.',
    },
    privacy: {
      title: 'Política de Privacidad',
      lastUpdated: 'Última actualización: 15 de junio de 2025',
      introduction: 'Bienvenido a Developer Tools Hub. Estamos comprometidos a proteger su privacidad. Nuestra Política de Privacidad explica cómo manejamos la información en relación con nuestro sitio web y servicios.',
      informationWeCollectTitle: 'Información que Recopilamos',
      informationWeCollectText: 'No recopilamos ninguna información de identificación personal de nuestros usuarios. Todos los datos procesados por nuestras herramientas (por ejemplo, JSON, texto, archivos) permanecen en el lado del cliente y nunca se envían ni se almacenan en nuestros servidores.',
      cookiesTitle: 'Cookies y Almacenamiento Local',
      cookiesText: 'Utilizamos el almacenamiento local del navegador para guardar sus preferencias, como el tema seleccionado (claro/oscuro) y el idioma. Esto es puramente para fines funcionales para mejorar su experiencia de usuario y no lo rastrea.',
      thirdPartyServicesTitle: 'Servicios de Terceros',
      thirdPartyServicesText: 'Nuestro sitio web no se integra con ningún servicio de terceros que recopile sus datos personales. Proporcionamos enlaces a sitios externos como GitHub, pero no somos responsables de sus prácticas de privacidad.',
      changesToPolicyTitle: 'Cambios a esta Política',
      changesToPolicyText: 'Podemos actualizar nuestra Política de Privacidad de vez en cuando. Le notificaremos cualquier cambio publicando la nueva Política de Privacidad en esta página. Se le recomienda revisar esta Política de Privacidad periódicamente para cualquier cambio.',
      contactUsTitle: 'Contáctenos',
      contactUsText: 'Si tiene alguna pregunta sobre esta Política de Privacidad, no dude en contactarnos en nuestro repositorio de código abierto.',
    },
    terms: {
      title: 'Términos de Servicio',
      lastUpdated: 'Última actualización: 15 de junio de 2025',
      acceptanceTitle: 'Aceptación de los Términos',
      acceptanceText: 'Al acceder y utilizar Developer Tools Hub ("el Servicio"), usted acepta y se compromete a estar sujeto a los términos y disposiciones de este acuerdo. Si no está de acuerdo con cumplir estos términos, por favor no utilice este Servicio.',
      useOfServiceTitle: 'Uso del Servicio',
      useOfServiceText: 'El Servicio se proporciona de forma gratuita para uso personal y comercial. Usted se compromete a utilizar el Servicio de manera responsable y no para actividades maliciosas o ilegales. Usted es el único responsable de los datos que procese utilizando nuestras herramientas.',
      disclaimerTitle: 'Renuncia de Garantías',
      disclaimerText: 'El Servicio se proporciona "tal cual" y "según disponibilidad" sin garantías de ningún tipo, expresas o implícitas. No garantizamos la exactitud, fiabilidad o integridad de ninguna herramienta o dato procesado a través del servicio.',
      limitationTitle: 'Limitación de Responsabilidad',
      limitationText: 'En ningún caso Developer Tools Hub o sus mantenedores serán responsables de ningún daño directo, indirecto, incidental, especial o consecuente que surja del uso o la incapacidad de usar el Servicio.',
      changesToTermsTitle: 'Cambios en los Términos',
      changesToTermsText: 'Nos reservamos el derecho de modificar estos términos en cualquier momento. Publicaremos la versión más actual de estos términos en esta página. Su uso continuado del Servicio después de cualquier cambio constituye su aceptación de los nuevos Términos.',
    },
  }
};
