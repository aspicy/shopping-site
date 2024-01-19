import './navigation.styles.scss';
import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom"

import CrownLogo from '../../assets/crown.svg' // Can Use vite-svg-loader to import svg as react component

import { UserContext } from '../../contexts/user.context';
import { signOutUser } from '../../utils/firebase/firebase.utils';


const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  console.log(currentUser);

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to='/'>
          <img src={CrownLogo} alt='Logo' className='logo' />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to='/shop'>
              SHOP
          </Link>
          {
            currentUser ? 
            (<span className="nav-link" onClick={signOutUser}>
              SIGN OUT
            </span>)
            :
            (<Link className="nav-link" to='/auth'>
              SIGN IN
            </Link>)
          }
        </div>
      </div>
      <Outlet />
    </Fragment>
  )
}

export default Navigation;