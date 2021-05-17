import { makeStyles } from '@material-ui/core/styles'

const drawerWidth = 240

export const useStyles = makeStyles((theme) => {
  return {
    '@global': {
      'html, body, #root': {
        height: '100%'
      }
    },
    root: {
      display: 'flex',
      color: theme.palette.text.secondary,
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      backgroundColor: theme.palette.background.paper,
      height: '100%'
    },
    drawer: {
      flexBasis: drawerWidth
    },
    drawerPaper: {
      width: drawerWidth
    },
    listTitle: {
      background: theme.palette.background.paper
    },
    nested: {
      paddingLeft: theme.spacing(4)
    },
    content: {
      [theme.breakpoints.up('sm')]: {
        marginLeft: drawerWidth,
        width: '100%'
      }
    },
    tile: {
      objectFit: 'cover'
    },
    menuButton: {
      position: 'fixed',
      left: 20,
      top: 20,
      zIndex: 1,
      background: 'white',
      '&:hover': {
        background: 'white'
      }
    }
  }
})
