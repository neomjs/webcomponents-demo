import Component from '../../../node_modules/neo.mjs/src/component/Base.mjs';

/**
 * @class Neo.component.mwc.Button
 * @extends Neo.component.Base
 */
class Button extends Component {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.component.mwc.Button'
         * @protected
         */
        className: 'Neo.component.mwc.Button',
        /**
         * @member {String} ntype='mwc-button'
         * @protected
         */
        ntype: 'mwc-button',
        /**
         * @member {Object} _vdom
         */
        _vdom:
        {tag: 'mwc-button', label: 'Hello World'}
    }}
}

Neo.applyClassConfig(Button);

export {Button as default};
