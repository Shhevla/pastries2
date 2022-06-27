import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Paginate } from '../pastrie';
import { PastrieService } from '../pastrie.service';
import { map } from 'rxjs/operators';
import { pipe } from 'rxjs';

@Component({
  selector: 'app-pastrie-paginate',
  templateUrl: './pastrie-paginate.component.html',
  styleUrls: ['./pastrie-paginate.component.scss']
})
export class PastriePaginateComponent implements OnInit {

  @Output() setPaginate: EventEmitter<Paginate> = new EventEmitter();

  pages: number[] = [];
  perPage: number = 0;
  total: number = 0;
  numberPages: number = 0;
  currentPage : number = 0;
  count = 0;

  constructor(private pS : PastrieService ) {
    this.perPage = this.pS.paginateNumberPage();
   }

  ngOnInit(): void {
    this.init();
    this.pS.sendCurrentNumberPage.subscribe(numberPage => {
    this.currentPage = numberPage;
    this.init(numberPage);
    })
  }

  init(page: number = 1){
    // this.total = this.pS.countItem;
    //console.log(this.count);
    this.pS.count();
    this.total = 8;
    console.log("test",this.pS.getPastries().subscribe(data => { this.count = data.length}));
    console.log(this.count);
    this.numberPages = Math.ceil(this.total/this.perPage);
    this.currentPage = page;
    this.pages = [];
    for(let i = 1; i < this.numberPages + 1; i++){
      this.pages.push(i);
    }
  }

  selectedPage(page : number){
    this.currentPage = page;
    this.pS.currentPage(this.currentPage);
    this.setPaginate.emit(this.paginate(this.currentPage));
  }

  next(){
    if(this.currentPage >= this.numberPages) this.currentPage = 1 ;
    else this.currentPage++;
    this.pS.currentPage(this.currentPage);
    this.setPaginate.emit(this.paginate(this.currentPage));
  }

  previous(){
    if(this.currentPage === 1) this.currentPage = this.numberPages ;
    else this.currentPage--
    this.pS.currentPage(this.currentPage);
    this.setPaginate.emit(this.paginate(this.currentPage));
  }

  paginate(page : number):Paginate{
    const start = (page - 1)*this.perPage;
    const end = start + this.perPage;
    
    return ({start, end});
  }

}
