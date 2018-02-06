import { render, flush } from '@stencil/core/testing';
import { FullWidthComponent } from './full-width-component';

describe('app', () => {
  it('should build', () => {
    expect(new FullWidthComponent()).toBeTruthy();
  });

  describe('rendering', () => {
    let element;
    beforeEach(async () => {
      element = await render({
        components: [FullWidthComponent],
        html: '<full-width-component></full-width-component>'
      });
    });

    it('should be default props', async () => {
      expect(element.title).toEqual('Test title');
      expect(element.titleColor).toEqual('#000000');
      expect(element.imagePath).toEqual('');
    })

    it('Title should be modified', async () => {
      element.title = 'New title';
      await flush(element);
      expect(element.textContent).toEqual('New title');
    })

  });
});
