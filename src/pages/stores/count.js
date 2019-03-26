import {observable, action} from 'mobx';
class MyState {
  @observable count = 6;
  @action add = () => {
    this.count +=1
  }
  @action minus = () => {
    this.count -=1
  }
}
export default new MyState();
