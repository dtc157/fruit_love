import {
    TEST,
    USER_INFO,
    RECEIVE_LIST
} from './mutation-types'

export default {
    [TEST](state,v){
        state.TEST=v
    },
    [USER_INFO](state,v){
        state.USER_INFO=v
    }, 
    [RECEIVE_LIST](state,{list_data}){
        state.list=list_data
    }
}