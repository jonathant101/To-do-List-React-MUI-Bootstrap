import * as React from 'react';
import AddIcon from '@mui/icons-material/Add';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { Search, SearchIconWrapper, StyledInputBase } from './styleMUI.js';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';

import CreateIcon from '@mui/icons-material/Create';

export default function NavBar({ add, todo, input, bolean, setBtnToEdit }) {
  return (
    <>
      <Box sx={{ flexGrow: 1, mb: 2 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: { xs: 'none', sm: 'block', mr: 2 } }}
            >
              To-do List
            </Typography>
            <Search>
              <SearchIconWrapper>
                <FormatListBulletedIcon />
              </SearchIconWrapper>
              <StyledInputBase
                onChange={(e) => input(e.target.value)}
                placeholder="New Task"
                inputProps={{ 'aria-label': 'search' }}
                value={todo}
              />
            </Search>

            <IconButton
              //type="submit"
              onClick={bolean ? setBtnToEdit : add}
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              /* sx={{ m: 'auto' }} */
            >
              {bolean ? <CreateIcon /> : <AddIcon />}
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}
