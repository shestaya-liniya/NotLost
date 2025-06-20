import type { FC } from '../../../../lib/teact/teact';
import {
  memo, useCallback, useEffect, useMemo, useState,
} from '../../../../lib/teact/teact';
import { getActions } from '../../../../global';

import type { ActiveEntity, ActiveEntityType } from './Workspace';

import { ALL_FOLDER_ID } from '../../../../config';
import { filterPeersByQuery } from '../../../../global/helpers/peers';
import buildClassName from '../../../../util/buildClassName';
import { unique } from '../../../../util/iteratees';

import { useFolderManagerForOrderedIds } from '../../../../hooks/useFolderManager';

import Icon from '../../../common/icons/Icon';
import PeerPicker from '../../../common/pickers/PeerPicker';
import Button from '../../../ui/Button';
import Portal from '../../../ui/Portal';
import SearchInput from '../../../ui/SearchInput';
import Transition from '../../../ui/Transition';

import styles from './WorkspaceRightSidebar.module.scss';

type OwnProps = {
  activeEntity?: ActiveEntity;
  activeEntityType?: ActiveEntityType;
  onClose?: NoneToVoidFunction;
  handleStartAddingNewSection: NoneToVoidFunction;
};

const WorkspaceRightSidebar: FC<OwnProps> = ({
  activeEntity,
  activeEntityType,
  onClose,
  handleStartAddingNewSection,
}) => {
  const { updateWorkspaceChats, updateSectionChats } = getActions();
  const [searchValue, setSearchValue] = useState('');

  const folderAllOrderedIds = useFolderManagerForOrderedIds(ALL_FOLDER_ID);

  const displayedIds = useMemo(() => {
    const chatIds = folderAllOrderedIds || [];
    return unique(
      filterPeersByQuery({ ids: chatIds, query: searchValue, type: 'chat' }),
    );
  }, [folderAllOrderedIds, searchValue]);

  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (activeEntity) {
      setIsAnimating(true);
      return undefined;
    } else {
      const timeout = setTimeout(() => {
        setIsAnimating(false);
      }, 300);

      return () => clearTimeout(timeout);
    }
  }, [activeEntity]);

  const handleSelectedIdsChange = useCallback((newSelectedIds: string[]) => {
    if (!activeEntity || !activeEntityType) return;

    switch (activeEntityType) {
      case 'workspace': {
        updateWorkspaceChats({
          workspaceId: activeEntity.id,
          chatIds: newSelectedIds,
        });
        break;
      }
      case 'section': {
        updateSectionChats({
          sectionId: activeEntity.id,
          chatIds: newSelectedIds,
        });
        break;
      }

      default:
        break;
    }
  }, [activeEntity, activeEntityType, updateWorkspaceChats, updateSectionChats]);

  const renderCreateNewBlockInside = () => {
    // add a section in workspace, or add a folder in section

    switch (activeEntityType) {
      case 'workspace': {
        return (
          <Button
            onClick={handleStartAddingNewSection}
            size="tiny"
            color="bezeled"
            noForcedUpperCase
          >
            Create new section
          </Button>
        );
      }

      case 'section': {
        return (
          <Button
            size="tiny"
            color="bezeled"
            noForcedUpperCase
          >
            Create new folder
          </Button>
        );
      }
    }

    return undefined;
  };

  const containerClassName = buildClassName(styles.container);

  return (
    <Portal containerSelector="#middle-column-left-sidebar-portals" className={styles.portal}>
      <Transition
        name="slideFade"
        direction="inverse"
        activeKey={activeEntity ? 1 : 0}
        className={isAnimating ? styles.transitionContainer : undefined}
      >
        <div className={containerClassName}>
          {activeEntity && (
            <div className={styles.sidebar}>
              <div className={styles.header}>
                <div className={styles.headerTitle}>
                  {activeEntity.title}
                </div>
                <Icon name="close" className={styles.closeButton} onClick={onClose} />
              </div>
              <SearchInput onChange={setSearchValue} />
              <div style="padding: 0.5rem 0">
                {renderCreateNewBlockInside()}
              </div>

              <PeerPicker
                itemIds={displayedIds}
                selectedIds={activeEntity.chatIds}
                filterValue={searchValue}
                categoryPlaceholderKey="FilterChatTypes"
                searchInputId="new-group-picker-search"
                withDefaultPadding
                withPeerTypes
                allowMultiple
                itemInputType="checkbox"
                className={styles.picker}
                onSelectedIdsChange={handleSelectedIdsChange}
              />
            </div>
          )}
          <div className={styles.backdrop} onClick={onClose} />
        </div>
      </Transition>
    </Portal>
  );
};

export default memo(WorkspaceRightSidebar);
