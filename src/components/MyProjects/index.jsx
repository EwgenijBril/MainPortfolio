import React from "react";
import style from "./index.module.css";
import Content from "../Content";

export default function MyProjects({ array_projects }) {
	return (
		<section className={style.section} id="project">
			<h1>My projects</h1>
			<div className={["wrapper", style.my_projects].join(" ")}>
				{array_projects.map(el => (
					<Content key={el.id} {...el} />
				))}
			</div>
		</section>
	);
}
