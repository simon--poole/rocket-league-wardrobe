import { h, Component } from 'preact'
import Helmet from 'preact-helmet';
import style from './style';

export default class Home extends Component {
	render() {
		return (
			<div class={style.home}>
				<Helmet
					title="Featured Designs"
				/>
				<h1>Home</h1>
				<p>This is the Home component.</p>
			</div>
		);
	}
}
