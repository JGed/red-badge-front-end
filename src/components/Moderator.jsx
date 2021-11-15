import React from 'react';
import { Redirect } from 'react-router';
import getReport from '../api/report/getReport';
import MainContentContainer from './containers/MainContentContainer';
import { Typography, Box, Button } from '@mui/material';
import { updateReport } from '../api';

class Moderator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            report: {},
        };
    }
    fetchReport = async () => {
        try {
            const { status, json } = await getReport(this.props.auth);
            console.log(status, json);
            if (status === 200) {
                this.setState({ report: json.report });
            }
            else {
                this.setState({ report: {}})
            }
        }
        catch(e) {

        }
    };
    componentDidMount() {
        this.fetchReport();
    }
    handleYes = async (e) => {
        try {
            const { status, json } = await updateReport(this.props.auth, {
                ...this.state.report,
                status: 'removal',
            });
            if (status === 200) {
                await this.fetchReport();
            }
        }
        catch(e) {

        }
    };
    handleNo = async (e) => {
        try {
            const { status, json } = await updateReport(this.props.auth, {
                ...this.state.report,
                status: 'handled',
            });
            if (status === 200) {
                await this.fetchReport();
            }
        }
        catch(e) {

        }
    };
    render() {
        return this.props.auth.role === 'moderator' ||
            this.props.auth.role === 'admin' ? (
            <MainContentContainer>
                <Typography variant="h1" align="center">
                    Moderation Page
                </Typography>
                <br />
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'flex-start',
                        flexDirection: 'column',
                        flex: '1 1 auto',
                        pt: 5
                    }}
                >
                    <Box sx={{ }}>
                        <Typography variant="h4" align="center">
                            {this.state.report.review?.title}
                        </Typography>
                        <Typography align="center">
                            {this.state.report.review?.text}
                        </Typography>
                    </Box>
                    <br />
                    <Typography align='center'>
                        Reason for report: {this.state.report.reason}
                    </Typography>
                    <br />
                    <Typography align="center">
                        Does the above review contain innapropriate material?
                    </Typography>
                    <br />
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Button
                            variant="contained"
                            color="error"
                            onClick={this.handleNo}
                        >
                            No
                        </Button>
                        <Button
                            variant="contained"
                            color="error"
                            sx={{ mx: 2 }}
                            onClick={this.handleYes}
                        >
                            Yes
                        </Button>
                    </Box>
                </Box>
            </MainContentContainer>
        ) : (
            <Redirect to="/" />
        );
    }
}

export default Moderator;
