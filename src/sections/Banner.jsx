import React from "react";
import styled from "styled-components";

const Section = styled.section`
	min-height: 100vh;
	width: 80vw;
	margin: 0 auto;

	display: flex;
	align-items: center;
	justify-content: center;

	position: relative;

	@media (max-width: 48em) {
		width: 90vw;
	}
`;

const BannerComponent = styled.h2`
	font-size: ${(props) => props.theme.fontxxxl};
	font-family: "Kaushan Script";
	color: ${(props) => props.theme.text};
	white-space: nowrap;
	text-transform: uppercase;
	line-height: 1;
	z-index: 20;

	@media (max-width: 70em) {
		font-size: ${(props) => props.theme.fontxxl};
	}

	@media (max-width: 64em) {
		margin: 1rem 0;
		font-size: ${(props) => props.theme.fontxl};
	}

	@media (max-width: 48em) {
		font-size: ${(props) => props.theme.fontlg};
		margin: 0.5rem 0;
	}

	@media (max-width: 30em) {
		font-size: ${(props) => props.theme.fontmd};
	}

	span {
		display: block;
		background-color: ${(props) => props.theme.body};
		padding: 1rem 2rem;
	}
`;

const Container = styled.div`
	min-height: 100vh;

	display: flex;
	justify-content: space-evenly;
	flex-direction: column;
	align-items: center;

	@media (max-width: 64em) {
		justify-content: center;
	}
`;

const Banner = () => {
	return (
		<Section>
			<Container id='up'>
				<BannerComponent>
					<span data-scroll data-scroll-direction='horizontal' data-scroll-speed='8' data-scroll-target='#up'>
						Fashion is an armour
					</span>
				</BannerComponent>
				<BannerComponent>
					<span data-scroll data-scroll-direction='horizontal' data-scroll-speed='-6' data-scroll-target='#up'>
						to survive life
					</span>
				</BannerComponent>
				<BannerComponent>
					<span data-scroll data-scroll-direction='horizontal' data-scroll-speed='6' data-scroll-target='#up'>
						One is never over-dressed or{" "}
					</span>
				</BannerComponent>
				<BannerComponent>
					<span data-scroll data-scroll-direction='horizontal' data-scroll-speed='-4' data-scroll-target='#up'>
						under-dressed{" "}
					</span>
				</BannerComponent>
				<BannerComponent>
					<span data-scroll data-scroll-direction='horizontal' data-scroll-speed='6' data-scroll-target='#up'>
						with a Little Black Dress
					</span>
				</BannerComponent>
			</Container>
		</Section>
	);
};

export default Banner;
