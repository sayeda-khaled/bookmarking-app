import { Component } from 'react';
import './App.css';
import BookmarkForm from './BookmarkForm';
import BookmarkList from './BookmarkList';

//Creating static Data for the bookmarks
const defaultBookmarks = [
  {
    url: 'https://javascript.info/',
    title: 'The Modern JavaScript Tutorial',
    tag: 'javascript'
  }, {
    url: 'https://www.nomadicmatt.com/travel-guides/spain-travel-tips/',
    title: 'SPAIN TRAVEL GUIDE',
    tag: 'travel'
  }, {
    url: 'https://developer.mozilla.org/en-US/',
    title: 'MDN',
    tag: 'javascript'
  }
]


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookmarks: defaultBookmarks, //setting the state value to the static Data created above
      filter: null, //Setting the initial value for the filter to null
    }
    this.addBookmark = this.addBookmark.bind(this); //binding the addBookmark
  }
  addBookmark(bookmark) {
    const bookmarks = [...this.state.bookmarks]; //creating a shallow copy of the bookmarks
    bookmarks.push(bookmark); //adding the new entry for the bookmark into the new created bookmarks
    this.setState({ bookmarks }); //setting the state value
  }
  render() {
    const tags = this.state.bookmarks.map(bookmark => bookmark.tag); // an array of tags
    const uniqueTags = [...new Set(tags)]; //creating an array with a unique set of tags
    const navLinks = uniqueTags.map((tag, index)=> <button key={index} onClick={() => this.setState({filter: tag})}>{tag.toUpperCase()}</button>) //creating an event listner, to filter the tags dependig on the user's choise
    const bookmarks = this.state.filter ? this.state.bookmarks.filter(bookmark => bookmark.tag === this.state.filter) : this.state.bookmarks;// if the filter has a value, return the value for that filter, otherwise, give the values for the bookmarks
    return (
      <>
        <nav>
          {navLinks}
          <button onClick={() => this.setState({filter: null})}>ALL</button>
        </nav>
        <BookmarkForm addBookmark={this.addBookmark}/>
        <BookmarkList bookmarks={bookmarks} />
      </>
    )
  }
}
export default App;
