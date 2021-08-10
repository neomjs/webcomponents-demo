import Component from '../../../node_modules/neo.mjs/src/component/Base.mjs';

/**
 * @class Neo.component.mwc.Button
 * @extends Neo.component.Base
 */
class Button extends Component {
    static getConfig() {return {
        className: 'Neo.component.mwc.Button',
        _vdom:
        {tag: 'mwc-button', label: 'Hello World'}
    }}
}

Neo.applyClassConfig(Button);

export {Button as default};
