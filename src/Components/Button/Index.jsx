const Button = ({ value, func }) => {
  return (
    <input
      type="button"
      value={value}
      onClick={func}
      className="texto btn__geral"
    />
  );
};

export default Button;
