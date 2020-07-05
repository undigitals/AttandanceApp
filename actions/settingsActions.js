import { SET_SETTINGS } from './types'

export const setSettingsData = data => dispatch => {
  dispatch({ type: SET_SETTINGS, payload: data })
}
