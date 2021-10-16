
//Los hooks no regresan jsx y pueden tener estados para reenderisar los componentes que utilisen este hook 

import { useEffect, useState } from "react";
import {getGiff} from '../helpers/getGifs';


export const useFetchGifs = ({category}) => {
   
    const [state, setstate] = useState({
        data: [], 
        loading:true
    });

    useEffect(() => {
        getGiff( category)
         .then( imgs => {
          
                 setstate({
                     data:imgs,
                     loading:false
                 });
           
         })
    }, [category]); 
    
    
    return state;
}
