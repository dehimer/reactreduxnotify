import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { notify } from 'actions'


import styles from './index.css';



export class Home extends React.Component {
	onClickHandler(e, iswarning) {
		this.props.notify(e.target.innerText, iswarning);
	}
    render() {

        return <div className={ styles.root }>
			<button onClick={ e=>this.onClickHandler(e, true) }>Предупреждающее уведомление</button>
			<button onClick={ e=>this.onClickHandler(e, false) }>Информационное уведомление</button>
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
)(Home)