import{Nav,NavLinkHeader} from './Navigation.styled'
// import {Link} from 'react-router-dom';
import { Outlet } from 'react-router-dom';


const Navigation = () => {
    return (
        <>
        <Nav>
            <NavLinkHeader to="home">Home</NavLinkHeader>
            <NavLinkHeader to="movies">Movies</NavLinkHeader>
        </Nav>
         <Outlet/>
        </>
    )
    
};
export default Navigation;