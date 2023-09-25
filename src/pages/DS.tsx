import { useState, useEffect } from 'react'
import axios from 'axios';
import Banner from '../components/HomeBanner';
import { Box, ThemeProvider, createTheme, responsiveFontSizes, Card, Container, Typography, CardContent, CardMedia, CardActionArea } from '@mui/material';
import MenuCategory from '../components/MenuCategory'

let theme = createTheme();
theme = responsiveFontSizes(theme);

type Product = {
    category: string;
    description: string;
    id: number;
    name: string
}


const DS = () =>
{
    const [course, setCourse] = useState<Product | null>(null);

    useEffect (() => {
        axios.get('https://borntodev-final-project-api.borntodev.repl.co/courses/4')
        .then(response => {
            setCourse(response.data);
        })
        .catch(error => {
            console.log('There was an error', error);
        })
    }, []);


    return (
        <div>
        <Banner />
        <Container maxWidth='xl'>
            
            <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', my: 2, gap: 2}}>
                <ThemeProvider theme={theme}>
                <Typography variant="h3">Courses</Typography>
                <MenuCategory />
                </ThemeProvider>
            </Box>

            <Box sx={{ display: 'flex', flexWrap: 'wrap', my: 2, gap: 2}}>
            {course && (
              <Card className='card' sx={{ maxWidth: 345, backgroundColor: '#333'}}>
                <CardActionArea href=''>
                <CardMedia
                sx={{ height: 240 }}
                image='https://images.unsplash.com/photo-1599658880436-c61792e70672?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80'
                />
                <CardContent>
                  <Typography sx={{ color: '#fff'}}>
                    <div key={course.id}>
                    <h3>{course.name}</h3>
                    <p>{course.category}</p>
                    <p>{course.description}</p>
                    </div>
                  </Typography>
                </CardContent>
                </CardActionArea>
              </Card>
        )}
            </Box>
            </Container>
        </div>

    )
};

export default DS