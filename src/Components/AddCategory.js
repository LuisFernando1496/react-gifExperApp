import React, { useState } from 'react';
import PropTypes from 'prop-types'



const  AddCategory = ({setadd}) => {
    const [inputValue, setValue] = useState(''); //uso de useState para modificar el estado del campo input
    const addText = (e) =>//funcion que se despliega al escribir en el input
    {
     
        setValue( e.target.value );//se obtienen el texto del evento, y se cambia el estado esto quiere decir que se guarda en inputValue
    }

    const submitTex = (e) => //funcion que se despliega cuando se pulsa enter
    {
        e.preventDefault();//evita que el form se envie autometicamente
        if( inputValue.trim().length > 2)
        {
                    setadd(pushText => [inputValue,...pushText]);// se cambia el estado del primer componente
                    //y como no se le paso el arreglo se pues usar otra variable para hacer referencia
                    //al ultimo lemento que contiene el arrglo y agregar el nuevo
                    setValue('');//para que el input quede vacio de nuevo
        }

    }
    return (
        <form onSubmit={submitTex}> 
       
            <input
             type="text"
             value={inputValue}
             onChange={addText} 
             />
        </form>
    )
}
AddCategory.propTypes = {
    setadd: PropTypes.func.isRequired
}
export default AddCategory;
