import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import estilos from './Header.module.css'



const Header = () =>{

    return(
        <header>
            <div className="container">
                <h1 className={estilos.title}>CRUD - HotWheels</h1>
            </div>
            {/* <NavBar /> */}
        </header>
        
    )
}

export default Header;