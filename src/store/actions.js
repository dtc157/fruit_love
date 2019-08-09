import {RECEIVE_LIST} from './mutation-types'

export default{
    getList({commit}){
        //触发对应的mutation
        commit(RECEIVE_LIST,listdata)
    }
}