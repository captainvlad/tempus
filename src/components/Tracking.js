import React from "react";
import Post from "./Post";

class Tracking extends React.Component {
    constructor() {
        super();
        this.postID = 0;

        this.state = {
            postArray : [],
            Body : "",
            id : ""
        }
    }

    deleteEvent = (index) =>{
        const copyPostArray = Object.assign([], this.state.postArray);
        copyPostArray.splice(index, 1);
        this.setState({
            postArray: copyPostArray
        })
    }

    setPost = (element) => {
        this.setState({
            Body: element.target.value
        })
    }

    addPost = () =>{
        this.postID = this.postID + 1
        const copyPostArray = Object.assign([], this.state.postArray)
        copyPostArray.push( {
            id: this.postID,
            body: this.state.Body
        } )
        this.setState({
            postArray : copyPostArray
        })
    }

    render() {
        return(
            <div>
                <input type="text" onBlur={this.setPost} />
                <button onClick={this.addPost}>Add Post</button>
                <ul>
                    {
                        this.state.postArray.map( (post, index) => {
                            return (
                                <Post
                                key = {post.id}
                                id = {post.id}
                                body = {post.body}
                                delete = {this.deleteEvent.bind(this, index)}
                                />
                            )
                        } )
                    }
                </ul>
            </div>
        )
    }
}

export default Tracking;