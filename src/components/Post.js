import React, { Component } from 'react'
import "./styles/Post.css"

class Post extends Component {
    render() {
        return (
            <div id="dick">
                id = {this.props.id}
                <hr/>
                {this.props.body}
                <hr/>
                <button onClick={this.props.delete}> DELETE</button>
            </div>
        );
    }
}

export default Post