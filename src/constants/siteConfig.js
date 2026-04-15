export const SITE_INFO = {
  // 1. 브라우저 탭 및 검색 엔진 설정 (SEO)
  metadata: {
    title: "심로그 (Simlog)",
    tagline: "블로그.", // ✅ 심플하게 변경
    description: "기록의 가치를 담는 재욱의 개인 블로그입니다.",
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
    eyebrow: "기록.", // ✅ 두 글자로 통일
    titleMain: "블로그.", // ✅ 재욱님 픽!
    titleSub: "",      // ✅ 서브 타이틀은 비워둬서 난잡함 제거
    description: "배우고 기록하는 일들을 담아냅니다.", 
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
    title: "최근 기록", // ✅ '게시물'보다 '기록'이 더 느낌 있네요
    readMore: "더 보기",
    count: 6, 
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
    subtitle: "메시지를 남겨주시면 최대한 빨리 답변해 드릴게요.",
    successMsg: "메시지가 성공적으로 전송되었습니다!",
    placeholders: {
      name: "성함",
      email: "이메일",
      message: "메시지",
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
    message: "심로그를 방문해 주셔서 감사합니다.",
  },

  // 7. 푸터 및 SNS 정보
  footer: {
    copyrightHolder: "Simlog",
    startYear: "2026",
    privacyPolicy: "개인정보처리방침",
    termsAndConditions: "이용약관",
    allRightsReserved: "All rights reserved.",
  },
  social: {
    github: "https://github.com/wook2002",
    instagram: "https://instagram.com/your_id", 
    email: "mailto:your_email@naver.com",       
  },
  labels: {
    categoryPage: "카테고리 별 모아보기",
    totalPosts: "전체 포스트",
    searchPlaceholder: "검색어를 입력하세요...",
    noResults: "검색 결과가 없습니다.",
  },
  categoryMapping: {
    "Art": "예술",
    "Business": "비즈니스",
    "Creativity": "창의성",
    "Health": "건강",
    "History": "역사",
    "Philosophy": "철학",
    "Psychology": "심리학",
    "Science": "과학",
    "Technology": "기술",
    "Meta": "메타",
  },
};
