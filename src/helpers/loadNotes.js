import { collection, getDocs } from "firebase/firestore/lite";
import { FirebaseDB } from "../firebase/config";

const loadNotes = (uid = '') => {
    if (!uid) return new Error('No hay un usuario autenticado');
    const collectionRef = collection(FirebaseDB, `${uid}/journal/notes`);
    const docs = await getDocs(collectionRef);
    const notes = docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    }));
    return notes;

}

export {
    loadNotes
}