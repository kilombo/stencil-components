import { Component } from '@stencil/core';


@Component({
  tag: 'app-posts-firestore',
  styleUrl: 'app-posts-firestore.scss'
})
export class AppPostsFirestore {

  render() {
    return (
      <p><posts-firestore></posts-firestore></p>
    );
  }
}
