  var House = require('../house');

  describe('House', function () {
    describe('constructor', function () {
      it('uses the numberOfDoors argument as a property', function () {
        var house = new House(100);

        expect(house.numberOfDoors).toEqual(100);
      });

      it('uses the numberOfWindows argument as a property', function () {
        var house = new House(0,200);

        expect(house.numberOfWindows).toEqual(200);
      });
    });

    describe('methods', function () {
      describe('#toString', function () {

        it('returns a string with correct pluralization for multiple doors and 1 window', function () {
          var house = new House(3,1);
          expect(house.toString()).toEqual('The house has 3 doors and 1 window');
        });

        it('returns a string with correct pluralization for multiple doors and multiple windows', function () {
          var house = new House(3,5);
          expect(house.toString()).toEqual('The house has 3 doors and 5 windows');
        });

        it('returns a string with correct pluralization for 1 door and multiple windows', function () {
          var house = new House(1,65);
          expect(house.toString()).toEqual('The house has 1 door and 65 windows');
        });

        it('returns a string with correct pluralization for 1 door and 1 window', function () {
          var house = new House(1,1);
          expect(house.toString()).toEqual('The house has 1 door and 1 window');
        });

        it('returns a string with correct pluralization for 0 doors and 0 windows', function () {
          var house = new House(0,0);
          expect(house.toString()).toEqual('The house has 0 doors and 0 windows');
        });
      });
    });
  });