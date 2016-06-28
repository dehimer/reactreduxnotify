import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { resetnotify } from 'actions'

import styles from './index.css';



export class Notify extends React.Component {
	constructor() {
		super();
		this.state = {resettimeoutf:false};
	}
	// shouldComponentUpdate (nextProps) {
	// 	return (this.props.note && this.props.note.message) !== (nextProps.note && nextProps.note.message);
	// }
	componentDidUpdate() {

		clearTimeout(this.state.resettimeoutf);

		if(this.props.note && this.props.note.text)
		{
			this.state.resettimeoutf = setTimeout(this.props.resetnotify, 3000);  
		}

	}
    render() {

		const message = this.props.note && this.props.note.text;
		const iswarning = this.props.note && this.props.note.warning;

		let message_style = {};
		if(message)
		{
			message_style.backgroundColor = iswarning?'#f90':'#09f';
		}

        return <div className={ styles.root }>
			<div style={ message_style } className={ styles.message }>
				{ message }
			</div>
		</div>
    }
}

function mapStateToProps(state) {
	console.log(state);
	return {
		note: state.app.note
	}
}

function mapDispatchToProps(dispatch) {
	return {
		resetnotify: bindActionCreators(resetnotify, dispatch)
	}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Notify)