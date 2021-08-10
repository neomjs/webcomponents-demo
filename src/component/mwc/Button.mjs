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
         * @member {String|null} label_=null
         */
        label_: null,
        /**
         * @member {Object} _vdom
         */
        _vdom:
        {tag: 'mwc-button', label: 'Hello World'}
    }}

    /**
     * Triggered after the label config got changed.
     * @param {String|null} value
     * @param {String|null} oldValue
     * @protected
     */
    afterSetLabel(value, oldValue) {
        let vdom = this.vdom;

        if (value) {
            vdom.label = value;
        } else {
            delete vdom.label;
        }

        this.vdom = vdom;
    }
}

Neo.applyClassConfig(Button);

export {Button as default};
