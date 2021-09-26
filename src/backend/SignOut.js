import { getAuth, signOut as logout } from "@firebase/auth";

const signOut = async () => {
    const auth = getAuth();
    return logout(auth).then(() => {
        return {
            signInStatus: false,
            role: null,
            error: null,
        };
    })
    .catch((error) => {
        return {
            signInStatus: true,
            role: null,
            error: error,
        };
    });
}

export default signOut;