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
    nested: {
      paddingLeft: theme.spacing(4)
    },
    content: {
      marginLeft: drawerWidth
    },
    tile: {
      objectFit: 'cover'
    }
  }
})
