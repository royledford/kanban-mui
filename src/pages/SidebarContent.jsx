import AddIcon from '@mui/icons-material/Add'
import AutoGraphIcon from '@mui/icons-material/AutoGraph'
import CommentIcon from '@mui/icons-material/Comment'
import MailIcon from '@mui/icons-material/Mail'
import MapIcon from '@mui/icons-material/Map'
import PeopleIcon from '@mui/icons-material/People'
import SettingsIcon from '@mui/icons-material/Settings'
import TrackChangesIcon from '@mui/icons-material/TrackChanges'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Toolbar from '@mui/material/Toolbar'

import logo from '/public/assets/logo-text.svg'

const SidebarContent = ({ drawerWidth }) => {
  const mainListItems = [
    { icon: <MapIcon />, text: 'Road Map' },
    { icon: <CommentIcon />, text: 'Feedback' },
    { icon: <TrackChangesIcon />, text: 'Changelog' },
  ]

  const secondaryListItems = [
    { icon: <AutoGraphIcon />, text: 'Insights' },
    { icon: <PeopleIcon />, text: 'People' },
  ]

  return (
    <>
      <Toolbar>
        <img src={logo} alt='logo' width='100%' style={{ height: '1.5rem' }} />
      </Toolbar>
      <Divider />
      <Button
        variant='contained'
        color='primary'
        sx={{ m: 2 }}
        startIcon={<AddIcon />}
      >
        Add Feature
      </Button>
      <List>
        {mainListItems.map((item) => (
          <ListItem disablePadding key={item.text}>
            <ListItemButton>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {secondaryListItems.map((item) => (
          <ListItem disablePadding key={item.text}>
            <ListItemButton>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List sx={{ position: 'fixed', bottom: 0, width: '240px' }}>
        <ListItem disablePadding key='settings'>
          <ListItemButton>
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary='Settings' />
          </ListItemButton>
        </ListItem>
      </List>
    </>
  )
}

export default SidebarContent
