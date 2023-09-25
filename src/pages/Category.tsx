import { useState, useEffect } from 'react';
import { Stack, Typography, Card, CardMedia, CardContent } from '@mui/material';
import axios from 'axios';

type Category = {
  category: string;
};

const Category = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    axios
      .get('https://borntodev-final-project-api.borntodev.repl.co/categories')
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.error('There was an error!', error);
      });
  }, []);

  return (
    <div>
      <Stack direction="row" spacing={2}>
        {categories.map((category, index) => (
          <Card key={index}>
            <CardMedia
              sx={{ height: 240 }}
              image="https://images.unsplash.com/photo-1599658880436-c61792e70672?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
            />
            <CardContent>
              <Typography>
                <div>
                  <h3>{category.category}</h3>
                </div>
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Stack>
    </div>
  );
};

export default Category;
