import "./style.css";

const Switch = ({ name, onChange, isCheck, isDisable = false }) => {
  return (
    <>
      <label className="switch-title">{name}</label>
      <label className="switch">
        <input
          type="checkbox"
          onChange={(e) => onChange(e.target.checked)}
          checked={isCheck}
          disabled={isDisable}
        />
        <span className="slider round"></span>
      </label>
    </>
  );
};

export default Switch;
