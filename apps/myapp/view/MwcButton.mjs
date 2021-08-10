import Component from '../../../node_modules/neo.mjs/src/component/Base.mjs';

/**
 * @class MyApp.view.MwcButton
 * @extends Neo.component.Base
 */
class MwcButton extends Component {
    static getConfig() {return {
        className: 'MyApp.view.MwcButton',
        _vdom:
        {tag: 'mwc-button', label: 'Hello World'}
    }}
}

Neo.applyClassConfig(MwcButton);

export {MwcButton as default};
