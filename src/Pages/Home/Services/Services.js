import React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Service from '../Service/Service';

import flouride from '../../../images/fluoride.png'
import cavity from '../../../images/cavity.png'
import whitening from '../../../images/whitening.png'


const services = [
    {
        name: 'Fluoride Treatmetn',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, quasi? Sequi quia dolore inventore accusamus odit quidem! Itaque, voluptas earum.',
        img: flouride
    },
    {
        name: 'Cavity Filling',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, quasi? Sequi quia dolore inventore accusamus odit quidem! Itaque, voluptas earum.',
        img: cavity
    },
    {
        name: 'Teeth Whitening',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, quasi? Sequi quia dolore inventore accusamus odit quidem! Itaque, voluptas earum.',
        img: whitening
    }
]



const Services = () => {
    return (
        <Box>
            <Container>
                <Typography sx={{ mt: 3, color: 'info.main', fontWeight: 600 }} variant="h6" component="div">
                    Our Services
                </Typography>
                <Typography sx={{ my: 5, fontWeight: 'bold' }} variant="h4" component="div">
                    Services We Provide
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        services.map(service => <Service
                            key={service.name} service={service}
                        ></Service>)
                    }
                </Grid>
            </Container>
        </Box >
    );

};

export default Services;