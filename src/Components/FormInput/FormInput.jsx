import "./form-input.scss";

const FormInput = ({ label, ...inputProps }) => {
  return (
    <div className="group">
      <input className="form-input" {...inputProps} />
      {label && (
        <label
          className={`${
            inputProps.value.lenght ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;
