import React from 'react'
import "./InputForm.css"

const InputForm = ({nameInput, messageError, placeHolder}) => {
  return (
    <div className="formulario__grupo__inputs">
        <div className='form__grupo__label'>
            <label className='form__grupo__label__label' for="legajo">{nameInput}</label>
        </div>
        <div className='form__grupo__input'>
            <input type="text" className='form__grupo__input' id="legajo" placeholder={placeHolder}/>
        </div>
        <div className='form__grupo__icon'>
            <i className="fas fa-times-circle form__grupo__icon"></i>            
        </div>  
        <div className='form__grupo__error'>
            <p className='form__grupo__error'>{messageError}</p>
        </div>    
    </div>
  )
}

export default InputForm