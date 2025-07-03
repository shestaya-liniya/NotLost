import type { FC } from '../../../lib/teact/teact';
import {
  memo,
  useEffect,
  useState,
} from '../../../lib/teact/teact';
import { withGlobal } from '../../../global';

import type { ApiWorkspace } from '../../../api/notlost/types';
import type { WebContentsTabInfo } from '../../../types/electron';
import { LeftColumnContent } from '../../../types';
import { ElectronEvent } from '../../../types/electron';

import buildClassName from '../../../util/buildClassName';

import MainSidebarSection from './MainSidebarSection';
import MainSidebarTab from './MainSidebarTab';
import MainSidebarTabProfile from './MainSidebarTabProfile';
import MainSidebarWebContentsTab from './MainSidebarWebContentsTab';
import MainSidebarWorkspaces from './MainSidebarWorkspaces';

import styles from './MainSidebar.module.scss';

type StateProps = {
  workspaces: ApiWorkspace[];
};

const MainSidebar: FC<StateProps> = ({
  workspaces,
}) => {
  const [webContentsTabs, setWebContentsTabs] = useState<WebContentsTabInfo[]>([]);
  const [activeTabId, setActiveTabId] = useState<string | undefined>(undefined);

  window.electron!.on(ElectronEvent.ON_WEB_CONTENTS_TABS_CHANGE, (tabsUpdate: {
    tabs: WebContentsTabInfo[];
    activeTabId: string;
  }) => {
    setWebContentsTabs(tabsUpdate.tabs);
    setActiveTabId(tabsUpdate.activeTabId);
  });

  useEffect(() => {
    window.electron!.getWebContentsTabs().then((tabs) => {
      setWebContentsTabs(tabs);
    });
  }, []);

  const containerClassName = buildClassName(
    styles.container,
    'custom-scroll',
  );

  return (
    <div className={containerClassName}>
      <div className={styles.tabs}>
        <MainSidebarWorkspaces />
        <MainSidebarSection title="Chats">
          <MainSidebarTab
            title="Unreads"
            iconName="check"
            leftColumnContent={LeftColumnContent.AllUnread}
          />
          <MainSidebarTab
            title="All"
            iconName="message-read"
            leftColumnContent={LeftColumnContent.ChatList}
          />
          <MainSidebarTab
            title="Groups"
            iconName="group"
            leftColumnContent={LeftColumnContent.Groups}
          />
          <MainSidebarTab
            title="Channels"
            iconName="channel"
            leftColumnContent={LeftColumnContent.Channels}
          />
          <MainSidebarTab
            title="Bots"
            iconName="bots"
            leftColumnContent={LeftColumnContent.Bots}
          />
          <MainSidebarTab
            title="Archive"
            iconName="archive"
            leftColumnContent={LeftColumnContent.Archived}
          />
        </MainSidebarSection>
        <MainSidebarSection title="Saved">
          <MainSidebarTab
            title="All"
            iconName="tag"
            leftColumnContent={LeftColumnContent.Saved}
          />
        </MainSidebarSection>
        {webContentsTabs.length > 0 && (
          <MainSidebarSection title="Active links">
            {webContentsTabs.reverse().map((t) => (
              <MainSidebarWebContentsTab
                webContentsTab={t}
                workspaces={workspaces}
                isActive={activeTabId === t.id}
              />
            ))}
          </MainSidebarSection>
        )}
      </div>
      <MainSidebarTabProfile />
    </div>
  );
};

export default memo(withGlobal(
  (global): StateProps => {
    return {
      workspaces: global.workspaces.byOrder,
    };
  },
)(MainSidebar));
