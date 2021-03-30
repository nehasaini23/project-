import React, { useState } from "react";
import {connect} from 'react-redux';
import buyCake from "../redux/cakes/cakeAction";

function NewCakeContainer(props){
    const [number,setnumber]=useState(1);
    return(
        <div>
            <h2>No. of Cakes - {props.numOfCakes}</h2>
            <input type="text" value={number} onChange={e=>{setnumber(e.target.value)}}/>
            <button onClick={()=>{props.buyCake(number)}}>Buy {number} Cakes</button>
        </div>
    )
}
const mapStateToProps = state =>{
    return{
        numOfCakes: state.numOfCakes
    }
}
const mapDispatchToProps = dispatch =>{
    return{
        buyCake: number => dispatch(buyCake(number))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(NewCakeContainer);