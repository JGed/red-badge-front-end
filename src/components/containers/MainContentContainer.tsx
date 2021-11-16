import React from 'react';
import { Container, Box } from '@mui/material';

type MainContentContainerProps = {
    padding?: boolean;
    children?: React.ReactNode;
};
class MainContentContainer extends React.Component<MainContentContainerProps> {
    render() {
        return(
            this.props.padding ?
            <Container 
                maxWidth='xl'
                sx={{
                    flex: '1 1 auto',
                    display: 'flex', 
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    backgroundColor: '#EEEEEE',
                    py: 3
                }}
            >
                {this.props.children}
            </Container>
            :
            <Box
                sx={{
                    flex: '1 1 auto',
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor: '#EEEEEE',
                    justifyContent: 'flex-start'
                }}
            >
                {this.props.children}
            </Box>
        )
    }
}

export default MainContentContainer;