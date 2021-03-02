import {Store} from 'redux';

import {GlobalState} from 'mattermost-redux/types/store';

import Actions from 'actions';
import Modal from 'components/modal';
import reducer from 'reducers';

import manifest from './manifest';

// eslint-disable-next-line import/no-unresolved
import {PluginRegistry} from './types/mattermost-webapp';

export default class Plugin {
    // @see https://developers.mattermost.com/extend/plugins/webapp/reference/
    public async initialize(registry: PluginRegistry, store: Store<GlobalState, any>) {
        registry.registerReducer(reducer);
        registry.registerRootComponent(Modal);
        registry.registerWebSocketEventHandler(
            `custom_${manifest.id}_open_modal`,
            (event) => store.dispatch(Actions.openModal(event.data)),
        );
    }
}

declare global {
    interface Window {
        registerPlugin(id: string, plugin: Plugin): void
    }
}

window.registerPlugin(manifest.id, new Plugin());
