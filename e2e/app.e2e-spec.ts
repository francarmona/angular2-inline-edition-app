import { Angular2InlineEditionAppPage } from './app.po';

describe('angular2-inline-edition-app App', () => {
  let page: Angular2InlineEditionAppPage;

  beforeEach(() => {
    page = new Angular2InlineEditionAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
