import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'

import SidebarContent from './SidebarContent'

const Sidebar = ({
  drawerWidth,
  mobileOpen,
  drawerTransitionEnd,
  drawerClose,
}) => {
  return (
    <Box
      component='nav'
      sx={{
        width: { sm: drawerWidth },
        flexShrink: { sm: 0 },
        // height: '100vh',
      }}
      aria-label='mailbox folders'
    >
      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      <Drawer
        variant='temporary'
        open={mobileOpen}
        onTransitionEnd={drawerTransitionEnd}
        onClose={drawerClose}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth,
          },
        }}
      >
        <SidebarContent drawerWidth={drawerWidth} />
      </Drawer>
      <Drawer
        variant='permanent'
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth,
          },
        }}
        open
      >
        <SidebarContent />
      </Drawer>
    </Box>
  )
}

export default Sidebar
