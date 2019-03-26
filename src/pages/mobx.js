import { observable, action } from "mobx";
import { observer, inject } from "mobx-react";

// import appState from './stores/store'
// 这里不需要导入 appState，在provider里面导入
// create State object
// let appState = observable({ timer: 0 });

// // define action
// setInterval(
//     action(() => {
//         appState.timer += 1;
//     }),
//     1000
// );

// appState.resetTimer = action(() => {
//     appState.timer = 0;
// });

// create observer
let App = inject("appState")(observer(({ appState }) => {
    return (
        <div className="App">
            <h1>Time past: {appState.count}</h1>
            <button onClick={appState.add}>add timer</button>
        </div>
    );
}));


export default App;
