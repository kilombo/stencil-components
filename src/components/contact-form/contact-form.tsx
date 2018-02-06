import { Component, State } from '@stencil/core';

@Component({
  tag: 'contact-form',
  styleUrl: 'contact-form.scss'
})
export class ContactForm {

  @State() name: string;
  @State() email: string;

  handleSubmit(e) {
    e.preventDefault()
    console.log('name:', this.name);
    console.log('email:', this.email);
    // send data to our backend
  }

  handleNameChange(event) {
    this.name = event.target.value;
  }

  handleEmailChange(event) {
    this.email = event.target.value;
  }



  render() {
    return (
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <h2>Hola {this.name}</h2>
        <paper-input label="Name" value={this.name} onInput={() => this.handleNameChange(event)}></paper-input>
        <paper-input label="Email" value={this.email} onInput={() => this.handleEmailChange(event)}></paper-input>
        <paper-button onClick={(event: UIEvent) => this.handleSubmit(event)} raised>Send</paper-button>
      </form>
    );
  }
}
