import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Note } from '../models/note';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  private baseUrl: string = "http://localhost:9000/api/v1";
  private create: string = "create";
  private read: string = "read";
  private update: string = "update";
  private delete: string = "delete";
  private all: string = "all";

  constructor(private http: HttpClient) { }

  public addNote(note: Note): Observable<Note> {
    return this.http.post<Note>(`${this.baseUrl}/${this.create}`, note);
  }

  public getNote(id: number): Observable<Note> {
    return this.http.get<Note>(`${this.baseUrl}/${this.read}/${id}`);
  }

  public updateNote(note: Note): Observable<Note> {
    return this.http.put<Note>(`${this.baseUrl}/${this.update}`, note);
  }

  public deleteNote(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${this.delete}/${id}`);
  }

  public getAllNotes(): Observable<Note[]> {
    return this.http.get<Note[]>(`${this.baseUrl}/${this.all}`);
  }
}
