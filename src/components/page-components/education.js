import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Image from 'next/image';

const EducationComponent = () => {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div className='about-me-container__content'>
            <div className='about-me-container__content__header'>
                <h1 className="about-me-container__content__header__title">Mis estudios</h1>
            </div>
            <div className="about-me-container__content__about-me">
                <div className="about-me-container__content__about-me__centers">
                    <Accordion expanded={expanded === 'panel0'} onChange={handleChange('panel0')}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1bh-content"
                            id="panel1bh-header"
                        >
                            <Typography sx={{ width: '33%', flexShrink: 0 }}>
                                <Image src="/images/lemoncode.jpeg" alt="" width={50} height={50} />
                            </Typography>
                            <Typography className='about-me-container__content__about-me__text' sx={{ color: 'text.secondary' }}>Lemoncode</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Bootcamp de JavaScript + TypeScript. España. Año 2023.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1bh-content"
                            id="panel1bh-header"
                        >
                            <Typography sx={{ width: '33%', flexShrink: 0 }}>
                                <Image src="/images/imagen-bejob.jpeg" alt="" width={50} height={50} />
                            </Typography>
                            <Typography className='about-me-container__content__about-me__text' sx={{ color: 'text.secondary' }}>Bejob</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Curso de introducción al desarrollo web, desarrollo Front-End y desarrollo Full-Stack, impulsado por Samsung Dev Spain. España. Año 2022-2023.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2bh-content"
                            id="panel2bh-header"
                        >
                            <Typography sx={{ width: '33%', flexShrink: 0 }}>
                                <Image src="/images/adalab_logo.jpeg" alt="" width={40} height={40} />
                            </Typography>
                            <Typography className='about-me-container__content__about-me__text' sx={{ color: 'text.secondary' }}>
                                Adalab
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Bootcamp intensivo de Programación Front-End. España. Año 2022.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel3bh-content"
                            id="panel3bh-header"
                        >
                            <Typography sx={{ width: '33%', flexShrink: 0 }}>
                                <Image src="/images/imagen-udelar.png" alt="" width={50} height={50} />
                            </Typography>
                            <Typography className='about-me-container__content__about-me__text' sx={{ color: 'text.secondary' }}>
                                Universidad de la República
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Homologación del título de Licenciatura en Fonoaudiología en la Facultad de Medicina de Montevideo. Uruguay. Año 2018.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel4bh-content"
                            id="panel4bh-header"
                        >
                            <Typography sx={{ width: '33%', flexShrink: 0 }}>
                                <Image src="/images/imagen-universidad.jpeg" alt="" width={50} height={50} />
                            </Typography>
                            <Typography className='about-me-container__content__about-me__text' sx={{ color: 'text.secondary' }}>
                                Universidad de Ciencias Médicas
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Licenciatura en Fonoaudiología obtenida en la Universidad de Ciencias Médicas de Villa Clara. Cuba. Año 2010-2015.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </div>
            </div>
        </div>
    );
}

export default EducationComponent;