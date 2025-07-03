import type { FC } from '@teact';
import { memo, useState } from '@teact';
import { getActions } from '../../../global';

import type { ApiWorkspace } from '../../../api/notlost/types';
import type { WebContentsTabInfo } from '../../../types/electron';

import buildClassName from '../../../util/buildClassName';

import Icon from '../../common/icons/Icon';

import styles from './MainSidebarWebContentsTab.module.scss';

type OwnProps = {
  webContentsTab: WebContentsTabInfo;
  workspaces: ApiWorkspace[];
  isActive: boolean;
};

const MainSidebarWebContentsTab: FC<OwnProps> = ({
  webContentsTab,
  workspaces,
  isActive,
}) => {
  const { loadWebContentsViewUrl, closeWebContentsTab } = getActions();

  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    loadWebContentsViewUrl({
      url: webContentsTab.url,
    });
  };

  const handleCloseTab = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    e.stopPropagation();
    closeWebContentsTab({
      tabId: webContentsTab.id,
    });
  };

  const getWorkspaceLinkRelatedToTab = () => {
    return workspaces
      .map((w) => w.links.find((l) => l.url === webContentsTab.url))
      .find((link) => link !== undefined);
  };

  const getTitle = () => {
    return getWorkspaceLinkRelatedToTab()?.title ?? webContentsTab.title;
  };

  const renderRightBox = () => {
    if (isHovered) {
      return (
        <Icon
          name="close"
          className={styles.closeButton}
          onClick={handleCloseTab}
        />
      );
    } else if (isActive) {
      return (
        <div className={styles.onActiveIndicator} />
      );
    }

    return undefined;
  };

  const containerClassName = buildClassName(
    styles.container,
    isActive && styles.isActive,
  );

  const linkIconContainerClassName = buildClassName(
    styles.iconContainer,
  );

  return (
    <div
      onClick={handleClick}
      className={containerClassName}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={linkIconContainerClassName}>
        <Icon name="link" />
      </div>
      <div className={styles.title}>{getTitle()}</div>
      <div className={styles.rightBox}>
        {renderRightBox()}
      </div>
    </div>
  );
};

export default memo(MainSidebarWebContentsTab);
