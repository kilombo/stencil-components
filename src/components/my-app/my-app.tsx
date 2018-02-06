import { Component } from '@stencil/core';


@Component({
  tag: 'my-app',
  styleUrl: 'my-app.scss'
})
export class MyApp {

  render() {
    return (
      <div>
        <header>
          <h1>Stencil App Starter</h1>
        </header>

        <main>
          <stencil-router>
            <stencil-route url='/' component='app-home' exact={true}>
            </stencil-route>

            <stencil-route url='/profile/:name' component='app-profile'>
            </stencil-route>

            <stencil-route url='/components/full-width-component' component='app-full-width-component'>
            </stencil-route>

            <stencil-route url='/components/login-firebase' component='app-login-firebase'>
            </stencil-route>
          </stencil-router>
        </main>
      </div>
    );
  }
}
