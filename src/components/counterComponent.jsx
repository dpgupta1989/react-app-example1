import React, { Component } from 'react';

class Counter extends Component {
    
    state = {
        count: 0,
        tags: ['tag1','tag2','tag3']
    };

    constructor(){
        super();
    }
  
    render() { 
        return (
        <div>
            <span className={this.getBadgeClasses()}>
                {this.formatCount()}
            </span>
            <button className="btn btn-secondary btn-sm" onClick={this.handleIncrement.bind(this)}>
                Increment
            </button>
            <br></br>
            {this.renderTagsArray()}
        </div>
        );
    }

    handleIncrement(){
            console.log('Increment Clicked: ' + this);
            this.setState({ count: this.state.count + 1 });
    }

    renderTagsArray(){
            if(this.state.tags.length === 0 ){
                return (
                    <div>
                    <p1>OOOps..!!! There are no data in tags array</p1><br></br>
                    <p1>"Please add an element to the tag array"</p1></div>
                    );
            }
                
            return  (
                <ul>
                    { this.state.tags.map(tag => <li key={tag}>{ tag }</li>) }
                </ul>
            );
    }

    getBadgeClasses(){
        let classes = "badge m-4 ";
        classes+= (this.state.count === 0)? " badge-warning": " badge-primary";
        return classes;
    }

    formatCount(){
        const {count} = this.state;
        return count === 0 ? 'Zero': count;
    }
}
 
export default Counter;