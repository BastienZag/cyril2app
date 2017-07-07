import { Cyril2appPage } from './app.po';

describe('cyril2app App', () => {
  let page: Cyril2appPage;

  beforeEach(() => {
    page = new Cyril2appPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
