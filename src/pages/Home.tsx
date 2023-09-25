import { useState, useEffect } from 'react';
import Banner from '../components/HomeBanner';
import { Card, CardMedia, CardContent, CardActionArea, Typography, Box, Container, createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material';
import axios from 'axios';
import MenuCategory from '../components/MenuCategory'

let theme = createTheme();
theme = responsiveFontSizes(theme);

type Product = {
  id: number;
  name: string;
  category: string;
  description: string;
}

const ShowData = () =>  
{
    const [product1, setProduct1] = useState<Product | null>(null);
    const [product2, setProduct2] = useState<Product | null>(null);
    const [product3, setProduct3] = useState<Product | null>(null);
    const [product4, setProduct4] = useState<Product | null>(null);

    useEffect(() => {
      axios.get('https://borntodev-final-project-api.borntodev.repl.co/courses/1')
        .then(response => {
          setProduct1(response.data);
        })
        .catch(error => {
          console.error('There was an error!', error);
        });
    }, []);

    useEffect(() => {
      axios.get('https://borntodev-final-project-api.borntodev.repl.co/courses/2')
        .then(response => {
          setProduct2(response.data);
        })
        .catch(error => {
          console.error('There was an error!', error);
        });
    }, []);

    useEffect(() => {
      axios.get('https://borntodev-final-project-api.borntodev.repl.co/courses/3')
        .then(response => {
          setProduct3(response.data);
        })
        .catch(error => {
          console.error('There was an error!', error);
        });
    }, []);

    useEffect(() => {
      axios.get('https://borntodev-final-project-api.borntodev.repl.co/courses/4')
        .then(response => {
          setProduct4(response.data);
        })
        .catch(error => {
          console.error('There was an error!', error);
        });
    }, []);

  return (
    <div>
      <Banner />
      <Container maxWidth='xl'>
        <div style={{width: '100%' }}>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', my: 2, gap: 2}}>
          <ThemeProvider theme={theme}>
            <Typography variant="h3">Courses</Typography>
            <MenuCategory />
          </ThemeProvider>
        </Box>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly', my: 2, gap: 2}}>
            {product1 && (
              <Card className='card' sx={{ maxWidth: 345, backgroundColor: '#333'}}>
                <CardActionArea href='/introtopython'>
                <CardMedia
                sx={{ height: 240 }}
                image='https://images.unsplash.com/photo-1599658880436-c61792e70672?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80'
                />
                <CardContent>
                  <Typography sx={{ color: '#fff'}}>
                    <div key={product1.id}>
                    <h3>{product1.name}</h3>
                    <p>{product1.category}</p>
                    <p>{product1.description}</p>
                    </div>
                  </Typography>
                </CardContent>
                </CardActionArea>
              </Card>
        )}

            {product2 && (
              <Card className='card' sx={{ maxWidth: 345, backgroundColor: '#333' }}>
                <CardActionArea href='/advancedjavascript'>
                <CardMedia
                sx={{ height: 240 }}
                image='https://images.unsplash.com/photo-1599658880436-c61792e70672?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80'
                />
                <CardContent>
                  <Typography sx={{ color: '#fff'}}>
                    <div key={product2.id}>
                    <h3>{product2.name}</h3>
                    <p>{product2.category}</p>
                    <p>{product2.description}</p>
                    </div>
                  </Typography>
                </CardContent>
                </CardActionArea>
              </Card>
        )}

            {product3 && (
              <Card className='card' sx={{ maxWidth: 345, backgroundColor: '#333' }}>
                <CardActionArea href='/machinelearning'>
                <CardMedia
                sx={{ height: 240 }}
                image='https://images.unsplash.com/photo-1599658880436-c61792e70672?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80'
                />
                <CardContent>
                  <Typography sx={{ color: '#fff'}}>
                    <div key={product3.id}>
                    <h3>{product3.name}</h3>
                    <p>{product3.category}</p>
                    <p>{product3.description}</p>
                    </div>
                  </Typography>
                </CardContent>
                </CardActionArea>
              </Card>
        )}

            {product4 && (
              <Card className='card' sx={{ maxWidth: 345, backgroundColor: '#333' }}>
                <CardActionArea href='/datascience'>
                <CardMedia
                sx={{ height: 240 }}
                image='https://images.unsplash.com/photo-1599658880436-c61792e70672?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80'
                />
                <CardContent>
                  <Typography sx={{ color: '#fff'}}>
                    <div key={product4.id}>
                    <h3>{product4.name}</h3>
                    <p>{product4.category}</p>
                    <p>{product4.description}</p>
                    </div>
                  </Typography>
                </CardContent>
                </CardActionArea>
              </Card>
        )}
          </Box>
        </div>
      </Container>
    </div>
  );
}

export default ShowData;