// bcs we have not used the any dependencies (bable(for next version of the js)) thats y we have to use the old syntex, as we did following 
const {createStore} = require('redux');

// this is reducer this take the state of the store as first parameter
// whenever Store called it they send the previouse state, and we woud also get the new payload with action 
// so, with previouse state(old) and payload(new), we do some opration thats y it called reducer (bcs it has (old and new state))

const intialState = {
    age : 21
}
const myReducer = (state = intialState, action) =>{  //with es5 we also pass the default parameter as well for first time, and after that whenever store will call it they give it their state


    const newState = {...state}  //in react we can not mutate the state directally and redux also not mutate the state directally
    // and seconed time when reducer call will sent the theri state and we can not the mutate it directally.

    if(action.type === 'addAge1'){
        // console.log("ali")
        newState.age = newState.age + action.val;
        // return newState  
        //now reducer take the new state (bcs this is reducer (bcs Store send the previouse state, and we woud also get the new payload with action 
        // so, with previouse state(old) and payload(new), we do some opration thats y it called reducer (bcs it has (old and new state))))
    }else if(action.type === 'addAge3'){
        newState.age = newState.age + action.val;
        // return newState; 
    }else if(action.type === 'subAge2'){
        newState.age = newState.age - action.val;
        // return newState 
    }

    return newState //if type not match we send the same state
}

const Store = createStore(myReducer)

// store has the func dispatch that take the parameter as a ja object
// this object will go through the all reducer func of the store as a seconed parameter


// this will work bcs we have called it before the dispatch()
Store.subscribe( ()=>console.log(`ali `+Store.getState() ) );
Store.subscribe( ()=>console.log(`ali `+JSON.stringify(Store.getState() )) ); 
Store.dispatch({type : "addAge1", val : 1})
console.log(Store.getState())
Store.dispatch({type : "addAge3", val : 3})
console.log(Store.getState())
Store.dispatch({type : "subAge2", val : 2})
console.log(Store.getState())


// // this will not be work bcs we have called it after the dispatch()
// Store.subscribe( ()=>console.log(`ali `+Store.getState() ) ); 