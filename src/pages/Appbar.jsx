import MenuIcon from '@mui/icons-material/Menu'
import ShareIcon from '@mui/icons-material/Share'
import MuiAppbar from '@mui/material/AppBar'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

import ThemeButton from '@components/ThemeButton'

const Appbar = ({ toggleDrawer, drawerWidth }) => {
  return (
    <MuiAppbar
      position='fixed'
      color='transparent'
      elevation={1}
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
        py: 3,
      }}
    >
      <Toolbar sx={{ gap: 2 }}>
        <IconButton
          color='inherit'
          aria-label='open drawer'
          edge='start'
          onClick={toggleDrawer}
          sx={{ mr: 2, display: { sm: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
        <TextField
          id='select-org'
          select
          value='Twinkle'
          sx={{
            '& .MuiInputLabel-root': { display: 'none' },
            border: 'none',
            '& fieldset': { border: 'none' },
            '.MuiInputBase-input': { fontSize: 'h6.fontSize' },
            '.MuiOutlinedInput-input': { padding: '0' },
          }}
        >
          {['Twinkle', 'Starfield', 'Moonbeam'].map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          id='search'
          placeholder='Search features...'
          inputProps={{
            sx: { padding: '0.45rem' },
          }}
          sx={{
            marginLeft: 'auto',
            py: '0.45rem',
            '& .MuiInputLabel-root': { display: 'none' },
          }}
        ></TextField>

        <Button variant='outlined' startIcon={<ShareIcon />}>
          Share Roadmap
        </Button>

        <ThemeButton />
        <Avatar alt='Lori Peat' src='/public/assets/girl-20.jpg'></Avatar>
      </Toolbar>
    </MuiAppbar>
  )
}

export default Appbar
