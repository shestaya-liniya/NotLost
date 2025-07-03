import type { WebContentsViewFavicon } from './types';
import { NotLostLocalStorageKeys } from './types';

import { MAIN_IDB_STORE } from '../../util/browser/idb';

class WebContentsFaviconsStorage {
  store = MAIN_IDB_STORE;

  getFavicon = async (url: string): Promise<string> => {
    const favicons = await this.store.get<WebContentsViewFavicon[]>
    (NotLostLocalStorageKeys.webContentsViewFavicons);

    return favicons?.find((f) => f.url === url)?.faviconUrl || '';
  };

  addFavicon = async (url: string, faviconUrl: string): Promise<void> => {
    const newFavicon: WebContentsViewFavicon = { url, faviconUrl };

    await this.store.update<WebContentsViewFavicon[]>(
      NotLostLocalStorageKeys.webContentsViewFavicons,
      (old = []) => [...old, newFavicon],
    );
  };
}

export default new WebContentsFaviconsStorage();
