'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _uuid = require('uuid');

var _uuid2 = _interopRequireDefault(_uuid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Store = function () {
    function Store(state) {
        _classCallCheck(this, Store);

        this.state = {};
        this.callbacks = [];

        this.state = _extends({}, state);
    }

    Store.prototype.set = function set(newState) {
        var _this = this;

        this.state = _extends({}, this.state, newState);
        this.callbacks.forEach(function (callback) {
            return callback.callback(_this.state);
        });
    };

    Store.prototype.get = function get(key) {
        return this.state[key];
    };

    Store.prototype.subscribe = function subscribe(callback) {
        var subscription = (0, _uuid2.default)();

        this.callbacks.push({ subscription: subscription, callback: callback });

        return subscription;
    };

    Store.prototype.unSubscribe = function unSubscribe(subscription) {
        var _this2 = this;

        this.callbacks.forEach(function (callback, index) {
            if (callback.subscription === subscription) {
                _this2.callbacks.splice(index, 1);
            }
        });
    };

    return Store;
}();

exports.default = Store;