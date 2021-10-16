import React, { useState } from 'react'
import AddCategory from './Components/AddCategory';
import GifGrid from './Components/GifGrid';
//import PropTypes from 'prop-types'

const GifExpertApp = ({value = 10}) => {


//const categories = ['One Punch','Samurai X', 'Dragon ball'];
const [categories, setadd] = useState(['One Punch']);//funcion useState para definir un arreglo y agregar un nuevo dato
//categories es el arreglo, y setadd es para agregar el nuevo elemento y renderizarlo para mostrar el nuevo dato
/*const handleAdd = (event)=>
{
    setadd([...categories,'Pokemon']);
}*/
// <AddCategory setadd= {setadd}/>  se envia el estado al nuevo componente para poder agregar lo que 
//el usuario escriba en elemento input
    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setadd= {setadd}/> 
            <hr />
            <ol>
                { 
                    categories.map(category =>(
                        <GifGrid 
                          key= { category }
                          category = { category }
                         />
                        ))
                }
            </ol>
        </>
    );
}

/*GifExpertApp.propTypes = {

}*/

export default GifExpertApp;
