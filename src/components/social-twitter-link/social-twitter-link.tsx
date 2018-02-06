import { Component, Prop } from '@stencil/core';


@Component({
  tag: 'social-twitter-link',
  styleUrl: 'social-twitter-link.scss'
})
export class SocialTwitterLink {

  @Prop() href: string = 'https://www.twitter.com/';
  @Prop() target: string = '_blank';
  @Prop() color: string = '#000000';
  @Prop() width: string = '15px';
  @Prop() isText: boolean = false;

  render() {

    const socialLink = (() => {
      return (
        <a href={this.href} target={this.target}>
          <svg viewBox="0 0 20.34 16.17">
            <path class="515a544b-2ee6-4052-8329-f9002443fb0f" d="M7,16.61A11.39,11.39,0,0,0,18.43,5.14q0-.26,0-0.52a8.2,8.2,0,0,0,2-2.09,8,8,0,0,1-2.31.63A4,4,0,0,0,19.89.94a8.08,8.08,0,0,1-2.56,1,4,4,0,0,0-6.87,3.68A11.44,11.44,0,0,1,2.15,1.38,4,4,0,0,0,3.4,6.76a4,4,0,0,1-1.83-.5s0,0,0,.05a4,4,0,0,0,3.23,4A4,4,0,0,1,3,10.33a4,4,0,0,0,3.77,2.8,8.09,8.09,0,0,1-5,1.73,8.19,8.19,0,0,1-1-.06A11.41,11.41,0,0,0,7,16.61" transform="translate(-0.36 -0.55)" />
          </svg>
        </a>
      );
    })();

    const socialText = (() => {
      if (this.isText) {
        return (<p>Twitter</p>);
      }
    })();

    return (
      <div>
        <h1 class="social-twitter-link-title">Test title</h1>
        { socialLink }
        { socialText }
      </div>
    );

  }
}
