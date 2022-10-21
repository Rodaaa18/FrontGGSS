import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import DNICboBox from '../Inputs/DNICboBox/DNICboBox';
import InputButton from '../Inputs/InputButton/InputButton';
import InputCbo from '../Inputs/InputCbo/InputCbo';
import InputDate from '../Inputs/InputDate/InputDate';
import InputFile from '../Inputs/InputFile/InputFile';
import InputForm from '../Inputs/InputForm/InputForm';
import InputRadio from '../Inputs/InputRadio/InputRadio';
import TextArea from '../Inputs/TextArea/TextArea';
import "./DatosPersonales.css";

const DatosPersonales = () => {
    const optionsDNI = [ "DNI", "LC", "LE"];

    const estados = ["Activo", "Baja", "Suspendido", "Anulado"];
    const estadosCiviles = ["Soltero", "Casado", "Viudo", "Algo"];

  return (
    
    <section className='container'>
        <div className='row'>
            <div className="formulario__grupo">
                <label for="usuario" className="mainABMTitle">Datos Personales</label>
            </div> 
            <form action="" className='form__datos__personales'>
                <div className="primera__columna">
                    <InputForm nameInput="Legajo N°"  messageError="Solo puede contener números." placeHolder="N° Legajo"/>
                    <InputForm nameInput="Apellido" messageError="Solo puede contener letras." placeHolder="Ingrese Apellidos"/>
                    <InputForm nameInput="Nombres" messageError="Solo puede contener letras." placeHolder="Ingrese Nombres"/>
                    <DNICboBox nameInput="DNI" messageError="Solo puede contener números, sin puntos." placeHolder="23456789" array={optionsDNI}/>
                    <InputButton id="inputCuil" nameLabel="C.U.I.L" nameButton="Validar" placeholder="##-########-#" />
                    <InputForm nameInput="Teléfono"  messageError="Solo puede contener números." placeHolder="11352458965"/>
                    <InputButton id="inputEstadosCiviles" nameLabel="Estado Civil" nameButton="..." placeholder="Ingrese Estado Civil"  idModal="modalEstadosCiviles" array={estadosCiviles}/>
                    <InputButton id="inputNacionalidad" nameLabel="Nacionalidad" nameButton="..." placeholder="Ingrese Nacionalidad" idModal=""/>
                </div>
                <div className='segunda_columna'>
                    <InputCbo nameButton="Estados" nameLabel="Estado" array={estados} />
                    <InputRadio nameFirst="Masculino" nameSecond="Femenino" nameInput="Sexo" />
                    <InputDate nameInput="Nacimiento" />
                    <InputForm nameInput="Móvil"  messageError="Solo puede contener números." placeHolder="Ingrese su celular"/>
                    <InputForm nameInput="E-mail"  messageError="Ingrese un email válido." placeHolder="correo@correo.com.ar"/>
                    <InputButton id="inputPaisO" nameLabel="País de Origen" nameButton="..." placeholder="Ingrese su País de Origen" idModal=""/>
                    <InputButton id="inputEstudios" nameLabel="Estudios" nameButton="..." placeholder="Ingrese sus Estudios" idModal=""/>
                </div>
            </form>
            <div className='row'>
                <div className='col-xl-6'>
                    <TextArea inputName="Observaciones" />
                </div>
                <div className='col-xl-6'>
                    <InputFile inputName="Arrastre su imagen"/>
                </div>
            </div>
        </div>        
    </section>
  )
}

export default DatosPersonales