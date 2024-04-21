import classes from './index.module.scss'

const Input = ({
  name,
  placeholder,
  type,
  label,
  value,
  onChange,
  min,
  required = false,
}) => {
  return (
    <div className={classes.inputForm}>
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        min={min}
        onChange={(e) => onChange(e.target)}
        placeholder={placeholder}
        required={required}
      />
    </div>
  )
}

export default Input