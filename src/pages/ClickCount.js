import React, { Component } from "react";

class ClickCount extends Component {
  constructor(props) {
    super(props); // TODO: 把prop绑定到当前实例(Component)
    this.onClickButton = this.onClickButton.bind(this);
    this.state = { count: 0 };
  }

  onClickButton() {
    // TODO: 通过setState改变state,可以同步驱动组件进行重新渲染
    // TODO: 直接改变state的值,可以修改成功,但是不会触发k渲染
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    /**
     * TODO: jsx代码片段中,prop可以支持任意一种js支持的数据类型
     *  当prop类型不是字符串时,在jsx中必须用 {} 包起来
     */
    return (
      <div>
        <button onClick={this.onClickButton}> Click Me</button>
        <span>Click Count: {this.state.count}</span>
      </div>
    );
  }
}

export default ClickCount;
