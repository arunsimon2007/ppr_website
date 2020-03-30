import { combineEpics } from "redux-observable"

import { spinnerEpics } from "./spinner/index"

const allEpics = Object.values({
  ...spinnerEpics
})

export default combineEpics(...allEpics)
