import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Pastrie } from '../pastrie';
import { PastrieService } from '../pastrie.service';

@Component({
  selector: 'app-patrie-search',
  templateUrl: './patrie-search.component.html',
  styleUrls: ['./patrie-search.component.scss']
})
export class PatrieSearchComponent implements OnInit {

  word: string | null = null;
  @Output() changePreference:EventEmitter<any> = new EventEmitter();

  constructor(private pastrieService: PastrieService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm): void {
    this.changePreference.emit(this.pastrieService.wordPastries(form.value['word']));
  }
  onChangeEmit($event:string) {
    this.changePreference.emit(this.pastrieService.wordPastries($event));
  }
}