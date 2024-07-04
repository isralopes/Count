import { Outlet } from "react-router-dom";
import { Header } from "../../components/header/index";
import { LayoutContainer } from "../drefaultLayouts/styles";

export function DefaultsLayout () {
    return (
       <LayoutContainer>
        <Header />
        <Outlet />
       </LayoutContainer>
    )
}