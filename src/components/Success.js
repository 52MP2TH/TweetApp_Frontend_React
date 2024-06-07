import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import SuccessHeader from "./SuccessHeader";

export default function Success(props) {
    const location = useLocation();
    let navigate = useNavigate()
    console.log(location)
    if(!location.state){
        navigate('/')
    }
    return (
        <div>
            <SuccessHeader props={{ state: { location } }} />
        </div>
    )
}