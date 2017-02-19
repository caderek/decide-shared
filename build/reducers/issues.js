'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _actions = require('../actions');

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function issues() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments[1];

  switch (action.type) {
    case _actions.ADD_ISSUE:
      return _extends({}, state, _defineProperty({}, action.payload.id, _extends({}, action.payload, { author: action.user })));
    case _actions.UPDATE_ISSUE:
      return _extends({}, state, _defineProperty({}, action.payload.id, _extends({}, state[action.payload.id], action.payload)));
    case _actions.REMOVE_ISSUE:
      var newState = _extends({}, state);
      delete newState[action.payload.id];
      return newState;
    default:
      return state;
  }
}

exports.default = issues;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWR1Y2Vycy9pc3N1ZXMuanMiXSwibmFtZXMiOlsiaXNzdWVzIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwicGF5bG9hZCIsImlkIiwiYXV0aG9yIiwidXNlciIsIm5ld1N0YXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBTUEsU0FBU0EsTUFBVCxHQUFxQztBQUFBLE1BQXBCQyxLQUFvQix1RUFBWixFQUFZO0FBQUEsTUFBUkMsTUFBUTs7QUFDbkMsVUFBUUEsT0FBT0MsSUFBZjtBQUNFO0FBQ0UsMEJBQ0tGLEtBREwsc0JBRVFDLE9BQU9FLE9BQVAsQ0FBZUMsRUFGdkIsZUFFaUNILE9BQU9FLE9BRnhDLElBRWlERSxRQUFRSixPQUFPSyxJQUZoRTtBQUlGO0FBQ0UsMEJBQ0tOLEtBREwsc0JBRVFDLE9BQU9FLE9BQVAsQ0FBZUMsRUFGdkIsZUFHT0osTUFBTUMsT0FBT0UsT0FBUCxDQUFlQyxFQUFyQixDQUhQLEVBSU9ILE9BQU9FLE9BSmQ7QUFPRjtBQUNFLFVBQU1JLHdCQUFnQlAsS0FBaEIsQ0FBTjtBQUNBLGFBQU9PLFNBQVNOLE9BQU9FLE9BQVAsQ0FBZUMsRUFBeEIsQ0FBUDtBQUNBLGFBQU9HLFFBQVA7QUFDRjtBQUNFLGFBQU9QLEtBQVA7QUFuQko7QUFxQkQ7O2tCQUVjRCxNIiwiZmlsZSI6Imlzc3Vlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFERF9JU1NVRSxcbiAgVVBEQVRFX0lTU1VFLFxuICBSRU1PVkVfSVNTVUVcbn0gZnJvbSAnLi4vYWN0aW9ucydcblxuZnVuY3Rpb24gaXNzdWVzIChzdGF0ZSA9IHt9LCBhY3Rpb24pIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgQUREX0lTU1VFOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIC4uLnsgW2FjdGlvbi5wYXlsb2FkLmlkXTogeyAuLi5hY3Rpb24ucGF5bG9hZCwgYXV0aG9yOiBhY3Rpb24udXNlciB9IH1cbiAgICAgIH1cbiAgICBjYXNlIFVQREFURV9JU1NVRTpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAuLi57IFthY3Rpb24ucGF5bG9hZC5pZF06IHtcbiAgICAgICAgICAuLi5zdGF0ZVthY3Rpb24ucGF5bG9hZC5pZF0sXG4gICAgICAgICAgLi4uYWN0aW9uLnBheWxvYWRcbiAgICAgICAgfSB9XG4gICAgICB9XG4gICAgY2FzZSBSRU1PVkVfSVNTVUU6XG4gICAgICBjb25zdCBuZXdTdGF0ZSA9IHsgLi4uc3RhdGUgfVxuICAgICAgZGVsZXRlIG5ld1N0YXRlW2FjdGlvbi5wYXlsb2FkLmlkXVxuICAgICAgcmV0dXJuIG5ld1N0YXRlXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGlzc3Vlc1xuIl19