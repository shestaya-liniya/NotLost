import type { FC, TeactNode } from '@teact';
import { memo, useCallback, useEffect } from '@teact';
import { getActions, withGlobal } from '../../../global';

type OwnProps = {
  id: string;
  isInitiallyExpanded?: boolean;
  children: (props: {
    isExpandedByDefault: boolean;
    onChange: (isExpanded: boolean) => void;
  }) => TeactNode;
};

type StateProps = {
  isExpandedInState: boolean;
};

const AccordionSavedState: FC<OwnProps & StateProps> = ({
  id,
  children,
  isInitiallyExpanded = true,
  isExpandedInState,
}) => {
  const { persistExpandedState } = getActions();

  const handleUpdateIsExpandedInState = useCallback((isExpanded: boolean) => {
    persistExpandedState({
      id,
      isExpanded,
    });
  }, [id]);

  useEffect(() => {
    if (isExpandedInState === undefined) {
      persistExpandedState({
        id,
        isExpanded: isInitiallyExpanded,
      });
    }
  }, [isExpandedInState, id, isInitiallyExpanded]);

  return children({
    isExpandedByDefault: isExpandedInState,
    onChange: handleUpdateIsExpandedInState,
  });
};

export default memo(withGlobal<OwnProps>(
  (global, { id, isInitiallyExpanded = true }): StateProps => {
    const isExpandedInStateOrFallback = global.expandedState[id] ?? isInitiallyExpanded;

    return {
      isExpandedInState: isExpandedInStateOrFallback,
    };
  },
)(AccordionSavedState));
