import { getFirestore } from "redux-firestore";

export const createProject = (project) => {
    return(dispatch, getState, {getFirebase, gerFirestore}) => {
        //make async call database
        const firestore = getFirestore();
        firestore.collection('projects').add({
            ...project,
            authorFirstName: 'Lukonio',
            authorLastName: 'Sukohi',
            authorId: 12345,
            createAt: new Date()
        }).then(() => {
            dispatch({
                type: 'CREATE_PROJECT',
                project
            });
        }).catch((err) => {
            dispatch({
                type: 'CREATE_PROJECT_ERROR', 
                err
            });
        })
    }
};
