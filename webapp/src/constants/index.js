import manifest from '../manifest';

export const ACTION_TYPES = {
    OPEN_MODAL: `${manifest.id}_open_modal`,
    CLOSE_MODAL: `${manifest.id}_close_modal`,
};

export default {
    PLUGIN_NAME: manifest.id,
    ACTION_TYPES,
}
