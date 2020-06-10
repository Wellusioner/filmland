import { createRoutine } from 'redux-saga-routines'

const FETCH_ALL = createRoutine('FETCH_ALL');
const FETCH_ONE = createRoutine('FETCH_ONE');
const FETCH_SLIDER = createRoutine('FETCH_SLIDER');

export default {
    FETCH_ALL,
    FETCH_ONE,
    FETCH_SLIDER
}