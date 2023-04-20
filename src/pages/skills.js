import SkillsComponent from "@/components/page-components/skills";
import Head from "next/head";

const SkillsPage = () => {
    return (
        <section className="skills-container container">
            <Head>
                <title>Habilidades</title>
            </Head>
            <SkillsComponent />
        </section>
    );
}

export default SkillsPage;