export const Input = ({
  label,
  id,
  type = "text",
  style = "bg-[#FFF6F4] p-2 outline-none",
  value,
  onChange,
  placeholder,
  required = true,
}) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        onChange={onChange}
        value={value}
        className={style}
        type={type}
        placeholder={placeholder}
        id={id}
        name={id}
        required={required}
      />
    </>
  );
};
