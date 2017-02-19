'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _actions = require('../actions');

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function priorities() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments[1];

  switch (action.type) {
    case _actions.ADD_PRIORITY:
      var id = action.payload.issueId + '.' + action.user;
      return _extends({}, state, _defineProperty({}, id, _extends({}, action.payload, { author: action.user })));
  }
}

exports.default = priorities;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWR1Y2Vycy9wcmlvcml0aWVzLmpzIl0sIm5hbWVzIjpbInByaW9yaXRpZXMiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJpZCIsInBheWxvYWQiLCJpc3N1ZUlkIiwidXNlciIsImF1dGhvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUVBLFNBQVNBLFVBQVQsR0FBeUM7QUFBQSxNQUFwQkMsS0FBb0IsdUVBQVosRUFBWTtBQUFBLE1BQVJDLE1BQVE7O0FBQ3ZDLFVBQVFBLE9BQU9DLElBQWY7QUFDRTtBQUNFLFVBQU1DLEtBQVFGLE9BQU9HLE9BQVAsQ0FBZUMsT0FBdkIsU0FBa0NKLE9BQU9LLElBQS9DO0FBQ0EsMEJBQ0tOLEtBREwsc0JBRVFHLEVBRlIsZUFFa0JGLE9BQU9HLE9BRnpCLElBRWtDRyxRQUFRTixPQUFPSyxJQUZqRDtBQUhKO0FBUUQ7O2tCQUVjUCxVIiwiZmlsZSI6InByaW9yaXRpZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBRERfUFJJT1JJVFkgfSBmcm9tICcuLi9hY3Rpb25zJ1xuXG5mdW5jdGlvbiBwcmlvcml0aWVzIChzdGF0ZSA9IHt9LCBhY3Rpb24pIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgQUREX1BSSU9SSVRZOlxuICAgICAgY29uc3QgaWQgPSBgJHthY3Rpb24ucGF5bG9hZC5pc3N1ZUlkfS4ke2FjdGlvbi51c2VyfWBcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAuLi57IFtpZF06IHsgLi4uYWN0aW9uLnBheWxvYWQsIGF1dGhvcjogYWN0aW9uLnVzZXIgfSB9XG4gICAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgcHJpb3JpdGllc1xuIl19