//import React, { useEffect, useState } from 'react'
//import PropTypes from 'prop-types'
import GiffGridItem from './GiffGridItem';
//import { getGiff } from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';



const GifGrid = ({ category }) => {

   /* const [images, setimages] = useState([]);

 
    useEffect(() => {
        getGiff( category)
          .then(setimages) //=== .then(imgs => setimages( imgs));
    }, [category]);//pasarle un arreglo vacio significa que se ejecuta solo una vez al inicio
//si category cambia se vuelve a ejecutar el useEffect
  
*/

 const {data:images,loading} = useFetchGifs({category});
//encodeURI reemplaza los espacios por %


    return (
        <> 
        <h3 className="animate__animated animate__fadeIn animate__delay-0.1s">{category}</h3>
        {loading && <p className="animate__animated animate__flash">Cargando...</p>}
        <div className="card-grid">
            
           
              {  images.map(img =>(
                   <GiffGridItem
                        key ={ img.id }
                       {...img}
                  />
              ))
              }
                
           
            </div>
        </>
    );
}

/*GifGrid.propTypes = {

}*/

export default GifGrid;

