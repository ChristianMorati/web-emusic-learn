import { getAuth, signInWithRedirect } from "firebase/auth";
import { provider } from "../../../firebase/config";

const auth = getAuth();
signInWithRedirect(auth, provider);