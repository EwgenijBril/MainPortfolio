import logo from "./media/Logo.png";
import style from "./index.module.css";

export default function NavMenu() {
	return (
		<header className={style.header}>
			<nav className={["wrapper", style.nav_menu].join(" ")}>
				<div>
					<img src={logo} alt="logo" />
				</div>
				<ul className={style.block_menu}>
					<a href="#about">
						<li>About</li>
					</a>
					<a href="#skills">
						<li>Skill</li>
					</a>
					<a href="#project">
						<li>Project</li>
					</a>
					<a href="tel:+49 176 64084993">
						<li>Contact</li>
					</a>
				</ul>
			</nav>
		</header>
	);
}
