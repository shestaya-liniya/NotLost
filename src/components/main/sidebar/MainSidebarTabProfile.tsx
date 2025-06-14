import type { FC } from '../../../lib/teact/teact';
import React, { memo, useMemo } from '../../../lib/teact/teact';
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

  const selectorClassName = buildClassName(
    styles.selector,
  );

  const TabProfile: FC<{ onTrigger: () => void; isOpen?: boolean }> = useMemo(() => {
    return ({ onTrigger }) => (
      <div className={selectorClassName} onClick={onTrigger}>
        <Avatar className={styles.profileAvatar} peer={peer} size="mini" forceRoundedRect />
        <div style="color: var(--color-text)">
          {peer?.usernames && peer.usernames[0] && peer.usernames[0].username}
        </div>
      </div>
    );
  }, [peer, selectorClassName]);

  return (
    <DropdownMenu
      trigger={TabProfile}
      footer="Footer"
      forceOpen={isBotMenuOpen}
      positionX="left"
      transformOriginX={200}
      positionY="top"
    >
      <LeftSideMenuItems
        /* onSelectArchived={onSelectArchived}
            onSelectContacts={onSelectContacts}
            onSelectSettings={onSelectSettings} */
        // eslint-disable-next-line react/jsx-no-bind
        onSelectArchived={() => {}}
        // eslint-disable-next-line react/jsx-no-bind
        onSelectContacts={() => {}}
        // eslint-disable-next-line react/jsx-no-bind
        onSelectSettings={() => {}}
        onBotMenuOpened={markBotMenuOpen}
        onBotMenuClosed={unmarkBotMenuOpen}
      />
    </DropdownMenu>
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
