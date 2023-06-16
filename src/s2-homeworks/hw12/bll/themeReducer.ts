export type ThemeStateType = {
    themeId: number
}

const initState: ThemeStateType = {
    themeId: 1,
}

export const themeReducer = (state = initState, action: ActionsTypes): ThemeStateType => { // fix any
    switch (action.type) {
        // дописать
        case 'SET_THEME_ID':
            return {...state, themeId: action.id}
        default:
            return state
    }
}

type ActionsTypes = ReturnType<typeof changeThemeId>

type changeThemeIdType = {type: string, id: number}
export const changeThemeId = (id: number): changeThemeIdType => ({ type: 'SET_THEME_ID', id } as const) // fix any
