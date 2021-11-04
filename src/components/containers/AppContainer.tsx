import React from 'react';
import { Box } from '@mui/material';

class AppContainer extends React.Component {
    render() {
        return (
            <Box sx={{
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column'
            }}>
                {this.props.children}
            </Box>
        );
    }
}

export default AppContainer;