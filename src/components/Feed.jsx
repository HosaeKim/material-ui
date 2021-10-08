import { Container, makeStyles, Typography } from '@material-ui/core';
import { Home } from '@material-ui/icons';
import Post from './Post';

const useStyles = makeStyles((theme) => ({
   Container: {
      paddingTop: theme.spacing(10),
   },
}));

const Feed = () => {
   const classes = useStyles();
   return (
      <Container className={classes.Container}>
         <Post />
         <Post />
         <Post />
         <Post />
         <Post />
      </Container>
   );
};

export default Feed;
