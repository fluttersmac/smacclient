import { withRouter } from 'react-router-dom';
import System from './components/system/System';
import { connect } from 'react-redux';
import { setAuthState } from './store/actions/Authentication';
import { setApiRoutes } from './store/actions/ApiRoutes';
import Firebase from './backend/Firebase';
import { useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc, getFirestore, setDoc } from "firebase/firestore";
import { setIsLoadingUsers } from './store/actions/Users';

const App = ({ setAuthState, setApiRoutes, setIsLoadingUsers }) => {

  useEffect(() => {
    Firebase();
    const auth = getAuth();
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if(user){
        (async () => {
          const db = getFirestore();
          const userDocRef = doc(db, "users", user.uid);
          await setDoc(userDocRef, { lastSignInTime: user.metadata.lastSignInTime }, { merge: true });
          user.getIdTokenResult()
          .then((idToken) => setAuthState(true, true, idToken.claims.role, user))
          .catch((error) => console.log(error.message));
        })();
      }
      else{
        setAuthState(false, true, null, null);
      }
    });
   
    (async () => {
      const db = getFirestore();
      const apiRoutesDocRef = doc(db, "smac_api_routes", "users");  
      const apiRoutesDocSnap = await getDoc(apiRoutesDocRef);
      if(apiRoutesDocSnap.exists()){
        let response = apiRoutesDocSnap.data();
        setApiRoutes({
          createUser: response.createUser,
          deleteUser: response.deleteUser,
          getUserByEmail: response.getUserByEmail,
          getUserById: response.getUserById,
          getUserByPhoneNumber: response.getUserByPhoneNumber,
          listAllUsers: response.listAllUsers,
          updateUser: response.updateUser,
        });
      }
    })();
    return () => {
      unSubscribe();
    }

  }, [setAuthState, setApiRoutes]);

  return (
    <div className="App">
      <System />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.getAuthState.user,
    isLoadingUsers: state.getUsers.isLoadingUsers,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    setAuthState: (authState, authResult, userRole, user) => dispatch(setAuthState(authState, authResult, userRole, user)),
    setApiRoutes: (smacApiRoutes) => dispatch(setApiRoutes(smacApiRoutes)),
    setIsLoadingUsers: (isLoadingUsers) => dispatch(setIsLoadingUsers(isLoadingUsers)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App));
