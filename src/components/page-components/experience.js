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
                        2022 - actualidad: Analítica Fantasy, página web de estadísticas de fútbol, donde realizo actividades de maquetación e implementación de funcionalidades con Next.js, de forma remota.
                    </p>
                    <p>
                        2015 - 2021: Fonoaudióloga en varias clínicas y centros de salud en Montevideo, Uruguay y Villa Clara, Cuba, donde me especialicé en la prevención, evaluación, diagnóstico y tratamiento de pacientes con dificultades en el lenguaje y la comunicación, así como en la rehabilitación de pacientes con implante coclear y patologías neurológicas.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ExperienceComponent;