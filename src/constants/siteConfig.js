// src/constants/siteConfig.js
export const SITE_INFO = {
  // 브라우저 탭 및 검색용 정보
  metadata: {
    title: "심로그 (Simlog)",
    tagline: "심심해서 기록하는 일상",
    description: "배우는 것과 기록하는 것에 진심인 재욱의 개인 블로그입니다.",
  },
  title: {
    main: "Sim",
    sub: "log",
  },
  navButton: {
    text: "가족 소개",
    url: "/support-us",
  },
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
  recentPosts: {
    title: "최근 게시물",
    readMore: "더 보기",
    count: 3, // 메인에 보여줄 포스트 개수
  },
  contact: {
    title: "연락처",
    subtitle: "궁금한 점이 있으신가요? 메시지를 남겨주시면 최대한 빨리 답변해 드릴게요.",
    successMsg: "메시지가 성공적으로 전송되었습니다! 곧 연락드릴게요.",
  },
  footer: {
    copyrightHolder: "Simlog",
    startYear: "2024",
  },
  // 상단 메뉴 설정
  navLinks: [
    { text: "홈", url: "/" },
    { text: "소개", url: "/about" },
    { text: "카테고리", url: "/categories" },
    { text: "문의", url: "/contact" },
  ],

  // 카테고리 섹션 제목 (Featured 섹션용)
  featured: {
    topTitle: "추천 포스트",
    trendingTitle: "인기 급상승",
    popularTitle: "가장 많이 본",
  },
  // 메인 화면 히어로 섹션에 보여줄 카테고리들
  heroCategories: [
    { category: '가족', color: '#ffb8b0' },
    { category: '공부', color: '#fdffba' },
    { category: '일상', color: '#b7ffff' },
    { category: '생각', color: '#ffd6c5' },
    { category: '개발', color: '#ffffca' },
    { category: '취미', color: '#ffcdf8' },
    { category: '전체 보기', color: '#c9c4ff' },
  ]
};
