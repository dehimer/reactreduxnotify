import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { notify, sendemail } from 'actions'


import styles from './index.css';



export class Email extends React.Component {
	constructor(props)
	{
		super(props);

		this.state = {email:'', text:''};
	}
	onSubmitClicked() {

		if(this.state.email === '')
		{
			this.props.notify('Укажите email получателя!', true);			
		}
		else
		{
			console.log(this.state);
			this.props.sendemail(this.state.email, this.state.props);
			this.setState({email:'', text:''});
		}

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

function mapStateToProps() {
	return {
	}
}

function mapDispatchToProps(dispatch) {
	return {
		notify: bindActionCreators(notify, dispatch),
		sendemail: bindActionCreators(sendemail, dispatch)
	}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Email)