import type { FC } from '../../../lib/teact/teact';
import React, {
  memo, useCallback, useEffect, useMemo, useState,
} from '../../../lib/teact/teact';
import { getActions } from '../../../global';

import type { ApiInlineFolder } from '../../../api/notlost/types';

import { ALL_FOLDER_ID } from '../../../config';
import { filterPeersByQuery } from '../../../global/helpers/peers';
import buildClassName from '../../../util/buildClassName';
import { unique } from '../../../util/iteratees';

import { useFolderManagerForOrderedIds } from '../../../hooks/useFolderManager';

import PeerPicker from '../../common/pickers/PeerPicker';
import Portal from '../../ui/Portal';
import SearchInput from '../../ui/SearchInput';
import Transition from '../../ui/Transition';

import styles from './WorkspaceRightSidebar.module.scss';

type OwnProps = {
  isOpen: boolean;
  onClose: NoneToVoidFunction;
  activeFolder?: ApiInlineFolder;
  workspaceId: string;
};

const WorkspaceRightSidebar: FC<OwnProps> = ({
  isOpen,
  onClose,
  activeFolder,
  workspaceId,
}) => {
  const { updateWorkspaceFolderChats } = getActions();
  const folderAllOrderedIds = useFolderManagerForOrderedIds(ALL_FOLDER_ID);

  const displayedIds = useMemo(() => {
    const chatIds = folderAllOrderedIds || [];
    return unique(
      filterPeersByQuery({ ids: chatIds, query: undefined, type: 'chat' }),
    );
  }, [folderAllOrderedIds]);

  const [isAnimating, setIsAnimating] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [selectedIds, setSelectedIds] = useState<string[]>(activeFolder?.chatIds || []);

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true);
    } else {
      const timeout = setTimeout(() => {
        setIsAnimating(false);
      }, 300);
      return () => clearTimeout(timeout);
    }
  }, [isOpen]);

  useEffect(() => {
    setSelectedIds(activeFolder?.chatIds || []);
  }, [activeFolder]);

  const handleAddChatToWorkspaceFolder = useCallback((ids: string[]) => {
    if (!activeFolder) return;

    updateWorkspaceFolderChats({
      workspaceId,
      folderId: activeFolder.id,
      chatIds: ids,
    });
  }, [updateWorkspaceFolderChats, workspaceId, activeFolder]);

  useEffect(() => {
    if (!activeFolder) return;
    handleAddChatToWorkspaceFolder(selectedIds);
  }, [selectedIds, handleAddChatToWorkspaceFolder, activeFolder]);

  const containerClassName = buildClassName(styles.container);

  return (
    <Portal containerSelector="#middle-column-left-sidebar-portals" className={styles.portal}>
      <Transition
        name="slideFade"
        direction="inverse"
        activeKey={isOpen ? 1 : 0}
        className={isAnimating ? styles.transitionContainer : undefined}
      >
        <div className={containerClassName}>
          {isOpen && (
            <div className={styles.sidebar}>
              <SearchInput onChange={setSearchValue} />

              <PeerPicker
                itemIds={displayedIds}
                selectedIds={selectedIds}
                filterValue={searchValue}
                categoryPlaceholderKey="FilterChatTypes"
                searchInputId="new-group-picker-search"
                withDefaultPadding
                withPeerTypes
                allowMultiple
                itemInputType="checkbox"
                className={styles.picker}
                onSelectedIdsChange={setSelectedIds}
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
