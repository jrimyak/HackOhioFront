import React from 'react';
import Button from '@material-ui/core/Button'
import {withFirebase} from '../Firebase';

const SignOutButton = ({firebase}) => (
    <Button
    type="submit"

    color='primary'
   style={{ background: 'transparent', boxShadow: 'none'}}
    size="small"
    variant="contained"
    margin="dense"
    onClick = {firebase.doSignOut}
    >
       
            Sign Out
            </Button>
       
);

export default withFirebase(SignOutButton);