
const Input = ({type, hintText, onChange, value}) => {

  return (
      <input
          value={value}
          type={type || 'text'}
          placeholder={hintText}
          onChange={onChange} />
  );
};

export default Input;