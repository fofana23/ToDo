import { Component, OnInit } from '@angular/core';
import { Note } from './models/note';
import { NoteService } from './services/note.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  note: Note = {} as Note;
  newNote: Note = {} as Note;
  notes: Array<Note> = [];

  constructor(private service: NoteService) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.service.getAllNotes().subscribe(
      data => this.notes = data,
      error => console.log(error)
    );
  }

  addNote() {
    let note = {} as Note;
    note.title = "Template";
    this.service.addNote(note).subscribe(
      data => this.newNote = data,
      error => console.log(error),
      () => this.loadData()
    );
  }


  updateNote() {
    this.service.updateNote(this.newNote).subscribe(
      data => console.dir(data),
      error => console.log(error),
      () => this.loadData()
    );
  }

  editNote(note: Note){
    this.newNote = note;
  }

  deleteNote(id: number){
    this.service.deleteNote(id).subscribe(
      data => console.log(data),
      error => console.log(error),
      () => this.loadData()
    );
  }

  reset() {
    this.newNote = {} as Note;

  }

}
