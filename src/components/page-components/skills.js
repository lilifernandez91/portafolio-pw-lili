import Image from "next/image";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const SkillsComponent = () => {
    return (
        <div className="skills-container__content">
            <div className='skills-container__content__header'>
                <h1 className="skills-container__content__header__title">Mis habilidades</h1>
                <Image className="skills-container__content__header__image" src="/images/habilidades.jpeg" alt="" width={100} height={100} />
            </div>
            <div className="skills-container__content__body">
                <div className="skills-container__content__body__text">
                    <p>
                        <ArrowRightIcon />
                        Maquetación: HTML5, CSS3, Flexbox, CSS Grid, diseño responsive,
                        SASS, Bootstrap.
                    </p>
                    <p>
                        <ArrowRightIcon />
                        JavaScript (ES6) y servicios web (API) de terceros.
                    </p>
                    <p>
                        <ArrowRightIcon />
                        Control de vesiones con Git.
                    </p>
                    <p>
                        <ArrowRightIcon />
                        Creación de SPA sencillas con React y Next JS.
                    </p>
                    <p>
                        <ArrowRightIcon />
                        Manejo de Slack, GitHub, VS Code, Gulp, Terminal, Linter,
                        Zeplin.
                    </p>
                    <p>
                        <ArrowRightIcon />
                        Experiencia en el desarrollo de proyectos bajo filosofía Agile y
                        marco de trabajo Scrum.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default SkillsComponent;