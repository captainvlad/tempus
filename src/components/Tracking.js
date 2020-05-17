import React from "react";
import HeadLine from "./HeadLine";
import Footer from "./Footer";

class Tracking extends React.Component {
    state = {
        numChildren: 0
    }

    render () {
        const children = [];

        for (var i = 0; i < this.state.numChildren; i += 1) {
            children.push(<HeadLine />);
        };

        return (
            <ParentComponent addChild={this.onAddChild}>
                {children}
            </ParentComponent>
        );
    }

    onAddChild = () => {
        this.setState({
            numChildren: this.state.numChildren + 1
        });
    }
}

const ParentComponent = props => (
    <div>
        <HeadLine />
        <div className="card calculator">
            <button type="button" onClick={props.addChild} >Add component</button>
            <div id="children-pane">
                {props.children}
            </div>
        </div>
        <Footer />
    </div>
);

const ChildComponent = props => <div>{"I am child " + props.number}</div>;

export default Tracking;