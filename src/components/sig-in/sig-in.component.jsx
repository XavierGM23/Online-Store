import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { signInWithGoogle } from '../../firebase/firebase.utils';

import './sig-in.styles.scss';

class SignIn extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			email: '',
			password: ''
		};
	}

	handleSubmit = (event) => {
		event.preventDefault();

		this.setState({ email: '', password: '' });
	};

	handleChange = (event) => {
		const { value, name } = event.target;

		this.setState({ [name]: value });
	};

	render() {
		return (
			<div className='sign-in'>
				<h2>I already have an account</h2>
				<span>Sign in with your email and password</span>

				<form onSubmit={this.handleSubmit}>
					<FormInput
						name='email'
						type='email'
						label='Email'
						handleChange={this.handleChange}
						value={this.state.email}
						required
					/>

					<FormInput
						name='password'
						type='password'
						label='Password'
						handleChange={this.handleChange}
						value={this.state.email}
						required
					/>

					<div className='sign-in-buttons'>
						<CustomButton type='submit'>Sign In</CustomButton>
						<CustomButton onClick={signInWithGoogle} isGoogleSignIn logoURL='/images/logos/google-logo.svg'>
							Sign In With Google
						</CustomButton>
					</div>
				</form>
			</div>
		);
	}
}

export default SignIn;
