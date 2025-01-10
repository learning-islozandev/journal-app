import { FirebaseDB } from "../../firebase/config";
import { collection, doc, setDoc } from "firebase/firestore/lite";
import { addNewEmptyNote, savingNewNote, setActiveNote, setNotes } from "./journalSlice";
import { loadNotes } from "../../helpers";

/**
|--------------------------------------------------
| * Inicia una nueva nota.
 * 
 * Esta función es un thunk que se encarga de crear una nueva nota en el estado de la aplicación.
 * 
 * @returns {Function} Una función que recibe `dispatch` y `getState` como argumentos.
|--------------------------------------------------
*/
const startNewNote = () => {
    return async (dispatch, getState) => {

        dispatch(savingNewNote());

        const { uid } = getState().auth;

        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime()
        }

        const newNoteDocumentRef = doc(collection(FirebaseDB, `${uid}/journal/notes`));
        await setDoc(newNoteDocumentRef, newNote);

        newNote.id = newNoteDocumentRef.id;
        dispatch(addNewEmptyNote(newNote))
        dispatch(setActiveNote(newNote))
    }
}

const startLoadingNotes = () => {
    return async (dispatch, getState) => {

        try {
            const { uid } = getState().auth;
            if (!uid) return new Error('No hay un usuario autenticado');
            const notes = await loadNotes(uid);
            dispatch(setNotes(notes));
        } catch (error) {
            console.log(error);
        }
    }
}


export {
    startNewNote,
    startLoadingNotes
}