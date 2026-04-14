/**
 * Hero Categories Configuration
 * 
 * IMPORTANT NOTE:
 * These are the categories displayed on the homepage hero section, NOT all categories.
 * There may be more categories, which will all be listed on the All Categories page.
 */

export interface Category {
  category: string;
  color: string;
}

export const categories: Category[] = [
  { category: '가족', color: '#ffb8b0' },
  { category: '공부', color: '#fdffba' },
  { category: '일상', color: '#b7ffff' },
  { category: '생각', color: '#ffd6c5' },
  { category: '개발', color: '#ffffca' },
  { category: '취미', color: '#ffcdf8' },
  // ... 원하는 만큼 수정/추가 하세요!
  { category: '전체 보기', color: '#c9c4ff' },
];

/**
 * Get the color for a given category
 * @param category - The category name
 * @returns The hex color code for the category, or a default color if not found
 */
export function getColor(category: string): string {
  const found = categories.find(
    (element) => element.category.toUpperCase() === category.toUpperCase()
  );
  // Return default color if undefined
  return found ? found.color : '#c9c4ff';
}

/**
 * Get category configuration by name
 * @param category - The category name
 * @returns The category configuration object, or undefined if not found
 */
export function getCategory(category: string): Category | undefined {
  return categories.find(
    (element) => element.category.toUpperCase() === category.toUpperCase()
  );
}
