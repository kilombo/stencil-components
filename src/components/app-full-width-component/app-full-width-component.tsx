import { Component } from '@stencil/core';


@Component({
  tag: 'app-full-width-component',
  styleUrl: 'app-full-width-component.scss'
})
export class AppFullWidthComponent {

  render() {
    return (
      <container>
        <div class="container">
          <h2>full-width-component Page</h2>
          <p>Some examples of full-width-component usage.</p>
          <h3>full-width-component with image & text & changing text color</h3>

        </div>
        <full-width-component title="GAME OF THRONES" title-color="#FFFFFF" image-path="https://images.alphacoders.com/307/thumb-1920-307471.jpg"></full-width-component>
        <div class="container">
          <h3>full-width-component with image & text</h3>
        </div>
        <full-width-component title="GAME OF THRONES" image-path="https://images5.alphacoders.com/637/thumb-1920-637668.jpg"></full-width-component>
        <div class="container">
        <h3>full-width-component with default values</h3>
        </div>
        <full-width-component></full-width-component>
      </container>
    );
  }
}
