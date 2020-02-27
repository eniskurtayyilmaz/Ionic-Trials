import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipesService } from '../_service/recipes.service';
import { AlertController } from '@ionic/angular';

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
    private recipeService: RecipesService,
    private router: Router,
    private alertCtrl: AlertController
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {

      if (!paramMap.has('recipeId')) {
        this.router.navigate(['/recipes']);
        return;
      } else {
        const recipeId = paramMap.get('recipeId');
        this.recipe = this.recipeService.getRecipe(recipeId);
      }
    });
  }

  deleteRecipe() {

    const alert = this.alertCtrl.create({
      header: 'Başlık!',
      message: 'Bu kaydı silmek istiyor musunuz?',
      buttons: [
        {
          text: 'İptal',
          role: 'cancel',
          cssClass: 'secondary',
        }, {
          text: 'Tamam',
          handler: () => {
            this.recipeService.onDeletedRecipe(this.recipe.id);
            this.router.navigate(['/recipes']);
          }
        }
      ]
    });

    alert.then(x => x.present());

  }
}
