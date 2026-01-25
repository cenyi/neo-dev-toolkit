# Formateador JSON y Convertidor Multiformato

<div align="ltr" >

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![Astro](https://img.shields.io/badge/Astro-4.15-FF5D01.svg)
![Cloudflare](https://img.shields.io/badge/Cloudflare-Pages-orange.svg)

**El Kit de Herramientas JSON Definitivo - Formatea, Convierte, Valida JSON en línea**

[🇺🇸 English](README.md) • [🇨🇳 简体中文](README.zh.md) • 🇪🇸 Español

</div>

---

## ✨ Resumen

Potente kit de herramientas JSON basado en navegador. Soporta 20+ conversiones de formato y generación de código.

---

## 🚀 Inicio Rápido

### Instalación

```bash
# Clonar repositorio
git clone https://github.com/cenyi/neo-dev-toolkit.git

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Construir para producción
npm run build
```

---

## 🎯 Características

### Funciones Principales

- ✨ **Entrada Inteligente**: Detección automática de JSON, URL, XML, YAML y 15+ formatos
- 🔄 **20+ Convertidores**: JSON ↔ YAML/XML/CSV/HTML/PDF/Table y más
- 💻 **Generación de Código**: TypeScript, Dart, Go, Rust, Python, C, JSON Schema
- 🔍 **Herramientas Avanzadas**: Comparación JSON, diff, extracción de campos, validación
- 🌐 **Soporte Bilingüe**: Soporte completo en inglés y español
- 📱 **Optimización Móvil**: Funciona perfectamente en todos los dispositivos
- 🔒 **Privacidad Primero**: 100% basado en navegador, sin cargas al servidor

---

## 📖 Ejemplos de Uso

### Ejemplo 1: Respuesta API

```json
{
  "status": "success",
  "data": {
    "users": [
      {"id": 1, "name": "Alice", "email": "alice@example.com"}
    ]
  }
}
```

**Extraer todos los emails**:
```javascript
obj => obj.data.users.map(u => u.email)
```

### Ejemplo 2: Conversión YAML

**Entrada (detectada automáticamente como YAML)**:
```yaml
server:
  host: localhost
  port: 8080
```

**Automáticamente convertido a JSON** → **Generar estructura Go**

---

## 🎨 Características de Interfaz

### Diseño Responsivo

- 🖥️ **Escritorio**: Diseño multicolumna, editores lado a lado
- 📱 **Tableta**: Cuadrícula de 2 columnas optimizada
- 📲 **Móvil**: Columna única, botones táctiles

### Organización de Botones

Los botones están agrupados por funcionalidad:
```
[Operaciones Básicas] | [Conversión de Datos] | [Generación de Código] | [Análisis] | [Utilidades]
```

**Operaciones Básicas**: Colapsar, Expandir, Eliminar Comentarios, Comprimir, Escapar
**Conversión de Datos**: XML, YAML, CSV, Excel, HTML, PDF
**Generación de Código**: TypeScript, Dart, C, Go, Rust, Python, Schema
**Análisis**: Tabla, Comparación
**Utilidades**: Limpiar, Historial, Tamaño de Fuente

---

## 🔧 Detalles Técnicos

### Stack Tecnológico

| Componente | Tecnología | Versión |
|-----------|-----------|---------|
| Framework | Astro | 4.15+ |
| Editor | Monaco Editor | Latest |
| Estilos | CSS Nativo | - |
| Lenguaje | JavaScript | ES6+ |
| Despliegue | Cloudflare Pages/Workers | - |

### Arquitectura

```
┌─────────────────────────────────────────┐
│           Navegador del Usuario          │
│  ┌──────────────────────────────────┐  │
│  │    Aplicación Astro Frontend      │  │
│  ├──────────────────────────────────┤  │
│  │  • Detección Inteligente de Entrada│  │
│  │  • Motor de Conversión            │  │
│  │  • Módulos de Generación de Código│  │
│  │  • Integración Monaco Editor      │  │
│  │  • Gestión de Historial (local)   │  │
│  └──────────────────────────────────┘  │
│                                         │
│  100% Procesamiento Cliente             │
│  ❌ Sin Subidas al Servidor             │
│  ✅ Privacidad Completa                 │
└─────────────────────────────────────────┘
```

---

## 🚢 Despliegue

### Cloudflare Pages (Recomendado)

```bash
# Construir proyecto
npm run build

# Desplegar usando Wrangler CLI
npm install -g wrangler
wrangler login
wrangler pages deploy dist
```

### Otras Plataformas

#### Vercel
```bash
npm install -g vercel
vercel
```

#### Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod
```

---

## 🎓 Casos de Uso

### Para Desarrolladores
- ✅ Depurar respuestas API
- ✅ Generar interfaces TypeScript
- ✅ Convertir archivos de configuración
- ✅ Comparar diferencias JSON

### Para Analistas de Datos
- ✅ Convertir JSON a CSV/Excel
- ✅ Visualizar datos como tabla
- ✅ Extraer campos específicos
- ✅ Validar estructura de datos

---

## 🌟 Características Clave

| Función | Descripción | Estado |
|---------|-------------|--------|
| Entrada Inteligente | Detección automática de 15+ formatos | ✅ |
| Validación JSON | Detección de errores en tiempo real | ✅ |
| Conversiones | 10+ formatos de salida | ✅ |
| Generación de Código | 7 lenguajes de programación | ✅ |
| Comparación JSON | Herramienta diff visual | ✅ |
| Extracción de Campos | Expresiones JavaScript | ✅ |

---

## 📊 Rendimiento

- ⚡ **Velocidad de Formato**: < 100ms para 1MB JSON
- 📦 **Tamaño del Paquete**: < 500KB (gzip)
- 🚀 **Tiempo de Carga**: < 2s en 3G
- 💾 **Uso de Memoria**: < 100MB para 10MB JSON
- 🔄 **Velocidad de Conversión**: < 500ms para la mayoría de formatos

---

## 🔒 Privacidad y Seguridad

- ✅ **Sin Subidas al Servidor**: Todo el procesamiento se realiza en el navegador
- ✅ **Sin Analíticas**: Sin código de rastreo
- ✅ **Sin Cookies**: Sin rastreo de usuario
- ✅ **HTTPS**: Conexión segura
- ✅ **Código Abierto**: Código completamente verificable
- ✅ **Almacenamiento Local**: El historial permanece en su dispositivo

---

## 📝 Licencia

MIT License - ver archivo [LICENSE](LICENSE)

---

## 🙏 Agradecimientos

- [Astro](https://astro.build) - Framework Web
- [Monaco Editor](https://microsoft.github.io/monaco-editor/) - Potente Editor de Código
- [Cloudflare](https://cloudflare.com) - Hosting y CDN

---

## 📞 Support

- 📧 Email: support@tojsons.com
- 🐛 Issues: [GitHub Issues](https://github.com/cenyi/neo-dev-toolkit/issues)
- 💬 Discussions: [GitHub Discussions](https://github.com/cenyi/neo-dev-toolkit/discussions)

---

<div align="ltr">

**Made with ❤️ by the JSON Tools Team**

🔗 [Live Demo](https://tojsons.com) • 📖 [Docs](https://tojsons.com/docs) • 🐛 [Issues](https://github.com/cenyi/neo-dev-toolkit/issues)

[🇺🇸 English](README.md) | [🇨🇳 简体中文](README.zh.md) | 🇪🇸 Spanish
</div>
