import type { ActionReturnType } from '../../types';

import { getCurrentTabId } from '../../../util/establishMultitabRole';
import { addActionHandler, getGlobal, setGlobal } from '../..';

addActionHandler('loadWebContentsViewUrl', (global, actions, payload): ActionReturnType => {
  const { url } = payload;

  global = {
    ...global,
    webContentsViewIsLoading: true,
    webContentsViewError: undefined,
  };

  setGlobal(global);

  actions.openChat({ id: undefined, tabId: getCurrentTabId() });

  window.electron?.setWebContentsViewVisible(true);
  window.electron?.setWebContentsViewUrl(url)
    .then(() => {
      global = getGlobal();
      global = {
        ...global,
        webContentsViewIsLoading: false,
        webContentsViewIsVisible: true,
      };

      setGlobal(global);
    })
    .catch((e) => {
      global = getGlobal();
      global = {
        ...global,
        webContentsViewIsLoading: false,
        webContentsViewIsVisible: false,
        webContentsViewError: e,
      };

      setGlobal(global);
    });
});

addActionHandler('closeWebContentsView', (global, actions, payload): ActionReturnType => {
  global = {
    ...global,
    webContentsViewIsVisible: false,
    webContentsViewIsLoading: false,
    webContentsViewError: undefined,
  };
  setGlobal(global);

  window.electron?.setWebContentsViewVisible(false);
});

addActionHandler('closeWebContentsTab', (global, actions, payload): ActionReturnType => {
  const { tabId } = payload;

  global = {
    ...global,
    webContentsViewIsVisible: false,
    webContentsViewIsLoading: false,
    webContentsViewError: undefined,
  };
  setGlobal(global);

  window.electron?.closeWebContentsTab(tabId);
});
