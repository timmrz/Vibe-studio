import { useEffect, useRef, useState } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyle";
import { dark } from "./styles/Themes";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import 'locomotive-scroll/dist/locomotive-scroll.css'
import { AnimatePresence } from "framer-motion";

import Home from "./sections/Home";
import About from "./sections/About";
import Shop from "./sections/Shop";
import ScrollerTriggerProxy from "./components/ScrollerTriggerProxy";
import Banner from "./sections/Banner";
import NewArrival from "./sections/NewArrival";
import Footer from "./sections/Footer";
import Loader from "./components/Loader";

function App() {
	const containerRef = useRef(null);

	const [loaded, setLoaded] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			setLoaded(true)
		}, 3000)

	}, [])

	return (
		<>
			<GlobalStyles />
			<ThemeProvider theme={dark}>
				<LocomotiveScrollProvider
					options={{
						smooth: true,
						smartphone: {
							smooth: true
						},
						tablet: {
							smooth: true
						},
					}}
					watch={
						[]
					}
					containerRef={containerRef}
				>
					<AnimatePresence>

						{loaded ? null : <Loader />}
					</AnimatePresence>
					<ScrollerTriggerProxy />
					<AnimatePresence>
						<main data-scroll-container className='App' ref={containerRef}>
							<Home />
							<About />
							<Shop />
							<Banner />
							<NewArrival />
							<Footer />
						</main>
					</AnimatePresence>
				</LocomotiveScrollProvider>
			</ThemeProvider>
		</>
	);
}

export default App;
