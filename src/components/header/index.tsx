import { HeaderContainer } from "./styless";
import logoLog from "../../assets/logo-log.svg";
import { Scroll, Timer } from "phosphor-react";
import { NavLink } from "react-router-dom";


export function Header () {
    return (
        <HeaderContainer>
          <img src={logoLog} alt="" />

            <nav>
                <NavLink to='/'  title='timer'>
                    <Timer size={24} />
                </NavLink>
                <NavLink to="/history" title="Historico">
                    <Scroll size={24} />
                </NavLink>
            </nav>
        </HeaderContainer>
    )
}