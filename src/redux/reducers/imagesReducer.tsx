const initialState: any = {
  images: {
    category1: [],
    category2: [],
    category3: [],
    category4: [],
  },
}

export const Images = (state = initialState, action: any) => {
  switch (action.type) {
    case "SET_IMAGES_TO_CAT_1": {
      return {
        ...state,
        images: [...state.images.category1, ...action.payload],
      }
    }
    default:
      return state
  }
}
