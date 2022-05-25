import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
        <div className="navigation" >
            <NavLink exact to ="/" activeclassname="nav-active">
                Accueil
            </NavLink>
            <NavLink exact to ="/a-propos" activeclassname="nav-active ">
                À propos
            </NavLink>
        </div>

    );
};
export default Navigation