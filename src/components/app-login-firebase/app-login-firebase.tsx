import { Component } from '@stencil/core';


@Component({
  tag: 'app-login-firebase',
  styleUrl: 'app-login-firebase.scss'
})
export class AppLoginFirebase {

  render() {
    return (
      <container>
        <div class="container">
          <login-firebase></login-firebase>
        </div>
      </container>
    );
  }
}
