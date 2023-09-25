import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Button, Box,} from '@mui/material';



const options = [
    <Button href='/PF'>Programming Fundamentals</Button>,
    <Button href='/WD'>Web Development</Button>,
    <Button href='/ML'>Machine Learning</Button>,
    <Button href='/DS'>Data Science</Button>
];

const ITEM_HEIGHT = 48;

function Menucategory() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Box sx={{display: 'flex'}}>
        <IconButton aria-label="more" id="long-button"
            aria-controls={open ? 'long-menu' : undefined}
            aria-expanded={open ? 'true' : undefined}
            aria-haspopup="true"
            onClick={handleClick}>
            <MoreVertIcon sx={{ color: '#fff'}} />
        </IconButton>
    </Box>
    <Menu
        id="long-menu"
        MenuListProps={{'aria-labelledby': 'long-button',}}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{style: {maxHeight: ITEM_HEIGHT * 4.5,width: '29ch',},}}>
        {options.map((option) => (
        <MenuItem onClick={handleClose}>
            {option}
        </MenuItem>
        ))}
    </Menu>
    </div>
  );
}

export default Menucategory