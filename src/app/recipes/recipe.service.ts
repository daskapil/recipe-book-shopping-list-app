import { Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe('Shahi Chicken Curry', 'Recipe description - 1', 'https://picturetherecipe.com/wp-content/uploads/2020/01/Rogan-Josh-by-PictureTheRecipe-Featured-1-395x500.jpg'),
        new Recipe('Bengali-Style Chicken', 'Recipe description - 2', 'https://picturetherecipe.com/wp-content/uploads/2020/01/Rogan-Josh-by-PictureTheRecipe-Featured-1-395x500.jpg')
    ];
    
    getRecipes() {
        return this.recipes.slice();
    }
}