import React from "react"
import MainNav from "../components/mainnav.js"
import 'bootstrap/dist/css/bootstrap.css';
import { CartContextProvider } from "../../shopping.js"

export default function Default({children}) {
    return (
        <CartContextProvider>
        <header>
            <div className="container">
                <div className="row">

                    <div className="col-sm-12">
                        <h2>Stay Fresh [logo]</h2>
                    </div>
                    <div className="col-sm-12">
                        <MainNav></MainNav>
                    </div>
                </div>
            </div>
            <hr></hr>
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
                <MainNav></MainNav>
            </div>
            <div className="col-sm-2">
                [social icons]
            </div>
                </div>
            </div>
        
        </footer>
        </CartContextProvider>
    )
}