import { Fragment, useContext } from "react";
import { Link, Outlet } from "react-router-dom";
// importing logo
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";

import { CartContext } from "../../contexts/cart.context";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";

import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import CartIcon from "../../components/cart-icon/cart-icon.conponent";

import './navigation.styles.scss';

const Navigation = () => {
	const { currentUser } = useContext(UserContext);

	const { isCartOpen, setIsCartOpen } = useContext(CartContext);


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
					<CartIcon />
				</div>
				{isCartOpen && <CartDropdown />}
			</div>
			<Outlet />
		</Fragment>
	)
}

export default Navigation;
