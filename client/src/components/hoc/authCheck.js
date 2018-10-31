import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../../action';

export default function (ComposedComponent) {
    class Authenticate extends React.Component {

        componentDidMount() {
            //whatever your action creator is called
            this.props.fetchUser();
        }

        renderAuth = () => {
            if (this.props.user || this.props.user === false) {
                return <ComposedComponent {...this.props} />
            } else {
               return <div></div>;
            }
        }

        render() {
            return this.renderAuth();
        }
    }

    const mapStateToProps = (state) => {
        return {
            user: state.auth
        };
    };

    return connect(
        mapStateToProps,
        { fetchUser }
    )(Authenticate);
}