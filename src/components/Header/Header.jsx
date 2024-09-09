import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../image/logo.png';
import './Header.css';
import Nav from './Nav/Nav';

export default function Header() {
	
	const [open, setOpen] = useState(false);

	return (
		<>
			<header className="header">
				<Nav open={open} setOpen={setOpen} />
				<div className="container nav__container">
					<div className="nav">
						<div className="header__icons">
							<div className="header__icon profil" onClick={() => setOpen(true)}>
								<FontAwesomeIcon icon={faBars} className='icon'/>
							</div>
							<Link to="/">
								<img src={logo} alt="" className='header__logo'/>
							</Link>
						</div>
					</div>
				</div>
			</header>
		</>
	)
}
