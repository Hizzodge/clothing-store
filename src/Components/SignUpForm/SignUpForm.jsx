import { useState } from "react";
import {
  createAuthUserWithEmailndPassword,
  createUsersDocumentForm,
} from "../../utils/firebase/firebase.utils";
import FormInput from "../FormInput/FormInput";
import Button from "../Button/Button";

import "./sign-up-form.scss";

const defaultFormfields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormfields);
  const { email, password, confirmPassword, displayName } = formFields;

  const resetformFields = () => {
    setFormFields(defaultFormfields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("passwords do not match");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailndPassword(email, password);

      await createUsersDocumentForm(user, { displayName });
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Account already in use");
      } else {
        console.error("Error creating user", error.message);
      }

      resetformFields();
    }
  };

  const handlechange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign up with email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          type="text"
          required
          onChange={handlechange}
          name="displayName"
          value={displayName}
        />

        <FormInput
          label={"Email"}
          type="email"
          required
          onChange={handlechange}
          name="email"
          value={email}
        />

        <FormInput
          label={"Password"}
          type="password"
          required
          onChange={handlechange}
          name="password"
          value={password}
        />

        <FormInput
          label={"Confirm Password"}
          type="password"
          required
          onChange={handlechange}
          name="confirmPassword"
          value={confirmPassword}
        />
        <Button type="submit" label="Sign Up" />
      </form>
    </div>
  );
};

export default SignUpForm;
