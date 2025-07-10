const ko = {
  translation: {
    allPagesLinks: {
      popularTools: '인기 도구',
      popularToolsDescription: '우리가 가장 유용한 개발자 도구를 엄선한 모음',
      allTools: '모든 개발자 도구',
      allToolsDescription: '개발 유틸리티의 완전한 컬렉션을 탐색하세요'
    },
    nav: {
      home: '홈',
      json: 'JSON',
      network: '네트워크',
      text: '텍스트',
      time: '시간',
      encryption: '암호화',
      markdown: '마크다운',
      mermaid: '머메이드',
      regex: '정규식',
      editor: '편집기'
    },
    navTitles: {
      home: '홈으로 이동 - 무료 개발자 도구 허브',
      json: 'JSON 도구 - JSON 데이터 형식 지정, 유효성 검사 및 처리',
      network: '네트워크 도구 - URL 인코딩, IP 조회 및 유틸리티',
      text: '텍스트 도구 - 텍스트 형식 처리 및 변환',
      time: '시간 도구 - 타임스탬프 및 타임존 변환기',
      encryption: '암호화 도구 - 해시 생성 및 암호 유틸리티',
      regex: '정규 표현식 도구 - 정규식 패턴 테스트 및 유효성 검사',
      editor: '코드 편집기 - 마크다운 및 머메이드 다이어그램 편집기'
    },
    common: {
      theme: '테마',
      language: '언어',
      light: '밝은 모드',
      dark: '어두운 모드',
      copy: '복사',
      clear: '지우기',
      format: '형식 지정',
      minify: '축소',
      validate: '유효성 검사',
      convert: '변환',
      encrypt: '암호화',
      decrypt: '복호화',
      preview: '미리 보기',
      download: '다운로드',
      toYaml: 'YAML로 변환',
      toXml: 'XML로 변환',
      toCsv: 'CSV로 변환',
      toDart: 'Dart로 변환',
      blue: '파랑색',
      system: '시스템',
      comingSoon: '곧 출시됩니다',
      error: '오류',
      success: '성공',
      info: '정보',
      notFound: '찾을 수 없음',
      compare: '비교',
      test: '테스트',
      match: '일치',
      replace: '바꾸기',
      flags: '플래그',
      pattern: '패턴',
      input: '입력',
      output: '출력',
      result: '결과',
      graph: '구조 그래프',
      zoomLevel: '확대 수준',
      copyCode: '코드 복사',
      loadSample: '샘플 JSON 시도'
    },
    home: {
      title: '개발자 도구 허브',
      subtitle: '전문 개발 도구',
      description: 'JSON 형식 지정, 텍스트 처리, 암호화 등을 포함한 필수 개발자 도구의 포괄적인 모음. 최적의 성능을 위해.',
      headerTitle: '무료 온라인 개발자 도구 허브',
      toolsCollectionTitle: '전문 개발자 도구 모음',
      whyChooseTitle: '개발 필요에 DevTools Hub를 선택하는 이유는 무엇인가요?',
      feature1Title: '100% 무료 & 등록 없음',
      feature1Description: '모든 도구는 계정이 필요하지 않으며 완전히 무료로 사용할 수 있습니다',
      feature2Title: '개인정보 중심 개발',
      feature2Description: '데이터는 브라우저에 남아 있습니다 - 서버로 전송되지 않습니다',
      feature3Title: '현대적 반응형 인터페이스',
      feature3Description: 'Lovable AI로 구동되는 깨끗하고 반응이 빠른 디자인은 모든 기기에서 완벽하게 작동합니다'
    },
    tools: {
      json: {
        title: 'JSON 도구',
        description: '형식 지정, 유효성 검사, 스키마 확인 및 데이터 조작을 위한 포괄적인 JSON 도구.',
        formatter: {
          title: 'JSON 형식 지정기 & 유효성 검사기',
          description: 'JSON 데이터의 형식을 지정, 미려하게 만들고 유효성 검사합니다.'
        },
        schemaValidator: {
          title: 'JSON 스키마 유효성 검사기',
          description: 'JSON 객체를 JSON 스키마에 대해 유효성 검사합니다.'
        },
        codegen: {
          title: '코드 유형 생성',
          description: 'JSON 객체에서 다양한 언어로 코드 유형을 생성합니다.'
        },
        history: {
          title: '기록',
          emptyMessage: '아직 기록이 없습니다',
          searchPlaceholder: '키워드로 검색',
          clearAll: '모두 지우기',
          historyCleared: '기록이 지워졌습니다',
        },
        generateGraph: '그래프 생성',
        extractValue: '값 추출',
        fieldPath: '필드 경로',
        extractPlaceholder: 'JSONPath 입력 (예: $.users[0].name)',
        graphTitle: 'JSON 구조 그래프',
        input: '입력',
        placeholder: 'JSON 데이터를 입력하거나 붙여넣어 주세요',
        output: '출력',
        outputPlaceholder: '형식이 지정된 JSON이 여기에 표시됩니다',
        validJson: '유효한 JSON',
        invalidJson: '유효하지 않은 JSON',
        syntaxErrorAtPosition: '위치에서 구문 오류',
        syntaxErrorGeneric: '구문 오류',
        diff: {
          title: 'JSON 비교 도구',
          description: '두 개의 JSON 객체를 비교하고 차이점을 강조합니다.'
        },
        mock: {
          title: '모의 데이터 생성기',
          description: '테스트 및 개발을 위한 모의 JSON 데이터를 생성합니다.'
        },
        toDart: {
          title: 'JSON을 Dart로 변환',
          description: '사용자 정의 옵션으로 JSON 데이터를 Dart 클래스로 변환합니다.',
          configuration: '구성',
          configurationDescription: '생성된 Dart 클래스 사용자 정의',
          usePrivateFields: '专用 필드 사용',
          useModernSyntax: '최신 Dart 구문 사용',
          emptyInputError: '변환할 JSON 데이터를 입력하세요',
          convertSuccess: 'Dart 클래스로 성공적으로 변환되었습니다',
          dartOutput: 'Dart 출력',
          dartOutputPlaceholder: '생성된 Dart 클래스가 여기에 표시됩니다'
        },
        dartConfig: 'Dart 구성',
        privateFields: '专用 필드',
        modernSyntax: '최신 구문',
        rootClassNamePlaceholder: '예: MyRootClass',
        convertedToDartTitle: 'Dart 클래스로 변환됨',
        rootClassName: '루트 클래스 이름',
      },
      regex: {
        title: '정규 표현식 도구',
        description: '정규 표현식으로 테스트, 일치 및 바꾸기',
        pattern: '정규 표현식 패턴',
        patternPlaceholder: '정규식 패턴 입력...',
        testString: '테스트 문자열',
        testStringPlaceholder: '테스트할 텍스트 입력...',
        replacement: '바꿀 텍스트',
        replacementPlaceholder: '바꿀 텍스트 입력...',
        flags: '플래그',
        global: '전역 일치 (g)',
        ignoreCase: '대소문자 무시 (i)',
        multiline: '멀티라인 (m)',
        dotAll: '점이 개행문자와 일치 (s)',
        unicode: '유니코드 (u)',
        sticky: '스티키 (y)',
        matches: '일치',
        noMatches: '일치하는 항목을 찾을 수 없습니다',
        replacedText: '바뀐 텍스트',
        invalidRegex: '유효하지 않은 정규 표현식'
      },
      jwtDecoder: {
        title: 'JWT 디코더',
        description: 'JWT 토큰 디코딩 및 확인',
        encodedToken: '인코딩된 토큰',
        header: '헤더',
        payload: '페이로드',
        placeholder: '여기에 JWT를 붙여넣어 주세요',
        headerPlaceholder: '디코딩된 헤더가 여기에 표시됩니다',
        payloadPlaceholder: '디코딩된 페이로드가 여기에 표시됩니다'
      },
      jsonDiff: {
        title: 'JSON 비교',
        description: '두 개의 JSON 객체 사이의 차이점 비교',
        originalJson: '원본 JSON',
        newJson: '새 JSON',
        originalPlaceholder: '여기에 원본 JSON을 붙여넣어 주세요',
        newPlaceholder: '여기에 새 JSON을 붙여넣어 주세요',
        diffResult: '비교 결과'
      },
      network: {
        title: '네트워크 & 인코딩 도구',
        description: '무료 네트워크 도구: URL 인코더/디코더, Base64 변환기, IP 조회 & JWT 디코더. 안전하고, 클라이언트 측 처리, 데이터 저장 필요 없음.',
        subtitle: '웹 개발자를 위한 필수 네트워크 및 인코딩 유틸리티. 우리의 안전하고 개인정보 중심인 도구로 URL 인코딩, Base64 변환, IP 조회 및 JWT 디코딩을 처리하세요.',
        utilityTools: '네트워크 유틸리티 도구',
        secureTitle: '안전한 네트워크 유틸리티',
        clientSideProcessing: {
          title: '클라이언트 측 처리',
          description: '모든 인코딩 및 디코딩은 최대 보안을 위해 브라우저에서 이루어집니다.'
        },
        noDataStorage: {
          title: '데이터 저장 없음',
          description: '입력 데이터나 결과를 저장하거나 기록하지 않습니다.'
        },
        instantResults: {
          title: '즉각적인 결과',
          description: '입력하는 즉시 실시간 결과와 함께 빠른 처리.'
        },
        urlEncoder: {
          title: 'URL 인코더 / 디코더',
          description: '안전한 전송을 위해 URL을 인코딩하거나 퍼센트 인코딩된 URL을 디코딩합니다.'
        },
        base64Encoder: {
          title: 'Base64 인코더 / 디코더',
          description: '텍스트를 Base64로 인코딩하거나 Base64 문자열을 텍스트로 다시 디코딩합니다.'
        },
        ipLookup: {
          title: 'IP 주소 조회',
          description: '어떤 IP 주소에 대한 지리적 위치, ISP 정보 및 네트워크 세부 정보를 얻으세요.',
          placeholder: 'IP 주소 또는 도메인 이름 입력',
          lookup: '조회',
          myIp: '내 IP 확인',
          results: '조회 결과'
        },
        jwtDecoder: {
          title: 'JWT 토큰 디코더',
          description: 'JSON 웹 토큰을 디코딩하고 헤더, 페이로드 및 서명 정보를 확인합니다.'
        },
        base64: {
          title: 'Base64 인코더/디코더',
          description: '텍스트를 Base64로 인코딩하거나 Base64 문자열을 텍스트로 다시 디코딩합니다.',
          encode: '인코딩',
          decode: '디코딩',
          input: '입력',
          output: '출력',
          inputPlaceholder: '인코딩하거나 디코딩할 텍스트 입력...',
          outputPlaceholder: '인코딩되거나 디코딩된 결과가 여기에 표시됩니다'
        }
      },
      text: {
        title: '텍스트 처리 도구',
        description: '필수 텍스트 도구: 대소문자 변환기, 단어 계수기, 텍스트 반전기, 공백 제거기 & 차이 검사기. 무료, 빠름, 클라이언트 측 처리.',
        subtitle: '작가, 개발자 및 콘텐츠 생성자를 위한 강력한 텍스트 조작 및 분석 도구. 우리의 포괄적인 슈트로 텍스트를 변환, 분석 및 비교하세요.',
        utilityTools: '텍스트 처리 유틸리티',
        whyUse: {
          title: '왜 우리의 텍스트 도구를 사용해야 합니까?',
          realTime: {
            title: '실시간 처리',
            description: '실시간 텍스트 처리를 통해 입력하는 즉시 결과를 확인하세요.'
          },
          privacy: {
            title: '개인정보 보호',
            description: '모든 텍스트 처리는 로컬에서 이루어집니다 - 콘텐츠가 브라우저를 떠나지 않습니다.'
          },
          multiPurpose: {
            title: '다목적',
            description: '단순한 대소문자 변환에서 복잡한 텍스트 분석 및 비교에 이르기까지.'
          }
        },
        caseConverter: {
          title: '대소문자 변환기',
          description: '텍스트를 대문자, 소문자, 제목 대문자 및 문장 대문자로 변환합니다.',
          placeholder: '대소문자를 변환할 텍스트 입력...',
          upperCase: '대문자',
          lowerCase: '소문자',
          titleCase: '제목 대문자',
          sentenceCase: '문장 대문자',
          result: '변환된 텍스트'
        },
        wordCounter: {
          title: '단어 & 문자 계수기',
          description: '텍스트의 단어, 문자, 문장 및 단락을 계산합니다.',
          placeholder: '단어와 문자를 계산할 텍스트를 여기에 입력하세요...',
          words: '단어',
          characters: '문자',
          charactersNoSpaces: '문자 (공백 없음)',
          sentences: '문장',
          paragraphs: '단락'
        },
        textReverser: {
          title: '텍스트 반전기',
          description: '텍스트의 문자 순서를 즉시 반전합니다.',
          placeholder: '반전할 텍스트 입력...',
          reversedText: '반전된 텍스트'
        },
        whitespaceRemover: {
          title: '공백 제거기',
          description: '여분의 공백을 제거하고, 공백을 자르고, 텍스트 형식을 정리합니다.',
          placeholder: '공백을 정리할 텍스트 입력...',
          result: '정리된 텍스트',
          removeAll: '모든 공백 제거',
          removeTrim: '공백 자르기',
          removeExtra: '여분의 공백 제거',
          removeLines: '빈 줄 제거'
        },
        loremIpsumGenerator: {
          title: '로렘 입숨 생성기',
          description: '디자인 및 개발 프로젝트를 위한 자리 표시자 텍스트를 생성합니다.',
          count: '개수',
          type: '유형',
          paragraphs: '단락',
          sentences: '문장',
          words: '단어',
          copy: '복사',
          copied: '클립보드에 복사됨'
        },
        textDiff: {
          title: '텍스트 비교 도구',
          description: '두 개의 텍스트를 비교하고 시각적 차이 표시로 차이점을 강조합니다.',
          compareText: '텍스트 비교',
          clearAll: '모두 지우기',
          originalText: '원본 텍스트',
          newText: '새 텍스트'
        }
      },
      timestampConverter: {
        title: '타임스탬프 변환기',
        description: 'Unix 타임스탬프와 사람이 읽을 수 있는 날짜之间의 변환',
        timestamp: 'Unix 타임스탬프',
        timestampPlaceholder: 'Unix 타임스탬프 입력 (초)',
        dateTime: '날짜 & 시간 (UTC)',
        current: '현재 시간'
      },
      timezoneConverter: {
        title: '타임존 변환기',
        description: '다른 타임존之间의 날짜와 시간 변환',
        sourceDateTime: '원본 날짜 & 시간',
        sourceTimezone: '원본 타임존',
        targetTimezone: '대상 타임존',
        convertedDateTime: '변환된 날짜 & 시간'
      },
      editor: {
        meta: {
          title: '코드 & 문서 편집기',
          description: '무료 온라인 편집기: 라이브 미리 보기가 있는 마크다운 편집기 및 머메이드 다이어그램 도구. 전문 콘텐츠를 쉽게 만들고, 미리 보고, 내보낼 수 있습니다.'
        },
        title: '코드 & 문서 편집기',
        description: '마크다운 문서 및 머메이드 다이어그램을 위한 전문 온라인 편집기. 라이브 미리 보기, 구문 강조 및 다중 내보내기 형식을 지원합니다.',
        subtitle: '마크다운 문서 및 머메이드 다이어그램을 위한 전문 온라인 편집기. 실시간 렌더링으로 콘텐츠를 만들고, 편집하고, 미리 볼 수 있습니다.',
        toolsTitle: '편집기 도구',
        experience: {
          title: '전문 편집 경험',
          livePreview: {
            title: '라이브 미리 보기',
            description: '입력하는 즉시 마크다운과 머메이드 다이어그램이 실시간으로 렌더링되는 것을 확인하세요.'
          },
          syntaxHighlighting: {
            title: '구문 강조',
            description: '구문 강조 및 자동 완성 기능이 있는 전문 코드 편집기.'
          },
          exportReady: {
            title: '내보내기 준비 완료',
            description: '문서 및 프레젠테이션에서 사용할 렌더링된 콘텐츠를 복사하거나 다운로드하세요.'
          }
        },
        markdown: {
          title: '마크다운 편집기',
          description: '구문 강조 및 라이브 미리 보기로 마크다운을 작성하고 미리 봅니다.',
          placeholder: '마크다운 콘텐츠를 여기에 입력하세요...'
        },
        mermaid: {
          title: '머메이드 다이어그램',
          description: '머메이드 구문으로 다이어그램과 흐름도 만들기',
          placeholder: '머메이드 다이어그램 코드를 여기에 입력하세요...',
          syntaxError: '구문 오류',
          invalidSyntax: '유효하지 않은 머메이드 구문'
        },
        copy: '콘텐츠 복사',
        clear: '콘텐츠 지우기',
        copied: '복사됨',
        copySuccess: '콘텐츠가 클립보드에 복사되었습니다',
        copyError: '복사 실패',
        copyErrorDesc: '클립보드에 복사할 수 없습니다',
        cleared: '지워짐',
        clearSuccess: '콘텐츠가 지워졌습니다',
        downloadSvg: 'SVG 다운로드',
        downloadPng: 'PNG 다운로드'
      },
      crypto: {
        title: '암호화 도구',
        description: '해시 생성기(MD5, SHA-1, SHA-256, SHA-512), HMAC 및 AES 암호화와 같은 암호화 도구로 데이터를 보호하세요.',
        jwtDecoder: {
          title: 'JWT 디코더',
          description: 'JSON 웹 토큰을 디코딩하고 페이로드와 헤더 데이터를 확인합니다.',
          placeholder: '여기에 JWT를 붙여넣어 주세요',
          invalidToken: '유효하지 않은 JWT 토큰'
        },
        encryption: {
          title: '암호화 도구',
          description: 'AES, DES 및 Rabbit과 같은 다양한 알고리즘을 사용하여 텍스트를 암호화하고 복호화합니다.'
        }
       },
       time: {
         title: '날짜 & 시간 도구',
         description: '타임스탬프 변환, 타임존 처리 및 날짜 계산을 위한 필수 날짜 및 시간 유틸리티.'
       }
    },
    time: {
      description: '타임스탬프 변환, 타임존 처리 및 날짜 계산을 위한 필수 날짜 및 시간 유틸리티.',
      meta: {
        title: '날짜 & 시간 도구 - 타임스탬프, 타임존 및 날짜 계산기',
        description: '무료 시간 도구: 타임스탬프 변환기, 타임존 계산기 & 날짜 산술. 정확하고, DST 인식, 개발자 친화적인 유틸리티.'
      },
      title: '날짜 & 시간 도구',
      subtitle: '개발자 및 전문가를 위한 필수 날짜 및 시간 유틸리티. 타임스탬프 변환, 타임존 계산 및 날짜 산술을 정확하게 처리하세요.',
      toolsTitle: '시간 관리 도구',
      timestamp: {
        title: '타임스탬프 변환기',
        description: 'Unix 타임스탬프와 사람이 읽을 수 있는 날짜와 시간之间의 변환.'
      },
      timezone: {
        title: '타임존 변환기',
        description: '전 세계의 다양한 타임존之间의 날짜와 시간을 DST 지원으로 변환합니다.'
      },
      dateCalculator: {
        title: '날짜 계산기',
        description: '날짜에서 일, 월 및 연도를 더하거나 뺍니다. 날짜 차이를 계산합니다.',
        startDate: '시작 날짜',
        add: '더하기',
        subtract: '빼기',
        years: '연도',
        months: '개월',
        days: '일',
        resultDate: '결과 날짜'
      },
      calculations: {
        title: '정확한 시간 계산',
        precise: {
          title: '정밀 계산',
          description: '복잡한 타임존 변환과 날짜 계산을 정확하게 처리합니다.'
        },
        global: {
          title: '전역 지원',
          description: '자동 일광 절약 시간 조정을 포함한 모든 세계 타임존을 지원합니다.'
        },
        developerFriendly: {
          title: '개발자 친화적',
          description: 'API 개발, 로그 분석 및 타임스탬프 디버깅에 완벽합니다.'
        }
      }
    },
    toasts: {
      common: {
        success: '성공',
        error: '오류',
        info: '정보',
        notFound: '찾을 수 없음'
      },
      success: {
        copied: '클립보드에 복사됨',
        formattedAndCopied: 'JSON이 형식 지정되어 클립보드에 복사되었습니다',
        minifiedAndCopied: 'JSON이 축소되어 클립보드에 복사되었습니다',
        extractedAndCopied: '값이 추출되어 클립보드에 복사되었습니다',
        graphGenerated: '그래프가 성공적으로 생성되었습니다',
        convertedToYamlAndCopied: 'YAML로 변환되어 클립보드에 복사되었습니다',
        convertedToXmlAndCopied: 'XML로 변환되어 클립보드에 복사되었습니다',
        convertedToCsvAndCopied: 'CSV로 변환되어 클립보드에 복사되었습니다',
        convertedToDartAndCopied: 'Dart 클래스로 변환되어 클립보드에 복사되었습니다'
      },
      error: {
        invalidJson: '유효한 JSON을 입력하세요',
        invalidJsonFormat: '유효하지 않은 JSON 형식',
        missingPath: '추출 경로를 입력하세요',
        notFound: '지정된 경로에서 값을 찾을 수 없습니다',
        extractError: '값 추출 오류',
        conversionFailed: '변환 실패',
        csvConversionRequiresArray: 'CSV 변환에는 객체 배열이 필요합니다',
        syntaxErrorAtPosition: '위치 {position}에서 구문 오류',
        syntaxErrorGeneric: 'JSON에서 구문 오류'
        },
      info: {
        emptyContent: '복사할 내용이 없습니다'
      }
    },

    availableTools: '사용 가능한 도구',
    whyChooseUs: {
      title: '왜 우리의 도구를 선택해야 합니까?',
      privacyFocused: {
        title: '개인정보 중심',
        description: '모든 처리는 브라우저에서 로컬로 이루어집니다. 데이터는 장치를 떠나지 않습니다.'
      },
      professionalGrade: {
        title: '전문 등급',
        description: '현대 웹 기술로 구축되었으며 전문 개발자를 위해 설계되었습니다.'
      },
      freeAndOpen: {
        title: '무료 & 공개',
        description: '등록이 필요하지 않습니다. 제한 없이 모든 기능을 무료로 사용하세요.'
      }
    },
    underConstruction: {
      description: '이 도구는 개발 중입니다. 기다려 주세요.'
    },
    notFound: {
      title: '페이지를 찾을 수 없음',
      description: '죄송합니다. 찾고 계신 페이지는 존재하지 않거나 이동되었습니다.',
      backToHome: '홈으로 돌아가기',
      path: '경로'
    },
    encryption: {
      algorithm: '알고리즘',
      selectAlgorithm: '알고리즘 선택',
      inputText: '입력 텍스트',
      inputPlaceholder: '처리할 텍스트 입력...',
      output: '출력',
      outputPlaceholder: '처리된 출력이 여기에 표시됩니다...',
      regenerate: '재생성'
    },
    footer: {
      legal: '법률',
      company: '회사',
      friendlyLinks: '친한 링크',
      privacy: '개인정보 정책',
      terms: '서비스 약관',
      about: '회사 소개',
      copyright: '© {{year}} 개발자 도구 허브. 모든 권리 보유.',
      description: '개발을 위한 일체형 "스위스 아르미 나이프". JSON, 텍스트, 암호화 등을 위한 전문 도구로 워크플로를 간소화하세요.',
      lovable: 'Lovable',
      vercel: 'Vercel',
      github: 'GitHub',
      deepseek: 'DeepSeek',
    },
    about: {
      title: '회사 소개',
      missionTitle: '우리의 미션',
      missionText: '우리의 미션은 개발자에게 일일 작업을 위한 "스위스 아르미 나이프" 역할을 하는 포괄적이고, 사용하기 쉽고, 강력한 도구 키트를 제공하는 것입니다. 우리는 모든 사람의 워크플로를 보다 효율적이고 즐겁게 만들기 위해 개발 유틸리티를 위한 일정한 장소를 만들 것을 목표로 합니다.',
      featuresTitle: '우리가 제공하는 것',
      feature1: '포괄적인 도구 세트: JSON 형식 지정 및 텍스트 조작에서 암호화 및 다이어그램 작성에 이르기까지.',
      feature2: '현대 디자인: Lovable AI로 구동되는 깨끗하고, 직관적이며, 반응이 빠른 인터페이스.',
      feature3: '개인정보 중심: 우리의 서버에 데이터가 저장되지 않습니다. 모든 처리는 브라우저에서 이루어집니다.',
      feature4: '고급 기술: 최적의 개발 경험을 위해 첨단 기술을 활용합니다.',
    },
    privacy: {
      title: '개인정보 정책',
      lastUpdated: '마지막 업데이트: 2025년 6월 15일',
      introduction: '개발자 도구 허브에 오신 것을 환영합니다. 우리는 귀하의 개인정보 보호에 최선을 다하고 있습니다. 우리의 개인정보 정책은 웹사이트 및 서비스와 관련하여 정보를 어떻게 처리하는지 설명합니다.',
      informationWeCollectTitle: '수집하는 정보',
      informationWeCollectText: '우리는 사용자로부터 개인 식별 정보를 수집하지 않습니다. 우리의 도구에 의해 처리되는 모든 데이터(예: JSON, 텍스트, 파일)는 클라이언트 측에 남아 있으며, 서버로 전송되거나 저장되지 않습니다.',
      cookiesTitle: '쿠키 및 로컬 스토리지',
      cookiesText: '브라우저 로컬 스토리지를 사용하여 선택한 테마(밝은/어두운) 및 언어와 같은 기본 설정을 저장합니다. 이는 귀하의 사용자 경험을 향상시키기 위한 기능적인 목적으로만 사용되며, 귀하를 추적하지 않습니다.',
      thirdPartyServicesTitle: '제3자 서비스',
      thirdPartyServicesText: '우리의 웹사이트는 귀하의 개인 데이터를 수집하는 제3자 서비스와 통합되지 않습니다. 우리는 GitHub와 같은 외부 사이트에 대한 링크를 제공하지만, 그들의 개인정보 관행에 대해 책임지지 않습니다.',
      changesToPolicyTitle: '정책 변경',
      changesToPolicyText: '우리는 때때로 개인정보 정책을 업데이트할 수 있습니다. 우리는 이 페이지에 새로운 개인정보 정책을 게시함으로써 변경 사항을 알릴 것입니다. 귀하는 주기적으로 변경 사항을 확인하기 위해 이 개인정보 정책을 검토하는 것이 좋습니다.',
      contactUsTitle: '연락하기',
      contactUsText: '이 개인정보 정책에 대한 질문이 있으시면, 오픈 소스 리포지토리에서 저희에게 연락하십시오.',
    },
    terms: {
      title: '서비스 약관',
      lastUpdated: '마지막 업데이트: 2025년 6월 15일',
      acceptanceTitle: '약관 수락',
      acceptanceText: '개발자 도구 허브("서비스")에 접근하고 사용함으로써, 귀하는 본 계약의 조건 및 조항에 동의하고 그에 구속됨을 인수하고 동의합니다. 이 조건을 준수하지 않기로 결정하는 경우, 이 서비스를 사용하지 마십시오.',
      useOfServiceTitle: '서비스 사용',
      useOfServiceText: '서비스는 개인 및 상업적 사용을 위해 무료로 제공됩니다. 귀하는 서비스를 책임감 있게 사용하고 악의적이거나 불법적인 활동에 사용하지 않기로 동의합니다. 귀하는 우리의 도구를 사용하여 처리하는 모든 데이터에 대한 단독 책임이 있습니다.',
      disclaimerTitle: '보증 부인',
      disclaimerText: '서비스는 "있는 그대로" 및 "사용 가능한 상태"로 제공되며, 명시적이거나 묵시적인 어떠한 종류의 보증도 제공되지 않습니다. 우리는 서비스를 통해 처리되는 도구 또는 데이터의 정확성, 신뢰성 또는 완전성을 보증하지 않습니다.',
      limitationTitle: '책임 제한',
      limitationText: '어떠한 경우에도 개발자 도구 허브 또는 그 관리자는 서비스 사용 또는 사용할 수 없음으로 인해 발생하는 직접적, 간접적, 우발적, 특별하거나 결과적인 손해에 대해 책임을 지지 않습니다.',
      changesToTermsTitle: '약관 변경',
      changesToTermsText: '우리는 언제든지 이 약관을 수정할 권리를 보유합니다. 우리는 이 페이지에 가장 최신 버전의 약관을 게시할 것입니다. 변경 사항 후에도 서비스를 계속 사용하는 것은 새로운 약관에 대한 귀하의 수락을 구성합니다.',
    },
  }
};
export default ko;