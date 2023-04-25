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
                                Programa formativo Samsung DesArrolladoras, impulsado por Samsung Dev Spain, donde he adquirido conocimientos en desarrollo web, Front-End y Full Stack durante el año 2022-2023. Este programa fue diseñado para mujeres con el objetivo de fomentar la igualdad de género en el ámbito de la tecnología.
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
                                Curso intensivo de Programación Front End, impartido en España durante el año 2022, en una Escuela de Programación para Mujeres. Este curso me permitió profundizar mis conocimientos en programación web y adquirir nuevas habilidades en desarrollo Front-End.
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
                                Homologación del título de Licenciatura en Fonoaudiología en la Facultad de Medicina de Montevideo, Uruguay, en el año 2018. Este proceso me permitió validar mi formación académica y obtener el reconocimiento correspondiente en este país.
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
                                Licenciatura en Fonoaudiología obtenida en la Universidad de Ciencias Médicas de Villa Clara, Cuba, durante el período 2010-2015. En este programa, adquirí sólidos conocimientos teóricos y prácticos en el ámbito de la fonoaudiología, lo que me permitió ejercer mi profesión con éxito.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </div>
            </div>
        </div>
    );
}

export default EducationComponent;