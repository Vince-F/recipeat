export interface IRecipeDetailed {
  id: string;
  name: string;
  description: string;
  url: string;
  image: string;
  prepTime: string;
  cookTime: string;
  totalTime: string | null;
  recipeCategory: string;
  keywords: string;
  recipeYield: number;
  tool: string[];
  recipeIngredient: string[];
  recipeInstructions: string[];
  dateModified: string;
  dateCreated: string;
  printImage: boolean;
  imageUrl: string;
  nutrition: { [key: string]: string; };
  "@context": string;
  "@type": string;
}