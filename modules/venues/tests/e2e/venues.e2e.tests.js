'use strict';

describe('Venues E2E Tests:', function () {
  describe('Test venues page', function () {
    it('Should report missing credentials', function () {
      browser.get('http://localhost:3001/venues');
      expect(element.all(by.repeater('venue in venues')).count()).toEqual(0);
    });
  });
});
