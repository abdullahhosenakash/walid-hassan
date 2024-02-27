export const USER_COOKIE = 'OutSiteJWT';
export const USER_COOKIE_MAX_AGE = 60 * 60 * 24 * 7;
export const USER_THEME = 'theme';
export const USER_THEME_MAX_AGE = 60 * 60 * 24 * 365;

export const INITIAL_STATE = {
  errorType: null,
  status: null,
  message: ''
};

import localFont from 'next/font/local';
export const PROTEST_GUERRILLA = localFont({
  src: '../_assets/fonts/ProtestGuerrilla-Regular.ttf',
  display: 'swap'
});
