import { List, Button, Drawer, Box, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import React from "react"
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';





function VideoDrawer() {

    type Anchor = 'right';

    
    const [ state, setState] = React.useState({ right: false,});
    const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

    const list = (anchor: Anchor) => (
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        >
        <List component='a' href="/chapter1">
        {['Chapter 1'].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                { <RadioButtonUncheckedIcon /> }
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
        </List>
        
        <List component='a' href="chapter2">
        {['Chapter 2'].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                { <RadioButtonUncheckedIcon /> }
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
        </List>
        
        <List component='a' href="">
        {['Chapter 3'].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                { <RadioButtonUncheckedIcon /> }
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
        </List>
        
        <List component='a' href="">
        {['Chapter 4'].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                { <RadioButtonUncheckedIcon /> }
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
        </List>
        
        <List component='a' href="">
        {['Chapter 5'].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                { <RadioButtonUncheckedIcon /> }
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
        </List>
      </Box>
    );
    
    
    return(
        <div>
      {([ 'right' ] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <Button variant="contained" sx={{ fontWeight: 'bold'}} onClick={toggleDrawer(anchor, true)}>Next Chapter</Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}

export default VideoDrawer