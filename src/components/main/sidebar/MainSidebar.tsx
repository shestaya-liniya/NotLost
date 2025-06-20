import type { FC } from '../../../lib/teact/teact';
import {
  memo,
} from '../../../lib/teact/teact';

import { LeftColumnContent } from '../../../types';

import buildClassName from '../../../util/buildClassName';

import MainSidebarSection from './MainSidebarSection';
import MainSidebarTab from './MainSidebarTab';
import MainSidebarTabProfile from './MainSidebarTabProfile';
import MainSidebarWorkspaces from './MainSidebarWorkspaces';

import styles from './MainSidebar.module.scss';

const MainSidebar: FC = () => {
  const containerClassName = buildClassName(
    styles.container,
    'custom-scroll',
  );

  return (
    <div className={containerClassName}>
      <div className={styles.tabs}>
        <MainSidebarSection title="Account">
          <MainSidebarTabProfile />
        </MainSidebarSection>
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
      </div>
    </div>
  );
};

export default memo(MainSidebar);
