import { motion } from "framer-motion";
import React from "react";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import styled from "styled-components";

import Logo from "../assets/Svgs/star_white_48dp.svg";

const Section = styled.section`
	min-height: 100vh;
	width: 100vw;
	margin: 5rem auto;

	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;

	background-color: ${(props) => props.theme.body};
	color: ${(props) => props.theme.text};

	position: relative;
`;

const LogoContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	img {
		width: 10vw;
		height: auto;
	}

	h3 {
		font-family: "Kaushan Script";
		font-size: ${(props) => props.theme.fontxl};
	}
`;

const FooterComponent = styled(motion.footer)`
	width: 80vw;

	ul {
		list-style: none;
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-wrap: wrap;
		margin: 2rem;
		margin-top: 4rem;
		padding: 0 1rem;
		border-top: 1px solid ${(props) => props.theme.text};
		border-bottom: 1px solid ${(props) => props.theme.text};
	}

	li {
		padding: 2rem;
		font-size: ${(props) => props.theme.fontlg};
		text-transform: uppercase;
		cursor: pointer;
		transition: all 0.3s ease;

		&:hover {
			transform: scale(1.1);
		}

		&:active {
			transform: scale(0.9);
		}
	}
`;

const Bottom = styled.div`
	padding: 0.5rem 0;

	font-size: ${(props) => props.theme.fontlg};

	display: flex;
	align-items: center;
	justify-content: center;
`;

const Footer = () => {
	const { scroll } = useLocomotiveScroll();

	const handleScroll = (id) => {
		let elem = document.querySelector(id);

		scroll.scrollTo(elem, {
			offset: "-100",
			duration: "2000",
			easing: [0.25, 0.0, 0.35, 1.0],
		});
	};

	return (
		<Section>
			<LogoContainer data-scroll data-scroll-speed='2'>
				<img src={Logo} alt='Vibe Studio' />
				<h3 data-scroll data-scroll-speed='-1'>
					Vibe Studio
				</h3>
			</LogoContainer>
			<FooterComponent
				initial={{
					y: "-400px",
				}}
				whileInView={{ y: 0 }}
				viewport={{ once: false }}
				transition={{
					duration: 1.5,
					ease: "backOut",
				}}
			>
				<ul>
					<li onClick={() => handleScroll("#home")}>home</li>
					<li onClick={() => handleScroll(".about")}>about</li>
					<li onClick={() => handleScroll("#shop")}>shop</li>
					<li onClick={() => handleScroll("#arrival")}>new arrival</li>
					<li>
						<a href='http://google.com' target='_blank' rel='noreferrer'>
							look book
						</a>
					</li>
					<li>
						<a href='http://google.com' target='_blank' rel='noreferrer'>
							review
						</a>
					</li>
				</ul>
				<Bottom>
					<span data-scroll data-scroll-speed='-1'>
						&copy; {new Date().getFullYear()}. All Rights Reserved.
					</span>
				</Bottom>
			</FooterComponent>
		</Section>
	);
};

export default Footer;
