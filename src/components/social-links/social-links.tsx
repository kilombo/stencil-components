import { Component } from '@stencil/core';


@Component({
  tag: 'social-links',
  styleUrl: 'social-links.scss'
})
export class SocialLinks {

  render() {
    return (
      <h1 class="social-links-title">Social links</h1>
    );
  }
}
