import { Component, State } from '@stencil/core';
import moment from 'moment';

@Component({
  tag: 'momentjs-example',
  styleUrl: 'momentjs-example.scss'
})
export class MomentjsExample {
  @State() now: any;

  componentDidLoad() {
    console.log('showing time');
    this.now = moment().format('LLLL');
  }

  render() {
    return (
      <p>Now: {this.now}</p>
    );
  }
}
