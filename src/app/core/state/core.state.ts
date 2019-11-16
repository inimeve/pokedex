import {ActionReducerMap, MetaReducer} from '@ngrx/store';
import {settingsReducer, SettingsState} from '../settings/state/settings.reducer';
import {initSettingsStateFromLocalStorage} from '../settings/state/settings.meta-reducer';

export const reducers: ActionReducerMap<AppState> = {
  settings: settingsReducer
};

export const metaReducers: MetaReducer<AppState>[] = [
  initSettingsStateFromLocalStorage
];

export interface AppState {
  settings: SettingsState;
}
