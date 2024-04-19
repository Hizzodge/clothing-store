import {
  signInWithGooglePopup,
  createUsersDocumentForm,
} from "../../utils/firebase/firebase.utils";

import SignUpForm from "../../Components/SignUpForm/SignUpForm";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUsersDocumentForm(user);
    console.log("this is the userDocRef", userDocRef);
    console.log("this is the user", user);
  };

  return (
    <div>
      <h1>Sign-In Page</h1>
      <button onClick={logGoogleUser}>Sign-In with Google popup</button>
      <SignUpForm />
    </div>
  );
};

export default SignIn;
