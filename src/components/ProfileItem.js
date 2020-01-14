import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProfileItem extends Component {

    render() {
        console.log(this.props.profile);
        const route = `/users/${this.props.profile.login}`;
        return (
            <Link to={route}>
                <div id="profile-item" onClick={this.props.goTo.bind(this, this.props.profile.login)}>
                    <div id="avatar-img">
                        <img src={this.props.profile.avatar_url} alt="avatar" />
                    </div>
                    <div id="login-name">
                        <div>
                            {this.props.profile.login}
                        </div>
                        <div>
                            <i className="fas fa-star"></i>  <span id="score">{this.props.profile.score}</span>
                        </div>
                    </div>
                </div>
            </Link>
        );
    }
}

export default ProfileItem;
