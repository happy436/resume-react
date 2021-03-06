const CHANGE_THEME = "CHANGE_THEME"

const initialState = {
    themes: ["dark", "light"],
    activeTheme: 0
}

const themeReducer = (state = initialState, action) => {
    switch (action.type) {
    case CHANGE_THEME:
        if (state.activeTheme === 0) {
            state.activeTheme++
            return state
        } else {
            state.activeTheme = 0
            return state
        }
    default:
        return state
    }
}

export const themeChangeActionCreator = () => {
    return {
        type: CHANGE_THEME
    }
}

export default themeReducer
