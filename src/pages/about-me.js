import AboutMeComponent from "@/components/page-components/about.me";
import EducationComponent from "@/components/page-components/education";
import { Divider } from "@mui/material";
import Head from "next/head";

const AboutMePage = () => {
    return (
        <section className="about-me-container container">
            <Head>
                <title>Sobre mí</title>
            </Head>
            <AboutMeComponent />
            <Divider />
            <EducationComponent />
        </section>
    );
}

export default AboutMePage;