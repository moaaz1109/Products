import React from 'react'
import './Footer.css'

function Footer(){

    return(
        <div className="footerArea">
         
            <div className="footerArea__top">
                <p><a href="/">Back to the top</a></p>
            </div>
            <div className="footerArea__links">
            <div className="footerArea__linksArea">
               <span><a href="/">Terms </a></span>
               </div>
               <div className="footerArea__linksArea">
               <span><a href="/">Center</a></span>
               </div>
               <div className="footerArea__linksArea">
               <span><a href="/">Informtion</a></span>
               </div>
              
            </div>
        <div className="footer-soical">
        <div className="so">
            <div className="so">
               <span><a href="/"><img src="/images/Twi.png"/>Twitter </a></span>
               </div>
               <div className="so">
               <span><a href="/"><img src="/images/Inst.png"/>Instgram</a></span>
               </div>
               <div className="so">
               <span><a href="/"><img src="/images/You.png"/>Youtube</a></span>
               </div>
              
            
        </div>
        </div>

        </div>
    )
}

export default Footer