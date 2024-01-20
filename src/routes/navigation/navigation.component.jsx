import { NavigationContainer, LogoContainer, NavLinks, NavLink } from "./navigation.styles";
import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom"

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CrownLogo from '../../assets/crown.svg' // Can Use vite-svg-loader to import svg as react component
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

import { UserContext } from '../../contexts/user.context';
import { CartContext } from '../../contexts/cart.context';

import { signOutUser } from '../../utils/firebase/firebase.utils';



const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  console.log(currentUser);

  const { isCartOpen } = useContext(CartContext);

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to='/'>
          <img src={CrownLogo} alt='Logo' className='logo' />
        </LogoContainer>
        <NavLinks>
          <NavLink to='/shop'>
              SHOP
          </NavLink>
          {
            currentUser ? 
            (<NavLink as='span' onClick={signOutUser}>
              SIGN OUT
            </NavLink>)
            :
            (<NavLink to='/auth'>
              SIGN IN
            </NavLink>)
          }
          <CartIcon />
        </NavLinks>
        
        {/* {console.log(isCartOpen)} */}

        {isCartOpen && <CartDropdown />}

      </NavigationContainer>
      <Outlet />
    </Fragment>
  )
}

export default Navigation;