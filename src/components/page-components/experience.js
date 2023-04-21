import { Divider } from "@mui/material";
import Image from "next/image";

const ExperienceComponent = () => {
    return (
        <div className="experience-container__content">
            <div className='experience-container__content__header'>
                <h1 className="experience-container__content__header__title">Mi experiencia profesional</h1>
            </div>
            <div className="experience-container__content__experience">
                <div className="experience-container__content__experience__list">
                    <Divider style={{ marginTop: '8px', marginBottom: '8px' }} />
                    <h2>Instituciones</h2>
                    <p>
                        Durante el período 2022-2023, he trabajado en Analítica Fantasy, donde he realizado tareas de maquetación, mantenimiento y desarrollo de funcionalidades en un proyecto de estadísticas de fútbol desarrollado con Next.js. Este trabajo lo he desempeñado de forma remota.
                    </p>
                    <p>
                        Anteriormente, entre 2019 y 2021, he trabajado como Fonoaudióloga en Clínica Peñarol y Clínica Centro Oeste, en Montevideo, Uruguay. Allí, me he encargado de la prevención, evaluación, diagnóstico y tratamiento de pacientes con dificultades en la comunicación, tanto en niños como en adultos.
                    </p>
                    <p>
                        Entre 2017 y 2019, he trabajado como Fonoaudióloga en Clínica Ciprés y Escuela Franklin Delano Roosevelt, también en Montevideo, Uruguay. En estas instituciones, me he especializado en la rehabilitación de pacientes con implante coclear, llevando a cabo terapia auditivo-verbal, así como la rehabilitación de niños con patologías neurológicas, implementando terapia de deglución y sistemas de comunicación alternativa y/o aumentativa.
                    </p>
                    <p>
                        Antes de eso, entre 2015 y 2017, he trabajado como Fonoaudióloga en Policlínica Provincial Chiqui Gómez, situada en Villa Clara, Cuba, donde adquirí valiosa experiencia en la evaluación y tratamiento de pacientes con dificultades en la comunicación, tanto en niños como en adultos.
                    </p>
                </div>
                <div className="experience-container__content__experience__list">
                    <Divider style={{ marginTop: '8px', marginBottom: '8px' }} />
                    <h2>Competencias</h2>
                    <p>
                        Durante mi trayectoria laboral en diversas instituciones, he cultivado una amplia experiencia que ha fortalecido mis habilidades comunicativas y mi capacidad para trabajar en equipo de forma eficiente. Trabajando junto a otros profesionales especializados, como médicos, psicólogos y terapeutas ocupacionales, he contribuido a brindar una atención integral y de calidad a los pacientes.
                    </p>
                    <p>
                        Además, he perfeccionado mis habilidades comunicativas con los pacientes y sus familiares, creando un ambiente de confianza y empatía.
                    </p>
                    <p>
                        En general, estoy convencida de que mi experiencia me ha dotado de habilidades esenciales en comunicación y trabajo en equipo, que me permitirán desempeñarme con éxito en cualquier entorno profesional.
                    </p>
                </div>
            </div>
            <div className="experience-container__content__image">
                <Image src="/images/experiencia.jpeg" alt="" width={250} height={200} />
            </div>
        </div>
    );
}

export default ExperienceComponent;