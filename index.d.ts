export interface Image {
  id: number;
  url: string;
  width: number;
  height: number;
  position: number;
  recipeId: number;
  cloudinaryPublicId: string;
}

export interface Recipe {
  id: number;
  name?: string;
  description?: string;
  authorId: string;
  course?: string;
  createdAt: string;
  updatedAt: string;
  images?: Image[];
  ingredients: RecipeIngredient[];
  published: boolean;
}
export interface Ingredient {
  id: number;
  name?: string;
  unit: string;
  published: boolean;
  calorieCount: number;
  createdAt: string;
  updatedAt: string;
  amount: number;
}

type RecipeIngredient = {
  id: number;
  authorId: string;
  recipeId: number;
  ingredientId?: number;
  name?: string;
  amount?: number;
  unit?: string;
};

export interface Option {
  id: number;
  text?: string;
  label?: string;
  value: string;
  disabled: boolean;
}

export interface CloudinaryImage {
  access_mode: string;
  asset_id: string;
  bytes: number;
  created_at: Date;
  etag: string;
  folder: string;
  format: string;
  height: number;
  pages: number;
  placeholder: boolean;
  public_id: string;
  resource_type: string;
  tags: [];
  type: string;
  url: string;
  version: number;
  version_id: string;
  width: number;
}

export interface CloudinaryImageWithRecipeId extends CloudinaryImage {
  recipeId: number;
}

export interface RecipeFormProps {
  name: string;
}

export interface User {
  name: string;
  token: string;
  sub: string;
}

export interface Error {
  error: string;
}

export interface ImageData {
  id?: number;
  name?: string;
  width?: number;
  height?: number;
  url?: string;
  path?: string;
  size?: string;
  type?: string;
  data?: string | undefined;
  position?: number;
  cloudinaryId?: string;
}

export interface errorObject {
  type: string;
  message: string;
}
