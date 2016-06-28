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
			An Email
		</div>;
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