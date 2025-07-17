import { useState } from 'react';

/**
 * A Form Group has built in functionality to ensure valid data is passed
 * through to our API. Whenever its value changes, it will **format** the data
 * to look a certain way. Whenever it loses focus, it will first **validate**
 * the input to make sure it fits minimum requirements. *If* the input is
 * considered valid, it will then **set** the externally defined state variable.
 * If the input is not considered valid, it will highlight the field in red, and
 * the state variable will be set back to the empty string.
 * @param {object} props
 * @param {string} props.label The label to the input field.
 * @param {string} props.hint [OPTIONAL] The placeholder for the input field.
 * @param {number} props.rows The amount of rows to be visible in the text
 * field. `DEFAULT: 1`
 * @param {string} props.type The type of input field to display. This is
 * **critical** for password fields. This prop is ignored for multiline fields.
 * `DEFAULT: 'text'`
 * @param {(v: string) => void} props.setter The setter for the state variable
 * that this field is going to update on blur.
 * @param {(v: string) => string} props.formatter [OPTIONAL] The formatter for
 * the input, which will run on every change to the field's value. If ignored,
 * the input will not be formatted.
 * @param {(v: string) => boolean} props.validator [OPTIONAL] The validator for
 * the input, which will be run on blur. If ignored, any non-empty input is
 * considered valid.
 */
export function FormGroup({
  label,
  hint = '',
  rows = 1,
  type = 'text',
  setter,
  formatter = (v) => v,
  validator = (v) => v
}) {
  const id = label.toLowerCase().replace(/\W/g, '-');

  const BORDER_CLASSES = {
    normal: 'border-[var(--dark-green)] border-1',
    invalid: 'border-[var(--dark-red)] border-2'
  };

  const [border, setBorder] = useState(BORDER_CLASSES.normal);

  const formatInput = (event) => {
    event.target.value = formatter(event.target.value);
  };

  const validateInput = (event) => {
    const { value } = event.target;
    const valid = validator(value);
    if (valid || !(valid || value)) {
      // Either the field is empty, or the value inside is valid.
      setter(value);
      setBorder(BORDER_CLASSES.normal);
    } else if (value) {
      // The value is invalid! Highlight the field to reflect that,
      // and set the state variable to the empty string.
      setter('');
      setBorder(BORDER_CLASSES.invalid);
    }
  };

  const textarea = (
    <textarea
      id={id}
      name={id}
      placeholder={hint}
      className={`${border} w-1/1 resize-none`}
      onBlur={validateInput}
      onChange={formatInput}
      rows={rows}
    ></textarea>
  );

  const input = (
    <input
      type={type}
      id={id}
      name={id}
      placeholder={hint}
      className={`${border} w-[400px]`}
      onBlur={validateInput}
      onChange={formatInput}
    />
  );

  const field = rows > 1 ? textarea : input;

  // We always want text areas to be on their own line, below the label.
  const flex = rows > 1 ? 'flex-col' : 'flex';

  return (
    <div className={`${flex} justify-between m-2 flex-wrap`}>
      <label htmlFor={id} className='pr-2'>
        {label}
      </label>
      {field}
    </div>
  );
}
