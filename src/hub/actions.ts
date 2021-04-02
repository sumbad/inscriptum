import { PageAction } from 'new-components/page/page.action';
import { AuthAction } from './auth/auth.action';
import { DraftAction } from '../new-components/draft/draft.action';
import { MarginAction } from 'new-components/margin/margin.action';

export type HubAction =
  | AuthAction //
  | PageAction
  | DraftAction
  | MarginAction;
