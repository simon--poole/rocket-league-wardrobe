import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';

const state = {
	logged_in: true,
}

const accountnav = !state.logged_in ?
	<div class={style.grow + " navbar-nav"}>
		<Link activeClassName={style.active} href="/login" class={style.link + " nav-link nav-item"}>Login</Link>
		<Link activeClassName={style.active} href="/register" class={style.link + " nav-link nav-item"}>Register</Link>
	</div>
	:
	<div class={style.grow + " navbar-nav"}>
		<Link activeClassName={style.active} href="/account" class={style.link + " nav-link nav-item"}>Settings</Link>
		<Link activeClassName={style.active} href="/logout" class={style.link + " nav-link nav-item"}>Sign Out</Link>
	</div>;

export default class Header extends Component {
	render() {
		return (
			<header class={style.header}>
				<nav class={style.navbar + " navbar navbar-dark bg-transparent navbar-expand-lg"}>
					<a href="/" class="navbar-brand" class={style.brand + ' navbar-brand'}>Rocket League Wardrobe</a>
					<div class="toggles">
						<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
							<span class="navbar-toggler-icon"></span>
						</button>
						<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarAcct" aria-controls="navbarAcct" aria-expanded="false" aria-label="Toggle account options">
							<span class="navbar-toggler-icon"></span>
						</button>
					</div>
					<div class={style.grow + " collapse navbar-collapse"} id="navbarNav">
						<div class={style.grow + " navbar-nav"}>
							<Link activeClassName={style.active} href="/" class={style.link + " nav-link nav-item "}>Featured Designs</Link>
							<Link activeClassName={style.active} href="/cars" class={style.link + " nav-link nav-item "}>Browse Cars</Link>
							<Link activeClassName={style.active} href="/items" class={style.link + " nav-link nav-item "}>Browse Items</Link>
							<Link activeClassName={style.active} href="/top" class={style.link + " nav-link nav-item "}>Wall of Fame</Link>
						</div>
					</div>
					<div class={style.grow + " collapse navbar-collapse justify-content-end"} id="navbarAcct">
						{accountnav}
					</div>
				</nav>
			</header>
		);
	}
}
