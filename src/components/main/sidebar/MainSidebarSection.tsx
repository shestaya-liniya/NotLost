import { type FC, memo, type TeactNode } from '@teact';

import Accordion from '../../ui/accordion/Accordion';
import AccordionSavedState from '../../ui/accordion/AccordionSavedState';

import styles from './MainSidebar.module.scss';

type OwnProps = {
  title: string;
  children: TeactNode;
};

const MainSidebarSection: FC<OwnProps> = ({
  title,
  children,
}) => {
  return (
    <AccordionSavedState id={`main-sidebar-section-${title}`}>
      {({ isExpandedByDefault, onChange }) => (
        <Accordion
          title={title}
          key={`main-sidebar-section-${title}`}
          isExpandedByDefault={isExpandedByDefault}
          onChange={onChange}
          className={styles.SidebarAccordionSection}
        >
          {children}
        </Accordion>
      )}
    </AccordionSavedState>
  );
};

export default memo(MainSidebarSection);
