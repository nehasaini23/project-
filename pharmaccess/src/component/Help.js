import React from 'react'
import favicon from '../img/favicon.ico'

const Help = ({navigation}) => {
    return (
        <div>
            <header>
               <button onClick={()=>navigation.previous()} className='buttWhite' >
               <i class="bi bi-chevron-compact-left" style={{fontSize:"2rem",color:"#8080806b"}}></i>        
                                    </button>

              <h1>
                  <img src={favicon} style={{height:"1.25rem"}}/>
                  Pharm<span >Access</span>
              </h1>
          </header>
            <h3 className="topic" >How Can We Help?</h3>
            <div class="progress" style={{height:"2px",borderRadius:"0"}}>
              <div class="progress-bar" role="progressbar" style={{width:"40%",height:"2px",borderRadius:"0",backgroundColor:"rgb(3 175 182)",borderRadius:"1px"}} aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>  
          </div>
            <br/>
            <div class="d-grid gap-2" style={{padding:'9px'}}>
                <button class="btn " type="button" onClick={()=>navigation.next()} style={{backgroundColor:"rgb(3,175,182)",color:"white",fontFamily: 'Roboto',fontSize:"13px",fontWeight:"bold"}}>Minor Alignment Assessment</button>
                <button class="btn" type="button" onClick={()=>navigation.next()} style={{backgroundColor:"rgb(3,175,182)",color:"white",fontFamily: 'Roboto',fontSize:"13px",fontWeight:"bold"}}>Schedule Appointmnet</button>
            </div>
            
        </div>
    )
}

export default Help
