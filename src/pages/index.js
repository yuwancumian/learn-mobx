import React from 'react'
import styles from './index.css';
import {observable, action} from 'mobx';
import { observer } from 'mobx-react';
class MyState {
  @observable count =0;
  @action add = () => {
    this.count +=1
  }
  @action minus = () => {
    this.count -=1
  }
}
const newState = new MyState();

@observer
class Index extends React.Component {


  render() {
    return (
      <div className={styles.normal}>
        <div className={styles.welcome} />
        <button onClick={newState.add}>add</button>
        {newState.count}
        <button onClick={newState.minus}>minus</button>
        <ul className={styles.list}>
          <li>To get started, edit <code>src/pages/index.js</code> and save to reload.</li>

          <li>
            <a href="/mobx">
              mobx
            </a>
          </li>
        </ul>
      </div>
    );
  }
}
export default Index;
