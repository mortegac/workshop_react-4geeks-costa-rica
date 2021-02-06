import React, { useState } from "react";
import PropTypes from "prop-types";

import rigoImage from "../../img/rigo-baby.jpg";
import "./home.css";

const data = {
	description:
		"Software Engineer, Full Stack developer, passionate about code, Surfing, Snowboard. Mostly working with Javascript and Nodejs. Mentor in 4Geeks Academy"
};

const dataSkill = {
	description: "Estos los skill que he aprendido"
};

const Skills = props => {
	const skills = ["Javascript", "HTML", "CSS", "Nodejs"];

	return (
		<section
			className="resume-section h-100"
			style={{ border: "1px solid gray", marginTop: 30 }}>
			<div className="col">
				<h2>{props.text}</h2>
				<p>{props.content}</p>
				{skills.map((item, index) => {
					return (
						<h4 key={index}>
							Skill:{" "}
							<span className="badge bg-secondary"> {item}</span>
						</h4>
					);
				})}
			</div>
		</section>
	);
};

const Section = props => {
	return (
		<section
			className="resume-section h-100"
			style={{ border: "1px solid gray", marginTop: 30 }}>
			<div className="col">
				<h2>{props.text}</h2>
				<p>{props.content}</p>
			</div>
		</section>
	);
};

//create your first component
export function Home() {
	const [menu, setMenu] = useState("home");

	return (
		<>
			<nav
				className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top"
				id="sideNav">
				<a className="navbar-brand">
					<span className="d-lg-block">
						<img
							className="img-fluid img-profile rounded-circle mx-auto mb-2"
							src={rigoImage}
							alt=""
						/>
					</span>
					<span className="d-block">Rigo Geeks</span>
				</a>
				<div className="collapse navbar-collapse d-flex align-items-start">
					<ul className="navbar-nav">
						<li className="nav-item">
							<a
								className="nav-link js-scroll-trigger"
								onClick={() => setMenu("About")}>
								About
							</a>
						</li>
						<li className="nav-item">
							<a
								className="nav-link js-scroll-trigger"
								onClick={() => setMenu("Skills")}>
								Skills
							</a>
						</li>
					</ul>
				</div>
			</nav>

			<div className="container-fluid">
				{menu === "home" ? (
					<Section text={menu} content={data.description} />
				) : null}

				{menu === "About" ? (
					<Section text={menu} content={data.description} />
				) : null}

				{menu === "Skills" ? (
					<Skills text={menu} content={dataSkill.description} />
				) : null}

				{menu === "About" ? (
					<Section text={menu} content={data.description} />
				) : null}
			</div>
		</>
	);
}

Section.propTypes = {
	text: PropTypes.any,
	content: PropTypes.any
};

Skills.propTypes = {
	text: PropTypes.any,
	content: PropTypes.any
};
