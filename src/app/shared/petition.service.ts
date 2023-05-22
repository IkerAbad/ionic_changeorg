import { Injectable } from '@angular/core';
import { Petition } from './petition';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PetitionService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient) { }
  addPetition(petition: Petition): Observable<any> {
    return this.http.post<Petition>('http://localhost:3000/api/create-petition', petition, this.httpOptions)
      .pipe(
        catchError(this.handleError<Petition>('Add Petition'))
      );
  }
  getPetition(id: number): Observable<Petition[]> {
    return this.http.get<Petition[]>('http://localhost:3000/api/get-petition/' + id)
      .pipe(
        tap(_ => console.log(`Petition fetched: ${id}`)),
        catchError(this.handleError<Petition[]>(`Get Petition id=${id}`))
      );
  }
  getPetitionList(): Observable<Petition[]> {
    return this.http.get<Petition[]>('http://localhost:3000/api')
      .pipe(
        tap(petitions => console.log('Petitions fetched!')),
        catchError(this.handleError<Petition[]>('Get Petitions', []))
      );
  }
  updatePetition(id:number, petition: Petition): Observable<any> {
    return this.http.put('http://localhost:3000/api/update-petition/' + id, petition, this.httpOptions)
      .pipe(
        tap(_ => console.log(`Petition updated: ${id}`)),
        catchError(this.handleError<Petition[]>('Update Petition'))
      );
  }
  deletePetition(id:number): Observable<Petition[]> {
    return this.http.delete<Petition[]>('http://localhost:3000/api/delete-petition/' + id, this.httpOptions)
      .pipe(
        tap(_ => console.log(`Petition deleted: ${id}`)),
        catchError(this.handleError<Petition[]>('Delete Petition'))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
