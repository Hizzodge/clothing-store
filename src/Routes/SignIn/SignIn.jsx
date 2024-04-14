import {
  signInWithGooglePopup,
  createUsersDocumentForm,
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUsersDocumentForm(user);
  };
  return (
    <div>
      <h1>Sign-In Page</h1>
      <button onClick={logGoogleUser}>Sign-In with Google popup</button>
    </div>
  );
};

export default SignIn;