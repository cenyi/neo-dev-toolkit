# JSON 포맷터 및 멀티 포맷 변환기

<div align="ltr" >

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![Astro](https://img.shields.io/badge/Astro-4.15-FF5D01.svg)
![Cloudflare](https://img.shields.io/badge/Cloudflare-Pages-orange.svg)

**궁극의 JSON 툴킷 - 온라인 JSON 포맷, 변환, 검증**

[🇺🇸 English](README.md) • [🇨🇳 简体中文](README.zh.md) • 🇰🇷 한국어

</div>

---

## ✨ 개요

강력한 브라우저 기반 JSON 도구 툴킷. 20+ 형식 변환과 코드 생성을 지원.

---

## 🚀 빠른 시작

### 설치

```bash
# 리포지토리 복제
git clone https://github.com/cenyi/neo-dev-toolkit.git

# 의존성 설치
npm install

# 개발 서버 시작
npm run dev

# 프로덕션 빌드
npm run build
```

---

## 🎯 기능

### 주요 기능

- ✨ **스마트 입력**: JSON, URL, XML, YAML 및 15+ 형식 자동 감지
- 🔄 **20+ 변환기**: JSON ↔ YAML/XML/CSV/HTML/PDF/Table 등
- 💻 **코드 생성**: TypeScript, Dart, Go, Rust, Python, C, JSON Schema
- 🔍 **고급 도구**: JSON 비교, diff, 필드 추출, 검증
- 🌐 **다국어 지원**: 영어와 한국어 완전 지원
- 📱 **모바일 최적화**: 모든 장치에서 완벽하게 작동
- 🔒 **개인정보 우선**: 100% 브라우저 기반, 서버 업로드 없음

---

## 📖 사용 예시

### 예 1: API 응답

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

**모든 email 추출**:
```javascript
obj => obj.data.users.map(u => u.email)
```

### 예 2: YAML 변환

**입력(YAML로 자동 감지)**:
```yaml
server:
  host: localhost
  port: 8080
```

**자동으로 JSON 변환** → **Go 구조체 생성**

---

## 🎨 UI 기능

### 반응형 디자인

- 🖥️ **데스크톱**: 다중 열 레이아웃, 사이드바이사이드 에디터
- 📱 **태블릿**: 최적화된 2열 그리드
- 📲 **모바일**: 단일 열, 터치 버튼

### 버튼 구성

버튼은 기능별로 그룹화되어 있습니다:
```
[기본 작업] | [데이터 변환] | [코드 생성] | [분석] | [유틸리티]
```

**기본 작업**: 접기, 펴기, 주석 제거, 압축, 이스케이프
**데이터 변환**: XML, YAML, CSV, Excel, HTML, PDF
**코드 생성**: TypeScript, Dart, C, Go, Rust, Python, Schema
**분석**: 테이블, 비교
**유틸리티**: 지우기, 기록, 글꼴 크기

---

## 🔧 기술적 세부사항

### 기술 스택

| 구성요소 | 기술 | 버전 |
|-----------|-----------|---------|
| 프레임워크 | Astro | 4.15+ |
| 에디터 | Monaco Editor | Latest |
| 스타일 | 네이티브 CSS | - |
| 언어 | JavaScript | ES6+ |
| 배포 | Cloudflare Pages/Workers | - |

### 아키텍처

```
┌─────────────────────────────────────────┐
│           사용자 브라우저                │
│  ┌──────────────────────────────────┐  │
│  │    Astro 프론트엔드 애플리케이션     │  │
│  ├──────────────────────────────────┤  │
│  │  • 스마트 입력 감지                │  │
│  │  • 변환 엔진                      │  │
│  │  • 코드 생성 모듈                 │  │
│  │  • Monaco Editor 통합             │  │
│  │  • 기록 관리(로컬)                │  │
│  └──────────────────────────────────┘  │
│                                         │
│  100% 클라이언트 처리                   │
│  ❌ 서버 업로드 없음                   │
│  ✅ 완전한 개인정보 보호               │
└─────────────────────────────────────────┘
```

---

## 🚢 배포

### Cloudflare Pages (권장)

```bash
# 프로젝트 빌드
npm run build

# Wrangler CLI 사용하여 배포
npm install -g wrangler
wrangler login
wrangler pages deploy dist
```

### 다른 플랫폼

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

## 🎓 사용 사례

### 개발자를 위한
- ✅ API 응답 디버깅
- ✅ TypeScript 인터페이스 생성
- ✅ 설정 파일 변환
- ✅ JSON 차이 비교

### 데이터 분석가를 위한
- ✅ JSON을 CSV/Excel로 변환
- ✅ 테이블로 데이터 시각화
- ✅ 특정 필드 추출
- ✅ 데이터 구조 검증

---

## 🌟 핵심 기능

| 기능 | 설명 | 상태 |
|---------|-------------|--------|
| 스마트 입력 | 15+ 형식 자동 감지 | ✅ |
| JSON 검증 | 실시간 오류 감지 | ✅ |
| 변환 | 10+ 출력 형식 | ✅ |
| 코드 생성 | 7개 프로그래밍 언어 | ✅ |
| JSON 비교 | 시각적 diff 도구 | ✅ |
| 필드 추출 | JavaScript 표현식 | ✅ |

---

## 📊 성능

- ⚡ **포맷 속도**: 1MB JSON < 100ms
- 📦 **번들 크기**: < 500KB (gzip)
- 🚀 **로드 시간**: 3G에서 < 2s
- 💾 **메모리 사용량**: 10MB JSON < 100MB
- 🔄 **변환 속도**: 대부분 형식 < 500ms

---

## 🔒 개인정보 보호 및 보안

- ✅ **서버 업로드 없음**: 모든 처리는 브라우저에서 수행됩니다
- ✅ **분석 없음**: 추적 코드가 없습니다
- ✅ **쿠키 없음**: 사용자 추적이 없습니다
- ✅ **HTTPS**: 안전한 연결
- ✅ **오픈 소스**: 완전히 검증 가능한 코드
- ✅ **로컬 저장소**: 기록은 장치에 남습니다

---

## 📝 라이선스

MIT License - [LICENSE](LICENSE) 파일 참조

---

## 🙏 감사의 말

- [Astro](https://astro.build) - 웹 프레임워크
- [Monaco Editor](https://microsoft.github.io/monaco-editor/) - 강력한 코드 에디터
- [Cloudflare](https://cloudflare.com) - 호스팅 및 CDN

---

## 📞 Support

- 📧 Email: support@tojsons.com
- 🐛 Issues: [GitHub Issues](https://github.com/cenyi/neo-dev-toolkit/issues)
- 💬 Discussions: [GitHub Discussions](https://github.com/cenyi/neo-dev-toolkit/discussions)

---

<div align="ltr">

**Made with ❤️ by the JSON Tools Team**

🔗 [Live Demo](https://tojsons.com) • 📖 [Docs](https://tojsons.com/docs) • 🐛 [Issues](https://github.com/cenyi/neo-dev-toolkit/issues)

[🇺🇸 English](README.md) | [🇨🇳 简体中文](README.zh.md) | 🇰🇷 Korean
</div>
