import './user-input.component.css';

export default function UserInput({
  id, label, placeholder, value, setValue,
}) {
  const handleChange = (event) => setValue(event.target.value);

  return (
    <>
      <label htmlFor={`${id}-input`} className="user-input-label">
        {label}
      </label>
      <input
        className="user-input"
        placeholder={placeholder}
        id={`${id}-input`}
        value={value}
        onChange={handleChange}
      />
    </>
  );
}
