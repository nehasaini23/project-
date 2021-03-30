import React from 'react'
import favicon from '../img/favicon.ico'


 const AllSet = ({navigation}) => {
    return (
        <div >
            <header>
               <button onClick={()=>navigation.previous()} className='buttWhite'>
               <i class="bi bi-chevron-compact-left" style={{fontSize:"2rem",color:"#8080806b"}}></i>        
                                    </button>
              <h1>
                  <img src={favicon} style={{height:"1.25rem"}}/>
                  Pharm<span >Access</span>
              </h1>
          </header>
            
            <br/>
                        <h3 style={{fontSize:"2rem",fontFamily: 'Roboto'}}>You are All Set!<br/>Thank you.</h3>
                        <p style={{textAlign:"center",fontFamily: 'Roboto',fontSize:"13px",padding:"8px"}}>You will recieve an email and text message once the pharmacy team confirms their inventory for their vaccination.</p>
                        <p style={{textAlign:"center",fontFamily: 'Roboto',fontSize:"13px",padding:"8px"}}>You will then be required to respond to either the email or the text message within 24 hours of your appointment to maintain your appointment.</p>
                        <button class="btn "  onClick={()=>{navigation.next()}} style={{backgroundColor:"rgb(3,175,182)",color:"white",fontFamily: 'Roboto',fontSize:"13px",width:"16rem"}}>Confirm</button>
        </div>
    )
}
export default AllSet