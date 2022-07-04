import React from "react";
import { useField } from "formik";

 
function InputField({
  type,
  name,
  label,
  placeholder,
  style,
  readOnly = false,
  minLength,
  maxLength,
  min,
  max,
  value,
  defaultValue,
  onFocus
}) {
  
  const [field, meta] = useField(name);
 
  return (
    <div className="form-group">
      {label && <label htmlFor={name}>{label}</label>}
      <input required
        {...field }
        name={name}
        type={type}
        className={`form-control ${
          meta.touched && !!meta.error ? `form-control-error` : ``
        }`}
        id={name}
        style={style}
        readOnly={readOnly}
        minLength={minLength}
        maxLength={maxLength}
        min={min}
        max={max}
        value={value}
        defaultValue={defaultValue}
        onFocus={onFocus}

      />
    <div tabindex="0" className="input-addon">+994</div> 
      {meta.touched && meta.error ? (
        <label className="form-error" color="red" style={{ marginTop: 8 }}>
          {meta.error}
        </label>
      ) : null}
      <span className="floating-label">{placeholder}
        <span className="required">*</span>
      </span>
    </div>
  );
}

export default InputField;

