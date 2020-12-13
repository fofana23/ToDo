package com.fofana23.todo.service;

import com.fofana23.todo.model.Note;
import com.fofana23.todo.repository.NoteRepo;
import com.fofana23.todo.util.DateUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.xml.crypto.Data;
import java.util.Date;
import java.util.List;

@Service
public class NoteService {

    @Autowired
    NoteRepo repo;

    /**
     * Create Note logic
     *
     * @param note
     * @return
     */
    public Note addNote(Note note) {
        note.setDate(DateUtils.dateToString(new Date()));
        return repo.save(note);
    }


    /**
     * Read Note logic
     *
     * @param note
     * @return
     */
    public Note getNote(int id) {
        return repo.findById(id).get();
    }

    /**
     * Update Note logic
     *
     * @param note
     * @return
     */
    public Note updateNote(Note note) {
        note.setDate(DateUtils.dateToString(new Date()));
        return repo.save(note);
    }

    /**
     * Delete Note logic
     *
     * @param note
     */
    public void deleteId(int id) {
        Note note = new Note();
        note.setId(id);
        repo.delete(note);
    }

    public List<Note> getAllNotes() {
        return repo.findAll();
    }
}
