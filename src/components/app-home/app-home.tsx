import { Component, Prop } from '@stencil/core';
import { MenuController } from '@ionic/core';


@Component({
  tag: 'app-home',
  styleUrl: 'app-home.scss'
})
export class AppHome {

  @Prop({ connect: 'ion-menu' }) menuCtrl: MenuController;

  showMenu(){
    this.menuCtrl.open();
  }

  render() {

    return (
      <div>
        <p>
          Welcome to the Stencil App Starter.
          You can use this starter to build entire apps all with
          web components using Stencil!
          Check out our docs on <a href='https://stenciljs.com'>stenciljs.com</a> to get started.
        </p>

        <h2>Moment.js example</h2>
        <p><momentjs-example></momentjs-example></p>

        <h2>This is an example to use Polymer & Ionic Components on a Stencil App</h2>
        <a target="_blank" href="https://beta.webcomponents.org/element/convoo/social-links"><img alt="social-links" src="https://github.com/convoo/social-links/raw/master/Social-Links.png" width="200" /></a>

        <twitter-link href="https://www.twitter.com/@bkawk" height="15px" color="grey"></twitter-link>
        <facebook-link href="https://www.facebook.com/@bkawk" height="15px" color="blue"></facebook-link>

        <h2>A Polymer paper-button</h2>
        <stencil-route-link url='/profile/stencil'>
          <paper-button class="blue">Profile page</paper-button>
        </stencil-route-link>

        <h2>Stencil components examples</h2>
        <stencil-route-link url='/components/full-width-component'>
          <paper-button class="blue">full-width-component</paper-button>
        </stencil-route-link>
        <br />
        <stencil-route-link url='/components/login-firebase'>
          <paper-button class="blue">login-firebase</paper-button>
        </stencil-route-link>
        <br/>
        <stencil-route-link url='/components/posts-firestore'>
          <paper-button class="blue">posts-firestore</paper-button>
        </stencil-route-link>

        <paper-button onClick={() => this.showMenu()}>Show menu</paper-button>

        <ion-menu content="mycontent">
          <ion-content>
            <ion-list>
              <p>some menu content, could be list items</p>
            </ion-list>
          </ion-content>
        </ion-menu>
        <ion-nav id="mycontent" root="rootPage"></ion-nav>

      </div>
    );
  }
}
