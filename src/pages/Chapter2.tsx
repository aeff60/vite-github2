import '../components/PythonVid.css'
import { Box, Container, Typography } from '@mui/material'
import VideoDrawer from '../components/VideoDrawer'
import FinishIcon from '../components/FinishIcon'

function Chapter2() {
    return(
        <Container sx={{ marginBottom: '5rem', marginTop: '18px'}}>
            <Box display= 'flex' justifyContent= 'center' alignItems= 'center'>
                <Typography variant='h3' gutterBottom>Chapter 2</Typography>
            </Box>

            <div className="videoWrapper">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/Ar_yWclabz4?si=Zfeq6DoUjbkeabGM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            <Box sx={{ display: 'flex', justifyContent: 'end', alignItems: 'center', mt: 2}}>
                <FinishIcon />
                <VideoDrawer />
            </Box>
        </Container>
    )
}

export default Chapter2