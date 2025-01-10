import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isSaving: false,
    savedMessage: '',
    notes: [],
    active: null
    // active: {
    //     id: '123',
    //     title: 'Test title',
    //     body: 'Test body',
    //     date: new Date().getTime(),
    //     imageUrls: []
    // }
}

export const journalSlice = createSlice({
    name: 'journal',
    initialState,
    reducers: {
        savingNewNote: (state) => {
            state.isSaving = true;
        },
        addNewEmptyNote: (state, action) => {
            state.notes.push(action.payload);
            state.isSaving = false;
        },
        setActiveNote: (state, action) => {
            state.notes = state.notes.map(note => {
                if (note.id === action.payload.id) {
                    return action.payload
                }
                return note
            });
        },
        setNotes: (state, { action }) => {
            state.active = action.payload
        },
        setSaving: (state, { action }) => {
            state.isSaving = action.payload
        },
        updateNote: (state, { action }) => {
            state.isSaving = true
        },
        deleteNoteById: (state, { action }) => {
            state.isSaving = true
        }
    }
});

export const {
    addNewEmptyNote,
    deleteNoteById,
    savingNewNote,
    setActiveNote,
    setNotes,
    setSaving,
    updateNote
} = journalSlice.actions

