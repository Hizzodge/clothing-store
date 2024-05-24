import "./button.scss";

const BUTTON_TYPE = {
  google: "google-sign-in",
  secondary: "secondary",
  inverted: "inverted",
};

const Button = ({ label, buttonType, buttonProps }) => {
  return (
    <button className={`button ${BUTTON_TYPE[buttonType]}`} {...buttonProps}>
      {label}
    </button>
  );
};

export default Button;
