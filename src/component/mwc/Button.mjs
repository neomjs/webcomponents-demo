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
         * @member {Boolean} dense_=false
         */
        dense_: false,
        /**
         * Shortcut for domListeners={click:handler}
         * A string based value assumes that the handlerFn lives inside a ComponentController
         * @member {Function|String|null} handler_=null
         */
        handler_: null,
        /**
         * @member {String} icon_=''
         */
        icon_: '',
        /**
         * @member {String} label_=''
         */
        label_: '',
        /**
         * @member {Boolean} outlined_=false
         */
        outlined_: false,
        /**
         * @member {Boolean} raised_=false
         */
        raised_: false,
        /**
         * @member {Boolean} unelevated_=false
         */
        unelevated_: false,
        /**
         * @member {Object} _vdom={tag:'mwc-button'}
         */
        _vdom:
        {tag: 'mwc-button'}
    }}

    /**
     * Triggered after the dense config got changed.
     * @param {Boolean} value
     * @param {Boolean} oldValue
     * @protected
     */
    afterSetDense(value, oldValue) {
        this.vdom.dense = value;
        this.promiseVdomUpdate();
    }

    /**
     * Triggered after the handler config got changed
     * @param {String} value
     * @param {String} oldValue
     * @protected
     */
    afterSetHandler(value, oldValue) {
        if (value) {
            let me           = this,
                domListeners = me.domListeners;

            domListeners.push({click: value, scope: me});
            me.domListeners = domListeners;
        }
    }

    /**
     * Triggered after the icon config got changed.
     * @param {String} value
     * @param {String} oldValue
     * @protected
     */
    afterSetIcon(value, oldValue) {
        this.vdom.icon = value;
        this.promiseVdomUpdate();
    }

    /**
     * Triggered after the label config got changed.
     * @param {String} value
     * @param {String} oldValue
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

    /**
     * Triggered after the raised config got changed.
     * @param {Boolean} value
     * @param {Boolean} oldValue
     * @protected
     */
    afterSetRaised(value, oldValue) {
        this.vdom.raised = value || null;
        this.promiseVdomUpdate();
    }

    /**
     * Triggered after the unelevated config got changed.
     * @param {Boolean} value
     * @param {Boolean} oldValue
     * @protected
     */
    afterSetUnelevated(value, oldValue) {
        this.vdom.unelevated = value || null;
        this.promiseVdomUpdate();
    }
}

Neo.applyClassConfig(Button);

export {Button as default};
