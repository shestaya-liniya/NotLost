import type { ApiWorkspace } from '../../api/notlost/types';
import type { GlobalState } from '../types';

export function selectActiveWorkspace<T extends GlobalState>(global: T): ApiWorkspace | undefined {
  const activeId = global.workspaces.activeId;
  return global.workspaces.byOrder.find((w) => w.id === activeId);
}
