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
      return _extends({}, state, _defineProperty({}, action.payload.id, action.payload));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWR1Y2Vycy9pc3N1ZXMuanMiXSwibmFtZXMiOlsiaXNzdWVzIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwicGF5bG9hZCIsImlkIiwibmV3U3RhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFNQSxTQUFTQSxNQUFULEdBQXFDO0FBQUEsTUFBcEJDLEtBQW9CLHVFQUFaLEVBQVk7QUFBQSxNQUFSQyxNQUFROztBQUNuQyxVQUFRQSxPQUFPQyxJQUFmO0FBQ0U7QUFDRSwwQkFDS0YsS0FETCxzQkFFUUMsT0FBT0UsT0FBUCxDQUFlQyxFQUZ2QixFQUU0QkgsT0FBT0UsT0FGbkM7QUFJRjtBQUNFLDBCQUNLSCxLQURMLHNCQUVRQyxPQUFPRSxPQUFQLENBQWVDLEVBRnZCLGVBR09KLE1BQU1DLE9BQU9FLE9BQVAsQ0FBZUMsRUFBckIsQ0FIUCxFQUlPSCxPQUFPRSxPQUpkO0FBT0Y7QUFDRSxVQUFNRSx3QkFBZ0JMLEtBQWhCLENBQU47QUFDQSxhQUFPSyxTQUFTSixPQUFPRSxPQUFQLENBQWVDLEVBQXhCLENBQVA7QUFDQSxhQUFPQyxRQUFQO0FBQ0Y7QUFDRSxhQUFPTCxLQUFQO0FBbkJKO0FBcUJEOztrQkFFY0QsTSIsImZpbGUiOiJpc3N1ZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBRERfSVNTVUUsXG4gIFVQREFURV9JU1NVRSxcbiAgUkVNT1ZFX0lTU1VFXG59IGZyb20gJy4uL2FjdGlvbnMnXG5cbmZ1bmN0aW9uIGlzc3VlcyAoc3RhdGUgPSB7fSwgYWN0aW9uKSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIEFERF9JU1NVRTpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAuLi57IFthY3Rpb24ucGF5bG9hZC5pZF06IGFjdGlvbi5wYXlsb2FkIH1cbiAgICAgIH1cbiAgICBjYXNlIFVQREFURV9JU1NVRTpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAuLi57IFthY3Rpb24ucGF5bG9hZC5pZF06IHtcbiAgICAgICAgICAuLi5zdGF0ZVthY3Rpb24ucGF5bG9hZC5pZF0sXG4gICAgICAgICAgLi4uYWN0aW9uLnBheWxvYWRcbiAgICAgICAgfSB9XG4gICAgICB9XG4gICAgY2FzZSBSRU1PVkVfSVNTVUU6XG4gICAgICBjb25zdCBuZXdTdGF0ZSA9IHsgLi4uc3RhdGUgfVxuICAgICAgZGVsZXRlIG5ld1N0YXRlW2FjdGlvbi5wYXlsb2FkLmlkXVxuICAgICAgcmV0dXJuIG5ld1N0YXRlXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGlzc3Vlc1xuIl19