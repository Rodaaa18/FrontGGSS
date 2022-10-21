import React from 'react'

const ButtonCallModal = (idModal, nameButton) => {
  return (
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target={`#${idModal}`}>
       {nameButton}
      </button>
  )
}

export default ButtonCallModal