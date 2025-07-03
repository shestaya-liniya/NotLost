import type { ActionReturnType } from '../../types';

import { addActionHandler, setGlobal } from '../..';

addActionHandler('toggleShowLastMessage', (global, actions, payload): ActionReturnType => {
  global = {
    ...global,
    chatFilters: {
      ...global.chatFilters,
      shouldShowLastMessage: !global.chatFilters.shouldShowLastMessage,
    },
  };

  setGlobal(global);
});
