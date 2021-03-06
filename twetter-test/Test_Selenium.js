
describe('Twitter -', function () {

  
     beforeEach(function() {
        var util = require('util');
        browser.waitForAngularEnabled(false);

      });
  
 it ("Should open Twitter web site", function() {

   browser.get('https://twitter.com/login' );
   expect(browser.getCurrentUrl()).toMatch('/twitter');
   });
 

 it ("user can successfully login to Twitter", function() {

    //browser.driver.findElement(by.css('fieldset input.js-username-field.email-input.js-initial-focus')).sendKeys("QACodeTest");
    browser.driver.findElement(by.css('css-1dbjc4n r-1u4rsef r-rull8r r-wgabs5 r-1awa8pu r-1jkafct')).sendKeys("QACodeTest");
    //browser.driver.findElement(by.css('fieldset input.js-password-field')).sendKeys("qacodetest123");
    browser.driver.findElement(by.css('css-901oao r-1awozwy r-k200y r-hkyrab r-6koalj r-1qd0xha r-1b6yd1w r-16dba41 r-ad9z0x r-bcqeeo r-13qz1uu r-qvutc0')).sendKeys("qacodetest123");
    
    browser.driver.findElement(by.css('button.submit.btn.primary-btn')).click(); 
    expect(element(by.css('.tweet-action.EdgeButton.EdgeButton--primary.js-tweet-btn')).isPresent()).toBe(true);
 
  
    });

    /*

  it ("user can post a tweet and Tweets count should be incremented.", function() {

  
    var vTweets = browser.driver.findElement(by.css('span.ProfileCardStats-statValue')).getAttribute("data-count");

    browser.driver.findElement(by.css('button.js-global-new-tweet.js-tooltip.EdgeButton.EdgeButton--primary.js-dynamic-tooltip')).click();
    
    browser.driver.findElement(by.css('div#tweet-box-global.tweet-box.rich-editor.is-showPlaceholder')).sendKeys(" Auto Tweet " + Date.now() );
    
    browser.sleep(3000);

    var element = browser.element;
    element.all(by.css('.tweet-action.EdgeButton.EdgeButton--primary.js-tweet-btn')).get(1).click();

    browser.sleep(3000);
   
    browser.driver.navigate().refresh();

    browser.sleep(1000);

    var vAddTweets = browser.driver.findElement(by.css('span.ProfileCardStats-statValue')).getAttribute("data-count");
 
    expect(vAddTweets).not.toEqual(vTweets);
   
   });
  

   it ("User can delete a Tweet", function() {
    
    
    browser.sleep(3000);
    element.all(by.css('span.ProfileCardStats-statValue')).get(0).click();
    
    //browser.sleep(3000);
    element.all(by.css('button.ProfileTweet-actionButton.u-textUserColorHover.dropdown-toggle.js-dropdown-toggle')).get(0).click();

    browser.sleep(3000);
    element(by.cssContainingText('button.dropdown-link' , 'Delete Tweet')).click();

    browser.sleep(5000);
    browser.driver.findElement(by.css('button.btn.primary-btn.delete-action')).click();
   
   });   

   
 it ("User can search tweets.", function() {
  
       
    browser.driver.findElement(by.css('input.search-input')).sendKeys("Elon");
    
    browser.sleep(3000);
    browser.driver.findElement(by.css('button.Icon.Icon--medium.Icon--search.nav-search')).click();

    var element = browser.element;
    expect(element(by.css('.SearchEmptyTimeline-emptyTitle')).isPresent()).toBe(false);

   

   });
   */
     
  });