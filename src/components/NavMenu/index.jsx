import logo from "./media/Logo.png";
import style from "./index.module.css";
import { MenuOutlined } from "@ant-design/icons";
import { useState } from "react";

export default function NavMenu() {
	const [menuActive, setMenuActive] = useState(false);

	const toggleMenu = () => {
		setMenuActive(!menuActive);
	};

	const closeMenu = () => {
		setMenuActive(false);
	};

	return (
		<header className={style.header}>
			<div className={["wrapper", style.menu].join(" ")}>
				<div className={style.logo_menu}>
					<img src={logo} alt="logo" />
					<MenuOutlined className={style.menu_button} onClick={toggleMenu} />
				</div>
				<nav className={`${style.nav_menu} ${menuActive ? style.active : ""}`}>
					<ul className={style.block_menu}>
						<a href="#about" onClick={closeMenu}>
							<li>About me</li>
						</a>
						<a href="#skills" onClick={closeMenu}>
							<li>Skill</li>
						</a>
						<a href="#project" onClick={closeMenu}>
							<li>Project</li>
						</a>
						<a href="tel:+49 176 64084993" onClick={closeMenu}>
							<li>Contact</li>
						</a>
					</ul>
				</nav>
			</div>
		</header>
	);
}
