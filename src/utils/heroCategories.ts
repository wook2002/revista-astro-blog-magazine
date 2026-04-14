import { SITE_INFO } from '../constants/siteConfig';

export interface Category {
  category: string;
  color: string;
}

// 이제 데이터는 SITE_INFO에서 가져옵니다.
export const categories: Category[] = SITE_INFO.heroCategories;

export function getColor(category: string): string {
  const found = categories.find(
    (element) => element.category.toUpperCase() === category.toUpperCase()
  );
  // 못 찾으면 기본 보라색(#c9c4ff) 반환
  return found ? found.color : '#c9c4ff';
}

export function getCategory(category: string): Category | undefined {
  return categories.find(
    (element) => element.category.toUpperCase() === category.toUpperCase()
  );
}
