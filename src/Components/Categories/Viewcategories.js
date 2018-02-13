import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Link } from 'react-router-dom';

const style = {
    padding: 250,
};

const categories = () => {
    return (
        <MuiThemeProvider>
        <div>
        <Link to="/addcategory">
        <FloatingActionButton secondary={true} style={style}>
            <ContentAdd />
        </FloatingActionButton>
        </Link>
        </div>
        </MuiThemeProvider>
    )
};

export default categories;

