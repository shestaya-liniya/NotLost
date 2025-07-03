import type { FC, TeactNode } from '@teact';
import { memo } from '@teact';

import Accordion from '../../../ui/accordion/Accordion';
import AccordionSavedState from '../../../ui/accordion/AccordionSavedState';

import styles from './WorkspaceSection.module.scss';

type OwnProps = {
  workspaceId: string;
  sectionTitle: string;
  children: TeactNode;
  onAddClick?: NoneToVoidFunction;
};

const WorkspaceSection: FC<OwnProps> = ({
  workspaceId,
  sectionTitle,
  children,
  onAddClick,
},
) => {
  const id = `accordion-saved-state-${workspaceId}-${sectionTitle}`;
  return (
    <AccordionSavedState id={id}>
      {({ isExpandedByDefault, onChange }) => (
        <Accordion
          key={id}
          onAddClick={onAddClick}
          title={sectionTitle}
          isExpandedByDefault={isExpandedByDefault}
          onChange={onChange}
          className={styles.accordion}
        >
          {children}
        </Accordion>
      )}
    </AccordionSavedState>
  );
};

export default memo(WorkspaceSection);
