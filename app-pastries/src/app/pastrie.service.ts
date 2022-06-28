import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Subject, Observable, throwError } from 'rxjs';
import { map, catchError, filter  } from 'rxjs/operators';

import { Pastrie, List, CHOICE, Users } from './pastrie';
//import { INGREDIENTS_LISTS, PASTRIES } from './mock-pastries';
import { environment as env } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root',
})
export class PastrieService {
  private pastries: Pastrie[] = [];
  sendCurrentNumberPage = new Subject<number>();
  countItem: number = 0;

  private pastriesUrl = env.pastriesUrl;
  private pastrieUrl = env.pastrieUrl;
  private ingredientUrl = env.ingredientUrl;
  private ingredientsUrl = env.ingredientsUrl;

  constructor(private http : HttpClient) {
  }

  getPastries(): Observable<Pastrie[]> {
    return this.http.get<Pastrie[]>(this.pastriesUrl).pipe(
      map(pastries => {
        //console.log(pastries)
        return pastries.sort((p1, p2) => p1.order - p2.order)
      })
    )
  }

  getPastrie(id: string): Observable<Pastrie> {
    return this.http.get<Pastrie>(`${this.pastrieUrl}/${id}`);
  }

  getPastrieIngredientsList(id: string):Observable<List> {
    return this.http.get<List>(`${this.ingredientUrl}/${id}`);
  }

  count(): Observable<Pastrie[]>{
    //this.getPastries().subscribe(data => {this.pastries = data});
    //this.countItem = this.pastries.length;
    //console.log(this.pastries);
    return this.http.get<Pastrie[]>(this.pastriesUrl);
    
  }
  
  PastrieServicepaginate(start: number, end: number):Observable<Pastrie[]> {
    return this.http.get<Pastrie[]>(this.pastriesUrl).pipe(
      map(pastries => pastries.sort((p1, p2) => p1.order - p2.order)),
      map(pastries => pastries.slice(start, end))
    )
  }

  UsersArray(): Promise<Users[]> {
    const isPromise = new Promise<Users[]>((resolve, reject) => {
      this.http.get<Users[]>("http://localhost:8000/users").subscribe(data => {resolve(data)});
    });
    return isPromise;
  }

  wordPastries(str: string): Pastrie[] {
    if (str)
      return (this.pastries.filter(pastrie => pastrie.name == str));
    else
      return(this.pastries);
  }

  paginate(start : number, end : number): Observable<Pastrie[]>{

    /*return this.pastries.sort(
      (pas1, pas2) => pas1.order - pas2.order 
    ).slice(start, end);*/
    return this.getPastries().pipe(map(data => {return data.slice(start, end)}))
  }

  paginateNumberPage(): number{
    if(typeof env.numberPage == 'undefined')
      throw "Attention la pagination n'est pas définie !";

    return env.numberPage;
  }

  currentPage(numberPage: number){
    return this.sendCurrentNumberPage.next(numberPage);
  }

  checkPriority(nbPastries : number):Pastrie[]{
    const pprioties = this.pastries.filter(pastrie => pastrie.choice === CHOICE.Up );
    //const Spprioties = this.getPastries().pipe(map(data => {return data.filter(pastrie => pastrie.choice === CHOICE.Up )}))
    const res = [];
    //return this.getPastries().pipe(map(data => {
    //  const datafilter = data.filter(pastrie => pastrie.choice === CHOICE.Up );
    //  const res = [];
    //    if (datafilter.length == env.maxPastries) return datafilter;
    //  for (const pastrie of data) {
    //    if(res.length === (nbPastries - datafilter.length ) ) break;
    //    if( datafilter.find(p => p._id === pastrie._id)) continue;
    //    res.push(pastrie);
    //  }
    //    return [...datafilter, ...res]
    //}))

    if(pprioties.length === env.maxPastries) return pprioties;

    for(const pastrie of this.pastries){
      if(res.length === (nbPastries - pprioties.length ) ) break;
      if( pprioties.find(p => p._id === pastrie._id)) continue;
      res.push(pastrie);
    }
    return [...pprioties, ...res];
  }

  updatePastrie(pastrie: Pastrie, choice: string): Observable<Pastrie> {
    return this.http.put<Pastrie>(`${this.pastrieUrl}/${choice}`, pastrie, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }
  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
