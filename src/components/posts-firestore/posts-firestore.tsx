import { Component, State, Prop } from '@stencil/core';
import { LoadingController } from '@ionic/core';
import * as firebase from 'firebase';

@Component({
  tag: 'posts-firestore',
  styleUrl: 'posts-firestore.scss'
})
export class PostsFirestore {

  @State() items: any = [];
  @Prop({ connect: 'ion-loading-controller' }) loadingCtrl: LoadingController;
  loader: any = null;
  @Prop() orderField: string = 'published';
  @Prop() numberOfItems: number = null;

  getItems() {
    // Initialize Cloud Firestore through Firebase
    const db = firebase.firestore();
    if (!this.numberOfItems) {
      db.collection('posts').orderBy(this.orderField)
        .onSnapshot((querySnapshot) => {
          this.items = [];
          querySnapshot.forEach((doc) => {
            this.items = [...this.items, doc.data()];
          });
          this.loader.dismiss();
        });
    } else {
      db.collection('posts').orderBy(this.orderField).limit(this.numberOfItems)
        .onSnapshot((querySnapshot) => {
          this.items = [];
          querySnapshot.forEach((doc) => {
            this.items = [...this.items, doc.data()];
          });
          this.loader.dismiss();
        });
    }

  }

  async componentDidLoad() {
    this.loader = await this.loadingCtrl.create({ content: 'Loading, please wait ...' });
    this.loader.present();
    this.getItems();
  }


  render() {
    return (
      <container>
        {this.items.map((item) =>
          <stencil-route-link url={'/blog/'+item.slug}>
            <ion-card>
              <ion-card-header>{item.title}</ion-card-header>
              <ion-card-content>
                <p>{item.summary}</p>
              </ion-card-content>
            </ion-card>
          </stencil-route-link>
        )}
      </container>
    );
  }
}
