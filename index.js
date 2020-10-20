console.log('file loaded...');
const arr= [1, 2, 3, 4]
// console.log(arr.reduce((acc, current) => acc + current))
const letArr = ['r', 'e', 'd', 'u', 'c', 'e']
// console.log(letArr.reduce((acc, current) => acc + current))
const stateReducer = (state, action) => {
    switch(action.type){
        case 'ACTION_ADD':
            return state + action.item;
        case 'ACTION_RESET':
            return '';
        default:
            return state;
    }
}
let wordStore;
wordStore = stateReducer(wordStore, {type: 'ACTION_RESET'})
wordStore = stateReducer(wordStore, {type: 'ACTION_ADD', item: 'r'})
wordStore = stateReducer(wordStore, {type: 'ACTION_ADD', item: 'e'})
wordStore = stateReducer(wordStore, {type: 'ACTION_ADD', item: 'd'})
wordStore = stateReducer(wordStore, {type: 'ACTION_ADD', item: 'u'})
wordStore = stateReducer(wordStore, {type: 'ACTION_ADD', item: 'x'})

console.log(wordStore)