# JSON-Formatierer & Multi-Format-Konverter

<div align="ltr" >

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![Astro](https://img.shields.io/badge/Astro-4.15-FF5D01.svg)
![Cloudflare](https://img.shields.io/badge/Cloudflare-Pages-orange.svg)

**Das ultimative JSON-Toolkit - JSON online formatieren, konvertieren, validieren**

[🇺🇸 English](README.md) • [🇨🇳 简体中文](README.zh.md) • 🇩🇪 Deutsch

</div>

---

## ✨ Überblick

Leistungsstarker JSON-Toolkit basierend auf Browser. Unterstützt 20+ Formatkonvertierungen und Codegenerierung.

---

## 🚀 Schnellstart

### Installation

```bash
# Repository klonen
git clone https://github.com/cenyi/neo-dev-toolkit.git

# Abhängigkeiten installieren
npm install

# Entwicklungsserver starten
npm run dev

# Produktionsbuild
npm run build
```

---

## 🎯 Funktionen

### Hauptfunktionen

- ✨ **Intelligente Eingabe**: Automatische Erkennung von JSON, URL, XML, YAML und 15+ Formaten
- 🔄 **20+ Konverter**: JSON ↔ YAML/XML/CSV/HTML/PDF/Table und mehr
- 💻 **Code-Generierung**: TypeScript, Dart, Go, Rust, Python, C, JSON Schema
- 🔍 **Erweiterte Tools**: JSON-Vergleich, Diff, Feldextraktion, Validierung
- 🌐 **Zweisprachiger Support**: Vollständige Unterstützung auf Englisch und Deutsch
- 📱 **Mobile Optimierung**: Funktioniert perfekt auf allen Geräten
- 🔒 **Privatsphäre an erster Stelle**: 100% browserbasiert, keine Server-Uploads

---

## 📖 Verwendungsbeispiele

### Beispiel 1: API-Antwort

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

**Alle E-Mails extrahieren**:
```javascript
obj => obj.data.users.map(u => u.email)
```

### Beispiel 2: YAML-Konvertierung

**Eingabe (automatisch als YAML erkannt)**:
```yaml
server:
  host: localhost
  port: 8080
```

**Automatisch in JSON konvertiert** → **Go-Struktur generieren**

---

## 🎨 Interface-Funktionen

### Responsives Design

- 🖥️ **Desktop**: Multi-Spalten-Layout, Editor nebeneinander
- 📱 **Tablet**: Optimiertes 2-Spalten-Raster
- 📲 **Mobile**: Einzelne Spalte, Touch-Buttons

### Button-Organisation

Buttons sind nach Funktionalität gruppiert:
```
[Basisoperationen] | [Datenkonvertierung] | [Code-Generierung] | [Analyse] | [Dienstprogramme]
```

**Basisoperationen**: Zusammenklappen, Erweitern, Kommentare Entfernen, Komprimieren, Escapen
**Datenkonvertierung**: XML, YAML, CSV, Excel, HTML, PDF
**Code-Generierung**: TypeScript, Dart, C, Go, Rust, Python, Schema
**Analyse**: Tabelle, Vergleich
**Dienstprogramme**: Löschen, Verlauf, Schriftgröße

---

## 🔧 Technische Details

### Tech-Stack

| Komponente | Technologie | Version |
|-----------|-----------|---------|
| Framework | Astro | 4.15+ |
| Editor | Monaco Editor | Latest |
| Styles | Natives CSS | - |
| Sprache | JavaScript | ES6+ |
| Deployment | Cloudflare Pages/Workers | - |

### Architektur

```
┌─────────────────────────────────────────┐
│           Benutzerbrowser                │
│  ┌──────────────────────────────────┐  │
│  │    Astro Frontend-Anwendung       │  │
│  ├──────────────────────────────────┤  │
│  │  • Intelligente Eingabe-Erkennung │  │
│  │  • Konvertierungs-Engine          │  │
│  │  • Code-Generierungs-Module       │  │
│  │  • Monaco Editor Integration      │  │
│  │  • Verwaltungsverlauf (lokal)     │  │
│  └──────────────────────────────────┘  │
│                                         │
│  100% Client-Verarbeitung               │
│  ❌ Keine Server-Uploads                │
│  ✅ Vollständige Privatsphäre           │
└─────────────────────────────────────────┘
```

---

## 🚢 Bereitstellung

### Cloudflare Pages (Empfohlen)

```bash
# Projekt bauen
npm run build

# Mit Wrangler CLI bereitstellen
npm install -g wrangler
wrangler login
wrangler pages deploy dist
```

### Andere Plattformen

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

## 🎓 Anwendungsfälle

### Für Entwickler
- ✅ API-Antworten debuggen
- ✅ TypeScript-Interfaces generieren
- ✅ Konfigurationsdateien konvertieren
- ✅ JSON-Unterschiede vergleichen

### Für Datenanalysten
- ✅ JSON in CSV/Excel konvertieren
- ✅ Daten als Tabelle visualisieren
- ✅ Spezifische Felder extrahieren
- ✅ Datenstruktur validieren

---

## 🌟 Hauptfunktionen

| Funktion | Beschreibung | Status |
|---------|-------------|--------|
| Intelligente Eingabe | Automatische Erkennung von 15+ Formaten | ✅ |
| JSON-Validierung | Echtzeit-Fehlererkennung | ✅ |
| Konvertierungen | 10+ Ausgabeformate | ✅ |
| Code-Generierung | 7 Programmiersprachen | ✅ |
| JSON-Vergleich | Visuelles Diff-Tool | ✅ |
| Feldextraktion | JavaScript-Ausdrücke | ✅ |

---

## 📊 Leistung

- ⚡ **Formatierungsgeschwindigkeit**: < 100ms für 1MB JSON
- 📦 **Bündelgröße**: < 500KB (gzip)
- 🚀 **Ladezeit**: < 2s bei 3G
- 💾 **Speicherverbrauch**: < 100MB für 10MB JSON
- 🔄 **Konvertierungsgeschwindigkeit**: < 500ms für die meisten Formate

---

## 🔒 Privatsphäre und Sicherheit

- ✅ **Keine Server-Uploads**: Alle Verarbeitung erfolgt im Browser
- ✅ **Keine Analysen**: Kein Tracking-Code
- ✅ **Keine Cookies**: Kein User-Tracking
- ✅ **HTTPS**: Sichere Verbindung
- ✅ **Open Source**: Vollständig überprüfbarer Code
- ✅ **Lokale Speicherung**: Verlauf bleibt auf Ihrem Gerät

---

## 📝 Lizenz

MIT License - siehe Datei [LICENSE](LICENSE)

---

## 🙏 Danksagungen

- [Astro](https://astro.build) - Web-Framework
- [Monaco Editor](https://microsoft.github.io/monaco-editor/) - Mächtiger Code-Editor
- [Cloudflare](https://cloudflare.com) - Hosting und CDN

---

## 📞 Support

- 📧 Email: support@tojsons.com
- 🐛 Issues: [GitHub Issues](https://github.com/cenyi/neo-dev-toolkit/issues)
- 💬 Discussions: [GitHub Discussions](https://github.com/cenyi/neo-dev-toolkit/discussions)

---

<div align="ltr">

**Made with ❤️ by the JSON Tools Team**

🔗 [Live Demo](https://tojsons.com) • 📖 [Docs](https://tojsons.com/docs) • 🐛 [Issues](https://github.com/cenyi/neo-dev-toolkit/issues)

[🇺🇸 English](README.md) | [🇨🇳 简体中文](README.zh.md) | 🇩🇪 German
</div>
