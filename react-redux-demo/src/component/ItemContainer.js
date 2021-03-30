import React from 'react'
import {connect} from 'react-redux';
import buyCake from '../redux/cakes/cakeAction';
import buyicecream from '../redux/icecreams/iceAction';


function ItemContainer(props){
    return(
        <div>
            <h2>Items-{props.item} </h2>
            <button onClick={props.buyItem}>buyItem</button>
        </div>
    )
}
const mapStateToProps=(state,ownProps)=>{
        const itemState= ownProps.cake?state.cake.numOfCakes:state.icecream.numOfIce
    return{
        item: itemState
    }
}

const mapDispatchToProps=(dispatch,ownProps)=>{
        const dispatchFunction = ownProps.cake?()=>dispatch(buyCake()):()=>dispatch(buyicecream())
        return{
            buyItem: dispatchFunction
        }
}

export default connect(null,mapDispatchToProps)(ItemContainer)