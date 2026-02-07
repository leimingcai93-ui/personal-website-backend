// Translations
const translations = {
    en: {
        // Navigation
        nav: {
            about: 'About',
            experience: 'Experience',
            skills: 'Skills',
            contact: 'Contact'
        },
        // Hero Section
        hero: {
            greeting: "Hi, I'm ",
            name: 'Leiming Cai',
            title: 'Backend Software Engineer at Expedia',
            description: "I design, build, and operate high-traffic backend services and APIs—from Spring Boot microservices and GraphQL schemas to Kubernetes infrastructure, service mesh configurations, and CI/CD pipelines. With experience across the full stack including React frontends, I specialize in backend reliability engineering, observability, safe delivery practices, and AI-assisted development to deliver scalable, debuggable systems.",
            viewWork: 'View My Work',
            getInTouch: 'Get In Touch'
        },
        // About Section
        about: {
            title: 'About Me',
            paragraphs: [
                "Backend software engineer with extensive experience designing, building, and operating high-traffic services, APIs, and the tooling that supports them. I've delivered many features across backend microservices and GraphQL schema updates, working end-to-end from product discovery through implementation, testing, and rollout. Proficient with Java/Kotlin Spring Boot backends and TypeScript/React frontends, I focus on safe, observable, and debuggable systems: canary analysis, SLO-driven rollouts, service mesh configurations, and strong logging/telemetry that help engineers move fast without breaking users.",
                "Recently led the rollout of bulkheading solutions for backend pricing services (EAP), designing Spinnaker pipelines and Istio VirtualService delegation to reduce blast radius. Integrated business-metric canary analysis (ACA) into deployment pipelines with brand/product-line-aware routing and alerting, and modernized frontend state management for backend-driven flows.",
                "I'm excited about AI-assisted coding as a way to amplify developer productivity and would like to work closer to the tools and models themselves."
            ],
            info: {
                location: 'Location',
                locationValue: 'Seattle',
                email: 'Email',
                emailValue: 'leimingcai93@gmail.com',
                education: 'Education',
                educationValue: 'USC - Master of Engineering'
            }
        },
        // Experience Section
        experience: {
            title: 'Experience',
            items: [
                {
                    role: 'Software Engineer III',
                    company: 'Expedia',
                    date: 'Sep 2025 - Present',
                    details: [
                        'Led rollout of on-road bulkheading solution for backend Experience API Pricing (EAP) service, designing Spinnaker pipelines, configurations, and Istio VirtualService delegation to reduce blast radius and improve resiliency of high-throughput pricing flows',
                        'Improved backend reliability and latency SLOs for shopping-pwa by customizing SLO configs, investigating anomalies, resolving OOM/replica and memory-related issues, resulting in more actionable dashboards and faster on-call diagnosis',
                        'Modernized application state used by backend-driven flows by leading major portions of MobX v4 → v6 migration in shopping-pwa—refactoring critical state stores (RoomModel, CurrentHotelStore, MapStore) to use explicit makeObservable patterns',
                        'Built reusable URL/dialog synchronization hook (useAfterDialogClosesCallback) that coordinates dialog close behavior with URL and search-parameter changes, removing race conditions between nested dialogs and backend calls'
                    ]
                },
                {
                    role: 'Software Engineer II',
                    company: 'Expedia',
                    date: '2023 - Aug 2025',
                    details: [
                        'Implemented bulkheading strategy across shopping-pwa and backend data service EALO via Istio service mesh, isolating brand/product-line traffic and reducing cross-blast-radius incidents for shared backend dependencies',
                        'Enabled shadow environment and traffic mirroring for critical backend services, allowing high-risk backend changes to be validated against production-like traffic before rollout and reducing regression risk',
                        'Integrated automatic canary analysis (ACA) with key business metrics in shopping-pwa, enabling data-driven go/no-go decisions and catching defects before full production release, improving service availability and safety of backend deployments',
                        'Improved backend observability and incident response by building focused Datadog dashboards per experience flavor, pruning noisy metrics, and adding custom headers to enrich Splunk logs—making root-cause analysis faster',
                        'Partnered with product and design to develop and launch Member Celebration experiment on global Nav Bar end-to-end, driving significant positive lift in conversion rate (CVR)'
                    ]
                },
                {
                    role: 'Software Engineer I',
                    company: 'Expedia',
                    date: '2021 - 2023',
                    details: [
                        'Led adoption of new A/B test SDK (EGTnl) at the backend Experience-API layer, enabling more robust experimentation and measurement for backend-driven experiences',
                        'Delivered new amenity filter feature spanning multiple backend microservices, coordinating changes across services to ensure consistent behavior, performance, and user experience in complex property search flows',
                        'Updated Property Details Page (PDP) Member-Only Deal (MOD) messaging for Black Friday campaigns, aligning backend offer logic with frontend presentation to support high-traffic promotional periods'
                    ]
                },
                {
                    role: 'Test and Reliability Engineer',
                    company: 'Global Communication Semiconductors',
                    date: '2017 - 2021',
                    details: [
                        'Implemented, maintained, and debugged test and data analysis programs using VB6, C, and VBA',
                        'Analyzed and evaluated test results to find root cause of semiconductor failures'
                    ]
                }
            ]
        },
        // Skills Section
        skills: {
            title: 'Skills & Tech Stack',
            categories: {
                languages: 'Languages',
                backend: 'Backend & Platform',
                frontend: 'Frontend',
                cloud: 'Cloud & DevOps',
                ai: 'AI Tools'
            },
            specializationsTitle: 'Specializations',
            specializations: [
                {
                    title: 'Backend Services & APIs',
                    description: 'Spring Boot microservices, GraphQL services, REST APIs, high-throughput systems'
                },
                {
                    title: 'Reliability Engineering',
                    description: 'Canary analysis, SLO-driven rollouts, bulkheading, service mesh'
                },
                {
                    title: 'Observability & Operations',
                    description: 'Custom dashboards, telemetry, structured logging, incident response'
                },
                {
                    title: 'Full-Stack Development',
                    description: 'React frontends, state management (MobX), backend-driven flows'
                },
                {
                    title: 'AI-Assisted Development',
                    description: 'Claude Code, MCP integration, developer productivity'
                }
            ]
        },
        // Contact Section
        contact: {
            title: 'Get In Touch',
            description: "Interested in discussing software engineering, reliability, or AI-assisted development? I'd love to hear from you.",
            based: 'Based in Seattle'
        },
        // Footer
        footer: {
            copyright: '© 2026 Leiming Cai. Built with care.'
        }
    },
    zh: {
        // Navigation
        nav: {
            about: '关于我',
            experience: '工作经历',
            skills: '技能',
            contact: '联系方式'
        },
        // Hero Section
        hero: {
            greeting: '你好，我是',
            name: '蔡雷鸣',
            title: 'Expedia 后端软件工程师',
            description: '我设计、构建和运维高流量后端服务和 API——从 Spring Boot 微服务和 GraphQL 架构到 Kubernetes 基础设施、服务网格配置和 CI/CD 管道。拥有包括 React 前端在内的全栈经验，我专注于后端可靠性工程、可观测性、安全交付实践和 AI 辅助开发，以交付可扩展、可调试的系统。',
            viewWork: '查看我的工作',
            getInTouch: '联系我'
        },
        // About Section
        about: {
            title: '关于我',
            paragraphs: [
                '后端软件工程师，拥有丰富的设计、构建和运维高流量服务、API 及其支持工具的经验。我在后端微服务和 GraphQL 架构更新方面交付了许多功能，从产品发现到实施、测试和发布进行端到端工作。精通 Java/Kotlin Spring Boot 后端和 TypeScript/React 前端，我专注于安全、可观测和可调试的系统：金丝雀分析、SLO 驱动的发布、服务网格配置以及强大的日志/遥测功能，帮助工程师快速行动而不影响用户。',
                '最近主导了后端定价服务（EAP）的隔离解决方案推出，设计 Spinnaker 管道和 Istio VirtualService 委托以减少爆炸半径。将业务指标金丝雀分析（ACA）集成到部署管道中，具有品牌/产品线感知的路由和告警，并为后端驱动的流程现代化前端状态管理。',
                '我对 AI 辅助编码作为提升开发者生产力的方式感到兴奋，并希望能够更接近工具和模型本身的工作。'
            ],
            info: {
                location: '所在地',
                locationValue: '西雅图',
                email: '邮箱',
                emailValue: 'leimingcai93@gmail.com',
                education: '教育背景',
                educationValue: '南加州大学 - 工程硕士'
            }
        },
        // Experience Section
        experience: {
            title: '工作经历',
            items: [
                {
                    role: '软件工程师三级',
                    company: 'Expedia',
                    date: '2025年9月 - 至今',
                    details: [
                        '主导后端 Experience API Pricing（EAP）服务的线上隔离解决方案推出，设计 Spinnaker 管道、配置和 Istio VirtualService 委托以减少爆炸半径并提高高吞吐量定价流程的弹性',
                        '通过自定义 SLO 配置、调查异常、解决 OOM/副本和内存相关问题，提高 shopping-pwa 的后端可靠性和延迟 SLO，使仪表板更具可操作性并加快值班诊断速度',
                        '通过主导 shopping-pwa 中 MobX v4 → v6 迁移的主要部分，现代化后端驱动流程使用的应用程序状态——重构关键状态存储（RoomModel、CurrentHotelStore、MapStore）以使用显式的 makeObservable 模式',
                        '构建可重用的 URL/对话框同步钩子（useAfterDialogClosesCallback），协调对话框关闭行为与 URL 和搜索参数变化，消除嵌套对话框与后端调用之间的竞态条件'
                    ]
                },
                {
                    role: '软件工程师二级',
                    company: 'Expedia',
                    date: '2023年 - 2025年8月',
                    details: [
                        '通过 Istio 服务网格在 shopping-pwa 和后端数据服务 EALO 中实施隔离策略，隔离品牌/产品线流量并减少共享后端依赖项的交叉爆炸半径事件',
                        '为关键后端服务启用影子环境和流量镜像，允许在推出前针对类生产流量验证高风险后端变更并降低回归风险',
                        '在 shopping-pwa 中将自动金丝雀分析（ACA）与关键业务指标集成，实现数据驱动的上线/不上线决策并在全面生产发布前捕获缺陷，提高服务可用性和后端部署安全性',
                        '通过为每个体验风格构建专注的 Datadog 仪表板、修剪嘈杂的指标以及添加自定义标头来丰富 Splunk 日志，改进后端可观测性和事故响应——使根本原因分析更快',
                        '与产品和设计合作，端到端开发和启动全局导航栏上的会员庆典实验，显著提升转化率（CVR）'
                    ]
                },
                {
                    role: '软件工程师一级',
                    company: 'Expedia',
                    date: '2021年 - 2023年',
                    details: [
                        '主导在后端 Experience-API 层采用新的 A/B 测试 SDK（EGTnl），为后端驱动的体验实现更强大的实验和测量',
                        '交付涵盖多个后端微服务的新设施过滤器功能，协调跨服务的变更以确保复杂物业搜索流程中的一致行为、性能和用户体验',
                        '为黑色星期五活动更新物业详情页（PDP）仅限会员优惠（MOD）消息，将后端优惠逻辑与前端展示对齐以支持高流量促销期'
                    ]
                },
                {
                    role: '测试与可靠性工程师',
                    company: 'Global Communication Semiconductors',
                    date: '2017年 - 2021年',
                    details: [
                        '使用 VB6、C 和 VBA 实施、维护和调试测试和数据分析程序',
                        '分析和评估测试结果以找到半导体故障的根本原因'
                    ]
                }
            ]
        },
        // Skills Section
        skills: {
            title: '技能与技术栈',
            categories: {
                languages: '编程语言',
                backend: '后端与平台',
                frontend: '前端',
                cloud: '云与运维',
                ai: 'AI 工具'
            },
            specializationsTitle: '专业领域',
            specializations: [
                {
                    title: '后端服务与 API',
                    description: 'Spring Boot 微服务、GraphQL 服务、REST API、高吞吐量系统'
                },
                {
                    title: '可靠性工程',
                    description: '金丝雀分析、SLO 驱动的发布、隔离、服务网格'
                },
                {
                    title: '可观测性与运维',
                    description: '自定义仪表板、遥测、结构化日志、事故响应'
                },
                {
                    title: '全栈开发',
                    description: 'React 前端、状态管理（MobX）、后端驱动流程'
                },
                {
                    title: 'AI 辅助开发',
                    description: 'Claude Code、MCP 集成、开发者生产力'
                }
            ]
        },
        // Contact Section
        contact: {
            title: '联系我',
            description: '有兴趣讨论软件工程、可靠性或 AI 辅助开发吗？我很乐意听到您的声音。',
            based: '常驻西雅图'
        },
        // Footer
        footer: {
            copyright: '© 2026 蔡雷鸣。用心打造。'
        }
    }
};

// Language Management
let currentLang = localStorage.getItem('preferred-language') || 'en';

function updatePageLanguage(lang) {
    const t = translations[lang];
    currentLang = lang;

    // Update HTML lang attribute
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';

    // Update navigation
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks[0].textContent = t.nav.about;
    navLinks[1].textContent = t.nav.experience;
    navLinks[2].textContent = t.nav.skills;
    navLinks[3].textContent = t.nav.contact;

    // Update hero section
    document.querySelector('.hero-title').innerHTML =
        `${t.hero.greeting}<span class="highlight">${t.hero.name}</span>`;
    document.querySelector('.hero-subtitle').textContent = t.hero.title;
    document.querySelector('.hero-description').textContent = t.hero.description;
    document.querySelector('.hero-actions .btn-primary').textContent = t.hero.viewWork;
    document.querySelector('.hero-actions .btn-secondary').textContent = t.hero.getInTouch;

    // Update about section
    document.querySelector('#about .section-title').textContent = t.about.title;
    const aboutParagraphs = document.querySelectorAll('.about-content p');
    aboutParagraphs.forEach((p, i) => {
        p.textContent = t.about.paragraphs[i];
    });
    const infoItems = document.querySelectorAll('.info-item');
    infoItems[0].querySelector('.info-label').textContent = t.about.info.location;
    infoItems[0].querySelector('.info-value').textContent = t.about.info.locationValue;
    infoItems[1].querySelector('.info-label').textContent = t.about.info.email;
    infoItems[1].querySelector('.info-value').textContent = t.about.info.emailValue;
    infoItems[2].querySelector('.info-label').textContent = t.about.info.education;
    infoItems[2].querySelector('.info-value').textContent = t.about.info.educationValue;

    // Update experience section
    document.querySelector('#experience .section-title').textContent = t.experience.title;
    const experienceItems = document.querySelectorAll('.timeline-item');
    experienceItems.forEach((item, i) => {
        const exp = t.experience.items[i];
        item.querySelector('.timeline-title').textContent = exp.role;
        item.querySelector('.timeline-company').textContent = exp.company;
        item.querySelector('.timeline-date').textContent = exp.date;
        const detailsLi = item.querySelectorAll('.timeline-details li');
        detailsLi.forEach((li, j) => {
            li.textContent = exp.details[j];
        });
    });

    // Update skills section
    document.querySelector('#skills .section-title').textContent = t.skills.title;
    const skillCategories = document.querySelectorAll('.skill-category-title');
    skillCategories[0].textContent = t.skills.categories.languages;
    skillCategories[1].textContent = t.skills.categories.backend;
    skillCategories[2].textContent = t.skills.categories.frontend;
    skillCategories[3].textContent = t.skills.categories.cloud;
    skillCategories[4].textContent = t.skills.categories.ai;

    document.querySelector('.specializations-title').textContent = t.skills.specializationsTitle;
    const specializations = document.querySelectorAll('.specialization-item');
    specializations.forEach((item, i) => {
        const spec = t.skills.specializations[i];
        item.querySelector('h4').textContent = spec.title;
        item.querySelector('p').textContent = spec.description;
    });

    // Update contact section
    document.querySelector('#contact .section-title').textContent = t.contact.title;
    document.querySelector('.contact-description').textContent = t.contact.description;
    document.querySelectorAll('.contact-method')[2].querySelector('.contact-text').textContent = t.contact.based;

    // Update footer
    document.querySelector('.footer p').textContent = t.footer.copyright;

    // Update active language button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.lang === lang) {
            btn.classList.add('active');
        }
    });

    // Save preference
    localStorage.setItem('preferred-language', lang);
}

// Intersection Observer for section animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all sections
document.addEventListener('DOMContentLoaded', () => {
    // Initialize language
    updatePageLanguage(currentLang);

    // Add language toggle listeners
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            updatePageLanguage(btn.dataset.lang);
        });
    });
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        observer.observe(section);
    });

    // Smooth scroll for navigation links
    const navLinks = document.querySelectorAll('.nav-links a, .hero-actions a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetSection = document.getElementById(targetId);

                if (targetSection) {
                    const navHeight = document.querySelector('.nav').offsetHeight;
                    const targetPosition = targetSection.offsetTop - navHeight;

                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Add active state to nav links based on scroll position
    window.addEventListener('scroll', () => {
        const sections = document.querySelectorAll('section[id]');
        const scrollPosition = window.scrollY + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`.nav-links a[href="#${sectionId}"]`);

            if (navLink && scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                document.querySelectorAll('.nav-links a').forEach(link => {
                    link.style.color = '';
                });
                navLink.style.color = 'var(--color-accent)';
            }
        });
    });

    // Add scroll effect to navbar
    let lastScroll = 0;
    const nav = document.querySelector('.nav');

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            nav.style.boxShadow = '0 2px 10px rgba(56, 51, 52, 0.1)';
        } else {
            nav.style.boxShadow = 'none';
        }

        lastScroll = currentScroll;
    });
});

// Add keyboard navigation support
document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-nav');
    }
});

document.addEventListener('mousedown', () => {
    document.body.classList.remove('keyboard-nav');
});
