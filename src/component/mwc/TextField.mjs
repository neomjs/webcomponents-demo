import Component from '../../../node_modules/neo.mjs/src/component/Base.mjs';

/**
 * @class Neo.component.mwc.TextField
 * @extends Neo.component.Base
 */
class Button extends Component {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.component.mwc.TextField'
         * @protected
         */
        className: 'Neo.component.mwc.TextField',
        /**
         * @member {String} ntype='mwc-textfield'
         * @protected
         */
        ntype: 'mwc-textfield',
        /**
         * @member {String} icon_=''
         */
        icon_: '',
        /**
         * @member {String} label_=''
         */
        label_: '',
        /**
         * @member {Object} _vdom={tag:'mwc-textfield'}
         */
        _vdom:
            {tag: 'mwc-textfield'}
    }}

    /**
     * Triggered after the icon config got changed.
     * @param {String} value
     * @param {String} oldValue
     * @protected
     */
    afterSetIcon(value, oldValue) {
        this.changeVdomRootKey('icon', value);
    }

    /**
     * Triggered after the label config got changed.
     * @param {String} value
     * @param {String} oldValue
     * @protected
     */
    afterSetLabel(value, oldValue) {
        this.changeVdomRootKey('label', value);
    }
}

Neo.applyClassConfig(Button);

export {Button as default};
