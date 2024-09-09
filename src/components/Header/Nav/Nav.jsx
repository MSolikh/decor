import {
	faCircleInfo,
	faHeadset,
	faHeart,
	faLocationArrow
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../image/logo.png';
import './Nav.css';

export default function Nav({ open, setOpen }) {
	
	const menuRef = useRef();

  const handleClickOutside = (e) => {
    if (menuRef.current && !menuRef.current.contains(e.target)) {
      setOpen(false);
    }
  };

	const handleLinkClick = () => {
    setOpen(false);
  };


	
	const handlePhone = () => {
		const phoneNumber = '+998971852365';

    const tempInput = document.createElement('input');
    tempInput.value = phoneNumber;
    document.body.appendChild(tempInput);

    tempInput.select();
    document.execCommand('copy');

    document.body.removeChild(tempInput);

    alert('Номер телефона скопирован в буфер обмена!');
	};

	return (

		<div 
			className={`overlay ${open ? 'show' : ''}`}
			onClick={handleClickOutside}	
		>
			<div className="nav__menu" ref={menuRef}>
				<div className="nav__logo">
					<img src={logo} alt="" />
				</div>
				<ul className='nav__list'>
					<li>
						<Link to="/save" onClick={handleLinkClick}>
							<FontAwesomeIcon className='list__icon' icon={faHeart} />
							Sevimlilarim
						</Link>
					</li>
					<li>
					<Link to="/location" onClick={handleLinkClick}>
							<FontAwesomeIcon className='list__icon' icon={faLocationArrow} />
							Manzillarimiz
						</Link>
					</li>

					<li>
						<a href="#">
						<FontAwesomeIcon className='list__icon' icon={faCircleInfo} />
							Biz Haimizda
						</a>
					</li>
				</ul>
				<div className="header__help" onClick={handlePhone}>
					<FontAwesomeIcon icon={faHeadset} className='header__icon' />
					<div className="header__help-text">
						<h4>
							Aloqa uchun
							<br />
							<span>+998977894563</span>
						</h4>
					</div>
				</div>
			</div>
		</div>
		
	)
}
