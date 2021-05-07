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
    // sidebar: {
    //     padding: theme.spacing(2),
    //     textAlign: 'center',
    //     // width: '100%',
    //     // maxWidth: 360,
    //     color: theme.palette.text.secondary,
    // },
    nested: {
      paddingLeft: theme.spacing(4)
    },
    content: {
      marginLeft: drawerWidth
    },
    gridList: {
      // width: 500,
      // height: 450
    }
  }
})
