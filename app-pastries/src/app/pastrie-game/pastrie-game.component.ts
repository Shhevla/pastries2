import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GameService } from '../game.service';
import { Pastrie, ResponseYam } from '../pastrie';


@Component({
  selector: 'app-pastrie-game',
  templateUrl: './pastrie-game.component.html',
  styleUrls: ['./pastrie-game.component.scss']
})
export class PastrieGameComponent implements OnInit {
  response : ResponseYam = {
    combination : "",
    pastries : [],
    count : 0
  }

  status : boolean = this.gS.status;

  constructor(private gS : GameService) {
   
   }

  ngOnInit(): void {
  }

  onThrowDice(){
    if(this.gS.status){
      this.response = this.gS.yams();
      this.status = this.gS.status;
    }
      
  }

}
