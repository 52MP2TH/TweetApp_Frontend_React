import Header from "./Header";
import { useNavigate } from "react-router";

const Home = (props) => {
    
    return (
        <div>
            <Header register={props.register}/>
        </div>
    )
}
export default Home