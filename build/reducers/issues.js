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
    case _actions.UPDATE_ISSUE:
      return _extends({}, state, { issues: _extends({}, state.issues, _defineProperty({}, action.payload.id, action.payload)) });
    case _actions.REMOVE_ISSUE:
      var _issues = state.issues;
      delete _issues[action.payload.id];
      return _extends({}, state, { issues: _issues });
    default:
      return state;
  }
}

exports.default = issues;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWR1Y2Vycy9pc3N1ZXMuanMiXSwibmFtZXMiOlsiaXNzdWVzIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwicGF5bG9hZCIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBTUEsU0FBU0EsTUFBVCxHQUFxQztBQUFBLE1BQXBCQyxLQUFvQix1RUFBWixFQUFZO0FBQUEsTUFBUkMsTUFBUTs7QUFDbkMsVUFBUUEsT0FBT0MsSUFBZjtBQUNFO0FBQ0E7QUFDRSwwQkFDS0YsS0FETCxFQUVLLEVBQUVELHFCQUFhQyxNQUFNRCxNQUFuQixzQkFBaUNFLE9BQU9FLE9BQVAsQ0FBZUMsRUFBaEQsRUFBcURILE9BQU9FLE9BQTVELEVBQUYsRUFGTDtBQUlGO0FBQ0UsVUFBTUosVUFBU0MsTUFBTUQsTUFBckI7QUFDQSxhQUFPQSxRQUFPRSxPQUFPRSxPQUFQLENBQWVDLEVBQXRCLENBQVA7QUFDQSwwQkFDS0osS0FETCxFQUVLLEVBQUVELGVBQUYsRUFGTDtBQUlGO0FBQ0UsYUFBT0MsS0FBUDtBQWZKO0FBaUJEOztrQkFFY0QsTSIsImZpbGUiOiJpc3N1ZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBRERfSVNTVUUsXG4gIFVQREFURV9JU1NVRSxcbiAgUkVNT1ZFX0lTU1VFXG59IGZyb20gJy4uL2FjdGlvbnMnXG5cbmZ1bmN0aW9uIGlzc3VlcyAoc3RhdGUgPSB7fSwgYWN0aW9uKSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIEFERF9JU1NVRTpcbiAgICBjYXNlIFVQREFURV9JU1NVRTpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAuLi57IGlzc3VlczogeyAuLi5zdGF0ZS5pc3N1ZXMsIC4uLnsgW2FjdGlvbi5wYXlsb2FkLmlkXTogYWN0aW9uLnBheWxvYWQgfSB9IH1cbiAgICAgIH1cbiAgICBjYXNlIFJFTU9WRV9JU1NVRTpcbiAgICAgIGNvbnN0IGlzc3VlcyA9IHN0YXRlLmlzc3Vlc1xuICAgICAgZGVsZXRlIGlzc3Vlc1thY3Rpb24ucGF5bG9hZC5pZF1cbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAuLi57IGlzc3VlcyB9XG4gICAgICB9XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGlzc3Vlc1xuIl19