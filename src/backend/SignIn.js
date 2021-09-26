 
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const signIn = async (userEmail, userPassword) => {
    const email= userEmail;
    const password = userPassword;
    const auth = getAuth();
    return await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        return user.getIdTokenResult()
        .then((idToken) => {
            return {
                signInStatus: true,
                role: idToken.claims.role,
                error: null,
            };
        })
        .catch((error) => {
            return {
                signInStatus: true,
                role: null,
                error: error,
            }
        });
    })
    .catch((error) => {
        return {
            signInStatus: false,
            role: null,
            error: error,
        }
    });
}



export default signIn;