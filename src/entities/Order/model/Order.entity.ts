import {makeAutoObservable} from 'mobx'

export class Order{
    constructor(){
        makeAutoObservable(this)
    }
}