import React, { Component } from 'react';

function Row(props) {
	const newDay = props.day;
	return (
		<div className="weather-forecast__row">
			<span className="weather-forecast__day">{newDay.weekday}</span>
			<span className="weather-forecast__icon">
				<img src={newDay.icon}/>
			</span>
			<span className="weather-forecast__high">{newDay.high}</span>
			<span className="weather-forecast__low">{newDay.low}</span>
		</div>
	)


}

export default class Forecaster extends Component {
	constructor(props) {
		super(props);
		// use static data to fill initial state first
		this.state = {
			numOfDays: 3
		};
	}
	render() {
		const { days, unit } = this.props;
		const { numOfDays } = this.state;
		return (
			<div>
				<div className="forecast__switch">
					<button className='button' onClick={e => this.setState({ numOfDays: 3 })}>
						3 days
								</button>
					<button className='button' onClick={e => this.setState({ numOfDays: 7 })}>
						7 days
								</button>
				</div>
				{days.slice(0, numOfDays).map((day, i) => (
					<Row key={day.key} day={day} unit={unit} />
				))}
			</div>
		);
	}
}