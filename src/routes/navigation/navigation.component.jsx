import { Fragment, useContext } from "react";
import { Link, Outlet } from "react-router-dom";
// importing logo
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";

import ShoppingCart from "../../components/cart-icon/cart-icon.conponent";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import './navigation.styles.scss';

const Navigation = () => {
	const { currentUser } = useContext(UserContext);
	console.log(currentUser);

	return (
		<Fragment>
			<div className="navigation">
				<Link to="/" className="logo-container">
					<CrwnLogo />
				</Link>
				<div className="nav-links-container">
					<Link className="nav-link" to="/shop">SHOP</Link>
					{
						currentUser ? (
							<span className="nav-link" onClick={signOutUser}> SIGNUOT</span>
						) : (

							<Link className="nav-link" to="/auth">SIGN IN</Link>
						)
					}
					<Link className="nav-link" to="/shop"><ShoppingCart /></Link>
				</div>
				<CartDropdown />
			</div>
			<Outlet />
		</Fragment>
	)
}

export default Navigation;
