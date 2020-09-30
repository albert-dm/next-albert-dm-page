import Link from 'next/link';
import { NavBarStyled } from './navBar.styled';

const NavBar = () => (
  <NavBarStyled>
    <Link href='/'><a>Home</a></Link> 
    <Link href='/blog'><a>Blog</a></Link> 
  </NavBarStyled>
);
  
export default NavBar;
  