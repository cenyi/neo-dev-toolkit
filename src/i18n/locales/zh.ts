export const zh = {
    translation: {
        nav: {
            home: '首页',
            json: 'JSON',
            network: '网络',
            text: '文本',
            time: '时间',
            encryption: '加密',
            markdown: 'Markdown',
            mermaid: 'Mermaid',
            regex: '正则表达式',
            editor: '编辑器'
        },
        navTitles: {
            home: '首页 - 免费开发者工具中心',
            json: 'JSON 工具 - 格式化、验证和处理 JSON 数据',
            network: '网络工具 - URL 编码、IP 查询和实用工具',
            text: '文本工具 - 处理和转换文本格式',
            time: '时间工具 - 时间戳和时区转换器',
            encryption: '加密工具 - 哈希生成和加密实用工具',
            regex: '正则表达式工具 - 测试和验证正则表达式模式',
            editor: '代码编辑器 - Markdown 和 Mermaid 图表编辑器'
        },
        common: {
            theme: '主题',
            language: '语言',
            light: '浅色',
            dark: '深色',
            copy: '复制',
            clear: '清除',
            format: '格式化',
            minify: '压缩',
            validate: '验证',
            convert: '转换',
            encrypt: '加密',
            decrypt: '解密',
            preview: '预览',
            download: '下载',
            toYaml: '转为 YAML',
            toXml: '转为 XML',
            toCsv: '转为 CSV',
            toDart: '转为 Dart',
            blue: '蓝色',
            system: '系统',
            comingSoon: '即将推出',
            error: '错误',
            success: '成功',
            info: '信息',
            notFound: '未找到',
            compare: '比较',
            test: '测试',
            match: '匹配',
            replace: '替换',
            flags: '标志',
            pattern: '模式',
            input: '输入',
            output: '输出',
            result: '结果',
            graph: '结构图',
            zoomLevel: '缩放级别'
        },
        home: {
            title: '开发者工具中心',
            subtitle: '由 Lovable AI 技术构建的专业开发工具',
            description: '一个全面的基本开发者工具集合，包括 JSON 格式化、文本处理、加密等。由 Lovable AI 构建，以实现最佳性能。',
            headerTitle: '免费在线开发者工具中心 - 由 Lovable 构建',
            toolsCollectionTitle: '专业开发者工具集合',
            whyChooseTitle: '为什么选择 DevTools Hub 满足您的开发需求？',
            feature1Title: '100% 免费且无需注册',
            feature1Description: '所有工具完全免费使用，无需帐户',
            feature2Title: '注重隐私的开发',
            feature2Description: '您的数据保留在您的浏览器中 - 不会发送到我们的服务器',
            feature3Title: '现代响应式界面',
            feature3Description: '由 Lovable AI 提供支持的简洁、响应式设计，可在所有设备上完美运行'
        },
        tools: {
            json: {
                title: 'JSON 工具',
                description: '全面的 JSON 工具，用于格式化、验证、模式检查和数据操作。',
                formatter: {
                    title: 'JSON 格式化和校验',
                    description: '格式化、美化和校验您的 JSON 数据。'
                },
                schemaValidator: {
                    title: 'JSON Schema 校验',
                    description: '根据 JSON Schema 验证您的 JSON 对象。'
                },
                codegen: {
                    title: '生成代码类型',
                    description: '从 JSON 对象生成各种语言的代码类型。'
                },
                history: {
                    title: '历史记录'
                },
                generateGraph: '生成图表',
                extractValue: '提取值',
                fieldPath: '字段路径',
                extractPlaceholder: '输入 JSONPath (例如: $.users[0].name)',
                graphTitle: 'JSON 结构图',
                input: '输入',
                output: '输出',
                outputPlaceholder: '格式化后的 JSON 将显示在此处',
                validJson: '有效的 JSON',
                invalidJson: '无效的 JSON',
                diff: {
                    title: 'JSON 比对工具',
                    description: '比较两个 JSON 对象并高亮显示差异。'
                },
                mock: {
                    title: 'Mock 数据生成器',
                    description: '生成用于测试和开发的 Mock JSON 数据。'
                },
                convertedToDartTitle: '转换为 Dart 类',
                rootClassName: '根类名',
            },
            regex: {
                title: '正则表达式工具',
                description: '使用正则表达式进行测试、匹配和替换',
                pattern: '正则表达式模式',
                patternPlaceholder: '输入正则表达式模式...',
                testString: '测试字符串',
                testStringPlaceholder: '输入要测试的文本...',
                replacement: '替换文本',
                replacementPlaceholder: '输入替换文本...',
                flags: '标志',
                global: '全局匹配 (g)',
                ignoreCase: '忽略大小写 (i)',
                multiline: '多行 (m)',
                dotAll: '点匹配换行符 (s)',
                unicode: 'Unicode (u)',
                sticky: '粘性 (y)',
                matches: '匹配项',
                noMatches: '未找到匹配项',
                replacedText: '替换后的文本',
                invalidRegex: '无效的正则表达式'
            },
            jwtDecoder: {
                title: 'JWT 解码器',
                description: '解码和验证 JWT 令牌',
                encodedToken: '编码令牌',
                header: '头部',
                payload: '有效载荷',
                placeholder: '在此处粘贴您的 JWT',
                headerPlaceholder: '解码后的头部将显示在此处',
                payloadPlaceholder: '解码后的有效载荷将显示在此处'
            },
            jsonDiff: {
                title: 'JSON 差异比较',
                description: '比较两个 JSON 对象之间的差异',
                originalJson: '原始 JSON',
                newJson: '新 JSON',
                originalPlaceholder: '在此处粘贴原始 JSON',
                newPlaceholder: '在此处粘贴新 JSON',
                diffResult: '差异结果'
            },
            network: {
                title: '网络和编码工具',
                description: '免费网络工具：URL 编码/解码、Base64 转换器、IP 查询和 JWT 解码器。安全的客户端处理，无需存储数据。',
                subtitle: '为 Web 开发人员提供的基本网络和编码实用程序。使用我们安全的、注重隐私的工具处理 URL 编码、Base64 转换、IP 查询和 JWT 解码。',
                utilityTools: '网络实用工具',
                secureTitle: '安全网络实用程序',
                clientSideProcessing: {
                    title: '客户端处理',
                    description: '所有编码和解码都在您的浏览器中进行，以实现最大程度的安全性。'
                },
                noDataStorage: {
                    title: '无数据存储',
                    description: '我们不存储或记录您的任何输入数据或结果。'
                },
                instantResults: {
                    title: '即时结果',
                    description: '快速处理，输入时即可获得实时结果。'
                },
                urlEncoder: {
                    title: 'URL 编码器/解码器',
                    description: '对 URL 进行编码以进行安全传输，或对百分比编码的 URL 进行解码。'
                },
                base64Encoder: {
                    title: 'Base64 编码器/解码器',
                    description: '将文本编码为 Base64，或将 Base64 字符串解码回文本。'
                },
                ipLookup: {
                    title: 'IP 地址查询',
                    description: '获取任何 IP 地址的地理位置、ISP 信息和网络详细信息。',
                    placeholder: '输入 IP 地址或域名',
                    lookup: '查询',
                    myIp: '查询我的 IP',
                    results: '查询结果'
                },
                jwtDecoder: {
                    title: 'JWT 令牌解码器',
                    description: '解码 JSON Web 令牌并查看标头、有效负载和签名信息。'
                }
            },
            text: {
                title: '文本处理工具',
                description: '基本文本工具：大小写转换器、字数计数器、文本反向器、空白移除器和差异检查器。免费、快速、客户端处理。',
                subtitle: '为作家、开发人员和内容创作者提供的强大的文本操作和分析工具。使用我们全面的套件转换、分析和比较文本。',
                utilityTools: '文本处理实用程序',
                whyUse: {
                    title: '为什么使用我们的文本工具？',
                    realTime: {
                        title: '实时处理',
                        description: '通过实时文本处理，在您键入时立即查看结果。'
                    },
                    privacy: {
                        title: '隐私保护',
                        description: '所有文本处理都在本地进行 - 您的内容永远不会离开您的浏览器。'
                    },
                    multiPurpose: {
                        title: '多用途',
                        description: '从简单的大小写转换到复杂的文本分析和比较。'
                    }
                },
                caseConverter: {
                    title: '大小写转换器',
                    description: '在大写、小写、标题大小写和句子大小写之间转换文本。',
                    placeholder: '输入要转换大小写的文本...',
                    upperCase: '全部大写',
                    lowerCase: '全部小写',
                    titleCase: '标题大小写',
                    sentenceCase: '句子大小写',
                    result: '转换后的文本'
                },
                wordCounter: {
                    title: '单词和字符计数器',
                    description: '计算文本中的单词、字符、句子和段落。',
                    placeholder: '在此输入要统计的文本...',
                    words: '单词数',
                    characters: '字符数',
                    charactersNoSpaces: '字符数（不含空格）',
                    sentences: '句子数',
                    paragraphs: '段落数'
                },
                textReverser: {
                    title: '文本反向器',
                    description: '立即反转文本中字符的顺序。',
                    placeholder: '在此输入要反转的文本...',
                    reversedText: '反转后的文本'
                },
                whitespaceRemover: {
                    title: '空白移除器',
                    description: '删除多余的空格、修剪空白并清理文本格式。',
                    placeholder: '在此输入要处理的文本...',
                    result: '处理结果',
                    removeAll: '删除所有空白',
                    removeTrim: '删除首尾空白',
                    removeExtra: '删除多余空白',
                    removeLines: '删除换行符'
                },
                loremIpsumGenerator: {
                    title: 'Lorem Ipsum 生成器',
                    description: '为设计和开发项目生成占位符文本。',
                    count: '数量',
                    type: '类型',
                    paragraphs: '段落',
                    sentences: '句子',
                    words: '单词',
                    generate: '生成',
                    copy: '复制',
                    copied: '已复制到剪贴板！'
                },
                textDiff: {
                    title: '文本比较工具',
                    description: '比较两个文本并使用可视化差异显示突出显示差异。',
                    compareText: '比较文本',
                    clearAll: '清空全部',
                    originalText: '原始文本',
                    newText: '新文本'
                },
                base64: {
                    title: 'Base64 编码器/解码器',
                    description: '将文本编码为 Base64，或将 Base64 字符串解码回文本。',
                    encode: '编码',
                    decode: '解码',
                    input: '输入',
                    output: '输出',
                    inputPlaceholder: '在此输入要编码或解码的文本...',
                    outputPlaceholder: '编码或解码的结果将显示在此处'
                }
            },
            url: {
                title: 'URL 编码器/解码器',
                description: '对 URL 进行编码以进行安全传输，或对百分比编码的 URL 进行解码。'
            },
            timestampConverter: {
                title: '时间戳转换器',
                description: '在 Unix 时间戳和人类可读日期之间转换',
                timestamp: 'Unix 时间戳',
                timestampPlaceholder: '输入 Unix 时间戳（秒）',
                dateTime: '日期和时间 (UTC)',
                current: '当前时间'
            },
            timezoneConverter: {
                title: '时区转换器',
                description: '在不同时区之间转换日期和时间',
                sourceDateTime: '源日期和时间',
                sourceTimezone: '源时区',
                targetTimezone: '目标时区',
                convertedDateTime: '转换后的日期和时间'
            },
            time: {
                description: '用于时间戳转换、时区处理和日期计算的基本日期和时间实用程序。',
                meta: {
                    title: '日期和时间工具 - 时间戳、时区和日期计算器',
                    description: '免费的时间工具：时间戳转换器、时区计算器和日期计算。精确、支持夏令时、开发人员友好的实用程序。'
                },
                title: '日期和时间工具',
                subtitle: '为开发人员和专业人士提供的基本日期和时间实用程序。精确处理时间戳转换、时区计算和日期算术。',
                toolsTitle: '时间管理工具',
                timestamp: {
                    title: '时间戳转换器',
                    description: '在Unix时间戳和人类可读的日期和时间之间进行转换。'
                },
                timezone: {
                    title: '时区转换器',
                    description: '在全球不同时区之间转换日期和时间，支持夏令时。'
                },
                dateCalculator: {
                    title: '日期计算器',
                    description: '从日期中增加或减少天数、月数和年数。计算日期差异。',
                    startDate: '开始日期',
                    add: '增加',
                    subtract: '减少',
                    years: '年',
                    months: '月',
                    days: '天',
                    resultDate: '结果日期'
                },
                calculations: {
                    title: '精确的时间计算',
                    precise: {
                        title: '精确计算',
                        description: '精确处理复杂的时区转换和日期计算。'
                    },
                    global: {
                        title: '全球支持',
                        description: '支持全球所有时区，并自动调整夏令时。'
                    },
                    developerFriendly: {
                        title: '开发人员友好',
                        description: '非常适合API开发、日志分析和时间戳调试。'
                    }
                }
            },
            editor: {
                meta: {
                    title: '代码和文档编辑器',
                    description: '免费在线编辑器：支持实时预览的 Markdown 编辑器和 Mermaid 图表工具。轻松编写、预览和导出专业内容。'
                },
                title: '代码和文档编辑器',
                description: '专业的 Markdown 文档和 Mermaid 图表在线编辑器。支持实时预览、语法高亮和多种导出格式。',
                subtitle: '专业的 Markdown 文档和 Mermaid 图表在线编辑器。通过实时渲染创建、编辑和预览您的内容。',
                toolsTitle: '编辑器工具',
                experience: {
                    title: '专业编辑体验',
                    livePreview: {
                        title: '实时预览',
                        description: '在您输入时实时查看 Markdown 和 Mermaid 图表的渲染效果。'
                    },
                    syntaxHighlighting: {
                        title: '语法高亮',
                        description: '专业的代码编辑器，支持语法高亮和自动补全。'
                    },
                    exportReady: {
                        title: '导出就绪',
                        description: '复制或下载渲染后的内容，用于文档和演示。'
                    }
                },
                markdown: {
                    title: "Markdown 编辑器",
                    description: "支持语法高亮和实时预览的 Markdown 编辑器。",
                    placeholder: '在此输入 Markdown 内容...'
                },
                mermaid: {
                    title: 'Mermaid 图表',
                    description: '使用 Mermaid 语法创建图表和流程图',
                    placeholder: '在此输入您的 Mermaid 图表代码...',
                    syntaxError: '语法错误',
                    invalidSyntax: '无效的 Mermaid 语法'
                },
                copy: '复制内容',
                clear: '清除内容',
                copied: '已复制',
                copySuccess: '内容已复制到剪贴板',
                copyError: '复制失败',
                copyErrorDesc: '无法复制到剪贴板',
                cleared: '已清除',
                clearSuccess: '内容已清除',
                downloadSvg: '下载 SVG',
                downloadPng: '下载 PNG'
            },
            crypto: {
                title: '加密工具',
                description: '使用我们的加密工具保护您的数据：哈希生成器（MD5、SHA-1、SHA-256、SHA-512）、HMAC 和 AES 加密。',
                jwtDecoder: {
                    title: 'JWT 解码器',
                    description: '解码并检查 JSON Web Token 以查看其有效负载和标头数据。',
                    placeholder: '在此处粘贴您的 JWT',
                    invalidToken: '无效的 JWT 令牌'
                },
                encryption: {
                    title: '加密工具',
                    description: '使用 AES、DES 和 Rabbit 等各种算法加密和解密文本。'
                }
            }
        },
        url: {
            input: '输入文本',
            output: '输出',
            inputPlaceholder: '输入要编码/解码的文本或 URL',
            outputPlaceholder: '编码/解码结果将显示在此处',
            encode: '编码',
            decode: '解码'
        },
        toasts: {
            common: {
                success: '成功',
                error: '错误',
                info: '信息',
                notFound: '未找到'
            },
            success: {
                copied: '已复制到剪贴板',
                formattedAndCopied: 'JSON 已格式化并复制到剪贴板',
                minifiedAndCopied: 'JSON 已压缩并复制到剪贴板',
                extractedAndCopied: '值已提取并复制到剪贴板',
                graphGenerated: '图表生成成功',
                convertedToYamlAndCopied: '已转换为 YAML 并复制到剪贴板',
                convertedToXmlAndCopied: '已转换为 XML 并复制到剪贴板',
                convertedToCsvAndCopied: '已转换为 CSV 并复制到剪贴板',
                convertedToDartAndCopied: '已转换为 Dart 类并复制到剪贴板'
            },
            error: {
                invalidJson: '请输入有效的 JSON',
                invalidJsonFormat: '无效的 JSON 格式',
                missingPath: '请输入提取路径',
                notFound: '在指定路径未找到值',
                extractError: '提取值时出错',
                conversionFailed: '转换失败',
                csvConversionRequiresArray: 'CSV 转换需要一个对象数组'
            },
            info: {
                emptyContent: '没有内容可复制'
            }
        },
        availableTools: '可用工具',
        whyChooseUs: {
            title: '为什么选择我们的工具？',
            privacyFocused: {
                title: '注重隐私',
                description: '所有处理都在您的浏览器本地进行。您的数据永远不会离开您的设备。'
            },
            professionalGrade: {
                title: '专业级别',
                description: '采用现代网络技术构建，专为专业开发人员设计。'
            },
            freeAndOpen: {
                title: '免费开放',
                description: '无需注册。免费使用所有功能，没有任何限制。'
            }
        },
        underConstruction: {
            description: '此工具正在开发中，敬请期待。'
        },
        notFound: {
            title: '页面未找到',
            description: '抱歉，您正在查找的页面不存在或已被移动。',
            backToHome: '返回首页',
            path: '路径'
        },
        encryption: {
            algorithm: '算法',
            selectAlgorithm: '选择一个算法',
            inputText: '输入文本',
            inputPlaceholder: '输入要处理的文本...',
            output: '输出',
            outputPlaceholder: '处理后的输出将显示在此处...',
            regenerate: '重新生成'
        },
        footer: {
            legal: '法律',
            company: '公司',
            friendlyLinks: '友情链接',
            privacy: '隐私政策',
            terms: '服务条款',
            about: '关于我们',
            copyright: '© {{year}} 开发者工具中心。保留所有权利。',
            description: '您的一站式“瑞士军刀”，用于由 Lovable AI 构建的开发。用于 JSON、文本、加密等的专业工具，以简化您的工作流程。',
            lovable: 'Lovable',
            vercel: 'Vercel',
            github: 'GitHub',
            deepseek: 'DeepSeek',
        },
        about: {
            title: '关于我们',
            missionTitle: '我们的使命',
            missionText: '我们的使命是为开发人员提供一个全面、易于使用且功能强大的工具包，该工具包由 Lovable AI 构建，可作为其日常任务的“瑞士军刀”。我们的目标是为开发实用程序创建一个一站式商店，使每个人的工作流程更高效、更愉快。',
            featuresTitle: '我们提供什么',
            feature1: '全面的工具集：从 JSON 格式化和文本操作到加密和图表绘制。',
            feature2: '现代设计：由 Lovable AI 提供支持的简洁、直观且响应迅速的界面。',
            feature3: '注重隐私：我们的服务器上不存储任何数据。所有处理都在您的浏览器中进行。',
            feature4: '由 Lovable 构建：我们利用 Lovable AI 技术实现最佳开发体验。',
        },
        privacy: {
            title: '隐私政策',
            lastUpdated: '最后更新：2025 年 6 月 15 日',
            introduction: '欢迎来到开发者工具中心。我们致力于保护您的隐私。我们的隐私政策解释了我们如何处理与我们的网站和服务相关的信息。',
            informationWeCollectTitle: '我们收集的信息',
            informationWeCollectText: '我们不收集用户的任何个人身份信息。我们工具处理的所有数据（例如 JSON、文本、文件）都保留在您的客户端，绝不会发送到我们的服务器或存储在我们的服务器上。',
            cookiesTitle: 'Cookie 和本地存储',
            cookiesText: '我们使用浏览器本地存储来保存您的偏好，例如您选择的主题（浅色/深色）和语言。这纯粹是为了功能目的，以增强您的用户体验，不会跟踪您。',
            thirdPartyServicesTitle: '第三方服务',
            thirdPartyServicesText: '我们的网站不与任何会收集您个人数据的第三方服务集成。我们提供指向 GitHub 等外部网站的链接，但我们不对其隐私惯例负责。',
            changesToPolicyTitle: '本政策的变更',
            changesToPolicyText: '我们可能会不时更新我们的隐私政策。我们将通过在此页面上发布新的隐私政策来通知您任何变更。建议您定期查看本隐私政策以了解任何变更。',
            contactUsTitle: '联系我们',
            contactUsText: '如果您对本隐私政策有任何疑问，请随时在我们的开源存储库中与我们联系。',
        },
        terms: {
            title: '服务条款',
            lastUpdated: '最后更新：2025 年 6 月 15 日',
            acceptanceTitle: '接受条款',
            acceptanceText: '通过访问和使用开发者工具中心（“本服务”），您接受并同意受本协议条款和规定的约束。如果您不同意遵守这些条款，请不要使用本服务。',
            useOfServiceTitle: '服务的使用',
            useOfServiceText: '本服务免费提供给个人和商业使用。您同意负责任地使用本服务，不得用于任何恶意或非法活动。您对使用我们的工具处理的任何数据负全部责任。',
            disclaimerTitle: '免责声明',
            disclaimerText: '本服务按“原样”和“可用”提供，不作任何明示或暗示的保证。我们不保证通过本服务处理的任何工具或数据的准确性、可靠性或完整性。',
            limitationTitle: '责任限制',
            limitationText: '在任何情况下，开发者工具中心或其维护者均不对因使用或无法使用本服务而产生的任何直接、间接、附带、特殊或后果性损害承担责任。',
            changesToTermsTitle: '条款的变更',
            changesToTermsText: '我们保留随时修改这些条款的权利。我们将在此页面上发布这些条款的最新版本。您在任何变更后继续使用本服务即表示您接受新条款。',
        },
    }
};
