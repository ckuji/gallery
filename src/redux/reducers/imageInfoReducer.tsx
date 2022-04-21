const initialState: any = {
  info: {},
  loadShow: true,
}

export const Info = (state = initialState, action: any) => {
  switch (action.type) {
    case "SET_IMAGE_INFO": {
      return {
        ...state,
        info: action.payload,
      }
    }
    case "SET_PRELOADER_FOR_INFO_FALSE": {
      return {
        ...state,
        loadShow: false,
      }
    }
    default:
      return state
  }
}
