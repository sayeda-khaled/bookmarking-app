import { Component } from 'react';

class BookmarkForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      tag: '',
      url: '',
    }
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleInput(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.addBookmark(this.state);
    this.setState({
      title: '',
      tag: '',
      url: '',
    });
  }
  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="title" onChange={this.handleInput}/>
        <input type="text" name="tag" onChange={this.handleInput}/>
        <input type="url" name="url" onChange={this.handleInput}/>
        <button type="submit">Save</button>
      </form>
    );
  }
}

export default BookmarkForm;
