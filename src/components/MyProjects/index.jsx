import React, { useState } from "react";
import Modal from "../Modal";
import Project from "../Project";
import style from "./index.module.css";

export default function MyProjects({ array_projects }) {
	const [modalActive, setModalActive] = useState(false);

	return (
		<section className={style.section} id="project">
			<div className={["wrapper", style.my_projects].join(" ")}>
				<h1>My projects</h1>

				<div onClick={() => setModalActive(true)} className={style.my_final_project}>
					<h3>My final project</h3>
				</div>

				<Modal active={modalActive} setActive={setModalActive}>
					{array_projects.map(el => (
						<Project key={el.id} {...el} />
					))}
				</Modal>
			</div>
		</section>
	);
}
