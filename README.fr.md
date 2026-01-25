# Formateur JSON et Convertisseur Multiformat

<div align="ltr" >

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![Astro](https://img.shields.io/badge/Astro-4.15-FF5D01.svg)
![Cloudflare](https://img.shields.io/badge/Cloudflare-Pages-orange.svg)

**La Boîte à Outils JSON Ultime - Formater, Convertir, Valider JSON en ligne**

[🇺🇸 English](README.md) • [🇨🇳 简体中文](README.zh.md) • 🇫🇷 Français

</div>

---

## ✨ Résumé

Puissant kit d'outils JSON basé sur navigateur. Prend en charge 20+ conversions de format et génération de code.

---

## 🚀 Démarrage Rapide

### Installation

```bash
# Cloner le dépôt
git clone https://github.com/cenyi/neo-dev-toolkit.git

# Installer les dépendances
npm install

# Démarrer le serveur de développement
npm run dev

# Construire pour la production
npm run build
```

---

## 🎯 Fonctionnalités

### Fonctionnalités Principales

- ✨ **Entrée Intelligente**: Détection automatique de JSON, URL, XML, YAML et 15+ formats
- 🔄 **20+ Convertisseurs**: JSON ↔ YAML/XML/CSV/HTML/PDF/Table et plus
- 💻 **Génération de Code**: TypeScript, Dart, Go, Rust, Python, C, JSON Schema
- 🔍 **Outils Avancés**: Comparaison JSON, diff, extraction de champs, validation
- 🌐 **Support Bilingue**: Support complet en anglais et français
- 📱 **Optimisation Mobile**: Fonctionne parfaitement sur tous les appareils
- 🔒 **Confidentialité d'Abord**: 100% basé sur navigateur, pas de téléchargements serveur

---

## 📖 Exemples d'Utilisation

### Exemple 1: Réponse API

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

**Extraire tous les emails**:
```javascript
obj => obj.data.users.map(u => u.email)
```

### Exemple 2: Conversion YAML

**Entrée (détectée automatiquement comme YAML)**:
```yaml
server:
  host: localhost
  port: 8080
```

**Automatiquement converti en JSON** → **Générer structure Go**

---

## 🎨 Fonctionnalités de l'Interface

### Design Réactif

- 🖥️ **Bureau**: Mise en page multi-colonnes, éditeurs côte à côte
- 📱 **Tablette**: Grille à 2 colonnes optimisée
- 📲 **Mobile**: Colonne unique, boutons tactiles

### Organisation des Boutons

Les boutons sont regroupés par fonctionnalité :
```
[Opérations de Base] | [Conversion de Données] | [Génération de Code] | [Analyse] | [Utilitaires]
```

**Opérations de Base**: Réduire, Développer, Supprimer Commentaires, Comprimer, Échapper
**Conversion de Données**: XML, YAML, CSV, Excel, HTML, PDF
**Génération de Code**: TypeScript, Dart, C, Go, Rust, Python, Schema
**Analyse**: Tableau, Comparaison
**Utilitaires**: Effacer, Historique, Taille de Police

---

## 🔧 Détails Techniques

### Stack Technologique

| Composant | Technologie | Version |
|-----------|-----------|---------|
| Framework | Astro | 4.15+ |
| Éditeur | Monaco Editor | Latest |
| Styles | CSS Natif | - |
| Langage | JavaScript | ES6+ |
| Déploiement | Cloudflare Pages/Workers | - |

### Architecture

```
┌─────────────────────────────────────────┐
│           Navigateur Utilisateur         │
│  ┌──────────────────────────────────┐  │
│  │    Application Astro Frontend     │  │
│  ├──────────────────────────────────┤  │
│  │  • Détection Intelligente d'Entrée│  │
│  │  • Moteur de Conversion           │  │
│  │  • Modules de Génération de Code  │  │
│  │  • Intégration Monaco Editor      │  │
│  │  • Gestion de l'Historique (local)│  │
│  └──────────────────────────────────┘  │
│                                         │
│  100% Traitement Côté Client            │
│  ❌ Pas de Téléchargements Serveur      │
│  ✅ Confidentialité Complète            │
└─────────────────────────────────────────┘
```

---

## 🚢 Déploiement

### Cloudflare Pages (Recommandé)

```bash
# Construire le projet
npm run build

# Déployer en utilisant Wrangler CLI
npm install -g wrangler
wrangler login
wrangler pages deploy dist
```

### Autres Plateformes

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

## 🎓 Cas d'Utilisation

### Pour les Développeurs
- ✅ Déboguer les réponses API
- ✅ Générer des interfaces TypeScript
- ✅ Convertir les fichiers de configuration
- ✅ Comparer les différences JSON

### Pour les Analystes de Données
- ✅ Convertir JSON en CSV/Excel
- ✅ Visualiser les données comme tableau
- ✅ Extraire des champs spécifiques
- ✅ Valider la structure des données

---

## 🌟 Fonctionnalités Clés

| Fonction | Description | Statut |
|---------|-------------|--------|
| Entrée Intelligente | Détection automatique de 15+ formats | ✅ |
| Validation JSON | Détection d'erreurs en temps réel | ✅ |
| Conversions | 10+ formats de sortie | ✅ |
| Génération de Code | 7 langages de programmation | ✅ |
| Comparaison JSON | Outil diff visuel | ✅ |
| Extraction de Champs | Expressions JavaScript | ✅ |

---

## 📊 Performance

- ⚡ **Vitesse de Formatage**: < 100ms pour 1MB JSON
- 📦 **Taille du Paquet**: < 500KB (gzip)
- 🚀 **Temps de Chargement**: < 2s en 3G
- 💾 **Utilisation Mémoire**: < 100MB pour 10MB JSON
- 🔄 **Vitesse de Conversion**: < 500ms pour la plupart des formats

---

## 🔒 Confidentialité et Sécurité

- ✅ **Pas de Téléchargements Serveur**: Tout le traitement est effectué dans le navigateur
- ✅ **Pas d'Analytiques**: Pas de code de suivi
- ✅ **Pas de Cookies**: Pas de suivi d'utilisateur
- ✅ **HTTPS**: Connexion sécurisée
- ✅ **Code Ouvert**: Code entièrement vérifiable
- ✅ **Stockage Local**: L'historique reste sur votre appareil

---

## 📝 Licence

Licence MIT - voir fichier [LICENSE](LICENSE)

---

## 🙏 Remerciements

- [Astro](https://astro.build) - Framework Web
- [Monaco Editor](https://microsoft.github.io/monaco-editor/) - Éditeur de Code Puissant
- [Cloudflare](https://cloudflare.com) - Hébergement et CDN

---

## 📞 Support

- 📧 Email: support@tojsons.com
- 🐛 Issues: [GitHub Issues](https://github.com/cenyi/neo-dev-toolkit/issues)
- 💬 Discussions: [GitHub Discussions](https://github.com/cenyi/neo-dev-toolkit/discussions)

---

<div align="ltr">

**Made with ❤️ by the JSON Tools Team**

🔗 [Live Demo](https://tojsons.com) • 📖 [Docs](https://tojsons.com/docs) • 🐛 [Issues](https://github.com/cenyi/neo-dev-toolkit/issues)

[🇺🇸 English](README.md) | [🇨🇳 简体中文](README.zh.md) | 🇫🇷 French
</div>
