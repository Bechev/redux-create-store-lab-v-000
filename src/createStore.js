export default function createStore(reducer) {

  function dispatch(action){
    state = changeCount(state, action)
  }

  function getState(){
    return state;
  }

  return {
    dispatch,
    getState
  }
}

function render() {
  const container = document.getElementById('container');
}
