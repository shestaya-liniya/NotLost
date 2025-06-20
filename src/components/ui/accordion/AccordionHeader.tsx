import type { FC } from '@teact';
import { memo, useCallback } from '@teact';

import type { IconName } from '../../../types/icons';

import buildClassName from '../../../util/buildClassName';

import Icon from '../../common/icons/Icon';
import AccordionHeaderOnRename from './AccordionHeaderOnRename';

import './Accordion.scss';

type OwnProps = {
  title?: string;
  leftIconName?: IconName;
  isExpanded?: boolean;
  isHighlighted?: boolean;
  isRenaming?: boolean;
  toggleExpanded: NoneToVoidFunction;
  onAddClick?: NoneToVoidFunction;
  onMoreClick?: NoneToVoidFunction;
  onRenameCancel?: NoneToVoidFunction;
  onRenameFinish?: (value: string) => void;
};

const AccordionHeader: FC<OwnProps> = ({
  title,
  isRenaming,
  isExpanded,
  isHighlighted,
  leftIconName,
  toggleExpanded,
  onAddClick,
  onMoreClick,
  onRenameCancel,
  onRenameFinish,
}) => {
  const handleAddClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    onAddClick?.();
  }, [onAddClick]);

  const handleMoreClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    onMoreClick?.();
  }, [onMoreClick]);

  if (isRenaming) {
    return (
      <AccordionHeaderOnRename
        leftIconName={leftIconName}
        title={title}
        onRenameCancel={onRenameCancel}
        onRenameFinish={onRenameFinish}
      />
    );
  }

  const headerClassName = buildClassName(
    'AccordionHeader',
    isHighlighted && 'highlighted',
  );

  return (
    <div
      className={headerClassName}
      onClick={toggleExpanded}
    >
      {leftIconName && (
        <Icon
          name={leftIconName}
          className={buildClassName((leftIconName === 'down' && !isExpanded) && 'rotateDownIcon')}
        />
      )}
      {!leftIconName && !isExpanded && (
        <Icon
          name="down"
          className="rotateDownIcon"
        />
      )}
      <div className="title">{title}</div>
      <div className="actions">
        {onMoreClick && (
          <Icon
            name="more"
            className="rotateDownIcon"
            onClick={handleMoreClick}
          />
        )}

        {onAddClick && (
          <Icon
            name="add"
            onClick={handleAddClick}
          />
        )}
      </div>
    </div>
  );
};

export default memo(AccordionHeader);
