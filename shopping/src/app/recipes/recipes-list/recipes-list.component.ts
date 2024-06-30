import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrl: './recipes-list.component.css'
})
export class RecipesListComponent {
  recipes: Recipe[] = [
    new Recipe('Test recipe', 'This is simply test', 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe_writing_700-94d33d1.jpg?quality=90&webp=true&resize=300,272')
  ];

}
