import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({ children, isGoogleSignIn ,logoURL, ...otherProps }) => {
	return (
		<button className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...otherProps}>
				{logoURL ? (
					<div className='custom-button--content'>
						<img src={logoURL} alt='' />
						<div>{children}</div>
					</div>
				) : (
					<div className='custom-button--content'>{children}</div>
				)}
		</button>
	);
};

export default CustomButton;
