"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var createReducer = function createReducer(cases) {
  var initialState = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments[1];
    return cases[action.type] ? cases[action.type](state, action.payload, action.user) : state;
  };
};

exports.default = createReducer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jcmVhdGVSZWR1Y2VyLmpzIl0sIm5hbWVzIjpbImNyZWF0ZVJlZHVjZXIiLCJjYXNlcyIsImluaXRpYWxTdGF0ZSIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsInBheWxvYWQiLCJ1c2VyIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBLElBQU1BLGdCQUFnQixTQUFoQkEsYUFBZ0IsQ0FBQ0MsS0FBRDtBQUFBLE1BQVFDLFlBQVIsdUVBQXVCLEVBQXZCO0FBQUEsU0FBOEI7QUFBQSxRQUFDQyxLQUFELHVFQUFTRCxZQUFUO0FBQUEsUUFBdUJFLE1BQXZCO0FBQUEsV0FDbERILE1BQU1HLE9BQU9DLElBQWIsSUFDSUosTUFBTUcsT0FBT0MsSUFBYixFQUFtQkYsS0FBbkIsRUFBMEJDLE9BQU9FLE9BQWpDLEVBQTBDRixPQUFPRyxJQUFqRCxDQURKLEdBRUlKLEtBSDhDO0FBQUEsR0FBOUI7QUFBQSxDQUF0Qjs7a0JBS2VILGEiLCJmaWxlIjoiY3JlYXRlUmVkdWNlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGNyZWF0ZVJlZHVjZXIgPSAoY2FzZXMsIGluaXRpYWxTdGF0ZSA9IHt9KSA9PiAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT5cbiAgY2FzZXNbYWN0aW9uLnR5cGVdXG4gICAgPyBjYXNlc1thY3Rpb24udHlwZV0oc3RhdGUsIGFjdGlvbi5wYXlsb2FkLCBhY3Rpb24udXNlcilcbiAgICA6IHN0YXRlXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVJlZHVjZXJcbiJdfQ==