import React, { Component } from 'react';

class UserPage extends Component {

    render() {
        return (
            <div id="user-page-wrapper">
                <div id="user-page-image">
                    <img src={this.props.user.avatar_url} alt="profile pic" />
                    {this.props.user.name !== null ? <div><i className="fas fa-user"></i>  <span>{this.props.user.name}</span></div> : <React.Fragment></React.Fragment>}
                    <div><i className="fas fa-at"></i>{'  '}{this.props.user.login}</div>
                    {this.props.user.blog !== "" ? <div><i className="fas fa-link"></i>  <span>{this.props.user.blog}</span></div> : <React.Fragment></React.Fragment>}
                </div>
                <div id="user-page-repos">
                    {this.props.repos.map((repo) =>
                        <ul key={repo.id} id="repo-list">
                            <li id="repo-name">{repo.name}</li>
                            <li id="repo-desc">{repo.description}</li>
                            {repo.language !== null ? <li id="repo-lang">{repo.language}</li> : <React.Fragment></React.Fragment>}
                        </ul>
                    )}
                </div>
            </div>
        );
    }
}

export default UserPage;