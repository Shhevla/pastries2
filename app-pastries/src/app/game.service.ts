import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';
import { Pastrie, ResponseYam } from './pastrie';
import { PastrieService } from './pastrie.service';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  nbDice : number = env.nbDice;
  status : boolean = true;

  constructor(private pS :PastrieService) { }

  private dice():number{

    return Math.floor( Math.random()*6 ) + 1
  }

  private generateDices():number[]{
    const res : number[] = [];
    let nbDice = this.nbDice;

    while(nbDice > 0) {
      res.push(this.dice());
      nbDice--;
    }

    return res;
  }

  yams():ResponseYam{
    const dices = this.generateDices();
    const count = (new Set(dices)).size;
    this.status = false;
    const response : ResponseYam = {
      combination : '',
      pastries : [],
      count : 0
    };

    switch(count){
      case 1:
        response.combination = env.combinations.yams;
        response.count = env.nbPastriesYams;
        response.pastries = this.pS.checkPriority(env.nbPastriesYams);
        break;

      case 2 :
        response.combination = env.combinations.square;
        response.count = env.nbPastriesSquare;
        response.pastries = this.pS.checkPriority(env.nbPastriesSquare)
        break;
      case 4:
        response.combination = env.combinations.double;
        response.count = env.nbPastriesDouble;
        response.pastries = this.pS.checkPriority(env.nbPastriesDouble)
        break;

      default:
        response.combination = env.combinations.orther;
        response.count = 0;

    }

    return response;
  }

}
