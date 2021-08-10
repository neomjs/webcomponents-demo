import MwcButton    from './MwcButton.mjs';
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
            height: 300,
            width : 500,
            style : {flex: 'none', margin: '20px'},

            items: [{
                ntype : 'container',
                layout: {ntype: 'vbox', align: 'start'},
                style : {margin: '20px'},

                items: [{
                    module: MwcButton
                }],

                tabButtonConfig: {
                    iconCls: 'fa fa-home',
                    text   : 'Tab 1'
                }
            }, {
                module: MwcButton,

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
