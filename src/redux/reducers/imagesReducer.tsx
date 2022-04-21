const initialState: any = {
  category1: [],
  category2: [],
  category3: [],
  category4: [],
  preloaderShow: true,
}

export const Images = (state = initialState, action: any) => {
  switch (action.type) {
    case "SET_IMAGES_TO_CAT_1": {
      return {
        ...state,
        category1: action.payload,
      }
    }
    case "SET_IMAGES_TO_CAT_2": {
      return {
        ...state,
        category2: action.payload,
      }
    }
    case "SET_IMAGES_TO_CAT_3": {
      return {
        ...state,
        category3: action.payload,
      }
    }
    case "SET_IMAGES_TO_CAT_4": {
      return {
        ...state,
        category4: action.payload,
      }
    }
    case "PRELOADER_TO_FALSE": {
      return {
        ...state,
        preloaderShow: false,
      }
    }
    default:
      return state
  }
}
