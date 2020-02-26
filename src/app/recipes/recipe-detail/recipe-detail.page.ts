import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipesService } from '../_service/recipes.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit {

  recipe: Recipe;

  constructor(
    private activatedRoute: ActivatedRoute,
    private recipeService: RecipesService
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {

      if (!paramMap.has("recipeId")) {
        //redirect
        return;
      } else {
        const recipeId = paramMap.get('recipeId');
        this.recipe = this.recipeService.getRecipe(recipeId);
      }
    });
    //this.recipe = this.recipeService.getRecipe
  }

}
