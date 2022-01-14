const CHANGE_LANGUAGE = "CHANGE_LANGUAGE"

let initialState = {
    language:["RU", "ENG"],
    activeLanguage:0
}

const languageReducer = (state = initialState, action) => {
    
    switch(action.type){
        case CHANGE_LANGUAGE:
            if(state.activeLanguage < state.language.length - 1){
                state.activeLanguage++
                return state
            } else {
                state.activeLanguage = 0
                return state
            }
        default:
            return state
    }
    
}

export const languageChangeActionCreator = () => {
    return{
        type: CHANGE_LANGUAGE
    }
}

export default languageReducer