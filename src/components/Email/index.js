import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { notify } from 'actions'


import styles from './index.css';



export class Email extends React.Component {
	constructor(props)
	{
		super(props);

		this.state = {email:'', text:''};
	}
	onSubmitClicked() {
		const message = (this.state.email === '')?'Укажите email получателя':this.state.email;
		const iswarning = (this.state.email === '')?true:false;
		
		this.props.notify(message, iswarning);
	}
    render() {

        return <div className={ styles.root }>
			<div className={ styles.input_group }>
				
				<label for='email' className={ styles.label }>Email получателя:</label>
			
				<input id='email' type='email'
					value={ this.state.email }
					onChange={e=>this.setState({email: e.target.value})}
				/>
			
			</div>
			<div className={ styles.input_group }>
			
				<label for='text' className={ styles.label }>Сообщение:</label>
			
				<input id='text' type='text'
					value={ this.state.text }
					onChange={e=>this.setState({text: e.target.value})}
				/>
			
			</div>
			<input type='button' value='Отправить' onClick={ ::this.onSubmitClicked } className={ styles.submit }/>
		</div>
    }
}

function mapStateToProps(state) {
	return {
		state: state
	}
}

function mapDispatchToProps(dispatch) {
	return {
		notify: bindActionCreators(notify, dispatch)
	}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Email)