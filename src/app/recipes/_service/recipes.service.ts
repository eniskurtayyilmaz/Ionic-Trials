import { Injectable } from '@angular/core';

import { Recipe } from '../recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Scnitzel',
      // tslint:disable-next-line: max-line-length
      imageUrl: 'https://media-cdn.tripadvisor.com/media/photo-s/07/29/5a/ac/servitenwirt.jpg',
      ingredients: ['Domato', 'Chicken']
    },
    {
      id: 'r2',
      title: 'Hamburger',
      // tslint:disable-next-line: max-line-length
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Big_Mac_hamburger_-_Japan_%283%29.jpg/800px-Big_Mac_hamburger_-_Japan_%283%29.jpg',
      ingredients: ['Domato', 'Beef']
    }
  ];
  constructor() { }

  getAllRecipes() {
    return [...this.recipes];
  }

  getRecipe(recipeId: string) {
    return this.recipes.find(recipe => recipe.id === recipeId);
  }

  onDeletedRecipe(recipeId: string) {
    this.recipes = this.recipes.filter(recipe => recipe.id !== recipeId);
  }
}
