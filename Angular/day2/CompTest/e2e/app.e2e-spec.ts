import { CompTestPage } from './app.po';

describe('comp-test App', function() {
  let page: CompTestPage;

  beforeEach(() => {
    page = new CompTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
