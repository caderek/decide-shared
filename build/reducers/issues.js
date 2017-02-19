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
      return action.user === state[action.payload.id].author ? _extends({}, state, _defineProperty({}, action.payload.id, _extends({}, state[action.payload.id], action.payload))) : state;
    case _actions.REMOVE_ISSUE:
      var newState = _extends({}, state);
      delete newState[action.payload.id];
      return action.user === state[action.payload.id].author ? newState : state;
    default:
      return state;
  }
}

exports.default = issues;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWR1Y2Vycy9pc3N1ZXMuanMiXSwibmFtZXMiOlsiaXNzdWVzIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwicGF5bG9hZCIsImlkIiwiYXV0aG9yIiwidXNlciIsIm5ld1N0YXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBTUEsU0FBU0EsTUFBVCxHQUFxQztBQUFBLE1BQXBCQyxLQUFvQix1RUFBWixFQUFZO0FBQUEsTUFBUkMsTUFBUTs7QUFDbkMsVUFBUUEsT0FBT0MsSUFBZjtBQUNFO0FBQ0UsMEJBQ0tGLEtBREwsc0JBRVFDLE9BQU9FLE9BQVAsQ0FBZUMsRUFGdkIsZUFFaUNILE9BQU9FLE9BRnhDLElBRWlERSxRQUFRSixPQUFPSyxJQUZoRTtBQUlGO0FBQ0UsYUFBT0wsT0FBT0ssSUFBUCxLQUFnQk4sTUFBTUMsT0FBT0UsT0FBUCxDQUFlQyxFQUFyQixFQUF5QkMsTUFBekMsZ0JBRUFMLEtBRkEsc0JBR0dDLE9BQU9FLE9BQVAsQ0FBZUMsRUFIbEIsZUFJRUosTUFBTUMsT0FBT0UsT0FBUCxDQUFlQyxFQUFyQixDQUpGLEVBS0VILE9BQU9FLE9BTFQsTUFRSEgsS0FSSjtBQVNGO0FBQ0UsVUFBTU8sd0JBQWdCUCxLQUFoQixDQUFOO0FBQ0EsYUFBT08sU0FBU04sT0FBT0UsT0FBUCxDQUFlQyxFQUF4QixDQUFQO0FBQ0EsYUFBT0gsT0FBT0ssSUFBUCxLQUFnQk4sTUFBTUMsT0FBT0UsT0FBUCxDQUFlQyxFQUFyQixFQUF5QkMsTUFBekMsR0FDSEUsUUFERyxHQUVIUCxLQUZKO0FBR0Y7QUFDRSxhQUFPQSxLQUFQO0FBdkJKO0FBeUJEOztrQkFFY0QsTSIsImZpbGUiOiJpc3N1ZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBRERfSVNTVUUsXG4gIFVQREFURV9JU1NVRSxcbiAgUkVNT1ZFX0lTU1VFXG59IGZyb20gJy4uL2FjdGlvbnMnXG5cbmZ1bmN0aW9uIGlzc3VlcyAoc3RhdGUgPSB7fSwgYWN0aW9uKSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIEFERF9JU1NVRTpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAuLi57IFthY3Rpb24ucGF5bG9hZC5pZF06IHsgLi4uYWN0aW9uLnBheWxvYWQsIGF1dGhvcjogYWN0aW9uLnVzZXIgfSB9XG4gICAgICB9XG4gICAgY2FzZSBVUERBVEVfSVNTVUU6XG4gICAgICByZXR1cm4gYWN0aW9uLnVzZXIgPT09IHN0YXRlW2FjdGlvbi5wYXlsb2FkLmlkXS5hdXRob3JcbiAgICAgICAgPyB7XG4gICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgLi4ueyBbYWN0aW9uLnBheWxvYWQuaWRdOiB7XG4gICAgICAgICAgICAuLi5zdGF0ZVthY3Rpb24ucGF5bG9hZC5pZF0sXG4gICAgICAgICAgICAuLi5hY3Rpb24ucGF5bG9hZFxuICAgICAgICAgIH0gfVxuICAgICAgICB9XG4gICAgICAgIDogc3RhdGVcbiAgICBjYXNlIFJFTU9WRV9JU1NVRTpcbiAgICAgIGNvbnN0IG5ld1N0YXRlID0geyAuLi5zdGF0ZSB9XG4gICAgICBkZWxldGUgbmV3U3RhdGVbYWN0aW9uLnBheWxvYWQuaWRdXG4gICAgICByZXR1cm4gYWN0aW9uLnVzZXIgPT09IHN0YXRlW2FjdGlvbi5wYXlsb2FkLmlkXS5hdXRob3JcbiAgICAgICAgPyBuZXdTdGF0ZVxuICAgICAgICA6IHN0YXRlXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGlzc3Vlc1xuIl19