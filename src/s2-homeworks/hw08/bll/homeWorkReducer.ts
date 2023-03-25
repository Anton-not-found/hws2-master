

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

type StateType = {
    _id: number
    name: string
    age: number
}

export const homeWorkReducer = (state: StateType[], action: ActionType): StateType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            return [...state].sort((a, b) => action.payload === 'up' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name))
            // need to fix
        }
        case 'check': {
            return state.filter(el => el.age >= 18)

            // need to fix
        }
        default:
            return state
    }
}



