import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";

const Navigation = () => {
	return (
		<Fragment>
			<div className="navigation">
				<Link to="/" className="logo-container">
					<div>LOGO</div>
				</Link>
				<div className="nav-links-container">
					<Link to="/shop">SHOP</Link>
				</div>
			</div>
			<Outlet />
		</Fragment>
	)
}

export default Navigation;
