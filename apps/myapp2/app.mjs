import MainContainer from './view/MainContainer.mjs';

const onStart = () => Neo.app({
    appPath : 'apps/myapp2/',
    mainView: MainContainer,
    name    : 'MyApp2'
});

export {onStart as onStart};
