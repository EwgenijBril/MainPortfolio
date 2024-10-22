import React from "react";
import next from "./media/NextJS.png";
import style from "./index.module.css";

export default function MySkills() {
	return (
		<section className={style.block_my_skills} id="skills">
			<div className={["wrapper", style.my_skills].join(" ")}>
				<div>
					<h1>My Tech Stack</h1>
					<p>
						I have completed my further education as a frontend developer and gained valuable
						experience. But I also understand that I am at the beginning of the road. In addition, I
						am looking forward to using my hard skills with you. These include HTML5, CSS3, TailWind
						Css, JavaScript, TypeScript, React, Next.js, React-Redux, Prisma, Furthermore, I have
						studied databases MySQL, MongoDB, and PostgreSQL, am familiar with Git, and have
						experience with Git Bash and GitHub. I can use the Rest API and Postman and also have
						basic knowledge of Node.js. I have also used Jira Software for various tasks.
					</p>
				</div>
				<div>
					<h1>Using now:</h1>
				</div>
				<div className={style.block_pictures}>
					<div>
						<img src="https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg" alt="html5" />
						<p>HTML5</p>
					</div>
					<div>
						<img src="https://www.vectorlogo.zone/logos/w3_css/w3_css-icon.svg" alt="css3" />
						<p>CSS3</p>
					</div>
					<div>
						<img
							src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
							alt="tailwind"
						/>
						<p>Tailwind Css</p>
					</div>
					<div>
						<img src="https://www.vectorlogo.zone/logos/javascript/javascript-icon.svg" alt="js" />
						<p>JS</p>
					</div>
					<div>
						<img
							src="https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg"
							alt="TS"
						/>
						<p>TypeScript</p>
					</div>
					<div>
						<img src="https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg" alt="react" />
						<p>REACT</p>
					</div>
					<div>
						<img src={next} alt="NextJS" />
						<p>NEXT.js</p>
					</div>
					<div>
						<img
							src="https://www.vectorlogo.zone/logos/getbootstrap/getbootstrap-icon.svg"
							alt="bootstrap"
						/>
						<p>BOOTSTRAP</p>
					</div>
					<div>
						<img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" />
						<p>GIT</p>
					</div>
					<div>
						<img src="https://www.vectorlogo.zone/logos/mysql/mysql-icon.svg" alt="mySQL" />
						<p>MySQL</p>
					</div>
					<div>
						<img src="https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg" alt="mongodb" />
						<p>MONGODB</p>
					</div>
					<div>
						<img
							src="https://www.vectorlogo.zone/logos/postgresql/postgresql-icon.svg"
							alt="postgresql"
						/>
						<p>PostgreSQL</p>
					</div>
				</div>
				<div className={style.block_learing}>
					<div>
						<h1>Learing:</h1>
					</div>
					<div className={style.block_TS_NextJS}>
						<div>
							<img src="https://www.vectorlogo.zone/logos/docker/docker-icon.svg" alt="docker" />
							<p>Docker</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
