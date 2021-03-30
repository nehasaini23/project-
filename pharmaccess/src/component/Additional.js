import React, {useState } from 'react';
import favicon from '../img/favicon.ico'
import {connect} from 'react-redux'

 export const Additional = (props) => {
    

    const [value,setValue] = useState('');
    const handleChange = (e) =>{
        setValue(e.target.value);
    }
    const show1=()=>{
        document.getElementById('div1').style.display = 'block';
    }
     const show2=()=>{
        document.getElementById('div1').style.display ='none';
      }
      console.log(props.arr.length);
      
      const confirm = () =>{
        props.navigation.next()
      }
    return (
        <div>
            <header>
               <button onClick={()=>props.navigation.previous()} className='buttWhite'>
               <i class="bi bi-chevron-compact-left" style={{fontSize:"2rem",color:"#8080806b"}}></i>        
                                    </button>
              <h1>
                  <img src={favicon} style={{height:"1.25rem"}}/>
                  Pharm<span >Access</span>
              </h1>
          </header>
            <h3 className="topic">Patient Info - Additional</h3>
            <div class="progress" style={{height:"2px",borderRadius:"0"}}>
              <div class="progress-bar" role="progressbar" 
                    style={{width:"80%",height:"2px",borderRadius:"0",backgroundColor:"rgb(3,175,182)",
                            borderRadius:"1px"}} 
                    aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
              </div>  
            </div>
            <br/>
            
            <h2 className="head" style={{textAlign:"left"}}>Patient#{props.arr.length}
                    <span style={{color:"red",fontSize:"0.5rem",float:"right"}}>*Required Field</span>
            </h2>
        <form class="row g-3 needs-validation"  onSubmit={confirm} novalidate>
            <h2 className="head">Have you received covid vaccine in the past?</h2>
            <div class="col-md-12">
            <div class="form-check" style={{paddingLeft:"23px"}}>
              <input class="form-check-input" type="radio" id="validationFormCheck2" name="radio-stacked" onClick={show1} required/>
              <label class="form-check-label" for="validationFormCheck2" style={{fontFamily: 'Roboto',fontSize:"13px",color:"rgb(66,66,66)"}}>
              Yes, this will be my second covid dose
              </label>
            </div>
            <div class="form-check" style={{paddingLeft:"0px"}}>
                <input class="form-check-input" type="radio" id="validationFormCheck3" name="radio-stacked" onClick={show2} required/>
                <label class="form-check-label" for="validationFormCheck3" style={{fontFamily: 'Roboto',fontSize:"13px",color:"rgb(66,66,66)"}}>
                No, this will be my first covid dose
                </label>
            </div>
            </div>
            
            <div id="div1" class="hide">
                <div className="col" style={{marginTop:"2rem",textAlign:"center",}}>
                    <label for="validationServer01" class="form-label" style={{textAlign:"left",fontFamily: 'Roboto',fontSize:"13px",color:"rgb(66,66,66)"}}>When was your first COVID vaccine dose?<span style={{color:"red"}}>*</span></label>
                        <input type="date" class="form-control" id="validationServer01" placeholder='DD/MM/YYYY'  style={{border:"none",borderBottom:"1px solid rgb(108 117 125 / 28%)",borderRadius:"0px",fontFamily: 'Roboto',fontSize:"13px"}} required/>
                </div>
                <div className="col" style={{marginTop:"2rem"}}>
                    <label for="validationServer02" class="form-label" style={{textAlign:"left",fontFamily: 'Roboto',fontSize:"13px",color:"rgb(66,66,66)"}}>Who was the manufacturer of your first COVID vaccine?<span style={{color:"red"}}>*</span></label>
                    <select class="form-select" id="validationTooltip04" style={{border:"1px solid rgb(108 117 125 / 28%)",borderRadius:"0px",fontFamily: 'Roboto',fontSize:"13px",color:"rgb(66,66,66)"}} value={value} onChange={handleChange} required>
                    <option selected disabled value="">Choose...</option>
                        <option value="pfizer">Pfizer</option>
                        <option value="moderna">Moderna</option>
                        <option value="other">Other</option>         
                        <option value="unsure">Unsure</option>                               
                    </select>               
                </div>                               
                </div>
                {
                    value === 'other' ? (
                        <div>
                        <div className="col">
                            <input type="text" class="form-control" id="validationServer01" style={{border:"none",borderBottom:"1px solid rgb(108 117 125 / 28%)",borderRadius:"0px",fontFamily: 'Roboto',fontSize:"13px"}} placeholder="Type the name of manufacturer" required/>
                        </div>
                        </div>
                    ): null
                        }

                <div class="col-12">
                <button class="btn" style={{backgroundColor:"rgb(3,175,182)",color:"white",fontFamily: 'Roboto',fontSize:"13px",width:"16rem"}}
                    >
                    Confirm
                </button>
                </div>
            </form>
    </div>

    )
}
const mapStateToProps =(state)=>({
    data: state.add.data,
    arr: state.pDetail.arr,
})

export default connect(mapStateToProps)(Additional)
