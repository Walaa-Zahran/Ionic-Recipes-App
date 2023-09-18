import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipesService } from './recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {
  recipes!: Recipe[];
  constructor(private recipesService: RecipesService) { }

  ngOnInit() {
  }
  ionViewWillEnter() {
    console.log('will enter');
    this.recipes = this.recipesService.getAllRecipes();
    console.log(this.recipes);

  }
  ionViewDidEnter() {
    console.log('did enter')
  }
  ionViewWillLeave() {
    console.log('will Leave')
  }
  ionViewDidLeave() {
    console.log('did Leave')
  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    console.log('destroy')
  }
}
