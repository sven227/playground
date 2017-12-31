
const barker = (state) => ({
  bark: () => console.log('Woof, I am ' + state.name)
});

const driver = (state) => ({
  drive: () => {return state.position = state.position + state.speed}
});

const killer = (state) => ({
    kill: () => {return state.livestatus = -1}
});

const murderRobotDog = (name)  => {
  let state = {
    name,
    position: 0,
    speed: 100,
    livestatus: 0 // or -1
  }
  return Object.assign(
        {},
        barker(state),
        driver(state),
        killer(state)
    );
};

const bruno =  murderRobotDog('bruno')
bruno.bark() // "Woof, I am Bruno"
console.log(bruno.drive());
console.log(bruno.kill());