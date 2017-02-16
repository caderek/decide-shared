'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reducers = exports.actions = undefined;

var _actions = require('./actions');

var actions = _interopRequireWildcard(_actions);

var _issues = require('./reducers/issues');

var _issues2 = _interopRequireDefault(_issues);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var reducers = {
  issues: _issues2.default
};

exports.actions = actions;
exports.reducers = reducers;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJhY3Rpb25zIiwicmVkdWNlcnMiLCJpc3N1ZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7SUFBWUEsTzs7QUFDWjs7Ozs7Ozs7QUFFQSxJQUFNQyxXQUFXO0FBQ2ZDO0FBRGUsQ0FBakI7O1FBS0VGLE8sR0FBQUEsTztRQUNBQyxRLEdBQUFBLFEiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBhY3Rpb25zIGZyb20gJy4vYWN0aW9ucydcbmltcG9ydCBpc3N1ZXMgZnJvbSAnLi9yZWR1Y2Vycy9pc3N1ZXMnXG5cbmNvbnN0IHJlZHVjZXJzID0ge1xuICBpc3N1ZXNcbn1cblxuZXhwb3J0IHtcbiAgYWN0aW9ucyxcbiAgcmVkdWNlcnNcbn1cbiJdfQ==