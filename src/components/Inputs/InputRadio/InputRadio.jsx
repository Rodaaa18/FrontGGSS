import React from 'react'

const InputRadio = ({nameInput, nameFirst, nameSecond}) => {
  return (
    <div className="formulario__grupo__inputs">
        <div className='form__grupo__label'>
            <label className='form__grupo__label__label' htmlFor="legajo">{nameInput}</label>
        </div>
        <div className="form-check form-check-inline">
        <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"/>
        <label className="form-check-label" htmlFor="inlineCheckbox1">{nameFirst}</label>
        </div>
        <div className="form-check form-check-inline">
        <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2"/>
        <label className="form-check-label" htmlFor="inlineCheckbox2">{nameSecond}</label>
        </div>
    </div>
  )
}

export default InputRadio