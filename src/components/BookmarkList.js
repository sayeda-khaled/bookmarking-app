
import { Component } from 'react';

function BookmarkList(props) {
  const bookmarks = props.bookmarks.map((bookmark, index) => (
    <li>
      <h2><a href={bookmark.url}>{bookmark.title}</a></h2>
    </li>
  ));
  return(
    <ul>{bookmarks}</ul>
  );
}

export default BookmarkList;
