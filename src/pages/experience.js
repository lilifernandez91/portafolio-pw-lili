import ExperienceComponent from "@/components/page-components/experience";
import Head from "next/head";

const ExperiencePage = () => {
    return (
        <section className="experience-container container">
            <Head>
                <title>Experiencia</title>
            </Head>
            <ExperienceComponent />
        </section>
    );
}

export default ExperiencePage;