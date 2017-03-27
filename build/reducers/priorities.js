'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cases = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createReducer = require('../createReducer');

var _createReducer2 = _interopRequireDefault(_createReducer);

var _actions = require('../actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var cases = exports.cases = _defineProperty({}, _actions.ADD_PRIORITY, function (state, payload, user) {
  var id = payload.issueId + '.' + user;

  return _extends({}, state, _defineProperty({}, id, _extends({}, payload, { author: user })));
});

exports.default = (0, _createReducer2.default)(cases);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWR1Y2Vycy9wcmlvcml0aWVzLmpzIl0sIm5hbWVzIjpbImNhc2VzIiwic3RhdGUiLCJwYXlsb2FkIiwidXNlciIsImlkIiwiaXNzdWVJZCIsImF1dGhvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7O0FBRU8sSUFBTUEsNkVBQ0tDLEtBREwsRUFDWUMsT0FEWixFQUNxQkMsSUFEckIsRUFDMkI7QUFDcEMsTUFBTUMsS0FBUUYsUUFBUUcsT0FBaEIsU0FBMkJGLElBQWpDOztBQUVBLHNCQUNLRixLQURMLHNCQUVRRyxFQUZSLGVBRWtCRixPQUZsQixJQUUyQkksUUFBUUgsSUFGbkM7QUFJRCxDQVJVLENBQU47O2tCQVdRLDZCQUFjSCxLQUFkLEMiLCJmaWxlIjoicHJpb3JpdGllcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjcmVhdGVSZWR1Y2VyIGZyb20gJy4uL2NyZWF0ZVJlZHVjZXInXG5pbXBvcnQgeyBBRERfUFJJT1JJVFkgfSBmcm9tICcuLi9hY3Rpb25zJ1xuXG5leHBvcnQgY29uc3QgY2FzZXMgPSB7XG4gIFtBRERfUFJJT1JJVFldIChzdGF0ZSwgcGF5bG9hZCwgdXNlcikge1xuICAgIGNvbnN0IGlkID0gYCR7cGF5bG9hZC5pc3N1ZUlkfS4ke3VzZXJ9YFxuXG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnN0YXRlLFxuICAgICAgLi4ueyBbaWRdOiB7IC4uLnBheWxvYWQsIGF1dGhvcjogdXNlciB9IH1cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlUmVkdWNlcihjYXNlcylcbiJdfQ==