import React, { Component } from 'react';
import ProfileItem from './ProfileItem';

class Profiles extends Component {
    render() {
        return this.props.profiles.map((profile) => (
            <ProfileItem key={profile.id} profile={profile} goTo={this.props.goTo} />
        ));
    }
}

export default Profiles;