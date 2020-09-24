import Link from 'next/link';
import { NavBarStyled } from './navBar.styled';

const NavBar = () => (
  <NavBarStyled>
    <Link href='/'><a>Home</a></Link> 
    <Link href='/pages/blog/post-2' prefetch><a>Blog</a></Link> 
    <Link href='/contact' prefetch><a>Contact</a></Link>
  </NavBarStyled>
);
  
export default NavBar;
  