import * as React from 'react';
import { Rating } from '@mui/material';

function RatingC() {

    const [value, setValue] = React.useState <number | null>(5);

    return (

            <Rating sx={{ mb: '1rem'}} name="simple-controlled" value={value} onChange={(event, newValue) => { setValue(newValue); }} />
    )
}

export default RatingC