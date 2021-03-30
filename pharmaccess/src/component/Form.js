// import 'bootstrap/dist/css/bootstrap.min.css'
// import React, { useState, useEffect } from 'react'
// import favicon from '../img/favicon.ico'
// import {patient} from '../redux/Detail/detailAction'
// import {addNo} from '../redux/Info/noAction'
// import {connect} from 'react-redux'

// const Form = (props) => {
//     const [currentValue,setValue]=useState('');
//     const handleChangerr = (e) =>{
//         console.log('e.target.val -->',e.target.value)
//         setValue(e.target.value)
//     }
//     const [immValue,setImm]=useState('');
//     const immChange = (e) =>{
//         console.log('e.target.val -->',e.target.value)
//         setImm(e.target.value)
//     }
//     useEffect(() => {
//     }, [currentValue])
//     const confirm = (event) =>{
//         console.log('here in form submit', props)
//         event.preventDefault()
//         props.dispatch(patient(event.target.fname.value,
//                                event.target.lname.value,
//                                event.target.dob.value,
//                                event.target.contact.value,
//                                event.target.email.value,
//                                event.target.appoint.value,
                            
//                                ))
//         console.log("arr-->",props.arr.length)
//         if(immValue==='COVID Vaccine'){
//             props.navigation.next();
//         }else{
//             props.navigation.go(5);
//         }
        
//     }
    
//     return (
//         <div>
//              {console.log('form')}
//         <header>
//                <button onClick={()=> { props.navigation.previous() }} className='buttWhite'>
//                <i className="bi bi-chevron-compact-left" style={{fontSize:"2rem",color:"#8080806b"}}></i>        
//                                     </button>
//               <h1>
//                   <img src={favicon} style={{height:"1.25rem"}}/>
//                   Pharm<span >Access</span>
//               </h1>
//           </header>
//             <h3 className="topic">Patient Info</h3>
//             <div className="progress" style={{height:"2px",borderRadius:"0"}}>
//               <div className="progress-bar" role="progressbar" 
//                     style={{width:"80%",height:"2px",borderRadius:"0",backgroundColor:"rgb(3,175,182)",borderRadius:"1px"}} 
//                     aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
//               </div>  
//             </div>
//         <h2 className="head" style={{textAlign:"left"}}>Patient#
//                     {props.arr.length+1}
//         <span style={{color:"red",fontSize:"0.5rem",float:"right"}}>*Required Field</span></h2>
//         <div className="container">
//         <form className="row g-3 needs-validation"  onSubmit={confirm}  novalidate>
//             <div className="col-md-6">
//                 <div className="form-group">
//                 <label for="validationCustom01" className="form-label" style={{float:"left",fontFamily: 'Roboto',fontSize:"11px",color:"rgb(66,66,66)"}}>FIRST NAME<span style={{color:"red"}}>*</span></label>
//                 <input type="text" className="form-control"  id="fname" name="fname" style={{border:"none",borderBottom:"1px solid rgb(108 117 125 / 28%)",borderRadius:"0px",fontFamily: 'Roboto',fontSize:"13px",outline:'none'}}  required/> 
//                 <div class="invalid-feedback">
//                         Please provide a valid city.
//                 </div>
//                 </div>
//             </div>
//             <div className="col-md-6">
//             <div className="form-group">
//                 <label for="validationCustom02" className="form-label" style={{float:"left",fontFamily: 'Roboto',fontSize:"11px",color:"rgb(66,66,66)"}}>LAST NAME<span style={{color:"red"}}>*</span></label>
//                 <input type="text" className="form-control "  id="lname" name="lname" style={{border:"none",borderBottom:"1px solid rgb(108 117 125 / 28%)",borderRadius:"0px",fontFamily: 'Roboto',fontSize:"13px",outline:'none'}}required/>
//             </div>
//             </div>
//             <div className="col-md-12">
//             <div className="form-group">
//                 <label for="validationCustom03" className="form-label" style={{float:"left",fontFamily: 'Roboto',fontSize:"11px",color:"rgb(66,66,66)"}}>DATE OF BIRTH (dd/MM/yyyy)<span style={{color:"red"}}>*</span></label>
//                 <input type="date" className="form-control "  id="dob" name='dob'  style={{border:"none",borderBottom:"1px solid rgb(108 117 125 / 28%)",borderRadius:"0px",fontFamily: 'Roboto',fontSize:"13px",outline:'none'}} required/>
//             </div>
//             </div>
//             <div className="col-md-12">
//             <div className="form-group">
//                 <label for="validationCustom04" className="form-label" style={{float:"left",fontFamily: 'Roboto',fontSize:"11px",color:"rgb(66,66,66)"}}>CONTACT<span style={{color:"red"}}>*</span></label>
//                 <input type="number" className="form-control "  id="contact" name="contact" style={{border:"none",borderBottom:"1px solid rgb(108 117 125 / 28%)",borderRadius:"0px",fontFamily: 'Roboto',fontSize:"13px",outline:'none'}} required/>
//             </div>
//             </div>
//             <div className="col-md-12">
//             <div className="form-group">
//                 <label for="validationCustom05" className="form-label" style={{float:"left",fontFamily: 'Roboto',fontSize:"11px",color:"rgb(66,66,66)"}}>EMAIL<span style={{color:"red"}}>*</span></label>
//                 <input type="email" className="form-control "  id="email" name="email" style={{border:"none",borderBottom:"1px solid rgb(108 117 125 / 28%)",borderRadius:"0px",fontFamily: 'Roboto',fontSize:"13px",outline:'none'}} required/>
//             </div>
//             </div>
//             <div className="col-md-12">
//             <div className="form-group">
//                 <label for="validationCustom04" className="form-label" style={{float:"left",fontFamily: 'Roboto',fontSize:"11px",color:"rgb(66,66,66)"}}>TYPE OF APPOINTMENT<span style={{color:"red"}}>*</span></label>
//                     <select className="form-select" id="appoint"  style={{border:"1px solid rgb(108 117 125 / 28%)",borderRadius:"0px",fontFamily: 'Roboto',fontSize:"13px",outline:'none'}} value={currentValue} onChange={handleChangerr} required>
//                         <option selected disabled value="">Choose..</option>
//                         <option value="immunization">Immunization</option>
//                         <option value="medical review">Medical Review</option>
//                         <option value="other appointment">Any Other Appointmnet</option>                    
//                     </select>
//             </div>
//             </div>
//             {
//                 currentValue === 'immunization' ? (
//                 <div>
//                     <div className="col-md-12" style={{padding:"0px"}}>
//                     <div className="form-group">
//                         <label for="validationCustom08" className="form-label" style={{float:"left",fontFamily: 'Roboto',fontSize:"11px",color:"rgb(66,66,66)"}}>TYPE OF IMMUNIZATION<span style={{color:"red"}}>*</span></label>
//                         <select className="form-select " id="imm"  style={{border:"1px solid rgb(108 117 125 / 28%)",borderRadius:"0px",fontFamily: 'Roboto',fontSize:"13px",outline:'none'}} value={immValue} onChange={immChange} required>
//                             <option selected disabled value="">Choose...</option>
//                             <option value="Flu Vaccine" >Flu Vaccine</option>
//                             <option value="High dose Flu Vaccine (Age +65 only)">High dose Flu Vaccine (Age +65 only)</option>
//                             <option value="COVID Vaccine">COVID Vaccine</option>      
//                             <option value="Other(Prevnar,Shingrex,Havrix,etc)">Other(Prevnar,Shingrex,Havrix,etc)</option>                                  
//                         </select>               
//                     </div>
//                     </div>
//                 </div>
//                 ): null
//             }
//             {
//                 immValue === 'Flu Vaccine' ? (
//                     <div>
//                         <p style={{color:"red",fontSize:"0.75rem",fontFamily: 'Roboto',fontSize:"11px",color:"rgb(66,66,66)"}}>For faster immunization times due to supply shortages, would you be interested in receving a nasal vaccination (ex.Flumist)?</p>
//                         <div className="form-check form-check-inline">
//                             <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
//                             <label className="form-check-label" for="inlineRadio1">Yes</label>
//                         </div>
//                         <div className="form-check form-check-inline">
//                             <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
//                             <label className="form-check-label" for="inlineRadio1">No</label>
//                         </div>
//                     </div>
//                 ): null 
//             }
//             {
//                 immValue === 'Other(Prevnar,Shingrex,Havrix,etc)' ? (
//                     <div>
//                         <p style={{color:"red",fontSize:"0.75rem",fontFamily: 'Roboto',fontSize:"11px",color:"rgb(66,66,66)"}}>What immunization injection will you be receiving?</p>
//                         <div className="col-md-12" style={{padding:"0px"}}>
//                             <input type="email" className="form-control" id="validationCustom09" style={{border:"none",borderBottom:"1px solid rgb(108 117 125 / 28%)",borderRadius:"0px",fontFamily: 'Roboto',fontSize:"13px",outline:'none'}} required/>
//                         </div>
//                     </div>
//                 ): null
//             } 
//             <div className="col-12" style={{padding:"0px",paddingLeft:"10px",paddingRight:"10px"}}>
//                 <label style={{float:"left",fontFamily: 'Roboto',fontSize:"11px",color:"rgb(66,66,66)"}}>OPTIONAL</label>
//                  <br/>
//                 <textarea rows="5" id="comment" placeholder="Add any special instructions for the pharmacy team" style={{border:"1px solid rgb(108 117 125 / 28%)",borderRadius:"0px",width:"100%",fontFamily: 'Roboto',fontSize:"13px",outline:'none',outline:'none'}}></textarea>
//             </div>

//             <div className="col-12">
//                 <button className="btn" style={{backgroundColor:"rgb(3,175,182)",color:"white",fontFamily: 'Roboto',fontSize:"13px",outline:'none',width:"16rem"}} 
//                     >
//                     Confirm
//                 </button>
//             </div>
            
//         </form>
//         {/* <script>
//             (function () {
//                 'use strict',
  
//                     var forms = document.querySelectorAll('.needs-validation')

//   // Loop over them and prevent submission
//   Array.prototype.slice.call(forms)
//     .forEach(function (form) {
//       form.addEventListener('submit', function (event) {
//         if (!form.checkValidity()) {
//           event.preventDefault()
//           event.stopPropagation()
//         }

//         form.classList.add('was-validated')
//       }, false)
//     })
// })()
//         </script> */}
//         </div>
        
// </div>

//     )
// }

// const mapStateToProps = (state) => ({
//     num:state.add.num,
//     data: state.add.data,
//     arr: state.pDetail.arr,
// })
// export default connect(mapStateToProps)(Form)
import React from "react";
import { MDBRow, MDBCol, MDBInput, MDBBtn } from "mdbreact";

class Form extends React.Component {
  state = {
    fname: "Mark",
    lname: "Otto",
    email: "",
    city: "",
    state: "",
    zip: ""
  };

  submitHandler = event => {
    event.preventDefault();
    event.target.className += " was-validated";
  };

  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div>
          <header>
               <button onClick={()=> { props.navigation.previous() }} className='buttWhite'>
                <i className="bi bi-chevron-compact-left" style={{fontSize:"2rem",color:"#8080806b"}}></i>        
                                     </button>
               <h1>
                   <img src={favicon} style={{height:"1.25rem"}}/>
                   Pharm<span >Access</span>
               </h1>
           </header>
             <h3 className="topic">Patient Info</h3>
             <div className="progress" style={{height:"2px",borderRadius:"0"}}>
               <div className="progress-bar" role="progressbar" 
                    style={{width:"80%",height:"2px",borderRadius:"0",backgroundColor:"rgb(3,175,182)",borderRadius:"1px"}} 
                    aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
              </div>  
            </div>
        <form
          className="needs-validation"
          onSubmit={this.submitHandler}
          noValidate
        >
          <MDBRow>
            <MDBCol md="4">
              <MDBInput
                value={this.state.fname}
                name="fname"
                onChange={this.changeHandler}
                type="text"
                id="materialFormRegisterNameEx"
                label="First name"
                required
              >
                <div className="valid-feedback">Looks good!</div>
              </MDBInput>
            </MDBCol>
            <MDBCol md="4">
              <MDBInput
                value={this.state.lname}
                name="lname"
                onChange={this.changeHandler}
                type="text"
                id="materialFormRegisterEmailEx2"
                label="Last name"
                required
              >
                <div className="valid-feedback">Looks good!</div>
              </MDBInput>
            </MDBCol>
            <MDBCol md="4">
              <MDBInput
                value={this.state.email}
                onChange={this.changeHandler}
                type="email"
                id="materialFormRegisterConfirmEx3"
                name="email"
                label="Your Email address"
              >
                <small id="emailHelp" className="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </MDBInput>
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol md="4">
              <MDBInput
                value={this.state.city}
                onChange={this.changeHandler}
                type="text"
                id="materialFormRegisterPasswordEx4"
                name="city"
                label="City"
                required
              >
                <div className="invalid-feedback">
                  Please provide a valid city.
                </div>
                <div className="valid-feedback">Looks good!</div>
              </MDBInput>
            </MDBCol>
            <MDBCol md="4">
              <MDBInput
                value={this.state.state}
                onChange={this.changeHandler}
                type="text"
                id="materialFormRegisterPasswordEx4"
                name="state"
                label="State"
                required
              >
                <div className="invalid-feedback">
                  Please provide a valid state.
                </div>
                <div className="valid-feedback">Looks good!</div>
              </MDBInput>
            </MDBCol>
            <MDBCol md="4">
              <MDBInput
                value={this.state.zip}
                onChange={this.changeHandler}
                type="text"
                id="materialFormRegisterPasswordEx4"
                name="zip"
                label="Zip"
                required
              >
                <div className="invalid-feedback">
                  Please provide a valid zip.
                </div>
                <div className="valid-feedback">Looks good!</div>
              </MDBInput>
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBInput
              type="checkbox"
              value="conditions"
              id="materialInvalidCheck"
              required
              label="Agree to terms and conditions"
            >
              <div className="invalid-feedback">
                You must agree before submitting.
              </div>
            </MDBInput>
          </MDBRow>
          <MDBBtn color="success" type="submit">
            Submit Form
          </MDBBtn>
        </form>
      </div>
    );
  }
}

export default Form;
