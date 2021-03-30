import React from "react";
import {useSelector,useDispatch} from "react-redux";
import buyCake from "../redux/cakes/cakeAction";
function HooksCakeContainer(){
    const numOfCakes = useSelector(state => state.cake.numOfCakes)
    const dispatch = useDispatch()
    return(
        <div>
            <h2>No. of Cakes - {numOfCakes}</h2>
            <button onClick={()=>dispatch(buyCake())}>Buy Cakes</button>
        </div>
    )
}

export default HooksCakeContainer;