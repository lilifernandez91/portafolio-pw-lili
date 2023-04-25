import ExperienceComponent from "@/components/page-components/experience";
import SkillsComponent from "@/components/page-components/skills";
import { Divider } from "@mui/material";
import Head from "next/head";

const ExperiencePage = () => {
    return (
        <section className="experience-container container">
            <Head>
                <title>Experiencia</title>
            </Head>
            <ExperienceComponent />
            <Divider />
            <SkillsComponent />
        </section>
    );
}

export default ExperiencePage;