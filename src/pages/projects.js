import ProjectsComponent from "@/components/page-components/projects";
import Head from "next/head";

const ProjectsPage = () => {
    return (
        <section className="projects-container container">
            <Head>
                <title>Proyectos</title>
            </Head>
            <ProjectsComponent />
        </section>
    );
}

export default ProjectsPage;