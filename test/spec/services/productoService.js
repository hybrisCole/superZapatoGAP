'use strict';

describe('Service: productoService', function () {

  // load the service's module
  beforeEach(module('superZapatoGapApp'));

  // instantiate service
  var productoService;
  beforeEach(inject(function (_productoService_) {
    productoService = _productoService_;
  }));

  it('should do something', function () {
    expect(!!productoService).toBe(true);
  });

});
