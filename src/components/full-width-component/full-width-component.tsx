import { Component, Prop, Element } from '@stencil/core';

@Component({
  tag: 'full-width-component',
  styleUrl: 'full-width-component.scss'
})
export class FullWidthComponent {

  @Prop() title: string = '';
  @Prop() titleColor: string = '#000000';
  @Prop() imagePath: string = '';
  @Element() el: HTMLElement;

  componentDidLoad(){
    this.el.querySelector('.full-width-component-container-title').innerHTML = this.title;
  }

  render() {
    let containerStyles = {
      background: `url(${this.imagePath})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      backgroundColor: '#CCCCCC'
    };
    let titleStyles = {
      color: this.titleColor
    };

    return (
      <container class="full-width-component-container" style={containerStyles}>
        <h2 style={titleStyles} class="full-width-component-container-title">{this.title}</h2>
      </container>
    );
  }
}
