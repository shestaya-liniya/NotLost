import type { FC } from '@teact';
import { memo, useState } from '@teact';
import { getActions, withGlobal } from '../../../global';

import type { ChatListCategory, ChatListFolderType } from './ChatList';

import Icon from '../../common/icons/Icon';
import Menu from '../../ui/Menu';
import MenuItem from '../../ui/MenuItem';
import SearchInput from '../../ui/SearchInput';
import Switcher from '../../ui/Switcher';
import ChatList from './ChatList';

import styles from './FilteredChatList.module.scss';

type OwnProps = {
  folderType?: ChatListFolderType;
  category?: ChatListCategory;
};

type StateProps = {
  shouldShowLastMessage: boolean;
};

const FilteredChatList: FC<OwnProps & StateProps> = ({
  folderType = 'all',
  category,
  shouldShowLastMessage,
}) => {
  const { toggleShowLastMessage } = getActions();
  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);
  return (
    <div className={styles.container}>
      <div className={styles.searchContainer}>
        <SearchInput className={styles.search} onChange={() => {}} />
        <div className={styles.iconContainer} onClick={() => setIsFilterMenuOpen(true)}>
          <Icon name="filter" className={styles.settingsIcon} />
        </div>
        <Menu
          id="attach-menu-controls"
          isOpen={isFilterMenuOpen}
          positionX="right"
          positionY="top"
          onClose={() => setIsFilterMenuOpen(false)}
          className={styles.filterMenu}
          onCloseAnimationEnd={() => setIsFilterMenuOpen(false)}
          ariaLabelledBy="attach-menu-button"
        >
          <MenuItem
            key="comments"
            icon="unread"
            onClick={() => toggleShowLastMessage()}
          >
            <span className="list-item-ellipsis" style="margin-right: 1.25rem;">
              Show last message
            </span>
            <Switcher
              id="last-message"
              label="yo"
              checked={shouldShowLastMessage}
              onChange={() => toggleShowLastMessage()}
              noAnimation
            />
          </MenuItem>
        </Menu>
      </div>
      <ChatList
        isActive
        folderType={folderType}
        category={category}
        shouldShowLastMessage={shouldShowLastMessage}
      />
    </div>
  );
};

export default memo(withGlobal(
  (global): StateProps => {
    return {
      shouldShowLastMessage: global.chatFilters.shouldShowLastMessage,
    };
  },
)(FilteredChatList));
