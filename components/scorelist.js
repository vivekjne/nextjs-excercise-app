import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';

const styles = theme => ({
  root: {
    width: '100%',
    minWidth:360,
    maxWidth: '95%',
    backgroundColor: theme.palette.background.paper,
  },
});

function FolderList(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <List>
        <ListItem>
         
          <Avatar
        alt="Adelle Charles"
        src="https://img2.thejournal.ie/inline/2470754/original/?width=428&version=2470754"
        
      />
         
          <ListItemText primary="Photos" secondary="Jan 9, 2014" />
        </ListItem>
        <ListItem>
        <Avatar
        alt="Adelle Charles"
        src="http://www.bistiproofpage.com/wp-content/uploads/2018/04/cute-profile-pics-for-whatsapp-images.png"
        
      />
        
          <ListItemText primary="Work" secondary="Jan 7, 2014" />
        </ListItem>
        <ListItem>
        <Avatar
        alt="Adelle Charles"
        src="https://content-static.upwork.com/uploads/2014/10/02123010/profilephoto_goodcrop.jpg"
        
      />
          <ListItemText primary="Vacation" secondary="July 20, 2014" />
        </ListItem>
      </List>
    </div>
  );
}

FolderList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FolderList);