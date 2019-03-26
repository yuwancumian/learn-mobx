import styles from './index.css';
import { Provider } from 'mobx-react';
import myState from '../pages/stores/count';

function BasicLayout(props) {
  return (
    <Provider appState={myState}>
      <div className={styles.normal}>
        <h1 className={styles.title}>Yay! Welcome to umi!</h1>
        { props.children }
      </div>
    </Provider>
  );
}

export default BasicLayout;
