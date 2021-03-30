import React from "react";
import {connect} from 'react-redux';
import buyicecream from "../redux/icecreams/iceAction";

function IceContainer(props){
    return(
        <div>
            <h2>No. of Ice - {props.numOfIce}</h2>
            <button onClick={props.buyicecream}>Buy Ice</button>
        </div>
    )
}
const mapStateToProps = state =>{
    return{
        numOfIce: state.icecream.numOfIce
    }
}
const mapDispatchToProps = dispatch =>{
    return{
        buyicecream : () => dispatch(buyicecream())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(IceContainer);