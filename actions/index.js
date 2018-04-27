/*
 * action types
 */
export const CHANGE_APP_HEADER = 'CHANGE_APP_HEADER';

/*
 *
 */
export function changeAppHeader(text) {
    return { type: CHANGE_APP_HEADER, text }
}

