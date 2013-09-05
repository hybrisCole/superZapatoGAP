'use strict';

describe('Service: shoppingCartService', function () {

  // load the service's module
  beforeEach(module('superZapatoGapApp'));

  // instantiate service
  var shoppingCartService;
  beforeEach(inject(function (_shoppingCartService_) {
    shoppingCartService = _shoppingCartService_;
  }));

  it('should do something', function () {
    expect(!!shoppingCartService).toBe(true);
  });

});
