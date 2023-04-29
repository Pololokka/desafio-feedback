const Button = ({ type, value, func }) => {
  return (
    <input
      type={type}
      value={value}
      onClick={func}
      className="texto btn__geral"
    />
  );
};

export default Button;
