import { makeStyles } from '@material-ui/core/styles'

const drawerWidth = 240

export const useStyles = makeStyles((theme) => {
  return {
    root: {
      display: 'flex',
      color: theme.palette.text.secondary,
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper
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
        marginLeft: drawerWidth
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
