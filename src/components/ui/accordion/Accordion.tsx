import type { FC, TeactNode } from '@teact';
import { memo, useCallback, useEffect, useState } from '@teact';

import type { IconName } from '../../../types/icons';
import type { MenuItemContextAction } from '../ListItem';

import buildClassName from '../../../util/buildClassName';

import { ChatAnimationTypes } from '../../left/main/hooks/useChatAnimationType';

import Chat from '../../left/main/Chat';
import ListItem from '../ListItem';
import AccordionHeader from './AccordionHeader';

import './Accordion.scss';

type OwnProps = {
  title?: string;
  chatIds?: string[];
  children?: TeactNode;
  leftIconName?: IconName;
  isHighlighted?: boolean;
  isExpandedByDefault?: boolean;
  isRenaming?: boolean;
  withInnerPadding?: boolean;
  contextActions?: MenuItemContextAction[];
  onChange?: (isExpanded: boolean) => void;
  onAddClick?: NoneToVoidFunction;
  onMoreClick?: NoneToVoidFunction;
  onRenameFinish?: (newTitle: string) => void;
  onRenameCancel?: NoneToVoidFunction;
  className?: string;
};

const Accordion: FC<OwnProps> = ({
  title,
  chatIds,
  children,
  isExpandedByDefault = false,
  isRenaming,
  isHighlighted,
  leftIconName,
  contextActions,
  withInnerPadding,
  onChange,
  onAddClick,
  onMoreClick,
  onRenameFinish,
  onRenameCancel,
  className,
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
        {chatIds && chatIds.map((id) => (
          <Chat
            chatId={id}
            orderDiff={0}
            animationType={ChatAnimationTypes.Opacity}
            isStatic
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
      contextActions={contextActions}
      onClick={() => {}}
      className={className}
    >
      <div className="Accordion">
        <AccordionHeader
          title={title}
          leftIconName={leftIconName}
          isHighlighted={isHighlighted}
          isExpanded={isExpanded}
          isRenaming={isRenaming}
          toggleExpanded={handleToggleExpanded}
          onAddClick={onAddClick}
          onMoreClick={onMoreClick}
          onRenameCancel={onRenameCancel}
          onRenameFinish={onRenameFinish}
        />
        {isExpanded && renderInner()}
      </div>
    </ListItem>
  );
};

export default memo(Accordion);
