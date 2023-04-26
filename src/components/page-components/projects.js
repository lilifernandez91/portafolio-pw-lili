import Link from 'next/link';
import { imagesProjects } from '@/data/projects';
import Image from 'next/image';
import { Box, Grid } from '@mui/material';

const ProjectsComponent = () => {

    return (
        <div className="projects-container__content">
            <section className='projects-container__content__header'>
                <h1 className="projects-container__content__header__title">Mis proyectos</h1>
            </section>
            <Box className="projects-container__content__body" sx={{ flexGrow: 1 }}>
                <Grid container spacing={2} className='projects-container__content__body__list'>
                    {imagesProjects.map((item, index) => (
                        <Grid key={index} item xs={12} md={6} className='projects-container__content__body__list__box'>
                            <div className='projects-container__content__body__list__box__div'>
                                <div className='projects-container__content__body__list__box__div__up'>
                                    <Image alt={item.title} src={item.url} layout="fill" className='projects-container__content__body__list__box__div__up__image' />
                                </div>
                                <div className='projects-container__content__body__list__box__div__middle'>
                                    <h2 className='projects-container__content__body__list__box__div__middle__title'><span>{item.title}</span></h2>
                                    <p className='projects-container__content__body__list__box__div__middle__tech'>
                                        {item?.technologies?.split(',')?.map((tech, index) => (
                                            <span key={`tech-${index}`} className='projects-container__content__body__list__box__div__middle__tech__box'>{tech}</span>
                                        ))}
                                    </p>
                                </div>
                                <div className='projects-container__content__body__list__box__div__down'>
                                    <Link href={item.link ?? ''} key={`link-${index}`} target='_blank' className='projects-container__content__body__list__box__div__down__link'>
                                        Navegar al sitio web
                                    </Link>
                                </div>
                            </div>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </div>
    );
}

export default ProjectsComponent;


