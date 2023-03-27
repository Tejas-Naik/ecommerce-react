import { Fragment, useContext } from "react";
import { Link, Outlet } from "react-router-dom";
// importing logo
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import './navigation.styles.scss';

const Navigation = () => {
	const { currentUser, setCurrentUser } = useContext(UserContext);
	console.log(currentUser);

	const handleSignOut = async () => {
		await signOutUser();
		setCurrentUser(null);

	}

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
							<span className="nav-link" onClick={handleSignOut}> SIGNUOT</span>
						) : (

							<Link className="nav-link" to="/auth">SIGN IN</Link>
						)
					}
				</div>
			</div>
			<Outlet />
		</Fragment>
	)
}

export default Navigation;
