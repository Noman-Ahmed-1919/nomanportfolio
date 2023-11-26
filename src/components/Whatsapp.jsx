import React, {useEffect} from 'react'
import java from './java.js';


const Whatsapp = () => {
  
    useEffect(()=>{
        java()
       },[])
 

    return (
<>
<div className="whatsapp" >
<a href=" https://wa.me/923446389032" target="_blank" id="scrollToTop"> <img src="https://cdn2.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-whatsapp-circle-512.png " style={{widt:"60px"}}/></a>


</div>
</>

    );
}
export default Whatsapp;