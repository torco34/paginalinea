import React from "react";
// import PropTypes from 'prop-type'; 1.3k (gzipped: 690)

class Eventos extends React.Component {
	constructor(props) {
		super(props);
	}
	_onMouseMove = (e) => {
		const width = this.refs.titleContainer.clientWidth;
		const height = this.refs.titleContainer.clientHeight;
		console.log(width, height);
	};
	render() {
		const { text } = this.props;
		return <div onMouseMove={this._onMouseMove}>ref="titleContainer"</div>;
	}
}

export default Eventos;
