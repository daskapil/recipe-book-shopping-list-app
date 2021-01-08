import { Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {   
    private recipes: Recipe[] = [
        new Recipe(
            'Shahi Chicken Curry',
            'Shahi Checiken Curry ',
            'https://picturetherecipe.com/wp-content/uploads/2020/01/Rogan-Josh-by-PictureTheRecipe-Featured-1-395x500.jpg',
            [
                new Ingredient('Chicken', 500),
                new Ingredient('Onion', 200),
                new Ingredient('Tomato', 100)
            ]
        ),
        
        new Recipe(
            'Aloo Posto',
            'Delicious Aloo Posto',
            'https://uploads-ssl.webflow.com/5c481361c604e53624138c2f/5c78acdb86beb7344fdb888f_Alu-posto-website-thumbnail.png.jpg',
            [
                new Ingredient('Popi Seed', 500),
                new Ingredient('Potato', 200),
                new Ingredient('Onion', 50)
            ]
        )
    ];

    constructor(private shoppingListService: ShoppingListService) { }
        
    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }

    addIngredientToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
    }
}