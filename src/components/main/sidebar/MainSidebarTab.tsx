import type { FC } from '../../../lib/teact/teact';
import React, { memo, useCallback } from '../../../lib/teact/teact';
import { getActions, withGlobal } from '../../../global';

import type { LeftColumnContent } from '../../../types';
import type { IconName } from '../../../types/icons';
import type { MenuItemContextAction } from '../../ui/ListItem';

import { selectTabState } from '../../../global/selectors';
import buildClassName from '../../../util/buildClassName';

import Icon from '../../common/icons/Icon';
import ListItem from '../../ui/ListItem';

import styles from './MainSidebarTab.module.scss';

type OwnProps = {
  title: string;
  leftColumnContent?: LeftColumnContent;
  iconName?: IconName;
  onClick?: NoneToVoidFunction;
  isSelected?: boolean;
  contextActions?: MenuItemContextAction[];
};

type StateProps = {
  currentLeftColumnContent: LeftColumnContent;
};

const MainSidebarTab: FC<OwnProps & StateProps> = ({
  iconName,
  title,
  onClick,
  leftColumnContent,
  currentLeftColumnContent,
  isSelected: propsIsSelected,
  contextActions,
}) => {
  const {
    openLeftColumnContent,
  } = getActions();

  const isSelected = propsIsSelected || currentLeftColumnContent === leftColumnContent;

  const handleOnClick = useCallback(() => {
    if (onClick) {
      onClick();
    } else {
      openLeftColumnContent({ contentKey: leftColumnContent });
    }
  }, [leftColumnContent, onClick]);

  const selectorClassName = buildClassName(
    styles.selector,
    isSelected && styles.selected,
  );

  return (
    <ListItem
      isStatic
      withPortalForMenu
      className={styles.listItem}
      contextActions={contextActions}
      // eslint-disable-next-line react/jsx-no-bind
      onClick={() => {}}
    >
      <div className={selectorClassName} onClick={handleOnClick}>
        {iconName && <Icon name={iconName} />}
        {title}
      </div>
    </ListItem>

  );
};

export default memo(withGlobal<OwnProps>(
  (global): StateProps => {
    const tabState = selectTabState(global);
    const leftColumnContentKey = tabState.leftColumn.contentKey;

    return {
      currentLeftColumnContent: leftColumnContentKey,
    };
  },
)(MainSidebarTab));
