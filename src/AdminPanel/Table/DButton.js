import { Popover, Button } from 'antd';
import React from 'react';

class DButton extends React.Component {
  state = {
    visible: false,
  };

  hide = () => {
    this.setState({
      visible: false,
    });
  };

  handleVisibleChange = visible => {
    this.setState({ visible });
  };

  render() {
    return (
      <Popover
        content={<a onClick={()=>{this.hide()
        this.props.func()}}>Yes</a>}
        title={this.props.name}
        trigger="click"
        visible={this.state.visible}
        onVisibleChange={this.handleVisibleChange}
      >
        <a >{this.props.name}</a>
      </Popover>
    );
  }
} 

export default DButton