import { Outlet, useNavigation } from "react-router-dom";
import Nav from "../../Nav/Nav";
import Footer from "../Footer/Footer";


const Home=() => {
    const navigation = useNavigation();


    return(

        <div>
            <Nav></Nav>
            {
                navigation.state === "loading"?
                <span className="loading loading-ball loading-lg"></span>

                :
                <Outlet></Outlet>
            }

           
            

            <Footer></Footer>

        </div>
    )

}


export default Home;