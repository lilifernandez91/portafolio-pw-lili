import Image from "next/image";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const ExperienceComponent = () => {
    return (
        <div className="experience-container__content">
            <div className='experience-container__content__header'>
                <h1 className="experience-container__content__header__title">Mi experiencia profesional</h1>
                <Image className="experience-container__content__header__image" src="/images/experiencia.jpeg" alt="" width={100} height={100} />
            </div>
            <div className="experience-container__content__experience">
                <ul className="experience-container__content__experience__list">
                    <p>Instituciones</p>
                    <li>
                        <ArrowRightIcon />
                        Analítica Fantasy. Página web de estadísticas de fútbol. Remoto. Año 2022-2023.
                    </li>
                    <li>
                        <ArrowRightIcon />
                        Clínica Peñarol y Clínica Centro Oeste. Montevideo, Uruguay.
                        Año 2019- 2021.
                    </li>
                    <li>
                        <ArrowRightIcon />
                        Clínica Ciprés y Escuela Franklin Delano Roosevelt.
                        Montevideo, Uruguay. Año 2017-2019.
                    </li>
                    <li>
                        <ArrowRightIcon />
                        Policlínica Provincial Chiqui Gómez. Villa Clara, Cuba. Año
                        2015-2017.
                    </li>
                </ul>
                <ul className="experience-container__content__experience__list">
                    <p>Competencias</p>
                    <li>
                        <ArrowRightIcon />
                        Maquetación, mantenimiento y desarrollo de funcionalidades en un proyecto de estadísticas de fútbol desarrollado con Next.js.
                    </li>
                    <li>
                        <ArrowRightIcon />
                        Prevención, evaluación, diagnóstico y tratamiento en niños y
                        adultos con dificultades en la comunicación.
                    </li>
                    <li>
                        <ArrowRightIcon />
                        Rehabilitación de niños y adultos con implante coclear.
                        Terapia auditivo-verbal.
                    </li>
                    <li>
                        <ArrowRightIcon />
                        Rehabilitación de niños con patologías neurológicas. Terapia
                        de deglución. Sistema de comunicación alternativa y/o
                        aumentativa.
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default ExperienceComponent;