export interface IRecipeOverview {
  recipe_id: number;
  name: string;
  keywords: string | null;
  category: string;
  dateCreated: string;
  dateModified: string;
  imageUrl: string;
  imagePlaceholderUrl: string;
}