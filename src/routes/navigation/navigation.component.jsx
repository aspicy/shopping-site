import { NavigationContainer, LogoContainer, NavLinks, NavLink } from "./navigation.styles";
import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux";

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CrownLogo from '../../assets/crown.svg' // Can Use vite-svg-loader to import svg as react component
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

import { selectCurrentUser } from "../../store/user/user.selector";
import { selectIsCartOpen } from "../../store/cart/cart.selector";

import { signOutStart } from "../../store/user/user.action";


const Navigation = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  // console.log(currentUser);

  // const { isCartOpen } = useContext(CartContext);
  const isCartOpen = useSelector(selectIsCartOpen);

  const signOutUser = () => dispatch(signOutStart());

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