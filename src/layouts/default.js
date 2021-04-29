import React from "react"
import MainNav from "../components/mainnav.js"
import 'bootstrap/dist/css/bootstrap.css';
import { CartContextProvider } from "../../shopping.js"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Default({children}) {
    return (
        <CartContextProvider>
        <header>
            <div className="container">
                <div className="row">

                <div class="col-4" className="logo">
                    <img src="img/stay-fresh.png" className="logo" alt="Stay Fresh" />
                    </div>
                    <div className="col-sm-8" className="header">
                        <MainNav></MainNav>
                        </div>
                    </div>
                </div>
        </header>

        <div className="container">
        {children}
        </div>
        

         <footer>
            <hr></hr>
            <div className="container">
                <div className="row">
                    <div className="colo-sm-2">
                        <small>&copy; 2021</small>
                    </div>
            <div className="col-sm-8">
                <MainNav className="footer"></MainNav>
            </div>
            <div className="col-sm-2">
            
            
            </div>
                </div>
            </div>
        
        </footer>
        </CartContextProvider>
    )
}