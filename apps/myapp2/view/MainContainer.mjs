import MwcTextField from '../../../src/component/mwc/TextField.mjs';
import TabContainer from '../../../node_modules/neo.mjs/src/tab/Container.mjs';
import Viewport     from '../../../node_modules/neo.mjs/src/container/Viewport.mjs';

/**
 * @class MyApp2.view.MainContainer
 * @extends Neo.container.Viewport
 */
class MainContainer extends Viewport {
    static getConfig() {return {
        className: 'MyApp2.view.MainContainer',
        autoMount: true,
        layout   : {ntype: 'fit'},

        items: [{
            module: TabContainer,
            height: 400,
            width : 600,
            style : {flex: 'none', margin: '20px'},

            items: [{
                ntype : 'container',
                layout: {ntype: 'vbox', align: 'start'},
                style : {margin: '1em'},

                itemDefaults: {
                    module: MwcTextField,
                    style : {marginTop: '1em'}
                },

                items: [{
                    label: 'standard',
                    style: null
                }, {
                    label   : 'outlined',
                    outlined: true
                }, {
                    label : 'raised',
                    raised: true
                }, {
                    label     : 'unelevated',
                    unelevated: true
                }, {
                    dense: true,
                    label: 'dense'
                }],

                tabButtonConfig: {
                    iconCls: 'fa fa-home',
                    text   : 'Tab 1'
                }
            }]
        }]
    }}
}

Neo.applyClassConfig(MainContainer);

export {MainContainer as default};
