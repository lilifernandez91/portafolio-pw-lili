import AboutMeComponent from "@/components/page-components/about.me";
import Head from "next/head";

const AboutMePage = () => {
    return (
        <section className="about-me-container container">
            <Head>
                <title>Sobre mí</title>
            </Head>
            <AboutMeComponent />
        </section>
    );
}

export default AboutMePage;