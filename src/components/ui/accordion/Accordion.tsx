import type { FC, TeactNode } from '@teact';
import { memo, useCallback, useEffect, useState } from '@teact';

import type { IconName } from '../../../types/icons';
import type { MenuItemContextAction } from '../ListItem';

import buildClassName from '../../../util/buildClassName';

import ListItem from '../ListItem';
import AccordionHeader from './AccordionHeader';

import './Accordion.scss';

type OwnProps = {
  title?: string;
  children?: TeactNode;
  leftIconName?: IconName;
  isHighlighted?: boolean;
  isExpandedByDefault?: boolean;
  isRenaming?: boolean;
  withInnerPadding?: boolean;
  contextActions?: MenuItemContextAction[];
  placeholder?: string;
  onChange?: (isExpanded: boolean) => void;
  onAddClick?: NoneToVoidFunction;
  onMoreClick?: NoneToVoidFunction;
  onRenameFinish?: (newTitle: string) => void;
  onRenameCancel?: NoneToVoidFunction;
  className?: string;
  onHeaderMouseEnter?: NoneToVoidFunction;
  onHeaderMouseLeave?: NoneToVoidFunction;
};

const Accordion: FC<OwnProps> = ({
  title,
  children,
  isExpandedByDefault = false,
  isRenaming,
  isHighlighted,
  leftIconName,
  contextActions,
  withInnerPadding,
  placeholder,
  onChange,
  onAddClick,
  onMoreClick,
  onRenameFinish,
  onRenameCancel,
  className,
  onHeaderMouseEnter,
  onHeaderMouseLeave,
}) => {
  const [isExpanded, setIsExpanded] = useState(isExpandedByDefault);

  const handleToggleExpanded = useCallback(() => {
    setIsExpanded(!isExpanded);
  }, [isExpanded]);

  useEffect(() => {
    onChange?.(isExpanded);
  }, [isExpanded, onChange]);

  const renderInner = () => {
    const innerClassName = buildClassName(
      'AccordionInner',
      isExpanded && 'expanded',
      withInnerPadding && 'withPadding',
    );
    return (
      <div className={innerClassName}>
        {children}
        {(!children || (Array.isArray(children) && children.length === 0)) && (
          <div className="placeholder">
            No items in
            {' '}
            {title}
          </div>
        )}
      </div>
    );
  };

  const accordionClassName = buildClassName(
    'Accordion',
    className,
  );

  return (

    <div className={accordionClassName}>
      <ListItem
        isStatic
        withPortalForMenu
        contextActions={contextActions}
        onClick={() => {}}
      >
        <AccordionHeader
          title={title}
          leftIconName={leftIconName}
          isHighlighted={isHighlighted}
          isExpanded={isExpanded}
          isRenaming={isRenaming}
          toggleExpanded={handleToggleExpanded}
          placeholder={placeholder}
          onAddClick={onAddClick}
          onMoreClick={onMoreClick}
          onRenameCancel={onRenameCancel}
          onRenameFinish={onRenameFinish}
          onMouseEnter={() => onHeaderMouseEnter?.()}
          onMouseLeave={() => onHeaderMouseLeave?.()}
        />
      </ListItem>
      {isExpanded && renderInner()}
    </div>
  );
};

export default memo(Accordion);
