import React from "react";
import { NavLink} from "react-router-dom";
const Menu = () =>{
    return (
        <>
        <div className="menu_style">
        <NavLink exact activeClassName="active_class" to='/'>About Us</NavLink>
        <NavLink exact activeClassName="active_class" to='/Service'>Service</NavLink>


        <NavLink exact activeClassName="active_class" to='/contact'>Contact Us</NavLink>
     
        {/* <a href="/">AboutUS</a>
        <a href="/contact">Conatctus</a> */}
</div>
        </>
    );

}
export default Menu;