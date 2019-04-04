export const createProject = project => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    //Make asymc call to database
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorID = getState().firebase.auth.uid;
    firestore
      .collection("projects")
      .add({
        ...project,
        authFirstName: profile.firstName,
        authLastName: profile.lastName,
        authorID: authorID,
        createdAt: new Date()
      })
      .then(() => {
        dispatch({ type: "CREATE_PROJECT", project });
      })
      .catch(err => {
        dispatch({ type: "CREATE_PROJECT_ERROR", err });
      });
  };
};
