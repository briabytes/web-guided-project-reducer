export const UPDATE_TITLE = "UPDATE_TITLE";
export const TOGGLE_EDITING = "TOGGLE_EDITING";

export default {
    updateTitle: (newTitle)=> {
        return({type: UPDATE_TITLE, payload: newTitle})
    },
    toggleEditing: (isEditing) => {
        return({type: TOGGLE_EDITING})
    }
}