import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

const buttonStyles = {
	//write button styles here
	color: "black",
	fontSize: "16px",
	background: "yellow",
	border: "none"
};

const badgeStyles = {
	//write the span styles here

	color: "white",
	fontSize: "16px",
	background: "red",
	borderRadius: "100%"
};

const Badge = props => {
	return (
		<button style={buttonStyles} type="button" className="btn btn-primary">
			{props.label}
			<span style={badgeStyles} className="badge badge-light">
				{props.number}
			</span>
		</button>
	);
};
Badge.propTypes = {
	label: PropTypes.string,
	number: PropTypes.string
};
//dont forget to change the label
ReactDOM.render(<Badge label="Alerts" number="2" />, document.querySelector("#myDiv"));
