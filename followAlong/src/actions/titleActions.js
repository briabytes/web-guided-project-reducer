export const UPDATE_TITLE = "UPDATE_TITLE";
export const TOGGLE_EDITING = "TOGGLE_EDITING";

export default {
    updateTitle: (newTitle)=> {
        console.log("updateTitle action creator");
        return({type: UPDATE_TITLE, payload: newTitle})
    },
    toggleEditing: (isEditing) => {
        console.log("toggleEditing action creator");
        return({type: TOGGLE_EDITING})
    }
}