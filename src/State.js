import React, { Component, cloneElement } from 'react';
import PropTypes from 'prop-types';

export default class State extends Component {
    static propTypes = {
        children: PropTypes.element,
        parseState: PropTypes.func,
        store: PropTypes.object
    };

    constructor(props) {
        super(props);

        this.stateStore = this.props.store;
        this.state = this.stateStore.state;
    }

    componentDidMount() {
        this.subscription = this.stateStore.subscribe(state =>
            this.setState(state)
        );
    }

    componentWillUnmount() {
        this.stateStore.unSubscribe(this.subscription);
    }

    render() {
        const state = this.props.parseState ? this.props.parseState(this.state) : this.state;

        return cloneElement(this.props.children, state);
    }
}
