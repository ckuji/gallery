const initialState: any = {
  info: {},
}

export const Info = (state = initialState, action: any) => {
  switch (action.type) {
    case "SET_IMAGE_INFO": {
      return {
        ...state,
        info: action.payload,
      }
    }
    default:
      return state
  }
}
