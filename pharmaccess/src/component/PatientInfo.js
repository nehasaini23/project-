import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addNo } from '../redux/Info/noAction'
import favicon from '../img/favicon.ico'

const PatientInfo = (props) => {
    const [count, setCount] = useState(0);
    const Incre = () => {
        setCount(count + 1)
    }
    const Decre = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    }
    const confirm = async (event) => {
        console.log('here in form submit', props)
        event.preventDefault()
        console.log(props.navigation)
        let input = event.target.count.value;
        console.log(input);
        var a = props.dispatch(addNo(input))
        console.log('props -->', a);

        props.navigation.next();
    }

    return (
        <div>

            <header>
                <button onClick={() => props.navigation.previous()} className='buttWhite'>
                    <i class="bi bi-chevron-compact-left" style={{ fontSize: "2rem", color: "#8080806b" }}></i>
                </button>

                <h1>
                    <img src={favicon} style={{ height: "1.25rem" }} />
                  Pharm<span >Access</span>
                </h1>
            </header>
            <h3 className="topic">Patient Info</h3>
            <div class="progress" style={{ height: "2px", borderRadius: "0" }}>
                <div class="progress-bar" role="progressbar"
                    style={{ width: "60%", height: "2px", borderRadius: "0",backgroundColor:"rgb(3,175,182)" ,borderRadius:"1px"}}
                    aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
                </div>
            </div>
            <h2 className="head" style={{marginTop:"25px"}} >How many patients <br />are you booking for?</h2>
            <form onSubmit={confirm}>
                <span class="btn" onClick={Decre}
                    style={{ backgroundColor: "rgb(181,234,228)", color: "rgb(3,175,182)", height: "1.5rem", width: "1.5rem", padding: "0px", position: "relative", bottom: "1rem" }}>
                    <i class="bi bi-dash" style={{ position: "relative", top: "-2px" }}></i>
                </span>
                <input class="form-check-input" className="inp" type='number'
                    placeholder='0' value={count} id="count" name='count' readOnly>
                </input>
                <span class="btn " onClick={Incre}
                    style={{ backgroundColor: "rgb(181,234,228)", color: "rgb(3,175,182)", height: "1.5rem", width: "1.5rem", padding: "0px", position: "relative", bottom: "1rem" }}>
                    <i class="bi bi-plus" style={{ position: "relative", top: "-2px" }}></i>
                </span>
                <br />
                <div class="form-check" style={{ padding: "2rem 2rem 2rem 4rem",  }}>
                    <input class="form-check-input" type="checkbox" value="" id="invalidCheck" style={{borderRadius:"2px"}}  required />
                    <label class="form-check-label" for="invalidCheck"
                        style={{ fontSize: "13px", textAlign: "left", fontFamily: 'Roboto' ,color:"rgb(66,66,66)"}}>
                        I consent to the privacy policy and term of uses
                </label>
                </div>
                {
                    count != 0 ? (
                        <button class="btn"  style={{ backgroundColor: "rgb(3,175,182)", color: "white", width: "16rem", fontFamily: 'Roboto', fontSize: "13px" }}>
                            Confirm
                        </button>
                    ) : (
                        <button class="btn" disabled="true"  style={{ backgroundColor: "rgb(3,175,182)", color: "white", width: "16rem", fontFamily: 'Roboto', fontSize: "13px" }}>
                            Confirm 
                        </button>
                        
                    )
                }
                {/* <button class="btn" style={{backgroundColor:"rgb(3,175,182)",color:"white",width:"16rem",fontFamily: 'Roboto',fontSize:"13px"}}>
                Continue
            </button> */}
            </form>
        </div>
    )
}
const mapStateToProps = (state) => ({
    data: state.add.data,
    arr: state.pDetail.arr,

})

export default connect(mapStateToProps)(PatientInfo);
