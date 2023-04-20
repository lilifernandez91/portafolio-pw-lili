import EducationComponent from "@/components/page-components/education";
import Head from "next/head";

const EducationPage = () => {
    return (
        <section className="education-container container">
            <Head>
                <title>Educación</title>
            </Head>
            <EducationComponent />
        </section>
    );
}

export default EducationPage;