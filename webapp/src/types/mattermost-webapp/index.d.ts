import React from 'react';

// Add more if needed from https://developers.mattermost.com/extend/plugins/webapp/reference
export interface PluginRegistry {
    registerPostTypeComponent(typeName: string, component: React.ElementType)

    /**
     * Register a handler for WebSocket events.
     * Accepts the following:
     * - event - the event type, can be a regular server event or an event from plugins.
     * Plugin events will have "custom_<pluginid>_" prepended
     * - handler - a function to handle the event, receives the event message as an argument
     * Returns undefined.
     */
    registerWebSocketEventHandler(event: string, handler: (payload) => void)

    /**
     * Register a component at the root of the channel view of the app.
     * Accepts a React component. Returns a unique identifier.
     */
    registerRootComponent(component: React.ElementType)

    /**
     * Register a reducer against the Redux store. It will be accessible in redux state
     * under "state['plugins-<yourpluginid>']"
     * Accepts a reducer. Returns undefined.
     */
    registerReducer(reducer)
}
