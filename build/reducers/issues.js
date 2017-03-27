'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cases = undefined;

var _cases;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createReducer = require('../createReducer');

var _createReducer2 = _interopRequireDefault(_createReducer);

var _actions = require('../actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var cases = exports.cases = (_cases = {}, _defineProperty(_cases, _actions.ADD_ISSUE, function (state, payload, user) {
  return _extends({}, state, _defineProperty({}, payload.id, _extends({}, payload, { author: user })));
}), _defineProperty(_cases, _actions.UPDATE_ISSUE, function (state, payload, user) {
  return user === state[payload.id].author ? _extends({}, state, _defineProperty({}, payload.id, _extends({}, state[payload.id], payload))) : state;
}), _defineProperty(_cases, _actions.REMOVE_ISSUE, function (state, payload, user) {
  var newState = _extends({}, state);
  delete newState[payload.id];

  return user === state[payload.id].author ? newState : state;
}), _cases);

exports.default = (0, _createReducer2.default)(cases);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWR1Y2Vycy9pc3N1ZXMuanMiXSwibmFtZXMiOlsiY2FzZXMiLCJzdGF0ZSIsInBheWxvYWQiLCJ1c2VyIiwiaWQiLCJhdXRob3IiLCJuZXdTdGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7QUFNTyxJQUFNQSw0RkFDRUMsS0FERixFQUNTQyxPQURULEVBQ2tCQyxJQURsQixFQUN3QjtBQUNqQyxzQkFDS0YsS0FETCxzQkFFUUMsUUFBUUUsRUFGaEIsZUFFMEJGLE9BRjFCLElBRW1DRyxRQUFRRixJQUYzQztBQUlELENBTlUsNERBUUtGLEtBUkwsRUFRWUMsT0FSWixFQVFxQkMsSUFSckIsRUFRMkI7QUFDcEMsU0FBT0EsU0FBU0YsTUFBTUMsUUFBUUUsRUFBZCxFQUFrQkMsTUFBM0IsZ0JBRUFKLEtBRkEsc0JBR0dDLFFBQVFFLEVBSFgsZUFJRUgsTUFBTUMsUUFBUUUsRUFBZCxDQUpGLEVBS0VGLE9BTEYsTUFRSEQsS0FSSjtBQVNELENBbEJVLDREQW9CS0EsS0FwQkwsRUFvQllDLE9BcEJaLEVBb0JxQkMsSUFwQnJCLEVBb0IyQjtBQUNwQyxNQUFNRyx3QkFBZ0JMLEtBQWhCLENBQU47QUFDQSxTQUFPSyxTQUFTSixRQUFRRSxFQUFqQixDQUFQOztBQUVBLFNBQU9ELFNBQVNGLE1BQU1DLFFBQVFFLEVBQWQsRUFBa0JDLE1BQTNCLEdBQ0hDLFFBREcsR0FFSEwsS0FGSjtBQUdELENBM0JVLFVBQU47O2tCQThCUSw2QkFBY0QsS0FBZCxDIiwiZmlsZSI6Imlzc3Vlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjcmVhdGVSZWR1Y2VyIGZyb20gJy4uL2NyZWF0ZVJlZHVjZXInXG5pbXBvcnQge1xuICBBRERfSVNTVUUsXG4gIFVQREFURV9JU1NVRSxcbiAgUkVNT1ZFX0lTU1VFXG59IGZyb20gJy4uL2FjdGlvbnMnXG5cbmV4cG9ydCBjb25zdCBjYXNlcyA9IHtcbiAgW0FERF9JU1NVRV0gKHN0YXRlLCBwYXlsb2FkLCB1c2VyKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnN0YXRlLFxuICAgICAgLi4ueyBbcGF5bG9hZC5pZF06IHsgLi4ucGF5bG9hZCwgYXV0aG9yOiB1c2VyIH0gfVxuICAgIH1cbiAgfSxcblxuICBbVVBEQVRFX0lTU1VFXSAoc3RhdGUsIHBheWxvYWQsIHVzZXIpIHtcbiAgICByZXR1cm4gdXNlciA9PT0gc3RhdGVbcGF5bG9hZC5pZF0uYXV0aG9yXG4gICAgICA/IHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIC4uLnsgW3BheWxvYWQuaWRdOiB7XG4gICAgICAgICAgLi4uc3RhdGVbcGF5bG9hZC5pZF0sXG4gICAgICAgICAgLi4ucGF5bG9hZFxuICAgICAgICB9IH1cbiAgICAgIH1cbiAgICAgIDogc3RhdGVcbiAgfSxcblxuICBbUkVNT1ZFX0lTU1VFXSAoc3RhdGUsIHBheWxvYWQsIHVzZXIpIHtcbiAgICBjb25zdCBuZXdTdGF0ZSA9IHsgLi4uc3RhdGUgfVxuICAgIGRlbGV0ZSBuZXdTdGF0ZVtwYXlsb2FkLmlkXVxuXG4gICAgcmV0dXJuIHVzZXIgPT09IHN0YXRlW3BheWxvYWQuaWRdLmF1dGhvclxuICAgICAgPyBuZXdTdGF0ZVxuICAgICAgOiBzdGF0ZVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVJlZHVjZXIoY2FzZXMpXG4iXX0=