import { useRef } from "react";
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

function App() {
	const containerRef = useRef(null);

	return (
		<>
			<GlobalStyles />
			<ThemeProvider theme={dark}>
				<LocomotiveScrollProvider
					options={{
						smooth: true,
						// ... all available Locomotive Scroll instance options
					}}
					watch={
						[
							//..all the dependencies you want to watch to update the scroll.
							//  Basicaly, you would want to watch page/location changes
							//  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
						]
					}
					containerRef={containerRef}
				>
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