import { Injectable } from '@angular/core';
import { Cocktail } from './cocktail';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {
  cocktail1: Cocktail = new Cocktail('Abbey cocktail',15,'https://cocktailand.fr/media/cache/resolve/large/images/cocktails/165.png');
  cocktail2: Cocktail = new Cocktail('Absolut summertime',20,'https://cocktailand.fr/media/cache/resolve/large/images/cocktails/32.png');
  cocktail3: Cocktail = new Cocktail('Addison special',13,'https://cocktailand.fr/media/cache/resolve/large/images/cocktails/34.png');
  cocktail4: Cocktail = new Cocktail('Americano',18,'https://cocktailand.fr/media/cache/resolve/large/images/cocktails/373.png');
  listCocktail:Cocktail[] =[this.cocktail1,this.cocktail2, this.cocktail3, this.cocktail4]
  constructor() { 
   
    
  }
  getCocktails(){
    return this.listCocktail;

  }
}