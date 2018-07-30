'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var State = function (_Component) {
    _inherits(State, _Component);

    function State(props) {
        _classCallCheck(this, State);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props));

        _this.stateStore = _this.props.store;
        _this.state = _this.stateStore.state;
        return _this;
    }

    State.prototype.componentDidMount = function componentDidMount() {
        var _this2 = this;

        this.subscription = this.stateStore.subscribe(function (state) {
            return _this2.setState(state);
        });
    };

    State.prototype.componentWillUnmount = function componentWillUnmount() {
        this.stateStore.unSubscribe(this.subscription);
    };

    State.prototype.render = function render() {
        var state = this.props.parseState ? this.props.parseState(this.state) : this.state;

        return (0, _react.cloneElement)(this.props.children, state);
    };

    return State;
}(_react.Component);

exports.default = State;