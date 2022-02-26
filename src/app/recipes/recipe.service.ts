import {  Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredients.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";
@Injectable()


export class RecipeService{

  recipesChanged=new Subject<Recipe[]>();

    private recipes:Recipe[] =[
        new Recipe(' Veggie Salad!',
        'A super veggie Salad',
        'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2FsYWR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        [new Ingredient('veggies',1 ),new Ingredient('salt',1)]),
        new Recipe('A Fat Burger!',
        'What else u need to say ?',
        'https://media.istockphoto.com/photos/burger-in-studio-picture-id1174863433?b=1&k=20&m=1174863433&s=170667a&w=0&h=dRe5dmB0FG8eeUnJMJ-97t7IUojWeljUZGkpMVvmRgU=',
        [new Ingredient('meat',1),new Ingredient('Bread',2)])
      ];

      constructor(private slService:ShoppingListService){}
      getRecipes(){
         return this.recipes.slice();
      }
      getRecipe(index:number){
           return this.recipes[index];
      }
      addIngredientsToShoppingList(ingredients:Ingredient[]){
             this.slService.addIngredients(ingredients);
      }
      addRecipe(recipe:Recipe){
        this.recipes.push(recipe)
        this.recipesChanged.next(this.recipes.slice())
      }
      updateRecipe(index:number,newRecipe:Recipe){
        this.recipes[index]=newRecipe
        this.recipesChanged.next(this.recipes.slice())
      }
      deleteRecipe(index:number){
        this.recipes.splice(index,1);
        this.recipesChanged.next(this.recipes.slice());
      }
}