import { Cullenkirkpatrick.Github.IoPage } from './app.po';

describe('cullenkirkpatrick.github.io App', () => {
  let page: Cullenkirkpatrick.Github.IoPage;

  beforeEach(() => {
    page = new Cullenkirkpatrick.Github.IoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
