// import React from "react";
// const chat = () => {

import { useEffect } from "react";

  

//     (function(d, m){
//         var kommunicateSettings = 
//             {"appId":"355a653d49945fcb85eb9f784e185bbbe","popupWidget":true,"automaticChatOpenOnNavigation":true};
//         var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
//         s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
//         var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
//         window.kommunicate = m; m._globals = kommunicateSettings;
//     })(document, window.kommunicate || {});
//     {
//         return(
//             <div>
//                 <h1 style={{color:'white'}}>This is our chat bot</h1>

//             </div>

//         )
//     }
// }
// export default chat


const Chat = () => {
    useEffect(()=>{
     
    (function(d, m){
        var kommunicateSettings = 
            {"appId":"355a653d49945fcb85eb9f784e185bbbe","popupWidget":true,"automaticChatOpenOnNavigation":true};
        var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
        s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
        var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
        window.kommunicate = m; m._globals = kommunicateSettings;
    })(document, window.kommunicate || {});
/* NOTE : Use web server to view HTML files as real-time update will not work if you directly open the HTML file in the browser. */

    },[])
    return (  
    <div>
      
    </div>);    
}
 
export default Chat;