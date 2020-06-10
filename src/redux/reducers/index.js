import { combineReducers } from 'redux'
import fetchAll from './fetchAll'
import fetchOne from './fetchOne'
import fetchSlider from './fetchSlider'

export default combineReducers({
    list: fetchAll,
    single: fetchOne,
    slider: fetchSlider
});