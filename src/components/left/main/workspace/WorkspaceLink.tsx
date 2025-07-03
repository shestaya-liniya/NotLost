import type { FC } from '@teact';
import { memo, useCallback, useEffect, useMemo, useState } from '@teact';
import { getActions } from '../../../../global';

import type { MenuItemContextAction } from '../../../ui/ListItem';
import { ElectronEvent } from '../../../../types/electron';

import buildClassName from '../../../../util/buildClassName';
import { compact } from '../../../../util/iteratees';
import WebContentsFaviconsStorage from '../../../../api/notlost/webContents';

import Icon from '../../../common/icons/Icon';
import ListItem from '../../../ui/ListItem';

import styles from './Workspace.module.scss';

type OwnProps = {
  id: string;
  url: string;
  title: string;
  selected: boolean;
};

const WorkspaceLink: FC<OwnProps> = ({
  id,
  url,
  title,
  selected,
}) => {
  const { setWorkspaceSelectedItemId, deleteLinkFromWorkspace, loadWebContentsViewUrl } = getActions();

  const [faviconUrl, setFaviconUrl] = useState<string | undefined>(undefined);

  const handleClick = () => {
    setWorkspaceSelectedItemId(id);
    loadWebContentsViewUrl({
      url,
    });
  };

  const handleDelete = useCallback(() => {
    deleteLinkFromWorkspace({
      linkId: id,
    });
  }, [id]);

  const contextActions = useMemo(() => {
    const actionDelete = {
      title: 'Delete',
      icon: 'delete',
      destructive: true,
      handler: handleDelete,
    } satisfies MenuItemContextAction;

    return compact([actionDelete]);
  }, [handleDelete]);

  const getDomain = (url: string): string => {
    return new URL(url).hostname.replace(/^www\./, '');
  };

  const isSameDomain = useCallback((url1: string, url2: string): boolean => {
    try {
      const domain1 = getDomain(url1);
      const domain2 = getDomain(url2);
      return domain1 === domain2;
    } catch (error) {
      return false;
    }
  }, []);

  useEffect(() => {
    const listenForMetaDataUpdate = window.electron!.on(ElectronEvent.ON_WEB_CONTENTS_TAB_META_DATA, (data: {
      url: string;
      metaData: {
        faviconUrl: string;
        title: string;
      };
    }) => {
      if (isSameDomain(data.url, url)) {
        WebContentsFaviconsStorage.getFavicon(getDomain(url)).then((cachedFavicon) => {
          if (!cachedFavicon) {
            WebContentsFaviconsStorage.addFavicon(getDomain(url), data.metaData.faviconUrl || '');
            setFaviconUrl(data.metaData.faviconUrl);
          }
        });
      }
    });

    WebContentsFaviconsStorage.getFavicon(getDomain(url)).then((cachedFavicon) => {
      if (cachedFavicon) {
        setFaviconUrl(cachedFavicon);
        listenForMetaDataUpdate();
      }
    });

    return () => {
      listenForMetaDataUpdate();
    };
  }, [isSameDomain, url]);

  const listItemClassName = buildClassName(
    styles.customListItem,
    styles.hover,
    selected && styles.selected,
  );

  const linkIconContainerClassName = buildClassName(
    styles.linkIconContainer,
    faviconUrl && styles.withFavicon,
  );

  return (
    <ListItem
      isStatic
      ripple
      withPortalForMenu
      className={listItemClassName}
      onClick={handleClick}
      contextActions={contextActions}
    >
      <div className={styles.link}>
        <div className={linkIconContainerClassName}>
          {faviconUrl
            ? <img src={faviconUrl} alt="favicon" />
            : (
              <Icon name="link" />
            )}
        </div>
        <div className={styles.linkTitle}>{title}</div>
      </div>
    </ListItem>
  );
};

export default memo(WorkspaceLink);
