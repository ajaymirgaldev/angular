import { AppPage } from './app.po';
<<<<<<< HEAD
import { browser, logging } from 'protractor';
=======
>>>>>>> c925312b95c345cbfece6be9b3746f7baece9c8b

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Welcome to HttpService2!');
  });
<<<<<<< HEAD

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    }));
  });
=======
>>>>>>> c925312b95c345cbfece6be9b3746f7baece9c8b
});
