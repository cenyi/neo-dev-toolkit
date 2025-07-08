export const ko = {
  translation: {
    nav: { home: '홈', json: 'JSON', network: '네트워크', text: '텍스트', time: '시간', encryption: '암호화', markdown: 'Markdown', mermaid: 'Mermaid' },
    common: { theme: '테마', language: '언어', light: '라이트', dark: '다크', copy: '복사', clear: '지우기', format: '형식 지정', minify: '최소화', validate: '유효성 검사', convert: '변환', encrypt: '암호화', decrypt: '복호화', preview: '미리보기', download: '다운로드', toYaml: 'YAML로', toXml: 'XML로', toCsv: 'CSV로', blue: '파란색', system: '시스템', comingSoon: '곧 출시 예정' },
    home: { title: '개발자 도구 허브', subtitle: '현대적인 뉴모피즘 디자인의 전문 개발 도구', description: 'JSON 서식 지정, 텍스트 처리, 암호화 등을 포함한 필수 개발자 도구 모음입니다.' },
    tools: { 
      json: {
        title: 'JSON 도구',
        description: '포맷팅, 검증, 스키마 확인 및 데이터 조작을 위한 포괄적인 JSON 도구.',
        formatter: {
          title: 'JSON 포맷터 & 유효성 검사기',
          description: 'JSON 데이터의 형식을 지정하고, 예쁘게 만들고, 유효성을 검사합니다.'
        },
        schemaValidator: {
          title: 'JSON 스키마 유효성 검사기',
          description: 'JSON 스키마에 대해 JSON 객체의 유효성을 검사합니다.'
        },
        codegen: {
          title: '코드 타입 생성',
          description: 'JSON 객체에서 다양한 언어로 코드 타입을 생성합니다.'
        },
        history: {
          title: '기록'
        },
        generateGraph: '그래프 생성',
        extractValue: '값 추출',
        fieldPath: '필드 경로',
        extractPlaceholder: 'JSONPath 입력 (예: $.users[0].name)',
        graphTitle: 'JSON 구조 그래프',
        input: '입력',
        output: '출력',
        outputPlaceholder: '포맷된 JSON이 여기에 표시됩니다',
        placeholder: 'JSON 데이터를 입력하거나 붙여넣어주세요',
        validJson: '유효한 JSON',
        invalidJson: '유효하지 않은 JSON',
        diff: {
          title: 'JSON 비교 도구',
          description: '두 개의 JSON 객체를 비교하고 차이점을 강조 표시합니다.'
        },
        mock: {
          title: '모의 데이터 생성기',
          description: '테스트 및 개발을 위한 모의 JSON 데이터를 생성합니다.'
        }
      },
      network: {
        title: '네트워크 및 인코딩 도구',
        description: '무료 네트워크 도구: URL 인코더/디코더, Base64 변환기, IP 조회 및 JWT 디코더. 안전한 클라이언트 측 처리, 데이터 저장 필요 없음.',
        subtitle: '웹 개발자를 위한 필수 네트워크 및 인코딩 유틸리티. 안전하고 개인 정보 보호에 중점을 둔 도구를 사용하여 URL 인코딩, Base64 변환, IP 조회 및 JWT 디코딩을 처리합니다.',
        utilityTools: '네트워크 유틸리티 도구',
        secureTitle: '안전한 네트워크 유틸리티',
        clientSideProcessing: {
          title: '클라이언트 측 처리',
          description: '최대 보안을 위해 모든 인코딩 및 디코딩이 브라우저에서 수행됩니다.'
        },
        noDataStorage: {
          title: '데이터 저장 없음',
          description: '입력 데이터나 결과를 저장하거나 기록하지 않습니다.'
        },
        instantResults: {
          title: '즉시 결과',
          description: '입력하는 동안 실시간 결과로 빠른 처리.'
        },
        urlEncoder: {
          title: 'URL 인코더/디코더',
          description: '안전한 전송을 위해 URL을 인코딩하거나 백분율로 인코딩된 URL을 디코딩합니다.'
        },
        base64Encoder: {
          title: 'Base64 인코더/디코더',
          description: '텍스트를 Base64로 인코딩하거나 Base64 문자열을 다시 텍스트로 디코딩합니다.'
        },
        ipLookup: {
          title: 'IP 주소 조회',
          description: '모든 IP 주소에 대한 지리적 위치, ISP 정보 및 네트워크 세부 정보를 가져옵니다.',
          placeholder: 'IP 주소 또는 도메인 이름 입력',
          lookup: '조회',
          myIp: '내 IP 확인',
          results: '조회 결과'
        },
        jwtDecoder: {
          title: 'JWT 토큰 디코더',
          description: 'JSON 웹 토큰을 디코딩하고 헤더, 페이로드 및 서명 정보를 봅니다.'
        },
        base64: {
          title: 'Base64 인코더/디코더',
          description: '텍스트를 Base64로 인코딩하거나 Base64 문자열을 다시 텍스트로 디코딩합니다.',
          encode: '인코딩',
          decode: '디코딩',
          input: '입력',
          output: '출력',
          inputPlaceholder: '인코딩 또는 디코딩할 텍스트를 입력하세요...',
          outputPlaceholder: '인코딩 또는 디코딩된 결과가 여기에 표시됩니다'
        }
      }, 
      text: {
        title: '텍스트 도구',
        description: '텍스트 처리, 대소문자 변환, 포맷팅',
        caseConverter: {
          title: '대소문자 변환기',
          description: '텍스트를 대문자, 소문자, 제목 케이스, 문장 케이스로 변환합니다.',
          placeholder: '변환할 텍스트를 입력하세요...',
          upperCase: '대문자',
          lowerCase: '소문자',
          titleCase: '제목 케이스',
          sentenceCase: '문장 케이스',
          result: '결과'
        },
        wordCounter: {
          title: '단어 및 문자 카운터',
          description: '텍스트의 단어, 문자, 문장, 단락을 세어보세요.',
          placeholder: '단어와 문자를 세기 위해 여기에 텍스트를 입력하세요...',
          words: '단어',
          characters: '문자',
          charactersNoSpaces: '문자 (공백 제외)',
          sentences: '문장',
          paragraphs: '단락'
        },
        textReverser: {
          title: '텍스트 리버서',
          description: '텍스트의 문자 순서를 즉시 뒤집습니다.',
          placeholder: '뒤집을 텍스트를 입력하세요...',
          reversedText: '뒤집힌 텍스트'
        },
        whitespaceRemover: {
          title: '공백 제거 도구',
          description: '여분의 공백을 제거하고, 공백을 다듬고, 텍스트 서식을 정리합니다.',
          placeholder: '공백을 정리할 텍스트를 입력하세요...',
          result: '정리된 텍스트',
          removeAll: '모든 공백 제거',
          removeTrim: '공백 다듬기',
          removeExtra: '여분의 공백 제거',
          removeLines: '빈 줄 제거'
        },
        loremIpsumGenerator: {
          title: 'Lorem Ipsum 생성기',
          description: '디자인 및 개발 프로젝트를 위한 플레이스홀더 텍스트를 생성합니다.',
          count: '개수',
          type: '유형',
          paragraphs: '단락',
          sentences: '문장',
          words: '단어',
          generate: '생성',
          copy: '복사',
          copied: '클립보드에 복사됨'
        },
        textDiff: {
          title: '텍스트 비교 도구',
          description: '두 텍스트를 비교하고 시각적 차이 표시로 차이점을 강조 표시합니다.',
          compareText: '텍스트 비교',
          clearAll: '모두 지우기',
          originalText: '원본 텍스트',
          newText: '새 텍스트'
        }
      },
        crypto: {
        title: '암호화 도구',
        description: '암호화 도구로 데이터를 보호하세요: 해시 생성기(MD5, SHA-1, SHA-256, SHA-512), HMAC 및 AES 암호화.',
        jwtDecoder: {
          title: 'JWT 디코더',
          description: 'JSON 웹 토큰을 디코딩하고 검사하여 페이로드 및 헤더 데이터를 봅니다.'
        },
        encryption: {
          title: '암호화 도구',
          description: 'AES, DES 및 Rabbit과 같은 다양한 알고리즘을 사용하여 텍스트를 암호화하고 복호화합니다.'
        }
      },
        time: {
          title: '날짜 및 시간 도구',
          description: '타임스탬프 변환, 시간대 처리 및 날짜 계산을 위한 필수 날짜 및 시간 유틸리티.'
        }
      },
      time: {
        description: '타임스탬프 변환, 시간대 처리 및 날짜 계산을 위한 필수 날짜 및 시간 유틸리티.',
        meta: {
        title: '날짜 및 시간 도구 - 타임스탬프, 시간대 및 날짜 계산기',
        description: '무료 시간 도구: 타임스탬프 변환기, 시간대 계산기 및 날짜 산술. 정확하고 DST를 지원하며 개발자에게 친숙한 유틸리티.'
      },
      title: '날짜 및 시간 도구',
      subtitle: '개발자와 전문가를 위한 필수 날짜 및 시간 유틸리티. 타임스탬프 변환, 시간대 계산 및 날짜 산술을 정밀하게 처리합니다.',
      toolsTitle: '시간 관리 도구',
      timestamp: {
        title: '타임스탬프 변환기',
        description: 'Unix 타임스탬프와 사람이 읽을 수 있는 날짜 및 시간 간에 변환합니다.'
      },
      timezone: {
        title: '시간대 변환기',
        description: 'DST를 지원하여 전 세계 여러 시간대 간에 날짜와 시간을 변환합니다.'
      },
      dateCalculator: {
        title: '날짜 계산기',
        description: '날짜에서 일, 월, 년을 더하거나 뺍니다. 날짜 차이를 계산합니다.'
      },
      calculations: {
        title: '정확한 시간 계산',
        precise: {
          title: '정확한 계산',
          description: '복잡한 시간대 변환 및 날짜 계산을 정확하게 처리합니다.'
        },
        global: {
          title: '글로벌 지원',
          description: '자동 일광 절약 시간 조정 기능으로 모든 세계 시간대를 지원합니다.'
        },
        developerFriendly: {
          title: '개발자 친화적',
          description: 'API 개발, 로그 분석 및 타임스탬프 디버깅에 적합합니다.'
        }
      }
    },
      regex: { title: '정규표현식 도구', description: '정규표현식 테스트 및 검증' },
      editor: {
        meta: {
          title: '코드 및 문서 편집기',
          description: '무료 온라인 편집기: 실시간 미리보기가 포함된 Markdown 편집기 및 Mermaid 다이어그램 도구. 전문적인 콘텐츠를 쉽게 작성, 미리보기 및 내보내기할 수 있습니다.'
        },
        title: '코드 및 문서 편집기',
        subtitle: 'Markdown 문서 및 Mermaid 다이어그램을 위한 전문 온라인 편집기. 실시간 렌더링으로 콘텐츠를 만들고, 편집하고, 미리볼 수 있습니다.',
        toolsTitle: '에디터 도구',
        experience: {
          title: '전문적인 편집 경험',
          livePreview: {
            title: '실시간 미리보기',
            description: '입력하는 동안 Markdown 및 Mermaid 다이어그램이 실시간으로 렌더링되는 것을 확인하세요.'
          },
          syntaxHighlighting: {
            title: '구문 강조',
            description: '구문 강조 및 자동 완성 기능이 있는 전문 코드 편집기.'
          },
          exportReady: {
            title: '내보내기 준비 완료',
            description: '렌더링된 콘텐츠를 복사하거나 다운로드하여 문서 및 프레젠테이션에 사용할 수 있습니다.'
          }
        },
        markdown: {
          title: 'Markdown 편집기',
          description: '구문 강조 및 실시간 미리보기로 Markdown을 작성하고 미리봅니다.',
          placeholder: '여기에 Markdown 내용을 입력하세요...'
        },
        mermaid: {
          title: 'Mermaid 다이어그램 편집기',
          description: 'Mermaid 구문을 사용하여 순서도, 시퀀스 다이어그램 및 기타 다이어그램을 만듭니다.',
          invalidSyntax: '잘못된 Mermaid 구문'
        }
      } 
    },
    toasts: {
      common: {
        error: '오류',
        success: '성공',
        info: '정보',
        notFound: '찾을 수 없음'
      },
      error: {
        invalidJson: '유효한 JSON을 입력해주세요',
        invalidJsonFormat: '잘못된 JSON 형식',
        missingPath: '추출 경로를 입력해주세요',
        notFound: '지정된 경로에서 값을 찾을 수 없습니다',
        extractError: '값 추출 중 오류가 발생했습니다'
      },
      success: {
        formattedAndCopied: 'JSON이 형식화되어 클립보드에 복사되었습니다',
        minifiedAndCopied: 'JSON이 최소화되어 클립보드에 복사되었습니다',
        copied: '클립보드에 복사되었습니다',
        extractedAndCopied: '값이 추출되어 클립보드에 복사되었습니다',
        graphGenerated: '그래프가 성공적으로 생성되었습니다'
      },
      info: {
        emptyContent: '복사할 내용이 없습니다'
      }
    },
    footer: {
      legal: '법률',
      company: '회사',
      friendlyLinks: '관련 링크',
      privacy: '개인정보 처리방침',
      terms: '서비스 약관',
      about: '소개',
      copyright: '© {{year}} 개발자 도구 허브. 모든 권리 보유.',
      description: '개발을 위한 원스톱 "스위스 아미 나이프". JSON, 텍스트, 암호화 등을 위한 도구로 워크플로를 간소화하세요.',
      vercel: 'Vercel',
      github: 'GitHub',
      deepseek: 'DeepSeek',
    },
    about: {
      title: '우리에 관하여',
      missionTitle: '우리의 사명',
      missionText: '우리의 사명은 개발자에게 일상 업무를 위한 "스위스 아미 나이프" 역할을 하는 포괄적이고 사용하기 쉬우며 강력한 툴킷을 제공하는 것입니다. 우리는 개발 유틸리티를 위한 원스톱 상점을 만들어 모든 사람의 워크플로를 더 효율적이고 즐겁게 만드는 것을 목표로 합니다.',
      featuresTitle: '우리가 제공하는 것',
      feature1: '포괄적인 도구 세트: JSON 서식 지정 및 텍스트 조작에서 암호화 및 다이어그램 작성까지.',
      feature2: '현대적인 디자인: 깨끗하고 직관적이며 반응이 빠른 뉴모피즘 인터페이스.',
      feature3: '개인 정보 보호 중심: 데이터는 서버에 저장되지 않습니다. 모든 처리는 브라우저에서 이루어집니다.',
      feature4: '오픈 소스: 우리는 커뮤니티와 투명한 개발의 힘을 믿습니다.',
    },
    privacy: {
      title: '개인정보 처리방침',
      lastUpdated: '최종 업데이트: 2025년 6월 15일',
      introduction: '개발자 도구 허브에 오신 것을 환영합니다. 우리는 귀하의 개인 정보를 보호하기 위해 최선을 다하고 있습니다. 당사의 개인정보 처리방침은 당사 웹사이트 및 서비스와 관련하여 정보를 처리하는 방법을 설명합니다.',
      informationWeCollectTitle: '수집하는 정보',
      informationWeCollectText: '우리는 사용자로부터 개인 식별 정보를 수집하지 않습니다. 당사 도구로 처리되는 모든 데이터(예: JSON, 텍스트, 파일)는 클라이언트 측에 남아 있으며 서버로 전송되거나 저장되지 않습니다.',
      cookiesTitle: '쿠키 및 로컬 저장소',
      cookiesText: '우리는 선택한 테마(라이트/다크) 및 언어와 같은 기본 설정을 저장하기 위해 브라우저 로컬 저장소를 사용합니다. 이는 순전히 사용자 경험을 향상시키기 위한 기능적 목적으로, 귀하를 추적하지 않습니다.',
      thirdPartyServicesTitle: '제3자 서비스',
      thirdPartyServicesText: '당사 웹사이트는 귀하의 개인 데이터를 수집하는 제3자 서비스와 통합되지 않습니다. GitHub와 같은 외부 사이트로의 링크를 제공하지만, 해당 사이트의 개인정보 보호 관행에 대해서는 책임지지 않습니다.',
      changesToPolicyTitle: '본 정책의 변경 사항',
      changesToPolicyText: '당사는 수시로 개인정보 처리방침을 업데이트할 수 있습니다. 변경 사항이 있을 경우 이 페이지에 새 개인정보 처리방침을 게시하여 통지합니다. 정기적으로 이 개인정보 처리방침을 검토하여 변경 사항을 확인하는 것이 좋습니다.',
      contactUsTitle: '문의하기',
      contactUsText: '이 개인정보 처리방침에 대해 궁금한 점이 있으면 오픈 소스 저장소를 통해 언제든지 문의해 주십시오.',
    },
    terms: {
      title: '서비스 약관',
      lastUpdated: '최종 업데이트: 2025년 6월 15일',
      acceptanceTitle: '약관 동의',
      acceptanceText: '개발자 도구 허브("서비스")에 접속하고 사용함으로써 귀하는 본 계약의 조항을 준수하는 데 동의하게 됩니다. 본 약관을 준수하는 데 동의하지 않으시면 본 서비스를 이용하지 마십시오.',
      useOfServiceTitle: '서비스 이용',
      useOfServiceText: '본 서비스는 개인 및 상업적 용도로 무료로 제공됩니다. 귀하는 서비스를 책임감 있게 사용하고 악의적이거나 불법적인 활동에 사용하지 않을 것에 동의합니다. 당사 도구를 사용하여 처리하는 모든 데이터에 대한 책임은 전적으로 귀하에게 있습니다.',
      disclaimerTitle: '보증 부인',
      disclaimerText: '본 서비스는 명시적이든 묵시적이든 어떠한 종류의 보증도 없이 "있는 그대로" 및 "이용 가능한 대로" 제공됩니다. 당사는 서비스를 통해 처리되는 도구나 데이터의 정확성, 신뢰성 또는 완전성을 보장하지 않습니다.',
      limitationTitle: '책임의 제한',
      limitationText: '어떠한 경우에도 개발자 도구 허브 또는 그 관리자는 서비스의 사용 또는 사용 불능으로 인해 발생하는 직접적, 간접적, 부수적, 특별 또는 결과적 손해에 대해 책임을 지지 않습니다.',
      changesToTermsTitle: '약관 변경',
      changesToTermsText: '당사는 언제든지 본 약관을 수정할 권리를 보유합니다. 당사는 본 약관의 최신 버전을 이 페이지에 게시할 것입니다. 변경 후에도 서비스를 계속 사용하는 것은 새로운 약관에 동의하는 것으로 간주됩니다.',
    },
  }
;
