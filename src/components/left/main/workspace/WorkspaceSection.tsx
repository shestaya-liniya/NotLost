import type { FC } from '@teact';
import { memo, useCallback, useMemo, useState } from '@teact';
import { getActions } from '../../../../global';

import type { ApiSection } from '../../../../api/notlost/types';
import type { MenuItemContextAction } from '../../../ui/ListItem';

import { compact } from '../../../../util/iteratees';

import Accordion from '../../../ui/accordion/Accordion';
import AccordionSavedState from '../../../ui/accordion/AccordionSavedState';

import styles from './WorkspaceSection.module.scss';

type OwnProps = {
  section: ApiSection;
  isHighlighted?: boolean;
  selectForAddingChats?: NoneToVoidFunction;
};

const WorkspaceSection: FC<OwnProps> = ({
  section,
  isHighlighted,
  selectForAddingChats,
},
) => {
  const { renameWorkspaceSection, deleteSectionFromWorkspace } = getActions();
  const [isRenaming, setIsRenaming] = useState(false);

  const handleRename = useCallback((newTitle: string) => {
    if (newTitle.length === 0) return;

    renameWorkspaceSection({
      sectionId: section.id,
      newTitle,
    });
    setIsRenaming(false);
  }, [section.id]);

  const handleDelete = useCallback(() => {
    deleteSectionFromWorkspace({
      sectionId: section.id,
    });
  }, [section.id]);

  const contextActions = useMemo(() => {
    const actionRename = {
      title: 'Rename',
      icon: 'edit',
      handler: () => {
        setIsRenaming(true);
      },
    } satisfies MenuItemContextAction;

    const actionDelete = {
      title: 'Delete',
      icon: 'delete',
      destructive: true,
      handler: handleDelete,
    } satisfies MenuItemContextAction;

    return compact([actionRename, actionDelete]);
  }, [handleDelete]);

  return (

    <AccordionSavedState id={section.id}>
      {({ isExpandedByDefault, onChange }) => (
        <Accordion
          key={section.id}
          title={section.title}
          chatIds={section.chatIds}
          isHighlighted={isHighlighted}
          isExpandedByDefault={isExpandedByDefault}
          onChange={onChange}
          isRenaming={isRenaming}
          onAddClick={selectForAddingChats}
          onRenameFinish={handleRename}
          onRenameCancel={() => setIsRenaming(false)}
          contextActions={contextActions}
          className={styles.accordion}
        />
      )}
    </AccordionSavedState>
  );
};

export default memo(WorkspaceSection);
