package com.fofana23.todo.controller;

import com.fofana23.todo.model.Note;
import com.fofana23.todo.service.NoteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/v1")
public class NoteController {

    @Autowired
    NoteService service;

    @PostMapping("create")
    public Note addNote(@RequestBody Note note) {
        return service.addNote(note);
    }

    @GetMapping("read/{id}")
    public Note getNote(@PathVariable("id") int id) {return service.getNote(id);
    }

    @PutMapping("update")
    public Note updateNote(@RequestBody Note note) {
        return service.updateNote(note);
    }

    @DeleteMapping("delete/{id}")
    public void deleteNote(@PathVariable("id") int id) { service.deleteId(id);
    }

    @GetMapping("all")
    public List<Note> getAllNotes() {
        return service.getAllNotes();
    }

}

