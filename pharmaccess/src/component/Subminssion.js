import React from 'react'
import favicon from '../img/favicon.ico'

import {connect} from 'react-redux'

export const Subminssion = (props) => {
    console.log(props.arr.length);
    return (
        <div >
            <header>
        
               <button onClick={()=>props.navigation.previous()} className='buttWhite'>
               <i class="bi bi-chevron-compact-left" style={{fontSize:"2rem",color:"#8080806b"}}></i>        
                                    </button>
              <h1>
                  <img src={favicon} style={{height:"1.25rem"}}/>
                  Pharm<span >Access</span>
              </h1>
          </header>

            <br/>
                        <h3 style={{fontSize:"2rem",fontFamily: 'Roboto'}}>Thank you for<br/>your Subminssion!</h3>
                        <p style={{textAlign:"center",fontSize:"0.75rem",paddingTop:"1rem",paddingLeft:"1rem",paddingRight:"1rem",fontFamily: 'Roboto'}}>Unfortunately, due to high demand and limmited supply of vaccine, you have been placed on wait-list.</p>
                        <p style={{textAlign:"center",fontSize:"0.75rem",paddingTop:"1rem",paddingLeft:"1rem",paddingRight:"1rem",fontFamily: 'Roboto'}}>When we have availability, we will contact you back to set up and appointment for immunization</p>
                        {
                            props.arr.length === props.data ? (  
                                    <button class="btn" onClick={()=>{props.navigation.next()}}  style={{backgroundColor:"rgb(3,175,182)",color:"white",fontFamily: 'Roboto',fontSize:"13px",width:"16rem"}}>Confirm</button>
                            ) : (                       
                                    <button class="btn " onClick={()=>{props.navigation.go(3)}}  style={{backgroundColor:"rgb(3,175,182)",color:"white",fontFamily: 'Roboto',fontSize:"13px",width:"16rem"}}>Confirm
                                        
                                    </button>
                            )
                        }     
        </div>
    )
}
const mapStateToProps =(state)=>({
    data: state.add.data,
    arr: state.pDetail.arr,
})
export default connect(mapStateToProps)(Subminssion);