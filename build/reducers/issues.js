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
      return _extends({}, state, _defineProperty({}, action.payload.id, action.payload));
    case _actions.REMOVE_ISSUE:
      var newState = _extends({}, state);
      delete newState[action.payload.id];
      return newState;
    default:
      return state;
  }
}

exports.default = issues;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWR1Y2Vycy9pc3N1ZXMuanMiXSwibmFtZXMiOlsiaXNzdWVzIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwicGF5bG9hZCIsImlkIiwibmV3U3RhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFNQSxTQUFTQSxNQUFULEdBQXFDO0FBQUEsTUFBcEJDLEtBQW9CLHVFQUFaLEVBQVk7QUFBQSxNQUFSQyxNQUFROztBQUNuQyxVQUFRQSxPQUFPQyxJQUFmO0FBQ0U7QUFDQTtBQUNFLDBCQUNLRixLQURMLHNCQUVRQyxPQUFPRSxPQUFQLENBQWVDLEVBRnZCLEVBRTRCSCxPQUFPRSxPQUZuQztBQUlGO0FBQ0UsVUFBTUUsd0JBQWdCTCxLQUFoQixDQUFOO0FBQ0EsYUFBT0ssU0FBU0osT0FBT0UsT0FBUCxDQUFlQyxFQUF4QixDQUFQO0FBQ0EsYUFBT0MsUUFBUDtBQUNGO0FBQ0UsYUFBT0wsS0FBUDtBQVpKO0FBY0Q7O2tCQUVjRCxNIiwiZmlsZSI6Imlzc3Vlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFERF9JU1NVRSxcbiAgVVBEQVRFX0lTU1VFLFxuICBSRU1PVkVfSVNTVUVcbn0gZnJvbSAnLi4vYWN0aW9ucydcblxuZnVuY3Rpb24gaXNzdWVzIChzdGF0ZSA9IHt9LCBhY3Rpb24pIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgQUREX0lTU1VFOlxuICAgIGNhc2UgVVBEQVRFX0lTU1VFOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIC4uLnsgW2FjdGlvbi5wYXlsb2FkLmlkXTogYWN0aW9uLnBheWxvYWQgfVxuICAgICAgfVxuICAgIGNhc2UgUkVNT1ZFX0lTU1VFOlxuICAgICAgY29uc3QgbmV3U3RhdGUgPSB7IC4uLnN0YXRlIH1cbiAgICAgIGRlbGV0ZSBuZXdTdGF0ZVthY3Rpb24ucGF5bG9hZC5pZF1cbiAgICAgIHJldHVybiBuZXdTdGF0ZVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGVcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBpc3N1ZXNcbiJdfQ==