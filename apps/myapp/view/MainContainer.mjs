import MwcButton    from '../../../src/component/mwc/Button.mjs';
import TabContainer from '../../../node_modules/neo.mjs/src/tab/Container.mjs';
import Viewport     from '../../../node_modules/neo.mjs/src/container/Viewport.mjs';

/**
 * @class MyApp.view.MainContainer
 * @extends Neo.container.Viewport
 */
class MainContainer extends Viewport {
    static getConfig() {return {
        className: 'MyApp.view.MainContainer',
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

                items: [{
                    module: MwcButton,
                    label : 'standard'
                }, {
                    module  : MwcButton,
                    label   : 'outlined',
                    outlined: true,
                    style   : {marginTop: '1em'}
                }, {
                    module: MwcButton,
                    label : 'raised',
                    raised: true,
                    style : {marginTop: '1em'}
                }, {
                    module    : MwcButton,
                    label     : 'unelevated',
                    style     : {marginTop: '1em'},
                    unelevated: true
                }, {
                    module: MwcButton,
                    dense : true,
                    label : 'dense',
                    style : {marginTop: '1em'}
                }],

                tabButtonConfig: {
                    iconCls: 'fa fa-home',
                    text   : 'Tab 1'
                }
            }, {
                ntype : 'container',
                layout: {ntype: 'vbox', align: 'start'},
                style : {margin: '1em'},

                itemDefaults: {
                    icon: 'code'
                },

                items: [{
                    module: MwcButton,
                    label : 'standard'
                }, {
                    module  : MwcButton,
                    label   : 'outlined',
                    outlined: true,
                    style   : {marginTop: '1em'}
                }, {
                    module: MwcButton,
                    label : 'raised',
                    raised: true,
                    style : {marginTop: '1em'}
                }, {
                    module    : MwcButton,
                    label     : 'unelevated',
                    style     : {marginTop: '1em'},
                    unelevated: true
                }, {
                    module: MwcButton,
                    dense : true,
                    label : 'dense',
                    style : {marginTop: '1em'}
                }],

                tabButtonConfig: {
                    iconCls: 'fa fa-play-circle',
                    text   : 'Tab 2'
                }
            }]
        }]
    }}
}

Neo.applyClassConfig(MainContainer);

export {MainContainer as default};
