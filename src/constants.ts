export enum actionTypes {
  TOGGLE_VISIBILITY = 'TOGGLE_VISIBILITY',
  GET_TABS_REQUEST = 'GET_TABS_REQUEST',
  GET_TABS_SUCCESS = 'GET_TABS_SUCCESS',
  SET_FOCUSSED_WINDOW = 'SET_FOCUSSED_WINDOW',
  FOCUSSED_WINDOW_CHANGED = 'FOCUSSED_WINDOW_CHANGED',
  GET_ACTIVE_TAB_REQUEST = 'GET_ACTIVE_TAB_REQUEST',
  GET_ACTIVE_TAB_SUCCESS = 'GET_ACTIVE_TAB_SUCCESS',
  SET_ACTIVE_TAB = 'SET_ACTIVE_TAB',
  ACTIVE_TAB_CHANGED = 'ACTIVE_TAB_CHANGED',
  TAB_UPDATED = 'TAB_UPDATED',
  TOGGLE_MUTE = 'TOGGLE_MUTE',
  MUTE_TOGGLED = 'MUTE_TOGGLED',
  DISPATCH_TOGGLE_VISIBILITY = 'DISPATCH_TOGGLE_VISIBILITY',
}

export const iconUrls = {
  search: chrome.runtime.getURL('images/loupe.svg'),
  mute: chrome.runtime.getURL('images/mute.svg'),
  volume: chrome.runtime.getURL('images/volume.svg'),
};

export enum keyboardShortcuts {
  TOGGLE_VISIBILITY = 'toggle-visibility',
}

export const AUDIBLE_TABS_POLL_FREQUENCY_IN_MS = 1000;
export const iFrameURL = chrome.runtime.getURL('tez.html');

export const partialHostnameToFilenameMapping = {
  'airbnb.com': 'airbnb',
  'behance.net': 'behance',
  'dailymotion.com': 'dailymotion',
  'deviantart.com': 'deviantart',
  'dribbble.com': 'dribbble',
  'ello.co': 'ello',
  'etsy.com': 'etsy',
  'facebook.com': 'facebook',
  'flickr.com': 'flickr',
  'foursquare.com': 'foursquare',
  'instagram.com': 'instagram',
  'music.apple.com': 'itunes',
  'kickstarter.com': 'kickstarter',
  'kik.com': 'kik',
  'last.fm': 'lastfm',
  'badoo.com': 'badoo',
  'linkedin.com': 'linkedin',
  'medium.com': 'medium',
  'meetup.com': 'meetup',
  'messenger.com': 'messenger',
  'myspace.com': 'myspace',
  'pscp.tv': 'periscope',
  'pinterest.com': 'pinterest',
  'quora.com': 'quora',
  'reddit.com': 'reddit',
  'skype.com': 'skype',
  'snapchat.com': 'snapchat',
  'soundcloud.com': 'soundcloud',
  'spotify.com': 'spotify',
  'tinder.com': 'tinder',
  tripadvisor: 'tripadvisor',
  'tumblr.com': 'tumblr',
  'twitter.com': 'twitter',
  'uber.com': 'uber',
  'vimeo.com': 'vimeo',
  'vk.com': 'vk',
  'whatsapp.com': 'whatsapp',
  'yelp.com': 'yelp',
  'youtube.com': 'youtube',
};