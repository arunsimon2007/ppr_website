import { mapTo } from "rxjs/operators";
import { ofType } from "redux-observable";

import * as types from "./types";

const spinnerEpic = action$ =>
  action$.pipe(
    ofType(types.SHOW_SPINNER),
    mapTo({ type: types.HIDE_SPINNER })
  );

export default spinnerEpic;
