import React from 'react'
import ButtonCallModal from '../../Buttons/ButtonCallModal'
import BasicModal from '../../Modals/BasicModal/BasicModal'

const InputButton = ({id,nameButton, placeholder, nameLabel, idModal, array}) => {

  console.log(idModal);
  
  return (
    <div className="formulario__grupo__inputs">
        <div className='form__grupo__label'>
            <label className='form__grupo__label__label' for="legajo">{nameLabel}</label>
        </div>
        <div className='form__grupo__input'>
            <input type="text" class="form__grupo__input" placeholder={placeholder} id={id} aria-describedby={`${id}${nameLabel}`} />
        </div>
        <div className='form__grupo__icon'>
              <ButtonCallModal idModal={idModal} nameButton={nameButton} class="btn btn-outline-secondary btn-sm" type="button" id={`${id}${nameLabel}`}>{nameButton}</ButtonCallModal>  
            <BasicModal nameModal={idModal} nameOptionModal={nameLabel} array={array}/>
        </div>
    </div>
  )
}

export default InputButton