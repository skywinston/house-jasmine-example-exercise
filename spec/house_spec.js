var House = require('../house.js');

  describe('House', function () { 
    describe('constructor', function () {
      it('uses the numberOfDoors argument as a property', function () {
        var house = new House(100);

        expect(house.numberOfDoors).toEqual(100);
      });
    });
  });