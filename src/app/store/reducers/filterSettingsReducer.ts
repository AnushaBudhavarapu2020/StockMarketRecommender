import { FilterSettings } from 'src/app/model/filterSettings';

const initialState: FilterSettings = new FilterSettings();

let filterSettingsReducer: Reducer<FilterSettings> = (state: FilterSettings, action: Action) => {
    if(!state)
        state= initialState;
    if (action.type === 'SETMODEL'){
        state.model = action.payload;
        state.CalculateRecommendation = false;
        state.fetched = false;
    }
    else if (action.type === 'SETSTART'){
        state.startDate = action.payload == null ? undefined : action.payload;
        state.fetched = false;
        state.CalculateRecommendation = false;
    }
    else if (action.type === 'SETEND'){
        state.endDate = action.payload == null ? undefined : action.payload;
        state.fetched = false;
        state.CalculateRecommendation = false;
    }else if (action.type === 'SETSOCIAL') {
        state.socialMedia = action.payload;
        state.fetched = false;
        state.CalculateRecommendation = false;
    }else if (action.type === 'SETVALUES') {
        state.model.Values = action.payload;
        state.fetched = true;
        state.CalculateRecommendation = true;
    }else if(action.type === 'SETALGO'){
        state.Algorithm = action.payload;
        state.fetched = true;
        state.CalculateRecommendation = true;
    }
    return {...state};
}

export default filterSettingsReducer;
