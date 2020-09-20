import React from 'react';

class SearchBar extends React.Component {
    // onInputChange(event) {
    //     console.log(event.target.value)
    // }

    state = { term: '' };

    onFormSubmit(event){ 
        event.preventDefault();
        this.props.onSubmit(this.state.term);
    }

    // controlled component
    // storing info inside react component - ie in state - as opposed to the dom
    render() {
        return (
            <div className="ui segment">
                <form onSubmit={(event) => this.onFormSubmit(event)} className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input 
                            type="text"
                            value={this.state.term}
                            onChange={(e) => this.setState({ term: e.target.value })} 
                        />
                    </div>
                </form>
            </div>
        )
    };
};

export default SearchBar;