const {builder, Builder, By, Key} = require ("selenium-webdriver");
const {afterEach} = require ("mocha");
const assert = require("assert");
var should = require("chai").should();
const ltCapabilities = require("../capabilities");

//Describe Block
describe("add todo tests", function() {

    var driver;

    //Username
    const USERNAME = ltCapabilities.capabilities.user;
    //Key 
    const KEY = ltCapabilities.capabilities.accessKey;
    //Host 
    const GRID_HOST = "hub.lambdatest.com/wd/hub";

    const gridUrl = "https://" + USERNAME + ":" + KEY + "@" + GRID_HOST;

    beforeEach(function(){

        driver = new Builder()
        .usingServer(gridUrl)
        .withCapabilities(ltCapabilities.capabilities)
        .build()

    });

    //afterEach(async function(){
    //    await driver.quit()
        
    //});

    //IT Block 
    it("successfully adds a new todo", async function(){

    //Launch browser 
    let driver = await new Builder().forBrowser("chrome").build();


    //Navigate to application location 
    await driver.get("https://lambdatest.github.io/sample-todo-app/"); 

    //Add to-do, for this test, using locators  
     await driver
     .findElement(By.id("sampletodotext"))
     .sendKeys("Learn Selenium", Key.RETURN);

    //Assertion, xpath to find last list element and return value 
    let todoText = await driver
    .findElement(By.xpath("//li[last()]"))
    .getText()
    .then(function(value){
        return value
    });

    //Assert using Node Assertion - replaced by beforeEach 
    //assert.strictEqual(todoText, "Learn Selenium");

    //Fail Test example
    //assert.strictEqual(todoText, "Learn Java");

    //Assert using Chai Should
    todoText.should.equal("Learn Selenium");

    //Close browser - replaced by afterEach 
    await driver.quit(); 
    });
});





