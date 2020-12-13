import { Component, OnInit } from '@angular/core';
import { Note } from './models/note';
import { NoteService } from './services/note.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  note: Note={} as Note;
  newNote: Note={} as Note;
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

  // addAnimal() {
  //   this.service.addAnimal(this.newAnimal).subscribe(
  //     data => console.dir(data),
  //     error => console.log(error),
  //     () => this.loadData()
  //   );
  // }


  // updateAnimal() {
  //   this.service.updateAnimal(this.newAnimal).subscribe(
  //     data => console.dir(data),
  //     error => console.log(error),
  //     () => this.loadData()
  //   );
  // }


}
