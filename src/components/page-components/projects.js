import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Link from 'next/link';
import { imagesProjects } from '@/data/projects';

const ProjectsComponent = () => {

    return (
        <div className="projects-container__content">
            <div className='projects-container__content__header'>
                <h1 className="projects-container__content__header__title">Mis proyectos</h1>
            </div>
            <div className="projects-container__content__body">
                <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                    <ListItem alignItems="flex-start" className='projects-container__content__body__list'>
                        {imagesProjects.map((item, index) => (
                            <div key={index}>
                                <div className="projects-container__content__body__list__title">
                                    <ListItemAvatar>
                                        <Avatar alt={item.title} src={item.url} />
                                    </ListItemAvatar>
                                    <ListItemText primary={item.title} />
                                </div>
                                <div className="projects-container__content__body__list__title">
                                    <ListItemText secondary={item.technologies} />
                                </div>
                                <div>
                                    <ListItemText secondary={
                                        <Link href={item.link ?? ''} key={`link-${index}`} target='_blank'>
                                            Visite el sitio web
                                        </Link>
                                    }
                                    />
                                </div>
                            </div>
                        ))}
                    </ListItem>
                </List>
            </div>
        </div>
    );
}

export default ProjectsComponent;


