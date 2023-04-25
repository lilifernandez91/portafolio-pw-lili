import { Divider } from "@mui/material";

const ExperienceComponent = () => {
    return (
        <div className="experience-container__content">
            <div className='experience-container__content__header'>
                <h1 className="experience-container__content__header__title">Mi experiencia profesional</h1>
            </div>
            <div className="experience-container__content__experience">
                <div className="experience-container__content__experience__list">
                    <h2>Instituciones</h2>
                    <p>
                        2022-2023: Analítica Fantasy, página web de estadísticas de fútbol, donde realizo actividades de maquetación e implementación de funcionalidades con Next.js, de forma remota.
                    </p>
                    <p>
                        2015-2021: Fonoaudióloga en varias clínicas y centros de salud en Montevideo, Uruguay y Villa Clara, Cuba, donde me especialicé en la prevención, evaluación, diagnóstico y tratamiento de pacientes con dificultades en el lenguaje y la comunicación, así como en la rehabilitación de pacientes con implante coclear y patologías neurológicas.
                    </p>
                </div>
                <div className="experience-container__content__experience__list">
                    <Divider />
                    <h2>Competencias</h2>
                    <p>
                        Durante mi trayectoria laboral en diversas instituciones, he adquirido una amplia experiencia que ha fortalecido mis habilidades comunicativas y mi capacidad para trabajar de forma eficiente en equipo. He colaborado estrechamente con profesionales especializados como médicos, psicólogos y terapeutas ocupacionales, contribuyendo a brindar atención integral y de calidad a los pacientes.
                    </p>
                    <p>
                        Asimismo, he perfeccionado mis habilidades comunicativas con los pacientes y sus familiares, generando un ambiente de confianza y empatía.
                    </p>
                    <p>
                        En resumen, mi experiencia me ha dotado de habilidades esenciales en comunicación y trabajo en equipo que me permiten desenvolverme con éxito en cualquier entorno profesional.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ExperienceComponent;