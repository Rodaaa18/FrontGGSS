import React from 'react'
import "./DNICboBox.css"
const DNICboBox = ({nameInput, messageError, placeHolder, array}) => {

  return (
    <div className="formulario__grupo__inputs2">
        <div className="form__grupo__labels">
            <label className="form__grupo__label__label">{nameInput}</label>
        </div> 
        <div className='form__grupo__input1'>
            <select className=" " >
                {
                    array.map((op, i)=>{
                        return (
                            <option key={i}>{op}</option>
                        )
                    })
                }
            </select>
        </div>                   
        <div className='form__grupo__input2'>
            <input type="text" className='form__input' placeholder={placeHolder}></input>
        </div>
        <div className='form__grupo__icons'>
            <i className="fas fa-times-circle"></i>
        </div>
        <div className='form__grupo__errors'>
            <p>{messageError}</p>
        </div>   
    </div>
  )
}

export default DNICboBox