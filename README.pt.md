# Formatador JSON e Conversor Multiformato

<div align="ltr" >

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![Astro](https://img.shields.io/badge/Astro-4.15-FF5D01.svg)
![Cloudflare](https://img.shields.io/badge/Cloudflare-Pages-orange.svg)

**O Kit de Ferramentas JSON Definitivo - Formate, Converta, Valide JSON online**

[🇺🇸 English](README.md) • [🇨🇳 简体中文](README.zh.md) • 🇧🇷 Português

</div>

---

## ✨ Resumo

Poderoso kit de ferramentas JSON baseado em navegador. Suporta 20+ conversões de formato e geração de código.

---

## 🚀 Início Rápido

### Instalação

```bash
# Clonar repositório
git clone https://github.com/cenyi/neo-dev-toolkit.git

# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev

# Build para produção
npm run build
```

---

## 🎯 Recursos

### Principais Funcionalidades

- ✨ **Entrada Inteligente**: Detecção automática de JSON, URL, XML, YAML e 15+ formatos
- 🔄 **20+ Conversores**: JSON ↔ YAML/XML/CSV/HTML/PDF/Table e mais
- 💻 **Geração de Código**: TypeScript, Dart, Go, Rust, Python, C, JSON Schema
- 🔍 **Ferramentas Avançadas**: Comparação JSON, diff, extração de campos, validação
- 🌐 **Suporte Bilingue**: Suporte completo em inglês e português
- 📱 **Otimização Mobile**: Funciona perfeitamente em todos os dispositivos
- 🔒 **Privacidade Primeiro**: 100% baseado em navegador, sem uploads para servidor

---

## 📖 Exemplos de Uso

### Exemplo 1: Resposta API

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

**Extrair todos os emails**:
```javascript
obj => obj.data.users.map(u => u.email)
```

### Exemplo 2: Conversão YAML

**Entrada (detectada automaticamente como YAML)**:
```yaml
server:
  host: localhost
  port: 8080
```

**Automaticamente convertido para JSON** → **Gerar estrutura Go**

---

## 🎨 Recursos de Interface

### Design Responsivo

- 🖥️ **Desktop**: Layout multicolumnas, editores lado a lado
- 📱 **Tablet**: Grade de 2 colunas otimizada
- 📲 **Mobile**: Coluna única, botões de toque

### Organização de Botões

Os botões estão agrupados por funcionalidade:
```
[Operações Básicas] | [Conversão de Dados] | [Geração de Código] | [Análise] | [Utilidades]
```

**Operações Básicas**: Recolher, Expandir, Remover Comentários, Comprimir, Escapar
**Conversão de Dados**: XML, YAML, CSV, Excel, HTML, PDF
**Geração de Código**: TypeScript, Dart, C, Go, Rust, Python, Schema
**Análise**: Tabela, Comparação
**Utilidades**: Limpar, Histórico, Tamanho da Fonte

---

## 🔧 Detalhes Técnicos

### Stack Tecnológico

| Componente | Tecnologia | Versão |
|-----------|-----------|---------|
| Framework | Astro | 4.15+ |
| Editor | Monaco Editor | Latest |
| Estilos | CSS Nativo | - |
| Linguagem | JavaScript | ES6+ |
| Deploy | Cloudflare Pages/Workers | - |

### Arquitetura

```
┌─────────────────────────────────────────┐
│           Navegador do Usuário           │
│  ┌──────────────────────────────────┐  │
│  │    Aplicação Astro Frontend       │  │
│  ├──────────────────────────────────┤  │
│  │  • Detecção Inteligente de Entrada│  │
│  │  • Motor de Conversão             │  │
│  │  • Módulos de Geração de Código  │  │
│  │  • Integração Monaco Editor       │  │
│  │  • Gestão de Histórico (local)    │  │
│  └──────────────────────────────────┘  │
│                                         │
│  100% Processamento Cliente             │
│  ❌ Sem Uploads para Servidor           │
│  ✅ Privacidade Completa                │
└─────────────────────────────────────────┘
```

---

## 🚢 Deploy

### Cloudflare Pages (Recomendado)

```bash
# Build do projeto
npm run build

# Deploy usando Wrangler CLI
npm install -g wrangler
wrangler login
wrangler pages deploy dist
```

### Outras Plataformas

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

### Para Desenvolvedores
- ✅ Depurar respostas API
- ✅ Gerar interfaces TypeScript
- ✅ Converter arquivos de configuração
- ✅ Comparar diferenças JSON

### Para Analistas de Dados
- ✅ Converter JSON para CSV/Excel
- ✅ Visualizar dados como tabela
- ✅ Extrair campos específicos
- ✅ Validar estrutura de dados

---

## 🌟 Recursos Principais

| Recurso | Descrição | Status |
|---------|-------------|--------|
| Entrada Inteligente | Detecção automática de 15+ formatos | ✅ |
| Validação JSON | Detecção de erros em tempo real | ✅ |
| Conversões | 10+ formatos de saída | ✅ |
| Geração de Código | 7 linguagens de programação | ✅ |
| Comparação JSON | Ferramenta diff visual | ✅ |
| Extração de Campos | Expressões JavaScript | ✅ |

---

## 📊 Performance

- ⚡ **Velocidade de Formatação**: < 100ms para 1MB JSON
- 📦 **Tamanho do Pacote**: < 500KB (gzip)
- 🚀 **Tempo de Carregamento**: < 2s em 3G
- 💾 **Uso de Memória**: < 100MB para 10MB JSON
- 🔄 **Velocidade de Conversão**: < 500ms para a maioria dos formatos

---

## 🔒 Privacidade e Segurança

- ✅ **Sem Uploads para Servidor**: Todo processamento é feito no navegador
- ✅ **Sem Análises**: Sem código de rastreamento
- ✅ **Sem Cookies**: Sem rastreamento de usuário
- ✅ **HTTPS**: Conexão segura
- ✅ **Código Aberto**: Código completamente verificável
- ✅ **Armazenamento Local**: O histórico permanece no seu dispositivo

---

## 📝 Licença

Licença MIT - ver arquivo [LICENSE](LICENSE)

---

## 🙏 Agradecimentos

- [Astro](https://astro.build) - Framework Web
- [Monaco Editor](https://microsoft.github.io/monaco-editor/) - Poderoso Editor de Código
- [Cloudflare](https://cloudflare.com) - Hosting e CDN

---

## 📞 Support

- 📧 Email: support@tojsons.com
- 🐛 Issues: [GitHub Issues](https://github.com/cenyi/neo-dev-toolkit/issues)
- 💬 Discussions: [GitHub Discussions](https://github.com/cenyi/neo-dev-toolkit/discussions)

---

<div align="ltr">

**Made with ❤️ by the JSON Tools Team**

🔗 [Live Demo](https://tojsons.com) • 📖 [Docs](https://tojsons.com/docs) • 🐛 [Issues](https://github.com/cenyi/neo-dev-toolkit/issues)

[🇺🇸 English](README.md) | [🇨🇳 简体中文](README.zh.md) | 🇧🇷 Portuguese
</div>
