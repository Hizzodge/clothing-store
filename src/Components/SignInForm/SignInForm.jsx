import { useState } from "react";
import FormInput from "../FormInput/FormInput";
import Button from "../Button/Button";
import {
  signInWithGooglePopup,
  // createUsersDocumentForm,
  signInAuthWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

import "./sign-in-form.scss";

const defaultFormfields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormfields);
  const { email, password } = formFields;

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await signInAuthWithEmailAndPassword(email, password);

      setFormFields(defaultFormfields);
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("Invalid password");
          break;
        case "auth/user-not-found":
          alert("Invalid email");
          break;
        default:
          console.log(error);
      }
    }
  };

  const handlechange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-in-container">
      <h2>I already have an account</h2>
      <span>Sign in with email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          name="email"
          onChange={handlechange}
          value={email}
        />
        <FormInput
          label="Password"
          type="password"
          required
          name="password"
          onChange={handlechange}
          value={password}
        />
        <div className="buttons">
          <Button type="submit" label="Sign In" />
          <Button
            type="button"
            buttonProps={{ onClick: signInWithGoogle }}
            label="Sign In with Google"
            buttonType="google"
          />
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
