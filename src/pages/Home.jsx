import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import WhyChooseUs from "../components/WhyChooseUs";
import Approach from "../components/Approach";

function Home() {
    return (
        <>
            <Hero />
            <About />
            <Services />
            <WhyChooseUs />
            <Approach />
        </>
    );
}

export default Home;