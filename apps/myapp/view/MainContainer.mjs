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

                itemDefaults: {
                    module : MwcButton,
                    handler: data => console.log('click', data.component.id),
                    style  : {marginTop: '1em'}
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
            }, {
                ntype : 'container',
                layout: {ntype: 'vbox', align: 'start'},
                style : {margin: '1em'},

                itemDefaults: {
                    module : MwcButton,
                    handler: data => console.log('click', data.component.id),
                    icon   : 'code',
                    style  : {marginTop: '1em'}
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
                    iconCls: 'fa fa-play-circle',
                    text   : 'Tab 2'
                }
            }]
        }]
    }}
}

Neo.applyClassConfig(MainContainer);

export {MainContainer as default};
