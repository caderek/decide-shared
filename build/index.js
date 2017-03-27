'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createReducer = exports.reducers = exports.actions = undefined;

var _actions = require('./actions');

var actions = _interopRequireWildcard(_actions);

var _issues = require('./reducers/issues');

var _issues2 = _interopRequireDefault(_issues);

var _priorities = require('./reducers/priorities');

var _priorities2 = _interopRequireDefault(_priorities);

var _createReducer = require('./createReducer');

var _createReducer2 = _interopRequireDefault(_createReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var reducers = {
  issues: _issues2.default,
  priorities: _priorities2.default
};

exports.actions = actions;
exports.reducers = reducers;
exports.createReducer = _createReducer2.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJhY3Rpb25zIiwicmVkdWNlcnMiLCJpc3N1ZXMiLCJwcmlvcml0aWVzIiwiY3JlYXRlUmVkdWNlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztJQUFZQSxPOztBQUNaOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7QUFFQSxJQUFNQyxXQUFXO0FBQ2ZDLDBCQURlO0FBRWZDO0FBRmUsQ0FBakI7O1FBTUVILE8sR0FBQUEsTztRQUNBQyxRLEdBQUFBLFE7UUFDQUcsYSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGFjdGlvbnMgZnJvbSAnLi9hY3Rpb25zJ1xuaW1wb3J0IGlzc3VlcyBmcm9tICcuL3JlZHVjZXJzL2lzc3VlcydcbmltcG9ydCBwcmlvcml0aWVzIGZyb20gJy4vcmVkdWNlcnMvcHJpb3JpdGllcydcbmltcG9ydCBjcmVhdGVSZWR1Y2VyIGZyb20gJy4vY3JlYXRlUmVkdWNlcidcblxuY29uc3QgcmVkdWNlcnMgPSB7XG4gIGlzc3VlcyxcbiAgcHJpb3JpdGllc1xufVxuXG5leHBvcnQge1xuICBhY3Rpb25zLFxuICByZWR1Y2VycyxcbiAgY3JlYXRlUmVkdWNlclxufVxuIl19