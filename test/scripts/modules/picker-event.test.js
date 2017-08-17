'use strict';

var _ = require('macaca-utils');
var assert = require('chai').assert
var wd = require('weex-wd')
var path = require('path');
var os = require('os');
var util = require("../util.js");


var goal = 'picker-event';
var timeout = util.getGETActionWaitTimeMills();
describe('weex '+goal+' test', function () {
  this.timeout(util.getTimeoutMills());
  var driver = util.createDriver(wd);

  before(function () {
    return util.init(driver)
      .get(util.getPage('/modules/'+goal+'.js'))
      .waitForElementByName(goal, timeout, 2000)
  });

  after(function () {
    return util.quit(driver);
  })

  it('#1 '+goal + ' event', () => {
    //TODO ：截图比对
    var self = driver.waitForElementByName('showPicker', timeout, 2000)
      .click();
    if(util.isIos()){
      return self.waitForElementByName('Done', timeout, 2000)
      .click()
      .waitForElementByName('2018-01-01') 
    }else{
      return self.waitForElementByName('OK', timeout, 2000)
      .click()
      .waitForElementByName('2018-01-1') 
    }
  })
});