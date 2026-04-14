export const SITE_INFO = {
  // 1. 브라우저 탭 및 검색 엔진 설정 (SEO)
  metadata: {
    title: "심로그 (Simlog)",
    tagline: "심심해서 기록하는 일상",
    description: "배우는 것과 기록하는 것에 진심인 재욱의 개인 블로그입니다.",
    favicon: "/favicon.ico", 
    ogImage: "/logo.png",     
  },

  // 2. 로고 및 기본 타이틀
  title: {
    main: "Sim",
    sub: "log",
  },

  // 3. 네비게이션 및 메뉴
  navButton: {
    text: "가족 소개",
    url: "/support-us",
  },
  navLinks: [
    { text: "홈", url: "/" },
    { text: "소개", url: "/about" },
    { text: "카테고리", url: "/categories" },
    { text: "문의", url: "/contact" },
  ],

  // 4. 메인 화면 구성 (Hero & 알림)
  hero: {
    eyebrow: "기록 저장소",
    titleMain: "심심해서",
    titleSub: "기록하는 일상",
    description: "배우는 것과 기록하는 것에 관심이 아주 많습니다.",
  },
  notification: {
    message: "심로그의 새로운 소식을 확인해보세요!",
    buttonText: "자세히 보기",
    url: "/support-us",
  },

  // 5. 게시물 관련 설정
  posts: {
    readingTime: "분 읽기",
  },
  recentPosts: {
    title: "최근 게시물",
    readMore: "더 보기",
    count: 3, 
  },
  featured: {
    topTitle: "추천 포스트",
    trendingTitle: "인기 급상승",
    popularTitle: "가장 많이 본",
  },
  heroCategories: [
    { category: '가족', color: '#ffb8b0' },
    { category: '공부', color: '#fdffba' },
    { category: '일상', color: '#b7ffff' },
    { category: '생각', color: '#ffd6c5' },
    { category: '개발', color: '#ffffca' },
    { category: '취미', color: '#ffcdf8' },
    { category: '전체 보기', color: '#c9c4ff' },
  ],

  // 6. 페이지별 상세 문구
  contact: {
    title: "연락처",
    subtitle: "궁금한 점이 있으신가요? 메시지를 남겨주시면 최대한 빨리 답변해 드릴게요.",
    successMsg: "메시지가 성공적으로 전송되었습니다! 곧 연락드릴게요.",
    placeholders: {
      name: "성함 (Name)",
      email: "이메일 주소 (Email)",
      message: "메시지를 입력하세요 (Message)",
      button: "보내기",
    }
  },
  about: {
    title: "안녕하세요, 재욱입니다.",
    shortBio: "일상의 소중한 순간들을 기록하고 공부한 내용을 나눕니다.",
    image: "/assets/profile.png",
  },
  support: {
    title: "저희 가족을 소개합니다",
    message: "심로그를 방문해 주셔서 감사합니다. 여기는 저희 가족의 작은 기록 공간입니다.",
  },

  // 7. 푸터 및 SNS 정보
  footer: {
    copyrightHolder: "Simlog",
    startYear: "2026",
  },
  social: {
    github: "https://github.com/wook2002",
    instagram: "https://instagram.com/your_id", // 실제 아이디로 수정
    email: "mailto:your_email@naver.com",       // 실제 이메일로 수정
  },
  labels: {
    categoryPage: "카테고리 별 모아보기",
    totalPosts: "전체 포스트",
    searchPlaceholder: "검색어를 입력하세요...",
    noResults: "검색 결과가 없습니다.",
  },
};
