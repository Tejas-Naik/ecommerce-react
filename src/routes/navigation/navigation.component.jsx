import { Fragment, useContext } from "react";
import { Outlet } from "react-router-dom";
// importing logo
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";

import { CartContext } from "../../contexts/cart.context";
// import { UserContext } from "../../contexts/user.context";

import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";

import { signOutUser } from "../../utils/firebase/firebase.utils";

import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import CartIcon from "../../components/cart-icon/cart-icon.conponent";

import { LogoContainer, NavigationContainer, NavLink, NavLinks } from './navigation.styles';

const Navigation = () => {
	// const { currentUser } = useContext(UserContext);

	const currentUser = useSelector(selectCurrentUser);
	const { isCartOpen, setIsCartOpen } = useContext(CartContext);


	return (
		<Fragment>
			<NavigationContainer>
				<LogoContainer to='/'>
					<CrwnLogo />
				</LogoContainer>
				<NavLinks>
					<NavLink to="/shop">SHOP</NavLink>
					{
						currentUser ? (
							<NavLink as="span" onClick={signOutUser}> SIGNUOT</NavLink>
						) : (

							<NavLink to="/auth">SIGN IN</NavLink>
						)
					}
					<CartIcon />
				</NavLinks>
				{isCartOpen && <CartDropdown />}
			</NavigationContainer>
			<Outlet />
		</Fragment>
	)
}

export default Navigation;
