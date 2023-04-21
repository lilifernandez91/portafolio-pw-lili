/* eslint-disable @next/next/no-img-element */
import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { imagesProjects } from '@/data/projects';
import Link from 'next/link';

const ProjectsComponent = () => {

    return (
        <div className="projects-container__content">
            <div className='projects-container__content__header'>
                <h1 className="projects-container__content__header__title">Mis proyectos</h1>
            </div>
            <div className="projects-container__content__body">
                <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
                    {imagesProjects.map((item, index) => (
                        <Link href={item.link ?? ''} key={index} target='_blank'>
                            <ImageListItem>
                                <img
                                    src={`${item.url}?w=164&h=164&fit=crop&auto=format`}
                                    srcSet={`${item.url}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                    alt={item.title}
                                    loading="lazy"
                                />
                            </ImageListItem>
                        </Link>
                    ))}
                </ImageList>
            </div>
        </div>
    );
}

export default ProjectsComponent;