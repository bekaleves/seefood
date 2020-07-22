import { Recipe } from './../recipe.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://www.thespruceeats.com/thmb/tXKqu9A5bWpYiMzl2k2ZvEhsS9Q=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/cook-and-keep-octopus-tender-2018813-14_preview-HORZ-5b23ef75a9d4f900374697a3-9e7b5b30b36c494ea7c6987809bf03c1.jpg'),
    new Recipe('A Test Recipe', 'This is simply a test', 'https://www.thespruceeats.com/thmb/tXKqu9A5bWpYiMzl2k2ZvEhsS9Q=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/cook-and-keep-octopus-tender-2018813-14_preview-HORZ-5b23ef75a9d4f900374697a3-9e7b5b30b36c494ea7c6987809bf03c1.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
