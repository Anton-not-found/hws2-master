type LoadingType = {
    isLoading: boolean
}
const initState: LoadingType = {
    isLoading: false,
}

export const loadingReducer = (state:LoadingType = initState, action: LoadingActionType): LoadingType => { // fix any
    switch (action.type) {
        // пишет студент  // need to fix
        case "CHANGE_LOADING":
            return {
                ...state, isLoading: action.isLoading
            }
        default:
            return state
    }
}

type LoadingActionType = ReturnType<typeof loadingAC>
export const loadingAC = (isLoading: boolean) => ({
    type: 'CHANGE_LOADING',
    isLoading,
})
