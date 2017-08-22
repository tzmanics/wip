import { UGoHueGoWipPage } from './app.po';

describe('u-go-hue-go-wip App', () => {
  let page: UGoHueGoWipPage;

  beforeEach(() => {
    page = new UGoHueGoWipPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
