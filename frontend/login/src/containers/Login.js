import React, { Component }  from 'react';
import { connect } from 'react-redux';
import { Form, Icon, Input, Button, Spin } from 'antd';
import { NavLink } from 'react-router-dom';
import * as actions from '../store/actions/authorization';
import { Link } from 'react'; 

const antIcon = <Icon type="loading" spin />
const FormItem = Form.Item;



class NormalLoginForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        this.props.onAuth(values.userName, values.password);
        this.props.history.push("/");

      }
    });
  };

  render() {
    let errorMessage = null
    if (this.props.error){
        errorMessage = (
            <p>{this.props.error.message}</p>
        );
    }

    const { getFieldDecorator } = this.props.form;
    return (
        
        <div>
            {errorMessage}
        {
            this.props.loading ? 

            <Spin indicator={antIcon} />
            :


      <Form onSubmit={this.handleSubmit} className="login-form">
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />,
          )}
        </Form.Item>
        <Form.Item>
            <Button type="primary" htmlType="submit">
                Login
            </Button>
            or 
            <NavLink to="/signup/"> Signup
            </NavLink>
        </Form.Item>
      </Form>
      }
      </div>
    );
  }
}

const WrappedNormalLoginForm = Form.create()(NormalLoginForm);

const mapStatetoProps = (state) => {
    return {
        loading: state.loading,
        error: state.error
    }
}

const mapDispatchToProps = dispatch => {
  return {
    onAuth: (username, password) => dispatch(actions.authLogin(username, password))
  }
}

export default connect(mapStatetoProps, mapDispatchToProps)(WrappedNormalLoginForm);

