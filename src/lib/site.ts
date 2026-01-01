export type Project = {
  slug: string;
  name: string;
  summary: string;
  tags: string[];
  links?: {
    live?: string;
    github?: string;
    docs?: string;
  };
  highlights: string[];
  detail?: {
    intro?: string;
    image?: string;
    imageAlt?: string;
    sections?: {
      title: string;
      body?: string;
      bullets?: string[];
      isMainSection?: boolean;
    }[];
  };
};

export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  highlights: string[];
};

export type CareerTimelineItem = {
  period: string; // e.g. "2025.07 ~ 현재"
  title: string;
  subtitle?: string; // e.g. "Main Project (정)"
  org?: string; // e.g. "NIT Service · 네이버파이낸셜"
  work?: string[]; // 주요 업무
  impact?: string[]; // 업무 성과
  metrics?: string[]; // 주요 개선 지표
};

export type CareerOverview = {
  heading?: string; // e.g. "직장 경력"
  lines: string[]; // display lines
};

export type Certification = {
  name: string;
  date: string;
};

export type SkillMatrixRow = {
  category: string;
  items: string;
};

export const site = {
  name: "이다혜",
  nameEn: "Lee DaHye",
  profileEmoji: "👩🏻‍💻",
  gender: "여",
  birthDate: "1995년 05월 25일",
  initials: "DH",
  role: "Devops",
  location: "Seoul, KR",
  currentCompany: "NIT Service (네이버 계열사)",
  currentTeam: "네이버파이낸셜 플랫폼 운영 팀",
  title: "이다혜 | Portfolio",
  description:
    "전자금융거래법 환경에서 내부통제·변경관리·운영 자동화를 통해 안정성과 효율을 함께 개선해온 DevOps 엔지니어 이다혜의 포트폴리오입니다.",
  keywords: [
    "포트폴리오",
    "DevOps",
    "플랫폼 운영",
    "내부통제",
    "변경관리",
    "ITGC",
    "Kubernetes",
    "Jenkins",
    "Sentry",
    "Kafka",
    "Observability",
  ],
  headline: "내부통제와 운영 효율을 함께 올리는 DevOps 엔지니어",
  summary:
    "이 포트폴리오는 토스뱅크 IT Planning Manager 직무 지원을 위해 작성되었습니다.",
  about:
    "안녕하세요. 실시간으로 변하는 IT 현장에서, 맥락을 읽고 변화를 만들어 온 이다혜입니다.\n\n대규모 핀테크 플랫폼 운영(DevOps)팀 초기 멤버로서, 전자금융거래법 망 환경에서 정보보호팀·개발팀과 협업해\n 내부통제 프로세스를 반영한 운영 구조를 설계하며, 리스크를 대응하고 규제와 효율 사이의 최적점을 찾아왔습니다.\n\n저는 기획부터 개발, CI/CD, DB와 메세징 시스템, 배포, 모니터링까지 전 과정을 직접 설계하고 구현할 수 있습니다.\n핀테크 플랫폼 전반에 걸친 다양한 개선을 직접 시도하고 검증해왔기 때문에\nIT 프로세스 전 과정에서, 특정 기술에 국한되지 않고 실무 중심의 기술적 돌파구도 제시할 수 있습니다.\n\n또한, 변화가 필요한 순간마다 가장 먼저 구조를 파악하고, 실행 가능한 협업 방식을 설계해\n글로 설명하기 어려운 현장의 노하우들을 누구나 보고 따라 할 수 있는 가이드와 표준 절차로 바꾸는 역할을 맡아왔습니다.\n\n이러한 경험을 바탕으로 IT Planning Manager로서, 규제 환경 안에서도 혁신하는 최적 경로를 만들어가겠습니다.",
  aboutLong:
    "\n\n정보를 빠르게 분석해 결과를 얻는 일은 기술이 사람을 앞서는 시대가 되었지만,\n **데이터로 설명되지 않는 현장의 맥락을 읽어내는 것**은 여전히 사람의 역할로 남아 있습니다.\n\n 저는 전자금융거래법 망 환경에서 대규모 서비스를 운영하며, **빠르게 변화하는 IT 환경 속에서**\n **문제를 정의하고 개선**해 왔습니다. 규제와 혁신 사이에서 현실적인 균형점을 찾아 프로젝트를 이끌어 왔습니다.\n\n특히 금융 IT 환경에서는, 말이나 글로 정리되지 않은 개인의 경험과 판단에 의존해 운영되는 경우가 많습니다. 저는 **현장의 암묵지를 표준 가이드로 체계화**하여, 조직 전체가 동일한 기준으로 판단할 수 있는 구조를 만드는 데 강점이 있습니다.\n\n\n\n**대규모 핀테크 플랫폼 운영 체계 구축**\n\n\n핀테크 플랫폼 운영(DevOps) 팀의 초기 멤버로서\n 전자금융거래법 망 환경에서 **내부통제 요건을 준수하는 안정적인 서비스 운영 체계를 구축**해 왔습니다.\n\n부서별로 독립 운영되던 Jenkins 환경을 통합하고, 권한 관리부터 이슈 대응까지의 절차를 새롭게 설계해\n 배치 통제 체계를 구현했습니다. 이 과정에서 정보보호·개발팀과의 협업을 통해 감사 대응이 가능한 동시에\n전금법 망 내에서도 운영 효율을 저해하지 않는 프로세스를 적용했습니다.\n\n또한, 사내 쿠버네티스 배포 도구를 활용해 배포 업무를 수행하며\n  전금법 망 환경의 배포 통제 흐름과 승인 절차를 이해했습니다.\n\n이 외에도 게이트웨이, 아티팩트, 사내 AI 도구 등 다양한 사내 플랫폼을 운영·활용하며, \n금융망 환경에서 각 시스템이 어떻게 적용되고 연계되어 동작하는지에 대한 이해를 쌓아왔습니다.\n\n**제한된 환경 속에서 인프라 효율을 극대화**\n\n모니터링 플랫폼 운영 중, 이슈 생성 지연이 최대 9시간까지 발생하는 문제를 겪었습니다.\n데이터 분석을 통해 병목 지점을 파악하고, 데이터 분배 로직과 배포 구조를 개선했습니다.\n\n그 결과,\n→ 이슈 생성 지연을 9시간 → 1분 이내로 단축했고\n→ 미처리 데이터를 94% 감소(2,800만 건 → 162만 건)시켰으며\n→ 데이터 처리 용량을 초당 3,000건 → 12,000건으로 4배 이상 확장했습니다.\n\n이를 통해 시스템 가용성을 획기적으로 높였습니다.\n 이처럼 운영 업무 속에서 실질적인 **성과를 수치로 증명할 수 있는 개선 경험을 다수 보유**하고 있습니다.\n\n**빠른 판단력으로 변화를 주도**\n\n또한 클라우드 이전과 같은 대규모 환경 변화에서는, **가장 먼저 실무 적용 방안을 정리**하고\n 팀원들의 현실을 고려한 협업 구조를 설계했습니다.\n\n말이나 글로 설명하기 어려운 현장의 노하우를 누구나 따라 할 수 있는 가이드와 표준 절차로 정리해,\n 구성원들이 동일한 기준으로 움직일 수 있도록 했습니다.\n\n이를 통해 **변화 상황에서도 혼란을 최소화**하고, 유관 부서보다 한발 앞서 대응할 수 있었습니다.\n\n\n\n저는 개발부터 운영까지 전 과정을 아우르며, 다양한 개발 언어와 DB·메시징 시스템, CI/CD, 모니터링을\n 프로젝트 성격에 맞게 조합해 **개선을 직접 시도하고 검증**해 왔습니다. 이를 바탕으로 특정 기술에 국한되지 않은 실무 중심의 해법을 제시할 수 있습니다.\n\n**이러한 역량들로 IT Planning Manager로서, 규제 환경 안에서도 혁신하는 최적 경로를 만들어가겠습니다.**",
  aboutKeywords: [
    "핀테크 플랫폼 기획·개발·운영 경험",
    "IT 내부통제/변경관리",
    "운영 매뉴얼·실습 커리큘럼 제작",
    "문서화·조직 리딩",
    "운영 자동화(DevOps)",
    "실무 중심의 기술 통찰",
    "커뮤니케이션 능력",
    "AI·바이브 코딩",
    "ITGC",
  ],
  email: "daaa0555@naver.com",
  phone: "010-5031-0555",
  links: {
    github: "",
    linkedin: "",
    blog: "",
  },
  certifications: [
    { name: "NCE (NAVER Cloud Platform Certified Expert)", date: "2024.05.24" },
    {
      name: "NCP (NAVER Cloud Platform Certified Professional)",
      date: "2024.02.08",
    },
    { name: "NCA (NAVER Cloud Platform Certified Associate)", date: "2024.02.08" },
    { name: "CKAD (Certified Kubernetes Application Developer)", date: "2023.09.24" },
    { name: "CKA (Certified Kubernetes Administrator)", date: "2023.04.16" },
    { name: "RHCSA (Red Hat Certified System Administrator)", date: "2021.05.28" },
    { name: "CCNA (Cisco Certified Network Associate)", date: "2021.02.08" },
    { name: "리눅스 마스터 2급", date: "2020.12.31" },
    { name: "네트워크 관리사 2급", date: "2020.11.17" },
  ] satisfies Certification[],
  stackNote: "Kubernetes · Jenkins · Observability · Python",
  skills: [
    "Kubernetes",
    "Helm",
    "Docker",
    "Jenkins",
    "GitHub Actions",
    "Python",
    "Django",
    "FastAPI",
    "Sentry",
    "Kafka",
    "PostgreSQL",
    "Elasticsearch",
    "Kibana",
    "Grafana",
    "Logstash",
    "Lambda",
    "Istio",
    "Chaos Engineering",
    "LLM / RAG / MCP",
  ],
  skillMatrix: [
    { category: "Frontend", items: "Next.js" },
    { category: "Backend", items: "Python, Django, FastAPI, Spring, Kotlin" },
    { category: "DataBase", items: "PostgreSQL, Kafka(Messaging), Elasticsearch" },
    {
      category: "DevOps",
      items:
        "Docker, Kubernetes, Helm, Jenkins, GitHub Actions, Lambda, Istio, Chaos Engineering, AI",
    },
    { category: "Monitoring", items: "Sentry, Kibana, Grafana, Prometheus, Logstash" },
  ] satisfies SkillMatrixRow[],
  experience: [
    {
      company: "NIT Service (네이버 계열사) · 네이버파이낸셜",
      role: "DevOps Engineer (플랫폼 운영)",
      period: "2021.11 - 현재",
      highlights: [
        "전자금융거래법 망 환경 Sentry 플랫폼 운영 및 자동화(대규모 트래픽 모니터링)",
        "Kubernetes(Helm) 전환 및 HPA 기반 확장 구조로 운영 안정성/확장성 확보",
        "이슈 생성 시간 1시간+ → 0~1분, 초당 처리량 3,000 TPS → 12,000+ TPS 개선",
        "Kafka Lag 2,800만 → 162만(94%↓)로 지연/부하 문제 개선",
        "공용 배치 Jenkins 중앙화(등록–승인–실행–이력/증적) 및 ITGC 증적·평가 대응",
        "보고서 자동화로 작성 시간 6h → 1h(80%+↓), 실패 리포트/알림 체계 구축",
        "Jenkins 분산/DR 구성 및 600+ 잡 이관 자동화, 약 50개 서비스 무중단 전환(일정 조율/현황 관리)",
      ],
    },
    {
      company: "Automation & AIOps (Side)",
      role: "Automation / AIOps",
      period: "2023.12 - 현재",
      highlights: [
        "AIOps 도입 기획서 작성 및 적용 가능성 검토·공유",
        "LLM 기반 브라우저 확장으로 코멘트 작성 3분 → 10초(약 96%↓), 주 100건+ 반복 업무 자동화",
        "업무 인입 알람봇/대시보드 자동 갱신 등 운영 자동화 도구 설계·개발",
      ],
    },
  ] satisfies ExperienceItem[],
  careerTimeline: [
    {
      period: "2025.07 ~ 현재",
      title: "AIOps 도입 프로젝트",
      subtitle: "Side Project (정)",
      org: "Automation / AIOps",
      work: [
        "AIOps 도입 기획서 작성 및 팀 내 적용 가능성 검토·공유",
        "LLM·RAG·MCP 등 AI 기술을 활용한 운영 효율화 아이디어 발굴 및 적용 실험",
        "LangChain, LangGraph 실습 가이드 작성",
        "노코드 AI 도구 도입 프로젝트",
        "전금법망 환경 내 Dify 설치 및 검증(GitHub 로그인·사내도구 연동)",
        "Dify 플러그인 검증 및 테스트",
        "Jira 및 Github, 사내 메신저 및 API 연동",
        "Dify 기능 테스트 및 가이드 작성(코드·RAG·MCP, 플러그인 설치 방법)",
        "n8n 자료조사 및 사내 사용 사례 확인",
      ],
      impact: [
        "LLM 기반 브라우저 확장으로 코멘트 작성 3분 → 10초(약 96%↓)",
        "주 100건+ 반복 업무 자동화(알람봇/대시보드 자동 갱신 등)",
      ],
    },
    {
      period: "2024.06 ~ 현재",
      title: "전자금융거래법 망 환경 Sentry 플랫폼 운영",
      subtitle: "Main Project (정)",
      org: "NIT Service · 네이버파이낸셜",
      work: [
        "대규모 트래픽 모니터링 시스템 Sentry 운영 및 자동화",
        "전자금융거래법 망 환경의 Kubernetes 기반 운영 구조 전환 및 최적화",
        "Kafka·PostgreSQL 성능 개선 및 고가용성(HA) 구조 설계",
        "모니터링·장애 대응 프로세스 개선",
        "메시지 분배 로직 최적화로 처리 지연 최소화 및 부하 균등화",
        "운영 매뉴얼·실습 커리큘럼 제작 / 운영 이슈 대응 및 복구 절차 자동화·문서화",
      ],
      impact: [
        "내부 코드 검증 및 수정으로 결함을 사전에 제거 → 리스크 차단",
        "자동화된 확장 구조 확보 → 안정적 운영 및 부하 대응 강화",
      ],
      metrics: [
        "이슈 생성 시간: 평균 1시간 이상 → 0초 ~ 1분 이내",
        "초당 처리량: 3,000건 제한 → 8,000건 이상 처리",
        "Kafka Lag: 최대 2,800만 개 → 162만 개(94%↓)",
      ],
    },
    {
      period: "2024.06 ~ 2025.02",
      title: "조직 업무 환경 변화 대응",
      subtitle: "Main Project (정)",
      org: "NIT Service · 네이버파이낸셜",
      work: [
        "조직의 업무 환경 변화에 따른 팀 업무 환경의 클라우드 전환 주도",
        "인프라 구조 분석 및 테스트 앱 구현, 초기 세팅·사전 검증·안정화",
        "팀 내 클라우드 운영 역량 강화를 위한 자격 취득 지원 및 학습 리딩",
        "변화 대응 문서화·표준화하여 운영 절차와 관리 체계 수립",
      ],
      impact: [
        "팀원 전원 클라우드 자격 취득(100%) 및 신규 환경 운영 역량 확보",
        "환경 변화 혼란 최소화, 동일한 대응/협업 프로세스 마련",
        "이후 업무 이관 시 운영 기준과 참고 사례로 활용될 운영 체계 구축",
      ],
    },
    {
      period: "2023.11 ~ 2024.06",
      title: "운영 리스크 최소화를 위한 Jenkins 구조 재설계",
      subtitle: "Main Project (정)",
      org: "NIT Service · 네이버파이낸셜",
      work: [
        "공용 배치 Jenkins 구조 개선안 수립 및 기획·제안·구축",
        "이관 자동화 프로세스 구현으로 운영 효율화 및 인적 오류 최소화",
        "개발 부서/서비스별 일정 조율·안내 기반 변경관리 수행(단계별 무중단 전환)",
        "약 50개 서비스 운영 체계 그룹화 및 표준 절차 문서화·가이드 배포",
        "승인·보고 절차/오류 리포트·알림 체계 자동화, ITGC 증적·평가 대응",
        "복구 훈련 및 DR 환경 안정화 지원",
      ],
      impact: [
        "분산형 Jenkins 구조 전환으로 안정성·가용성 향상, 운영 리스크 최소화",
        "이관 프로세스 자동화로 운영 속도·정확성 향상, 담당자 의존도 감소",
        "50개 서비스 일정 대응력 강화 및 협업/현황 관리 체계 정립",
      ],
      metrics: ["보고서 작성 시간: 80% 이상 단축"],
    },
  
    {
      period: "2022.02 ~ 2024.06",
      title: "네이버파이낸셜 배치 통제 체계 구현",
      subtitle: "Main Project (정)",
      org: "NIT Service · 네이버파이낸셜",
      work: [
        "공용 배치 Jenkins 운영 총괄(업무 채널/승인 절차 관리, 신규 서비스 인입 가이드 제공)",
        "개발·정보보호 등 유관 부서와 협력하여 내부통제 기준에 맞춘 운영 체계 구축 및 중앙화",
        "ITGC 관련 증적·평가 대응 / 운영 자동화(보고·승인·알림) 추진",
      ],
      impact: [
        "배치 운영을 중앙 통제 구조로 전환, 승인·접근·변경 관리 절차 내재화",
        "재현 가능한 프로세스 및 증적 관리 체계 확립으로 감사 대응력 강화",
      ],
    },
    {
      period: "2022.02 ~ 현재",
      title: "네이버파이낸셜 서비스 배포(내부통제 준수)",
      subtitle: "Main Project (정)",
      org: "NIT Service · 네이버파이낸셜",
      work: [
        "쿠버네티스 기반 서비스 배포 로직을 이해하고 실제 배포 수행",
        "배포 환경 및 내부 통제 절차 이해를 바탕으로 안정적 운영 지원",
      ],
      impact: [
        "전자금융거래망 환경에서 내부 통제를 준수한 배포 경험 확보",
        "대규모 금융 플랫폼의 배포 구조·정책·승인 절차에 대한 실무 이해 강화",
      ],
    },
  ] satisfies CareerTimelineItem[],
  careerOverview: {
    lines: [
      "NIT Service (네이버 계열사) 네이버파이낸셜 플랫폼 운영 팀",
      "2021.11.17 ~ 재직중 (4년 1개월)",
    ],
  } satisfies CareerOverview,
  application: {
    targetCompany: "토스뱅크",
    targetRole: "IT Planning Manager (IT Planning Team, CTO 산하)",
    statement1000: `저는 신설된 DevOps 팀의 초기 멤버로 합류해 전자금융거래법 망 환경에서 대규모 금융 플랫폼을 운영하며, 내부통제 요건을 충족하기 위한 IT 운영 구조를 설계해 왔습니다.

권한 관리, 모니터링, 변경 이력 관리, 장애 대응 프로세스 등을 엔지니어·개발 조직과 협업해 정립하며, 금융 서비스에서 요구되는 안정성과 감사 대응 가능성을 운영 전반에 내재화하는 역할을 수행했습니다.

누구나 AI를 통해 기술적 해법에 접근할 수 있는 시대에는, 무엇이 진짜 문제인지 제대로 정리할 줄 아는 사람이 변화를 만들 수 있다고 생각했습니다.

저는 개발부터 운영까지 직접 설계·구현하고, 자동화·모니터링·DB/메시징 시스템까지 폭넓게 활용할 수 있으며, 이러한 역량으로 핀테크 플랫폼을 운영하며 수많은 개선 사례를 직접 시도하고 검증해왔습니다.

실제 운영에 도움이 되는 개선인지 판단하며, 문제에 맞는 도구와 구조를 선택하고, 상황에 맞는 기술을 조합하고 구조화하는 역량을 쌓았습니다.

또한 금융 IT 환경에서의 지식은 말이나 글로 명확하게 표현되기 어렵습니다. 개인의 경험·통찰·직관에 따른 운영 판단이 의존될 경우, 그 자체가 리스크로 이어질 수 있다고 인식했습니다.

이에 따라 담당자 개인의 감각에 의해 암묵적으로 사용되던 기준을 정리해 문서화하고, 표준 절차와 가이드로 체계화해 왔습니다. 이를 통해 개인 의존적인 운영에서 벗어나, 조직 차원의 판단 기준을 갖춘 운영 체계를 구축하고자 했습니다.

이러한 경험을 바탕으로 IT Planning Manager로서 혁신과 컴플라이언스가 함께 작동하는 토스뱅크의 IT 운영 구조를 만드는 데 기여하고 싶습니다.`,
    strengths: [
      "내부통제 내재화: 등록–승인–실행–이력/증적을 시스템에 반영해 통제 리스크를 구조적으로 예방",
      "변경관리: 다수 서비스·유관부서 일정 조율/현황 관리로 무중단 전환과 협업 체계 정립",
      "감사/ITGC 대응: 즉시 제출 가능한 증적 체계(로그/이력/리포트) 정비 및 평가 대응",
      "작업통제·자동화: 승인/보고/알림 자동화로 운영 효율 향상(보고 시간 80%+ 절감)",
      "BCP/DR 관점 운영: 복구 훈련/DR 안정화 지원으로 서비스 연속성 강화",
    ],
    jdMapping: [
      {
        jd: "IT 내부통제(프로그램 변경 통제, 시스템 작업 통제) 정책 수립/운영",
        proof:
          "내부통제 요구사항을 반영한 Jenkins 배치 통제 체계(등록–승인–실행–이력/증적)구현, 직무 분리·권한 차등·승인/변경 이력 기반 통제 운영",
      },
      {
        jd: "내부통제 절차의 시스템 반영 및 통합 작업관리시스템 준비",
        proof:
          "실행 로그 실시간 수집, 성공/실패 자동 리포트, 승인 완료 데이터 API 연동 등 ‘절차→시스템’ 내재화 및 현황 가시화",
      },
      {
        jd: "변경관리/내부통제 협의체 운영, 이해관계자 커뮤니케이션",
        proof:
          "개발/엔지니어 등 유관부서와 협력, 서비스별 일정 조율·안내 및 진행 현황/특이사항 관리로 단계적 무중단 서비스 전환",
      },
      {
        jd: "현황 점검 및 개선(프로세스 준수 확인)",
        proof:
          "절차 문서화·가이드 배포, 실패 리포트·알림 체계로 미승인/예외 케이스를 추적 가능하게 만들고 운영 표준화",
      },
      {
        jd: "ITIL 기반 변경/구성/인시던트 관리 이해 및 경험",
        proof:
          "변경(승인/이력/보고 자동화), 인시던트(모니터링·장애 대응 프로세스 개선), 구성(서비스 그룹화/운영 기준 표준화) 관점 경험",
      },
    ],
  },
  projects: [
    {
      slug: "jenkins-batch-control",
      name: "Jenkins 배치 통제 체계 구현",
      summary:
        "분산 운영 중이던 Jenkins 환경을 중앙 집중화하고, 배치 작업 전 과정에 내부 통제를 적용한 운영 체계를 구축",
      tags: ["Jenkins", "Python", "ITGC", "Compliance"],
      highlights: [
        "직무 분리 원칙 기반 권한 차등(등록/수정/실행) 및 승인·변경 이력 관리로 통제 강화",
        "실행 로그 실시간 수집 + 성공/실패 자동 리포트로 감사 증적 확보",
        "월 단위 보고서 작성 6h → 1h, 자동화 도입으로 운영 효율 80%+ 개선",
      ],
      detail: {
        sections: [
          {
            title: "프로젝트 배경",
            isMainSection: true,
            bullets: [
              "당시 Jenkins는 부서별로 독립 운영되며, 모니터링·권한 제어·증적 관리 등 금융 서비스에 필수적인 IT 통제 기능이 미비해 관리가 어려웠습니다.",
              "특히 작업 이력이나 실패 기록을 체계적으로 관리할 수 있는 프로세스가 부재하여, 승인 누락·권한 오남용·장애 원인 추적 등에서 리스크가 존재했습니다.",
            ],
          },
          {
            title: "역할 및 수행 업무",
            isMainSection: true,
            bullets: [],
          },
          {
            title: "배치 운영 총괄",
            bullets: [
              "정보보호·내부통제 요구사항을 반영해 등록–승인–실행–이력 관리 전 과정을 체계화",
              "Jenkins 환경을 개선하며 안정적 운영과 자동화 기반의 관리 구조 확립",
            ],
          },
          {
            title: "배치 환경 중앙화 및 협업 체계 구축",
            bullets: [
              "부서별로 분산·독립 운영되던 Jenkins 환경을 중앙 집중 관리 체계로 전환",
              "여러 부서와 협업해 요구사항을 반영하고, 공용 정책·운영 가이드를 수립",
              "개발자 및 타 부서 요청자에게 표준화된 절차와 가이드 제공",
            ],
          },
          {
            title: "승인 프로세스 기반 배치 작업 관리",
            bullets: [
              "절차를 자동화하여 배치 작업 등록·변경·실패 시 통제 일관성 확보",
              "자동 검증 및 리포트 체계를 통해 운영 효율과 정확성 향상",
            ],
          },
          {
            title: "운영 증적 확보 강화",
            bullets: [
              "작업 실행 로그를 실시간 수집해 성공/실패 여부를 즉시 확인",
              "실행·실패 시 자동 리포트 발송 체계를 구현",
              "배치 실행 현황 및 오류 이력을 감사 증적으로 활용",
            ],
          },
          {
            title: "권한 관리 및 통제 체계 운영",
            bullets: [
              "직무 분리 원칙에 따라 작업 등록·수정·실행 권한을 차등 부여",
              "승인·변경 이력 기반의 통제 구조를 통해 보안성과 책임성을 강화",
            ],
          },
          {
            title: "감사 및 내부통제 대응 지원",
            bullets: [
              "감사 자료 제공 및 피드백 반영",
              "증적 이력 보고서 작성 및 감사 대응 로직 검토·리스크 제거",
              "감독규정 개정 시 통제 완화·보완 방안을 검토하여 제도 변화에 선제 대응",
            ],
          },
          {
            title: "서비스 연속성 확보 및 리스크 관리",
            bullets: [
              "망분리 강화 환경에서도 서비스 중단 없이 안정적 운영 지속",
              "자원 부족·스토리지 장애 등 긴급 이슈에 즉각 대응하여 장애 영향 최소화",
              "DR 체계 구축 및 복구 훈련을 통해 재해 발생 시 신속한 복구 대응 체계 확립",
            ],
          },
          {
            title: "자동화 기반 운영 효율화",
            bullets: [
              "배치 요청·승인·결과 알림을 웍스봇으로 자동화하여 업무 속도 향상",
              "Jenkins 노드 관리 및 상태 모니터링 자동화를 통해 운영 부담 경감",
            ],
          },
          {
            title: "프로젝트 성과 및 기여",
            isMainSection: true,
            bullets: [],
          },
          {
            title: "직무 분리 실현 및 통제 리스크 차단",
            bullets: [
              "개발자는 요청·코드 작성, 운영자는 승인·실행 관리로 역할을 명확히 분리",
              "승인 누락·권한 오남용 등 핵심 통제 리스크를 구조적으로 예방",
            ],
          },
          {
            title: "감사 대응 역량 강화",
            bullets: [
              "감사 대응용 증적 체계를 데이터 기반으로 완성",
              "요청 시 즉시 제출 가능한 이력·로그 체계 구축으로 감사 대응 속도 향상",
            ],
          },
          {
            title: "서비스 연속성 확보",
            bullets: [
              "망분리 정책 강화, NAS 장애 등 환경 변화에도 사전 리스크 검토 및 자동화 대응 수행",
              "운영 중단 없이 배치 서비스 연속성을 보장",
            ],
          },
          {
            title: "운영 효율성 향상",
            bullets: [
              "Job 라벨링 및 노드 추가 자동화로 운영자 개입 최소화",
              "장애 인지 및 복구 대응 속도를 실시간 수준으로 개선",
            ],
          },
          {
            title: "통제 기반 운영 문화 정착",
            bullets: [
              "단순 운영을 넘어 '감사 대응 가능한 운영 체계'로 전환",
              "정책 요구를 넘어 협업 중심의 실행 가능한 프로세스를 설계",
            ],
          },
        ],
      },
    },
    {
      slug: "sentry-platform-modernization",
      name: "전금법망 Sentry 플랫폼 구조 개선",
      summary:
        "외부 통신이 제한된 전금법망 환경에서, Sentry의 안정성·처리 성능·확장성을 개선하기 위한 구조 개선 프로젝트를 추진했습니다.",
      tags: ["Kubernetes", "Helm", "Sentry", "Kafka", "PostgreSQL"],
      highlights: [
        "이슈 생성 시간 1시간+ → 0~1분으로 단축",
        "초당 처리량 3,000 TPS → 12,000+ TPS, Kafka Lag 2,800만 → 162만(94%↓)",
        "Pgpool/pg_auto_failover 기반 HA 및 백업·복구 프로세스 설계/구축",
      ],
      detail: {
        sections: [
          {
            title: "프로젝트 배경",
            isMainSection: true,
            bullets: [
              "기존 Docker Compose 단일 노드 운영은 확장성·안정성이 부족해 트래픽 증가 시 서비스 중단과 로그 유실이 빈번했습니다.",
              "또한 Kafka와 DB 구조의 한계로 처리 지연·부하 집중·장애 복구 지연 등 운영 효율 저하와 리스크가 지속되었습니다.",
            ],
          },
          {
            title: "기존 환경 문제점",
            bullets: [
              "전금법망 제약: 외부 네트워크 차단으로 내부 모듈 에러가 반복되고, 에러 코드 확인·지표 수집이 제한",
              "확장성 부족: 부하 증가 시 서비스가 자주 중단되고 리소스 한계에 빠르게 도달",
              "로그 유실: 오류 로그 수집 실패가 반복되고, 트래픽 집중 시간대에는 로그가 처리되지 않음",
              "연결 과부하: Kafka·PostgreSQL 간 연결 과부하로 처리 지연 및 장애 복구가 어려움",
              "파티션 불균형: 특정 Kafka 파티션에 메시지가 집중되어 Consumer Lag이 급증, 로그 수집 성능 저하",
            ],
          },
          {
            title: "설계 및 개선 과정",
            isMainSection: true,
            bullets: [],
          },
          {
            title: "Kubernetes 기반 Helm 전환",
            bullets: [
              "사내 Kubernetes 인프라 자원과 HPA(수평 자동 확장)를 활용하여 안정적인 자원 운영 및 확장성 확보",
            ],
          },
          {
            title: "Kafka 파티션 및 로그 수집 구조 최적화",
            bullets: [
              "특정 파티션으로 몰리던 메시지를 내부 코드 수정을 통해 균등 분산",
              "Sentry Worker 구조 개선으로 Consumer Lag 감소 및 로그 수집 성능 향상",
            ],
          },
          {
            title: "전금법망 특성에 따른 모니터링 코드 개선",
            bullets: [
              "외부 네트워크 차단으로 인한 에러 코드 확인·지표 수집 제약을 해소",
              "내부 환경에 독립적인 로그 수집 및 에러 코드 매핑 모듈 자체 구현",
            ],
          },
          {
            title: "DB 성능 및 고가용성(HA) 확보",
            bullets: [
              "PostgreSQL Pgpool 도입으로 Write/Read 트래픽 분산 처리",
              "pg_auto_failover 기반 HA 구성으로 장애 시 자동 승격 및 무중단 서비스 유지",
              "백업 프로세스 구현",
            ],
          },
          {
            title: "모니터링 체계 고도화",
            bullets: [
              "Kafka 상태를 실시간으로 관리하기 위해 CMAK(Kafka Manager), Grafana 기반 모니터링 체계 구축",
            ],
          },
          {
            title: "프로젝트 성과 및 기여",
            isMainSection: true,
            bullets: [],
          },
          {
            title: "프로젝트 성과",
            bullets: [
              "이슈 생성 시간 단축 (평균 1시간 → 0초~1분 이내)",
              "초당 처리량 향상 (3,000건 제한 → 12,000건 이상 처리)",
              "Kafka Lag 대폭 감소 (최대 2,800만 건 → 162만 건(94%↓))",
              "부하에 따라 자동 확장되는 안정적·확장성 높은 운영 구조로 고도화",
            ],
          },
          {
            title: "프로젝트 기여도",
            bullets: [
              "Kubernetes(Helm) 전환: 온프레미스 Sentry를 사내 Kubernetes 기반 구조로 이전",
              "PostgreSQL 개선: 부하 분산 및 고가용성(HA) 구조 구현, 백업·복구 프로세스 설계 및 구축",
              "Kafka 최적화: 메시지 분배 로직 및 파티셔닝 개선, Consumer Offset 이슈 자동화",
              "Sentry 업그레이드 및 유지보수: 주요 버전 업그레이드, 이슈 및 문의 대응",
              "문서화: 설계·운영·복구 가이드 등 체계적 운영 문서 작성 및 관리",
            ],
          },
        ],
      },
    },
    {
      slug: "jenkins-split-dr-migration",
      name: "운영 리스크 최소화를 위한 Jenkins 구조 재설계",
      summary:
        "사용 부서 증가로 단일 Jenkins 인스턴스에 부하가 집중될 것으로 예상됨에 따라, 작업 지연과 운영 불안정을 예방하기 위해 Jenkins 인프라를 사전에 분리·재설계했습니다.",
      tags: ["Jenkins", "DR", "Automation", "Operations"],
      highlights: [
        "업무 특성 기준 3개 마스터로 분리 구축, 리소스 충돌 방지 및 안정성 확보",
        "스크립트+Jenkins API로 600+ 잡 이관 자동화(정확도 향상/시간 단축)",
        "Agent 레벨 DR 구성으로 장애 시 서비스 중단 최소화",
      ],
      detail: {
        sections: [
          {
            title: "프로젝트 배경",
            isMainSection: true,
            bullets: [
              "사용 부서와 작업량이 지속적으로 증가함에 따라 단일 Jenkins 구조로는 장애 발생 위험이 높다고 판단, 운영 리스크를 최소화하기 위해 마스터 분리 구조를 선제적으로 기획·추진했습니다.",
            ],
          },
          {
            title: "설계 및 개선 과정",
            isMainSection: true,
            bullets: [],
          },
          {
            title: "Jenkins 마스터 인스턴스를 3개로 분리 구축",
            bullets: [
              "업무 특성을 기준으로 3개의 마스터 인스턴스로 Jenkins 인프라를 분산 구축",
              "각 마스터를 독립 자원 및 격리 환경으로 설계해 전체 시스템 안정성 확보",
            ],
          },
          {
            title: "이관 자동화 도구 구현",
            bullets: [
              "Jenkins 잡 및 설정 이관 시 수동 오류를 방지하고 속도를 높이기 위해, 스크립트를 활용한 이관 자동화 프로세스를 개발",
              "600개 이상의 잡 이관 필요",
              "이를 통해 작업 정확도 향상 및 이관 시간 단축 효과를 달성",
            ],
          },
          {
            title: "Jenkins DR(이중화) 구성",
            bullets: [
              "Agent 레벨 DR 환경을 구축해 장애 발생 시 서비스 중단 최소화",
              "기존 잡 실행 환경을 즉시 대체할 수 있도록 설계, 복구 속도 향상",
            ],
          },
          {
            title: "협업 및 운영 체계 수립",
            isMainSection: true,
            bullets: [],
          },
          {
            title: "유관 부서와의 이관 일정 사전 조율",
            bullets: [
              "부서별 작업 특성과 Jenkins 운영 일정을 고려하여 이관 일정, 대상 마스터, 테스트 기간을 사전 이메일로 안내",
              "순차적으로 이관을 진행하며, 각 부서와 협의하여 영향이 최소화되는 시간대를 선택",
            ],
          },
          {
            title: "작업 대상 파악 및 책임자 확인 프로세스 운영",
            bullets: [
              "이관 대상이 되는 모든 Job 및 Node 정보를 정리하여 관련 부서와 공유하고, 확인 및 담당자 지정을 요청",
              "지정된 담당자와 이관 상태, 의존성, 중단 지점을 확인하여 최종 이관 범위 확정",
            ],
          },
          {
            title: "노드 환경 이력 및 설정 상태 확인",
            bullets: [
              "기존 노드의 환경 변수, Agent 방식, 실행 이력 등 상세 정보를 사전 조사",
              "이관 전후 상태를 이력화하여 비교할 수 있도록 준비, 이슈 발생 시 빠른 대응 가능",
            ],
          },
          {
            title: "신규 환경 안내 및 기술 지원 병행",
            bullets: [
              "이관 후 사용자가 새로운 마스터 환경에 빠르게 적응할 수 있도록 지원",
              "추가 요청 및 오류 대응을 지속적으로 처리하며, 주기적으로 확인",
            ],
          },
          {
            title: "프로젝트 성과 및 기여",
            isMainSection: true,
            bullets: [],
          },
          {
            title: "프로젝트 성과",
            bullets: [
              "Jenkins 마스터 인스턴스를 3개로 분리: 단일 구조의 집중 부하 문제를 선제적으로 차단, 부서별 트래픽과 작업 특성에 따라 그룹화, 서비스 간 리소스 충돌을 방지하고 안정성 확보",
              "이관 자동화 도구 자체 구현: 수동 오류를 최소화하고, 이관 효율성과 정확도 향상",
              "Jenkins Agent DR(이중화) 구성: 장애 발생 시 빠른 복구 및 서비스 연속성 확보",
              "협업 체계 수립: 이관 대상 잡/노드 정보를 Excel로 체계화하고 부서별 담당자 지정, 사전 이메일 안내 및 일정 조율, 관련 부서와의 이관 과정에서 혼선 최소화",
            ],
          },
          {
            title: "프로젝트 기여도",
            bullets: [
              "Jenkins 분리 구축 프로젝트의 주도자로서 제안부터 전체 구조 설계, 구현, 운영 안정화까지 전 과정을 직접 주도",
              "기술적 실행뿐만 아니라 관련 부서와의 조율, 이관 기준 수립, 프로세스 체계화까지 총괄",
              "서비스 중단 없이 안정적인 구조 전환을 성공적으로 완료",
            ],
          },
        ],
      },
    },
    {
      slug: "audit-report-automation",
      name: "감사/증적 대응 보고 자동화",
      summary:
        "변경·실패 이력 데이터와 승인 번호를 자동 매칭하고, 현황을 실시간으로 가시화해 감사 대응 속도와 운영 효율을 높였습니다.",
      tags: ["Elasticsearch", "Kibana", "Automation", "Audit"],
      highlights: [
        "승인 완료 데이터 API 연동으로 리포트 상태 실시간 반영",
        "월 단위 보고서 작성 6h → 1h(약 80%↓)로 단축",
        "미승인/실패 리포트 자동 취합·메일 발송으로 커뮤니케이션 비용 감소",
      ],
    },
    {
      slug: "llm-comment-automation",
      name: "AI 브라우저 확장앱 구현",
      summary:
        "요청서/이슈 형식이 불규칙한 환경에서 LLM을 활용해 코멘트 생성·등록을 자동화했습니다.",
      tags: ["LLM", "Browser Extension", "Python", "FastAPI"],
      highlights: [
        "코멘트 작성 3분 → 평균 10초(약 96%↓), 주 100건+ 반복 업무 자동화",
        "규칙 기반 파싱 + LLM 파싱 병행으로 케이스별 예외 대응",
        "보고 품질/일관성 향상 및 수동 작성 오류 제거",
      ],
    },
    {
      slug: "ops-automation-alert-dashboard",
      name: "운영 알림·대시보드 자동화(알람봇/업무 대시보드)",
      summary:
        "업무 인입과 운영 현황을 실시간으로 공유하기 위해 알람봇과 Kibana 기반 대시보드를 구축하고, 자동 갱신 파이프라인까지 연결했습니다.",
      tags: ["Python", "Lambda", "GitHub Webhook", "Works API", "Elasticsearch", "Kibana", "Jenkins"],
      highlights: [
        "업무 인입 시 메신저봇으로 실시간 알림 자동 전송(알람봇)",
        "업무 로그 시각화로 팀 주간 업무량/처리 현황을 한눈에 파악(Kibana)",
        "주마다 자동으로 갱신되는 자동화 시스템 추가 구현(Python+Jenkins)",
      ],
    },
    {
      slug: "ops-automation-incident-jobs",
      name: "장애 대응 자동화",
      summary:
        "운영 이슈의 감지·대응 속도를 높이기 위해 Jenkins 기반 대응 잡과 Kafka Offset 에러 자동 대응 프로세스를 구현했습니다.",
      tags: ["Jenkins", "Groovy", "Kafka", "Linux", "Shell Script", "Kafka CLI"],
      highlights: [
        "Jenkins 노드 모니터링 잡으로 장애 대응 속도 향상",
        "활성화/비활성화 자동화 잡으로 즉시 대응 가능하게 구성",
        "Kafka Offset 에러 자동 대응 프로세스 구현(Linux/Shell/Kafka CLI)",
      ],
    },
    {
      slug: "issue-response-feature",
      name: "이슈 대응 기능 구현",
      summary:
        "긴급 상황 시 최소 권한으로도 잡 상태를 제어할 수 있는 기능을 도입하여 대응 속도를 향상시키고 통제 증적을 확보했습니다.",
      tags: ["Jenkins", "Automation", "ITGC"],
      highlights: [
        "최소 권한으로 잡 상태(활성화/비활성화) 제어 기능 도입",
        "모든 사용 이력 자동 저장으로 통제 증적 확보",
        "긴급 대응 속도 향상 및 보안·감사 대응력 강화",
      ],
    },
    {
      slug: "ops-automation-dr-load-ci",
      name: "운영 안정성 자동화(DR·부하테스트·CI/이관)",
      summary:
        "운영 안정성과 배포 효율을 높이기 위해 DR 오탐 방지, 부하 테스트, 대량 이관, CI 기반 빌드/라벨링 자동화를 묶어 운영 체계를 강화했습니다.",
      tags: ["Python", "Lambda", "Kubernetes", "Docker", "GitHub Actions", "Jenkins API", "Harbor"],
      highlights: [
        "Jenkins DR 오탐 전환 방지 자동화(리전 간 단절로 인한 Failover 오탐 방지)",
        "Sentry 부하 테스트 앱 구현(초당 2,000+ 트래픽, Kubernetes Job/Docker/Python)",
        "Jenkins 대량 잡 이관 자동화(기존/신규 Jenkins API 활용)",
        "미승인 실패 리포트 취합 메일 발송 자동화(Python/Lambda/Mail API)",
        "주간 보고 작성 자동화(담당자 코멘트/이전 댓글 자동 반영, GitHub Actions)",
        "GitHub 이슈 라벨링 자동화(서비스·환경별 추적 효율화)",
        "Docker 이미지 빌드/레지스트리 업로드 CI 자동화(GitHub Actions/Docker/Harbor)",
      ],
    },
    {
      slug: "devops-end-to-end",
      name: "개발부터 운영까지 문제 해결 중심의 DevOps",
      summary:
        "개발–배포–운영–모니터링까지 전체 흐름을 연결해 문제의 원인을 파악하고, 자동화·표준화로 재발 방지와 지속 가능한 운영 체계를 구축했습니다.",
      tags: ["DevOps", "Automation", "Monitoring", "CI/CD", "AI"],
      highlights: [
        "Cursor 등 AI 도구를 활용해 빠르게 분석·구현하고, 동작 가능한 솔루션으로 연결",
        "자동화·대시보드·대응 잡 등 ‘구현 항목’을 누적해 운영 효율을 지속 개선",
      ],
      detail: {
        sections: [
          {
            title: "개요",
            isMainSection: true,
            bullets: [],
          },
          {
            title: "Cursor 등 AI 도구를 활용해 빠르게 분석·구현",
            bullets: [
              "AI 도구를 적극 활용해 빠르게 분석하고 동작 가능한 솔루션으로 구현",
              "코드를 한 줄 한 줄 작성하는 것이 아니라, 문제를 해결할 수 있는 솔루션으로 빠르게 연결",
            ],
          },
          {
            title: "개발-배포-운영-모니터링까지 전체 시야 확보",
            bullets: [
              "개발부터 배포, 운영, 모니터링까지 전체 흐름을 이해하고 아키텍처 수준에서 개선",
              "단편적인 기술 대응이 아닌, 전체 시야를 기반으로 한 근본적인 문제 해결",
            ],
          },
          {
            title: "DevOps 기반 근본 개선",
            bullets: [
              "단순 운영 대응을 넘어 CI/CD, 배포 파이프라인, 모니터링 로직까지 연결된 흐름 속에서 원인 파악→개선",
              "재발 방지와 지속 가능한 운영 체계 구축",
            ],
          },
          {
            title: "유연한 기술 활용 능력",
            bullets: [
              "상황에 맞는 도구와 언어를 선택해 유연하게 구현(AI·바이브 코딩)",
              "특정 기술에 국한되지 않고, 문제에 맞는 최적의 기술 스택을 선택·조합·적용",
            ],
          },
          {
            title: "구현 항목",
            isMainSection: true,
            bullets: [],
          },
          {
            title: "AI 기반 브라우저 확장앱을 통한 코멘트 작성 자동화",
            bullets: [
              "버튼 클릭으로 즉시 코멘트 생성, 이슈 제목에서 시작 시간 자동 추출 및 종료 시간 버튼 클릭으로 처리",
              "규칙 기반 파싱과 AI 파싱(LLM 활용)을 통해 다양한 이슈 형식 처리",
              "사용 기술: LLM, Prompt Engineering, Python, JavaScript, FastAPI",
            ],
          },
          {
            title: "Sentry 업무 가이드북 설계 및 개발",
            bullets: [
              "UI/UX를 고려한 학습 페이지 구조 설계, 사용자별 진행도 추적, 메모, 서버리스 제공 등 편리한 학습 경험 제공",
              "사용 기술: React, Next.js, SSO, Postgres, Kafka, Sentry",
            ],
          },
          {
            title: "감사 대응 보고서 작성 자동화 시스템 구현",
            bullets: [
              "정기 운영 리포트를 자동 수집·정리하는 프로세스를 구현하여 수동 작업 대폭 감소",
              "사용 기술: Python, Github-actions, Elastic Search, Kibana",
            ],
          },
          {
            title: "Jenkins 이슈 대응 잡 구현",
            bullets: [
              "노드 모니터링 잡 구현으로 장애 대응 속도 향상",
              "활성화/비활성화 자동화 잡 구현으로 장애 대응 속도 향상",
              "사용 기술: Groovy Script, Jenkins",
            ],
          },
          {
            title: "Kafka 이슈 대응 잡 구현",
            bullets: [
              "Kafka Offset 에러 자동 대응 프로세스 구현",
              "사용 기술: Linux, Shell Script, Kafka CLI",
            ],
          },
          {
            title: "업무 인입 알람봇 구현",
            bullets: [
              "업무 인입 시 메신저봇을 통해 실시간 알림 자동 전송",
              "사용 기술: Python, Lambda, Github Webhook, Works API",
            ],
          },
          {
            title: "Kibana 기반 업무 대시보드 구성",
            bullets: [
              "업무 로그 데이터를 시각화하여 팀의 주간 업무량/처리 현황을 한눈에 파악",
              "주마다 자동으로 갱신되는 자동화 시스템 추가 구현",
              "사용 기술: Python, Jenkins, Elastic Search, Kibana",
            ],
          },
          {
            title: "Jenkins DR 오탐 전환 방지 자동화",
            bullets: [
              "리전 간 단절로 인한 DR 전환 시 오탐 Failover 방지",
              "비정상 이중 기동 및 데이터 일관성 오류 방지",
              "사용 기술: 사내 모니터링 툴, Lambda, Python",
            ],
          },
          {
            title: "Sentry 부하 테스트 앱 구현",
            bullets: [
              "초당 2,000건 이상의 요청을 생성하는 부하 테스트 앱 구현",
              "사용 기술: Kubernetes Job, Docker, Python",
            ],
          },
          {
            title: "Jenkins 대량 잡 이관 자동화",
            bullets: [
              "기존 및 신규 Jenkins 환경에서 Jenkins API를 활용한 잡 이관 자동화",
              "사용 기술: Shell Script, Jenkins API",
            ],
          },
          {
            title: "미승인 실패 리포트 취합 메일 발송 자동화",
            bullets: [
              "실패 리포트 자동 취합 및 주기적 메일 발송 체계 구축",
              "사용 기술: Python, Lambda, 사내 Mail API",
            ],
          },
          {
            title: "주간 보고 작성 자동화",
            bullets: [
              "주간 보고 자동 생성 및 담당자 코멘트를 본문에 반영",
              "담당자 배정 시 이전 주간 보고의 댓글을 자동으로 불러오도록 구성",
              "사용 기술: Python, Github-actions",
            ],
          },
          {
            title: "Github 이슈 라벨링 자동화",
            bullets: [
              "서비스·환경별 이슈 라벨링 자동화로 플랫폼 운영 관리 및 이슈 추적 효율화",
              "사용 기술: Python, Github Webhook",
            ],
          },
          {
            title: "애플리케이션 배포용 Docker 이미지 빌드 자동화",
            bullets: [
              "수동 빌드 프로세스를 CI 파이프라인으로 전환",
              "이미지 빌드 및 레지스트리 업로드 자동화",
              "사용 기술: Github-actions, Docker, Harbor",
            ],
          },
        ],
      },
    },
    {
      slug: "policy-change-transition",
      name: "정책 변화에 따른 신규 업무 환경 전환",
      summary:
        "정책 변화에 따른 인프라 환경 전환에 선제 대응하여, 팀이 안정적으로 적응할 수 있도록 실무 중심의 가이드와 협업 구조를 설계한 프로젝트입니다.",
      tags: ["Docker", "Kubernetes", "Github", "Naver Cloud", "Transition", "Documentation"],
      highlights: [
        "전환 가이드/연동 매뉴얼/이슈 대응 자료를 실무 중심으로 제작·배포",
        "지속 가능한 협업 흐름과 운영 채널 구축으로 전환 과정 혼란 최소화",
        "팀 전체 신규 환경 100% 이관 및 운영 기준/참고 사례로 활용 가능한 체계 구축",
      ],
      detail: {
        sections: [
          {
            title: "프로젝트 배경",
            isMainSection: true,
            bullets: [
              "운영팀이 유관 부서를 효과적으로 지원하려면 새로운 인프라 환경에 빠르게 적응하는 것이 필수라고 판단했습니다.",
              "특히 전금법 환경 특성상 정보와 전환될 클라우드 환경에 대한 팀 내 이해도가 부족해, 이를 해소하기 위한 사전 대응이 필요했습니다.",
            ],
          },
          {
            title: "기획 및 협업 과정",
            isMainSection: true,
            bullets: [],
          },
          {
            title: "클라우드 기본 개념 습득 지원",
            bullets: [
              "클라우드 학습을 팀 차원에서 유도, 클라우드 기본 개념·구조 이해 기반 마련",
              "네이버 클라우드 Expert 공인 교육 과정 수강 및 자격증 선제 취득",
              "학습 자료를 정리·공유해 팀 전체의 기초 역량을 조기 확보",
            ],
          },
          {
            title: "업무 환경 전환 지원",
            bullets: [
              "인프라 구조 분석 및 테스트 앱 구현 및 사전 검증",
              "범용 Dockerfile 작성으로 누구나 즉시 활용 가능하도록 표준화",
              "바쁜 실무자의 입장을 고려해, 별도의 해석 없이 바로 활용 가능한 형태로 정보 정리",
              "전환 가이드, 연동 매뉴얼, 이슈 대응 자료를 실무 중심으로 제작",
              "담당자와 함께 단계별 환경 이관을 진행하며 실시간 피드백·교육 병행",
              "지속 가능한 협업 흐름과 운영 채널 구축으로 안정적 전환 지원",
            ],
          },
          {
            title: "프로젝트 성과 및 기여",
            isMainSection: true,
            bullets: [],
          },
          {
            title: "프로젝트 성과",
            bullets: [
              "팀원 전원 클라우드 운영 역량 확보 (NCE 자격 100% 취득)",
              "팀 전체 신규 환경 사용 가능 상태 전환 및 업무 환경 100% 이관",
              "문서화와 가이드를 통해 변화 대응 절차를 표준화하여, 팀 차원의 혼란 최소화",
              "유관 부서보다 앞서 선제적으로 대응하여, 안정적인 운영 업무 지원 가능",
            ],
          },
          {
            title: "프로젝트 기여도",
            bullets: [
              "팀의 업무 환경 전환 프로젝트에서 기획부터 구현, 운영 채널 구축까지 전 과정을 주도",
              "모든 팀원이 새로운 환경을 안정적으로 활용할 수 있도록 지원",
            ],
          },
        ],
      },
    },
    {
      slug: "guidebook-training-system",
      name: "가이드북 기반 업무 교육 시스템 구축",
      summary:
        "Sentry 실무 중심 가이드북을 직접 설계하고 Next.js로 구현해 교육·공유·협업이 자연스럽게 이루어지는 표준 운영 체계를 만들었습니다.",
      tags: ["Next.js", "Documentation", "Sentry", "Education"],
      highlights: [
        "Sentry·Helm·Kafka·PostgreSQL 등 구성요소별 실무 가이드 제공",
        "신규 인원도 즉시 대응 가능한 표준 대응/트러블슈팅 체계 구축",
        "가이드 기반 온보딩으로 팀 내 운영 지식 전파·표준화 강화",
      ],
    },
  ] satisfies Project[],
} as const;


