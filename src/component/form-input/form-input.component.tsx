import "./form-input.styles.scss";

interface IFormInputProps {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  name: string;
  type: string;
  value: string;
  required: boolean;
}

const FormInput = ({ handleChange, label, ...otherProps }: IFormInputProps) => {
  return (
    <div className="group">
      {label ? (
        <label
          className={`${
            otherProps.value.length ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </label>
      ) : null}

      <input className="form-input" onChange={handleChange} {...otherProps} />
    </div>
  );
};

export default FormInput;
