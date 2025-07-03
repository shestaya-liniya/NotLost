import type { FC } from '../../../lib/teact/teact';
import { memo, useMemo } from '../../../lib/teact/teact';
import { withGlobal } from '../../../global';

import type { ApiPeer } from '../../../api/types';

import { selectPeer } from '../../../global/selectors';
import buildClassName from '../../../util/buildClassName';

import useFlag from '../../../hooks/useFlag';

import Avatar from '../../common/Avatar';
import LeftSideMenuItems from '../../left/main/LeftSideMenuItems';
import DropdownMenu from '../../ui/DropdownMenu';

import styles from './MainSidebarTab.module.scss';

type StateProps = {
  peer?: ApiPeer;
};

const MainSidebarTabProfile: FC<StateProps> = ({
  peer,
}) => {
  const [isBotMenuOpen, markBotMenuOpen, unmarkBotMenuOpen] = useFlag();

  const profileSelectorClassName = buildClassName(
    styles.selector,
  );

  const TabProfile: FC<{ onTrigger: () => void; isOpen?: boolean }> = useMemo(() => {
    return ({ onTrigger }) => (
      <div className={profileSelectorClassName} onClick={onTrigger}>
        <Avatar className={styles.profileAvatar} peer={peer} size="tiny" forceRoundedRect />
        <div style="color: var(--color-text-secondary); font-size: 13px;">
          {peer?.usernames && peer.usernames[0] && peer.usernames[0].username}
        </div>
      </div>
    );
  }, [peer, profileSelectorClassName]);

  return (
    <div className={styles.profileSelectorContainer}>
      <DropdownMenu
        trigger={TabProfile}
        footer="Footer"
        forceOpen={isBotMenuOpen}
        positionX="left"
        transformOriginX={300}
        positionY="bottom"
      >
        <LeftSideMenuItems
        /* onSelectArchived={onSelectArchived}
            onSelectContacts={onSelectContacts}
            onSelectSettings={onSelectSettings} */

          onSelectArchived={() => {}}

          onSelectContacts={() => {}}

          onSelectSettings={() => {}}
          onBotMenuOpened={markBotMenuOpen}
          onBotMenuClosed={unmarkBotMenuOpen}
        />
      </DropdownMenu>
    </div>

  );
};

export default memo(withGlobal(
  (global): StateProps => {
    const peer = selectPeer(global, global.currentUserId || '');
    return {
      peer,
    };
  },
)(MainSidebarTabProfile));
