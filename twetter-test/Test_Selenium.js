
describe('Twitter -', function () {

  //browser.waitForAngularEnabled(false);
  var util = require('util');
  //var element = browser.element;

 it ("Open Twitter web site", function() {
	 browser.waitForAngularEnabled(false);
   browser.get('https://twitter.com/login' );
   expect(browser.getCurrentUrl()).toMatch('/twitter');
    });
 
 it ("login to Twitter account", function() {
    //Failed: no such element: Unable to locate element: {"method":"css selector","selector":"#input.text-input.email-input.js-signin-email"}
	  browser.waitForAngularEnabled(false);
    browser.sleep(5000);
    browser.driver.findElement(by.css('fieldset input.js-username-field.email-input.js-initial-focus')).sendKeys("QACodeTest");
    browser.driver.findElement(by.css('fieldset input.js-password-field')).sendKeys("qacodetest123");
    browser.driver.findElement(by.css('button.submit.btn.primary-btn')).click(); 
    browser.sleep(10000);
    //$('input[name="session[username_or_email]"]').val("Hello1");
     
    //browser.driver.findElement(By.cssSelector('.text-input.email-input.js-signin-email')).sendKeys("QACodeTest");
     //browser.driver.findElement(by.css('text-input')).sendKeys("qacodetest123");
     //browser.driver.findElement(by.name('submit btn primary-btn js-submit')).click();   
    });

 // it ("Add a Tweet", function() {
 //    browser.waitForAngularEnabled(false);
 //     //Failed: browser.driver.findElement(...).sendkeys is not a function
 //   // count the number tweets
 //    //beforeTweet = browser.driver.findElement(by.class('ProfileCardStats-statValue')).toContain()
 //    browser.driver.findElement(by.css('#global-new-tweet-button > span.text')).click();
 //    //browser.driver.findElement(by.id('lobal-new-tweet-button')).click(); 
 //    browser.driver.findElement(by.css('#tweet-box-global')).sendkeys("Tweet 1")
 //    browser.driver.findElement(by.className('button-text tweeting-text')).click();
 //    //Refresh and count the tweets - should be tweet 
 //   });
    
 // it ("Validate Tweet counts", function() {
 //    browser.waitForAngularEnabled(false);
 //   // count the number tweets
 //    //AfterTweet = beforeTweet
 //    //Refresh and count the tweets - should be tweet 
 //   });

 // it ("Delete a Tweet", function() {
 //   //Failed: no such element: Unable to locate element: {"method":"css selector","selector":"*[id="menu-0"]"}
 //    browser.waitForAngularEnabled(false);
 //    browser.driver.findElement(by.id('menu-0')).click();
 //    browser.driver.findElement(by.css('li.js-actionDelete > button.dropdown-link')).click();
 //    //browser.driver.findElement(by.className('btn primary-btn delete-action')).click();
 //    browser.driver.findElement(by.css('button.btn.primary-btn.delete-action')).click();
 //   });   
   
 // it ("Search Tweet", function() {
 //  // Failed: browser.driver.findElement(...).sendkeys is not a function
 //    browser.waitForAngularEnabled(false);
 //    browser.driver.findElement(by.id('search-query')).sendkeys("Elon")
 //    browser.driver.findElement(by.className('Icon Icon--medium Icon--search nav-search')).click();
 //    expet(browser.driver.findElement(by.css('div.SearchEmptyTimeline-emptyTitle'))).tobe(false)
 //   }); 

  });