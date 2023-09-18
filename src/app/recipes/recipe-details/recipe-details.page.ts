import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipesService } from 'src/app/recipes/recipes.service';
import { Recipe } from '../recipe.model';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.page.html',
  styleUrls: ['./recipe-details.page.scss'],
})
export class RecipeDetailsPage implements OnInit {
  loadedRecipe!: Recipe | null;
  constructor(
    private activatedRoute: ActivatedRoute,
    private recipesService: RecipesService,
    private router: Router,
    private alertCtrl: AlertController
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('recipeId')) {
        //redirect
        return;
      }
      const recipeId = paramMap.get('recipeId');
      if (!recipeId) {
        // Handle null recipeId case here, perhaps redirect or throw an error
        return;
      }
      this.loadedRecipe = this.recipesService.getRecipe(recipeId);
    })
  }
  deleteRecipe() {
    if (this.loadedRecipe) {
      this.alertCtrl.create({
        header: 'Are you sure?', message: 'Do you really wanna delete the recipe?',
        buttons: [{
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Delete',
          handler: () => {
            if (this.loadedRecipe) {
              this.recipesService.deleteRecipe(this.loadedRecipe.id);
              this.router.navigate(['/recipes']);
            }

          }
        }]
      }).then(alertEl => {
        alertEl.present();
      })

    }
  }
}
