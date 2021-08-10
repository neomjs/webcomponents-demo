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
         * @member {Boolean} outlined_=false
         */
        outlined_: false,
        /**
         * @member {Object} _vdom={tag:'mwc-button'}
         */
        _vdom:
        {tag: 'mwc-button'}
    }}

    /**
     * Triggered after the label config got changed.
     * @param {String|null} value
     * @param {String|null} oldValue
     * @protected
     */
    afterSetLabel(value, oldValue) {
        this.vdom.label = value;
        this.promiseVdomUpdate();
    }

    /**
     * Triggered after the outlined config got changed.
     * @param {Boolean} value
     * @param {Boolean} oldValue
     * @protected
     */
    afterSetOutlined(value, oldValue) {
        this.vdom.outlined = value || null;
        this.promiseVdomUpdate();
    }
}

Neo.applyClassConfig(Button);

export {Button as default};
