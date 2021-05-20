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
      display: 'flex',
      flex: 1,
      flexDirection: 'column',
      alignContent: 'center',
      justifyContent: 'center'
    },
    tile: {
      objectFit: 'cover'
    },
    photo: {
      maxWidth: '100%',
      maxHeight: '100%'
    },
    menuButton: {
      [theme.breakpoints.up('sm')]: {
        display: 'none'
      },
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
