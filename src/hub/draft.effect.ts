import { DraftAction, DRAFT_ACTION } from 'new-components/draft/draft.action';
import hub from 'hub';
import { from, of } from 'rxjs';
import { map, catchError, mergeMap, share } from 'rxjs/operators';
import { deletePage } from 'services/draft.service';
import { filterByActions } from 'utils/operators';

// export default dispatcher$.pipe(
//   filterByActions<DraftAction>(DRAFT_ACTION),
//   mergeMap((action) => {
//     switch (action.type) {
//       case DRAFT_ACTION.DELETE_PAGE:
//         debugger;
//         return from(deletePage(action.payload.id, action.payload.pageId, action.payload.order)).pipe(
//           map(
//             (payload) =>
//               ({
//                 type: DRAFT_ACTION.DELETE_PAGE_DONE,
//                 payload: {
//                   id: action.payload.id,
//                   deletedPage: payload.deletedPage,
//                   updatedPages: payload.updatedPages,
//                 },
//               } as DraftAction)
//           ),
//           catchError((error) =>
//             of({
//               type: DRAFT_ACTION.DELETE_PAGE_FAIL,
//               payload: {
//                 id: action.payload.id,
//                 pageId: action.payload.pageId,
//                 error,
//               },
//             } as DraftAction)
//           )
//         );
//       default:
//         return of(action);
//     }
//   }),
//   share()
// );
