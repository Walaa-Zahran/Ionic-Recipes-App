import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Schnitzel',
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Breitenlesau_Krug_Br%C3%A4u_Schnitzel.JPG/800px-Breitenlesau_Krug_Br%C3%A4u_Schnitzel.JPG",
      ingredients: ['French fries', 'pork meat', 'salad']
    },
    {
      id: 'r2',
      title: 'Spaghetti',
      imageUrl: "https://www.inspiredtaste.net/wp-content/uploads/2023/01/Spaghetti-with-Meat-Sauce-Recipe-Video.jpg",
      ingredients: ['Spaghetti', 'meat', 'tomatoes']
    }
  ]
  constructor() { }
  getAllRecipes() {
    return [...this.recipes];
  }
  getRecipe(recipeId: string): Recipe | null {
    const recipe = this.recipes.find(recipe => recipe.id === recipeId);
    return recipe ? { ...recipe } : null;
  }
  deleteRecipe(recipeId: string) {
    this.recipes = this.recipes.filter(recipe => {
      return recipe.id !== recipeId;
    })
  }
}
