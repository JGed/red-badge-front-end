import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { AuthContext } from '../context';
import Review from '../components/Review';
class ReviewPage extends React.Component<any, any> {
    render() {
        return (
            <AuthContext.Consumer>
                {auth => 
                    <>
                        <Navbar auth={auth} history={this.props.history} />
                        <Review auth={auth} reviewId={this.props.match?.params.id} />
                        <Footer auth={auth} />
                    </>
                }
            </AuthContext.Consumer>
        )
    }
}

export default ReviewPage;