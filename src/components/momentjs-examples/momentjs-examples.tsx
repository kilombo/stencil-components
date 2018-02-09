import { Component } from '@stencil/core';
import * as moment from 'moment'

@Component({
  tag: 'momentjs-examples',
  styleUrl: 'momentjs-examples.scss'
})
export class MomentjsExamples {
  componentDidLoad(){
    console.log('showing time');
    console.log(moment());
  }
  render() {
    return (
      <p>MomentjsExamples</p>
    );
  }
}
