import styled from 'styled-components';
import {NavLink} from 'react-router-dom';


export const Nav = styled.nav`
    display: flex;
`
export const NavLinkHeader = styled(NavLink)`
    margin: 14px 20px;
    text-decoration:none;
    color:black;
    padding: 5px 10px;
    border-radius:4px;
    &:hover{
         background-color:orange;
    }
    &.active{
        background-color:orange;
    }
`
