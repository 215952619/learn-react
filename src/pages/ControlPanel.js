import React from "react";
import PropTypes from "prop-types";

class ControlPanel extends React.Component {
  constructor(props) {
    super(props);

    this.onUpdate = this.onUpdate.bind(this);

    let nameList = ["First", "Second", "Third", "fourth"];
    let valueList = [1, 11, 111];
    let totalCount = valueList.reduce((a, b) => a + b, 0);

    this.state = {
      nameList: nameList,
      valueList: valueList,
      totalCount: totalCount
    };
  }

  onUpdate(value, oldValue) {
    let totalCount = this.state.totalCount + value - oldValue;
    this.setState({ totalCount: totalCount });
  }

  componentWillMount() {
    console.log("ControlPanel component will mount");
  }

  render() {
    let { nameList, valueList, totalCount } = this.state;
    console.log("ControlPanel component is render");
    return (
      <div>
        <Counter
          name={nameList[0]}
          initValue={valueList[0]}
          onUpdate={this.onUpdate}
        ></Counter>
        <Counter
          name={nameList[1]}
          initValue={valueList[1]}
          onUpdate={this.onUpdate}
        ></Counter>
        <Counter
          name={nameList[2]}
          initValue={valueList[2]}
          onUpdate={this.onUpdate}
        ></Counter>
        <Counter
          name={nameList[3]}
          initValue={valueList[3]}
          onUpdate={this.onUpdate}
        ></Counter>
        <hr />
        <button onClick={() => this.forceUpdate()}>reload</button>
        <p>total count: {totalCount}</p>
      </div>
    );
  }

  componentDidMount() {
    console.log("ControlPanel component did mount");
  }
}

class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.onClickAddBtn = this.onClickAddBtn.bind(this);
    this.onClickDelBtn = this.onClickDelBtn.bind(this);

    this.state = {
      // count: this.props.initValue || 0, // TODO: 赋初始值,也可以通过DefaultProps指定
      count: this.props.initValue,
      nameStyle: {
        display: "inline-block",
        width: "60px",
        textAlign: "center"
      },
      btnStyle: {
        margin: "0 5px"
      }
    };
  }

  onClickAddBtn() {
    this.updateCount(true);
  }

  onClickDelBtn() {
    this.updateCount(false);
  }

  updateCount(isIncrement) {
    const prev = this.state.count;
    const next = isIncrement ? this.state.count + 1 : this.state.count - 1;
    this.setState({ count: next });
    this.props.onUpdate(next, prev);
  }

  componentWillMount() {
    console.log("Counter component " + this.props.name + " will mount");
  }

  componentWillReceiveProps(nextProps) {
    console.log("Counter component " + this.props.name + " receive props");
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (
      nextProps.name !== this.props.name || nextState.count !== this.state.count
    );
  }

  render() {
    // TODO: 解构取值
    let { name } = this.props;
    let { count, nameStyle, btnStyle } = this.state;
    console.log("Counter component " + name + " is render");
    return (
      <div>
        <span style={nameStyle}>{name}</span>
        <button style={btnStyle} onClick={this.onClickDelBtn}>
          {" "}
          -{" "}
        </button>
        <button style={btnStyle} onClick={this.onClickAddBtn}>
          {" "}
          +{" "}
        </button>
        <span>{count}</span>
      </div>
    );
  }

  componentDidMount() {
    console.log("Counter component " + this.props.name + " did mount");
  }
}

// TODO: 添加prop类型判断,仅提供警告辅助开发,并不会改变组件行为,需要引入
// TODO: 可以通过babel-react-optimize在发布产品时自动清理
Counter.propTypes = {
  name: PropTypes.string,
  initValue: PropTypes.number.isRequired
};

// TODO: 给prop添加默认值,不需要引入
Counter.defaultProps = {
  initValue: 0
};

export default ControlPanel;

/**TODO: 生命周期
 * 装载过程mount -> 更新过程update -> 卸载过程unmount
 */

/**装载过程
 * constructor -> getInitialState -> getDefaultProps -> componentWillMount -> render -> componentDidMount
 * TODO: getInitialState和getDefaultProps方法只有通过React.createClass方法创造的组件才会调用，ES6语法不会调用
 * PC - parent component  CC - children component
 * PC componentWillMount -> PC render -> CC componentWillMount -> CC render -> CC componentDidMount -> PC componentDidMount
 */

/**更新过程
 * componentWillReceive(nextProps) -> shouldComponentUpdate(nextProps, nextState) -> componentWillUpdate -> render -> componentDidUpdate
 * TODO: componentWillReceive 会在父组件render被调用时触发，不仅仅时props发生改变才会触发，本组件setState方法不会触发
 * TODO: render和shouldComponentUpdate是React生命周期函数中唯二要求有return值的函数
 * shouldComponentUpdate要求返回一个Boolean值，为false时停止更新，不会引发后续渲染
 */

/**卸载过程
 * componentWillUnmount
 * TODO: 没有对应的componentDidUnmount方法
 */
