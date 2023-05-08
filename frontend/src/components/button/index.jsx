import "./style.css";

const Button = ({
  name,
  type,
  onClick,
  isDisable = false,
  color = "#3D3D3D",
}) => {
  return (
    <button
      className="btn"
      type={type}
      onClick={onClick}
      disabled={isDisable}
      style={{ backgroundColor: color }}
    >
      {name}
    </button>
  );
};

export default Button;
