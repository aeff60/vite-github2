import { ThemeProvider, createTheme, responsiveFontSizes, Box, Container, Grid, Button, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material'
import ExpandMoreIcon  from '@mui/icons-material/ExpandMore'
import RatingC from '../components/Rating';
import vscode from '../assets/vscode.png'
import Instrctor from '../assets/Instructor.jpg'


let theme = createTheme();
theme = responsiveFontSizes(theme);

function DataScience() {


    return (
        <div>
            <ThemeProvider theme={theme}>
            <Box sx={{display: 'flex', flexDirection: { xs: 'column', md: 'row'}, justifyContent: 'space-evenly', backgroundColor: '#333'}}>
                <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', order: { xs: 2, md: 1 }}}>
                    <Typography variant='h3' fontWeight= 'bold' gutterBottom>Data Science with R</Typography>
                    <Typography variant='subtitle1' fontWeight= 'bold' gutterBottom>To be master of Data Science in 20 minutes</Typography>
                    <RatingC />
                </Box>
                <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '2rem', order: { xs: 1, md: 2 }}}>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/Ar_yWclabz4?si=Zfeq6DoUjbkeabGM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </Box>
            </Box>
            </ThemeProvider>

            <div>
            <ThemeProvider theme={theme}>
                <Grid container spacing={2} columns={12} sx={{ my: 20}}>
                    <Grid item xs={12} md={6} sx={{ order: { xs: 2, md: 1 } }}>
                        <Container sx={{marginTop: 1}} maxWidth= 'md'>
                            <Box>
                                <Typography sx={{ marginBottom: 4}} variant='h5' fontWeight= 'bold' gutterBottom>Details</Typography>
                            </Box>
                            <Box>
                                <Typography sx={{ marginBottom: 4}} variant='subtitle1' gutterBottom>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus, omnis corrupti. Enim, consequatur debitis! Error, excepturi nemo quis fugiat doloribus id nisi iusto, consectetur rerum vitae, corporis similique cupiditate perspiciatis.</Typography>
                            </Box>
                            <Box>
                                <Typography variant='h3' gutterBottom>Lecture</Typography>
                            </Box>

                            <Box>
                                <Accordion sx={{ background: '#333' }}>
                                    <AccordionSummary expandIcon={<ExpandMoreIcon sx={{color: '#fff'}} />} aria-controls="panel1a-content" id="panel1a-header">
                                        <Typography variant='h5' fontWeight= 'bold' color= '#fff'>Chapter 1</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                                            <Typography sx={{ color: '#fff' }}>Introduction to Data Science</Typography>
                                            <Typography sx={{ color: '#fff', border: 1, borderRadius: '16px', padding: '1px 5px' }}>20 mins</Typography>
                                        </Box>
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion sx={{ background: '#333' }}>
                                    <AccordionSummary expandIcon={<ExpandMoreIcon sx={{color: '#fff'}}/>} aria-controls="panel1a-content" id="panel1a-header">
                                        <Typography variant='h5' fontWeight= 'bold' color= '#fff'>Chapter 2</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                                            <Typography sx={{ color: '#fff' }}>Introduction to Data Science</Typography>
                                            <Typography sx={{ color: '#fff', border: 1, borderRadius: '16px', padding: '1px 5px' }}>20 mins</Typography>
                                        </Box>
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion sx={{ background: '#333' }}>
                                    <AccordionSummary expandIcon={<ExpandMoreIcon sx={{color: '#fff'}}/>} aria-controls="panel1a-content" id="panel1a-header">
                                        <Typography variant='h5' fontWeight= 'bold' color= '#fff'>Chapter 3</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                                            <Typography sx={{ color: '#fff' }}>Introduction to Data Science</Typography>
                                            <Typography sx={{  color: '#fff', border: 1, borderRadius: '16px', padding: '1px 5px' }}>20 mins</Typography>
                                        </Box>
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion sx={{ background: '#333' }}>
                                    <AccordionSummary expandIcon={<ExpandMoreIcon sx={{color: '#fff'}}/>} aria-controls="panel1a-content" id="panel1a-header">
                                        <Typography variant='h5' fontWeight= 'bold' color= '#fff'>Chapter 4</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                                            <Typography sx={{ color: '#fff' }}>Introduction to Data Science</Typography>
                                            <Typography sx={{  color: '#fff', border: 1, borderRadius: '16px', padding: '1px 5px' }}>20 mins</Typography>
                                        </Box>
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion sx={{ background: '#333' }}>
                                    <AccordionSummary expandIcon={<ExpandMoreIcon sx={{color: '#fff'}}/>} aria-controls="panel1a-content" id="panel1a-header">
                                        <Typography variant='h5' fontWeight= 'bold' color= '#fff'>Chapter 5</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                                            <Typography sx={{ color: '#fff' }}>Introduction to Data Science</Typography>
                                            <Typography sx={{ color: '#fff', border: 1, borderRadius: '16px', padding: '1px 5px' }}>20 mins</Typography>
                                        </Box>
                                    </AccordionDetails>
                                </Accordion>
                            </Box>
                        </Container>
                    </Grid>


                    <Grid item xs={12} md={6} sx={{ order: { xs: 1, md: 2 } }}>
                    <Container sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }} maxWidth= 'md'>
                        <Box sx={{ display: 'flex', justifyContent: 'center', my: 2 }}>
                            <Typography variant='h4' fontWeight= 'bold' gutterBottom>Welcome to Data Science</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                            <Button sx={{ mb: '2rem', fontWeight: 'bold'}} variant='contained' size='large' href=''>Start</Button>
                            <Typography variant='h5' fontWeight= 'bold' gutterBottom>Software</Typography>
                            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                                <img src= {vscode} width= '50px' height= '50px' style= {{margin: '1rem 0'}} ></img>
                                <Button variant='text' sx={{ marginLeft: '2rem', fontWeight: 'bold' }} href='https://code.visualstudio.com/' target='_blank'> VS Code </Button>
                            </Box>
                            <Typography variant='h5' fontWeight= 'bold' gutterBottom>Instructor</Typography>
                            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                                <img src= {Instrctor} width= '50px' height= '50px' style= {{margin: '1rem 0', border: '5px', borderRadius: '50%'}} ></img>
                                <Typography variant='subtitle1' sx={{ marginLeft: '2rem' }}>Newbie who knows nothing</Typography>
                            </Box>
                        </Box>
                        </Container>
                    </Grid>
                </Grid>
                </ThemeProvider>
            </div>
        </div>

        
    )
}

export default DataScience