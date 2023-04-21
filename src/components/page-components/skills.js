import Image from "next/image";

const SkillsComponent = () => {
    return (
        <div className="skills-container__content">
            <div className='skills-container__content__header'>
                <h1 className="skills-container__content__header__title">Mis habilidades</h1>
            </div>
            <div className="skills-container__content__body">
                <div className="skills-container__content__body__text">
                    <p>
                        Como desarrolladora web junior, he adquirido habilidades en diversas áreas del desarrollo web, tales como el dominio de HTML5, CSS3, Flexbox, CSS Grid, diseño responsive, SASS, Bootstrap, Material-UI. Adicionalmente, he trabajado en programación con JavaScript, React y Next JS, y he adquirido experiencia en control de versiones con git.
                    </p>
                    <p>
                        Soy capaz de utilizar eficientemente herramientas como Slack, GitHub, VS Code y Terminal, lo que me permite trabajar de manera efectiva y optimizar el proceso de desarrollo. Me considero unA apasionada de la tecnología y la programación, lo que me lleva a estar siempre en constante aprendizaje y en búsqueda de soluciones creativas e innovadoras para cada proyecto.
                    </p>
                    <p>
                        También tengo experiencia en el desarrollo de proyectos utilizando la filosofía Agile y el marco de trabajo Scrum. Me encanta trabajar en equipo de manera colaborativa y mantener una comunicación constante para lograr los objetivos del proyecto. Estoy seguro de que mi actitud proactiva y mi capacidad para aprender rápidamente me permitirán contribuir significativamente al equipo de desarrollo.
                    </p>
                </div>
            </div>
            <div className="skills-container__content__image">
                <Image src="/images/habilidades.jpeg" alt="" width={250} height={200} />
            </div>
        </div>
    );
}

export default SkillsComponent;