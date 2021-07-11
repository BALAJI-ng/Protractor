describe('demo calculator ', function(){

    it('addition tests', function(){
        browser.get('http://juliemr.github.io/protractor-demo/');
         element(by.model('first')).sendKeys('3');
         element(by.model('second')).sendKeys('6');
         element(by.css('[ng-click="doAddition()"]')).click();
        let result = element(by.cssContainingText('.ng-binding','9'));
        expect(result.getText()).toEqual('9');        
        //browser.sleep(2000);
    });

    it('subtractio',function(){
        browser.get('http://juliemr.github.io/protractor-demo/');
        element(by.model('first')).sendKeys('4');
        element(by.model('second')).sendKeys('3');
        element(by.cssContainingText('option','-')).click();
        element(by.css('[ng-click="doAddition()"]')).click();
       // browser.sleep(10000);
        let result1=   element(by.cssContainingText('.ng-binding','1'));
        expect(result1.getText()).toEqual('1');
        
    });

    it('division', function(){

        browser.get('http://juliemr.github.io/protractor-demo/');
        element(by.model('first')).sendKeys('4');
        element(by.model('second')).sendKeys('2');
        element(by.cssContainingText('option', '/')).click();
        element(by.css('[ng-click="doAddition()"]')).click();
        let result3 = element(by.cssContainingText('.ng-binding','2'));
        expect(result3.getText()).toEqual('2');
    });

    it('Multiplication', function(){
        browser.get('http://juliemr.github.io/protractor-demo/');
        element(by.model('first')).sendKeys('3');
        element(by.cssContainingText('option', '*')).click();
        element(by.model('second')).sendKeys('3');
        element(by.css('[ng-click="doAddition()"]')).click();
        let result4 = element(by.cssContainingText('.ng-binding', '9'));
        expect(result4.getText()).toEqual('9');


    })

    it('Moduleus% reminder',function(){
        browser.get('http://juliemr.github.io/protractor-demo/');
        element(by.model('first')).sendKeys('10');
        element(by.cssContainingText('option', '%')).click();
        element(by.model('second')).sendKeys('3');
        element(by.css('[ng-click="doAddition()"]')).click();
        let result5 = element(by.cssContainingText('.ng-binding', '1'));
        expect(result5.getText()).toEqual('2');
    })

    it('finaladdition',function(){

        browser.driver.manage().window().setSize(360, 640);
        element(by.css('input[ng-model="first"]')).click();
        element(by.css('input[ng-model="first"]')).clear().sendKeys('233333');
        element(by.css('select[ng-model="operator"]')).click();
        element(by.css('select[ng-model="operator"]')).click();
        element(by.css('input[ng-model="second"]')).click();
        element(by.css('input[ng-model="second"]')).clear().sendKeys('2444444');
        element(by.css('button')).click();
      
      });

 



});