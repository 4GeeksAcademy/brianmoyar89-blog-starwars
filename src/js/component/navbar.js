import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from '../store/appContext';

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<div className="container-fluid">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">
                    <img src="https://visualpharm.com/assets/999/Star%20Wars-595b40b85ba036ed117db2ff.svg" alt="Logo" className="logo" style={{ width: '80px', height: 'auto' }} />
                    </span>
				</Link>
				<div className="ml-auto">
					<button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                        Favorites
						<span></span> {store.favorites.length}
					</button>
					<ul className="dropdown-menu dropdown-menu-end">
						{store.favorites.map(
							(favorite, index) => {
								return (
									<li className="dropdown-item" key={index}> {favorite}
										<button className="btn-close" onClick={() => { actions.deleteFavorites(favorite) }} >
										</button>
									</li>
								);
							}
						)}
					</ul>
				</div>
			</div>
		</nav>
	);
};
