import type { FC } from '../../lib/teact/teact';
import React, {
  memo, useCallback, useEffect, useRef, useState,
} from '../../lib/teact/teact';

import type { MenuItemContextAction } from './ListItem';

import buildClassName from '../../util/buildClassName';
import captureEnterKeyListener from '../../util/captureEnterKeyListener';
import captureEscKeyListener from '../../util/captureEscKeyListener';
import { ChatAnimationTypes } from '../left/main/hooks';

import Icon from '../common/icons/Icon';
import Chat from '../left/main/Chat';
import ListItem from './ListItem';

import styles from './InlineFolder.module.scss';

type OwnProps = {
  orderedIds?: string[];
  children?: React.ReactNode;
  isSection?: boolean;
  isSidebarTab?: boolean;
  isSelected?: boolean;
  isEditing?: boolean;
  title?: string;
  isMocked?: boolean;
  className?: string;
  contextActions?: MenuItemContextAction[];
  onAddClick?: NoneToVoidFunction;
  onMoreClick?: NoneToVoidFunction;
  onEditFinish?: (newTitle: string) => void;
  onEditCancel?: NoneToVoidFunction;
};

const InlineFolder: FC<OwnProps> = ({
  orderedIds,
  children,
  isSection,
  isSidebarTab,
  isSelected,
  title,
  isMocked,
  isEditing,
  contextActions,
  onAddClick,
  onMoreClick,
  onEditFinish,
  onEditCancel,
}) => {
  // eslint-disable-next-line no-null/no-null
  const listItemRef = useRef<HTMLDivElement>(null);
  // eslint-disable-next-line no-null/no-null
  const editingTitleRef = useRef<HTMLInputElement>(null);
  const [onEditTitleValue, setOnEditTitleValue] = useState(title || '');

  const [isExpanded, setIsExpanded] = useState(isSection);

  const handleToggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  const mockChats = () => {
    return (
      <>
        <Chat
          chatId="-1001307778786"
          orderDiff={0}
          animationType={ChatAnimationTypes.None}
          isStatic
          className={styles.chat}
          avatarSize="tiny"
        />
        <Chat
          chatId="-1001322215945"
          orderDiff={0}
          animationType={ChatAnimationTypes.None}
          isStatic
          className={styles.chat}
          avatarSize="tiny"
        />
      </>
    );
  };

  const handleAddClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    onAddClick?.();
  }, [onAddClick]);

  const handleMoreClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    if (listItemRef.current) {
      const rect = listItemRef.current.getBoundingClientRect();
      const event = new MouseEvent('contextmenu', {
        bubbles: true,
        cancelable: true,
        view: window,
        clientX: rect.right,
        clientY: rect.top + 16,
      });

      listItemRef.current.dispatchEvent(event);
    }

    onMoreClick?.();
  }, [onMoreClick]);

  useEffect(() => {
    if (isEditing && editingTitleRef.current) {
      editingTitleRef.current.focus();
    }
  }, [isEditing]);

  if (isEditing) {
    captureEscKeyListener(() => onEditCancel?.());
    captureEnterKeyListener(() => onEditFinish?.(onEditTitleValue));

    const leftIconClassName = buildClassName(
      styles.editingLeftIcon,
      !isSidebarTab && styles.rotate,
    );

    return (
      <div className={styles.editingContainer}>
        <Icon className={leftIconClassName} name={isSidebarTab ? 'lamp' : 'down'} />
        <input
          ref={editingTitleRef}
          className={styles.editingTitleInput}
          value={onEditTitleValue}
          onChange={(e) => setOnEditTitleValue(e.currentTarget.value)}
        />
      </div>
    );
  }

  const headerClassname = buildClassName(
    styles.header,
    isSelected && styles.selected,
    isSection && styles.section,
    isSidebarTab && styles.sidebarTab,
  );

  const innerClassName = buildClassName(
    styles.inner,
    !isSection && styles.insetInner,
  );

  const renderInner = () => {
    return (
      <div className={innerClassName}>
        {isMocked && mockChats()}
        {orderedIds && orderedIds.map((id) => (
          <Chat
            chatId={id}
            orderDiff={0}
            animationType={ChatAnimationTypes.None}
            isStatic
            className={styles.chat}
            avatarSize="tiny"
          />
        ))}
        {children}
      </div>
    );
  };

  return (
    <ListItem
      isStatic
      withPortalForMenu
      className={styles.listItem}
      contextActions={contextActions}
      // eslint-disable-next-line react/jsx-no-bind
      onClick={() => {}}
    >
      <div className={styles.container} ref={listItemRef}>
        <div className={headerClassname} onClick={handleToggleExpanded}>
          {!isSection && <Icon name="down" className={!isExpanded && styles.rotate} />}
          <div className={styles.title}>{title}</div>
          <div className={styles.actions}>
            <Icon
              name="more"
              className={styles.rotate}
              onClick={handleMoreClick}
            />
            <Icon
              name="add"
              onClick={handleAddClick}
            />
          </div>
        </div>
        {isExpanded && renderInner()}
      </div>
    </ListItem>

  );
};

export default memo(InlineFolder);
