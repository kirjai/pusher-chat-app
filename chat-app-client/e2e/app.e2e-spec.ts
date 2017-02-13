import { ChatAppClientPage } from './app.po';

describe('chat-app-client App', function() {
  let page: ChatAppClientPage;

  beforeEach(() => {
    page = new ChatAppClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
