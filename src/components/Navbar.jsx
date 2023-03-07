import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useLocomotiveScroll } from "react-locomotive-scroll";

const NavContainer = styled(motion.div)`
	position: absolute;
	width: 100vw;
	z-index: 6;
	top: ${(props) => (props.menuOpened ? "0" : `-${props.theme.navHeight}`)};

	display: flex;
	align-items: center;
	justify-content: center;

	transition: top 300ms ease-in-out;

	@media (max-width: 40em) {
		top: ${(props) => (props.menuOpened ? "0" : `-50vh`)};
	}
`;

const MenuItems = styled(motion.ul)`
	position: relative;
	height: ${(props) => props.theme.navHeight};
	background-color: ${(props) => props.theme.body};
	color: ${(props) => props.theme.text};
	list-style: none;

	display: flex;
	align-items: center;
	justify-content: center;

	width: 100%;
	gap: 10rem;

	cursor: pointer;

	@media (max-width: 40em) {
		flex-direction: column;
		gap: 6vh;
		height: 50vh;
	}
`;

const MenuBtn = styled.li`
	display: flex;
	align-items: center;
	justify-content: center;

	clip-path: polygon(0 0, 100% 0, 80% 100%, 20% 100%);

	position: absolute;
	top: 100%;
	left: 50%;
	transform: translateX(-50%);

	background-color: ${(props) => `rgba(${props.theme.textRgba}, 0.7)`};
	list-style-type: style none;
	color: ${(props) => props.theme.body};
	width: 15rem;
	height: 2.5rem;

	font-size: ${(props) => props.theme.fontmd};
	font-weight: 600;
	text-transform: uppercase;
	cursor: pointer;

	@media (max-width: 40em) {
		width: 10rem;
		height: 2rem;
	}
`;

const MenuItem = styled(motion.li)`
	text-transform: uppercase;
	color: ${(props) => props.theme.text};
`;

const Navbar = () => {
	const [menuOpened, setMenuOpened] = useState(false);

	const { scroll } = useLocomotiveScroll();

	const handleScroll = (id) => {
		let elem = document.querySelector(id);

		setMenuOpened(!menuOpened);

		scroll.scrollTo(elem, {
			offset: "-100",
			duration: "2000",
			easing: [0.25, 0.0, 0.35, 1.0],
		});
	};
	return (
		<NavContainer
			menuOpened={menuOpened}
			initial={{
				y: "-100%",
			}}
			animate={{
				y: 0,
			}}
			transition={{
				duration: 2,
				delay: 5,
			}}
		>
			<MenuItems
				drag='y'
				dragConstraints={{
					top: 0,
					bottom: 70,
				}}
				dragElastic={0.05}
				dragSnapToOrigin
			>
				<MenuBtn onClick={() => setMenuOpened(!menuOpened)}>Menu</MenuBtn>
				<MenuItem onClick={() => handleScroll("#home")} whileHover={{ scale: 1.1, y: -5 }} whileTap={{ scale: 0.9, y: 0 }}>
					Home
				</MenuItem>
				<MenuItem onClick={() => handleScroll(".about")} whileHover={{ scale: 1.1, y: -5 }} whileTap={{ scale: 0.9, y: 0 }}>
					about
				</MenuItem>
				<MenuItem onClick={() => handleScroll("#shop")} whileHover={{ scale: 1.1, y: -5 }} whileTap={{ scale: 0.9, y: 0 }}>
					shop
				</MenuItem>
				<MenuItem onClick={() => handleScroll("#arrival")} whileHover={{ scale: 1.1, y: -5 }} whileTap={{ scale: 0.9, y: 0 }}>
					new arrival
				</MenuItem>
			</MenuItems>
		</NavContainer>
	);
};

export default Navbar;
