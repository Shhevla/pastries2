import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pastrie, List} from '../pastrie';
import { PastrieService } from '../pastrie.service';

@Component({
  selector: 'app-pastrie-details',
  templateUrl: './pastrie-details.component.html',
  styleUrls: ['./pastrie-details.component.scss']
})
export class PastrieDetailsComponent implements OnInit {

  @Input() pastrie: Pastrie | null = null;
  @Output() changePreference:EventEmitter<any> = new EventEmitter();
  ingredients : String[] = [];
  selectedIngre: Array<String> = [];
  ascend: boolean = false;

  constructor(private pastrieService: PastrieService, private route: ActivatedRoute, private pS: PastrieService) {

  }

  ngOnInit(): void {
  }

  ngOnChanges() {

    if (this.pastrie) {
      this.pastrieService.getPastrieIngredientsList(this.pastrie._id).subscribe( ({_id, ingredients}) =>{
        this.ingredients = ingredients;
      }
      )
    }
  }

  onSelect(ingredient: any) {
    ingredient.list = ingredient.sort((one: string, two:string) => (one > two ? -1 : 1))
    this.selectedIngre  = ingredient;
    this.ascend = false;
  }

  onSelect2(ingredient: any) {
    ingredient.list = ingredient.sort((one: string, two:string) => (one < two ? -1 : 1))
    this.selectedIngre  = ingredient;
    this.ascend = true;
  }

  onChoice(id: any, str: string){
    this.changePreference.emit({id, str});
  }

}
