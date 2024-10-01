import React from "react";
import style from "./index.module.css";

export default function Content({ id, title, text, image, discription, link }) {
	return (
		<section className={style.block_content}>
			<div className={style.content}>
				<img src={image} alt={title} />
				<h2>{title}</h2>
				<div className={style.block_discription}>
					<p>{discription}</p>
					<span>{text}</span>
					<a href={link} target="blank">
						<button className={style.btn}>Link </button>
					</a>
				</div>
			</div>
		</section>
	);
}
