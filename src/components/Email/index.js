import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { notify } from 'actions'


import styles from './index.css';



export class Email extends React.Component {
	constructor(props)
	{
		super(props);
	}
    render() {

        return <div className={ styles.root }>
			<div className={ styles.input_group }>
				<label for='email' className={ styles.label }>Email получателя:</label>
				<input id='email' type='email'/>
			</div>
			<div className={ styles.input_group }>
				<label for='text' className={ styles.label }>Сообщение:</label>
				<input id='text' type='text'/>
			</div>
			<input type='button' value='Отправить' className={ styles.submit }/>
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