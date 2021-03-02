import Constants from '../constants';

const getPluginState = (state) =>
    state[`plugins-${Constants.PLUGIN_NAME}`] || {};

const modal = (state) => getPluginState(state).modal || {};

export default {
    modal,
};
