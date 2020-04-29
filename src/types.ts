export interface IAppState {
  showAudibleTabsOnly: boolean;
  isChromeOnSteroidsVisible: boolean;
  platformInfo: chrome.runtime.PlatformInfo;
  keyboardShortcuts: IShortcutItem[];
}

export interface IShortcutItem {
  label: string;
  shortcut: string;
}

export enum ModeTypes {
  DEFAULT = 'DEFAULT',
  CONSOLE = 'CONSOLE',
}

/**
 * Types for Actions
 */

export const UPDATE_IS_CHROME_ON_STEROIDS_VISIBLE_VALUE =
  'UPDATE_IS_CHROME_ON_STEROIDS_VISIBLE_VALUE';

export const UPDATE_SHOW_AUDIBLE_TABS_ONLY_FLAG_VALUE =
  'UPDATE_SHOW_AUDIBLE_TABS_ONLY_FLAG_VALUE';

export type UpdateIsChromeOnSteroidsVisibleFlagValue = {
  type: typeof UPDATE_IS_CHROME_ON_STEROIDS_VISIBLE_VALUE;
  payload: boolean;
};

export type UpdateShowAudibleTabsOnlyFlagValue = {
  type: typeof UPDATE_SHOW_AUDIBLE_TABS_ONLY_FLAG_VALUE;
  payload: boolean;
};

export type TAppActions =
  | UpdateIsChromeOnSteroidsVisibleFlagValue
  | UpdateShowAudibleTabsOnlyFlagValue;
