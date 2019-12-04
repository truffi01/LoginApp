import React from 'react'; 
import { connect } from 'react-redux'
import * as actions from '../store/actions/authorization'; 
import { NavLink } from 'react-router-dom';
import {
    Form,
    Input,
    Icon,
    Button,
  } from 'antd';
  
  class RegistrationForm extends React.Component {
    state = {
      confirmDirty: false,
    };
  
    handleSubmit = e => {
      e.preventDefault();
      this.props.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
          this.props.onAuth(values.username,
          values.email,
          values.password,
          values.confirm);
          this.props.history.push("/");
        }
      });
    };
  
    handleConfirmBlur = e => {
      const { value } = e.target;
      this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    };
  
    compareToFirstPassword = (rule, value, callback) => {
      const { form } = this.props;
      if (value && value !== form.getFieldValue('password')) {
        callback('Two passwords that you enter is inconsistent!');
      } else {
        callback();
      }
    };
  
    validateToNextPassword = (rule, value, callback) => {
      const { form } = this.props;
      if (value && this.state.confirmDirty) {
        form.validateFields(['confirm'], { force: true });
      }
      callback();
    };
  
    render() {
      const { getFieldDecorator } = this.props.form;
  
  
      return (
        <Form onSubmit={this.handleSubmit}>

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

          <Form.Item >
            {getFieldDecorator('email', {
              rules: [
                {
                  type: 'email',
                  message: 'The input is not valid E-mail!',
                },
                {
                  required: true,
                  message: 'Please input your E-mail!',
                },
              ],
            })(<Input prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
            placeholder="email" />)}
          </Form.Item>
          <Form.Item hasFeedback>
            {getFieldDecorator('password', {
              rules: [
                {
                  required: true,
                  message: 'Please input your password!',
                },
                {
                  validator: this.validateToNextPassword,
                },
              ],
            })(<Input.Password prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
            type="password"
            placeholder="Password"/>)}
          </Form.Item>
          <Form.Item hasFeedback>
            {getFieldDecorator('confirm', {
              rules: [
                {
                  required: true,
                  message: 'Please confirm your password!',
                },
                {
                  validator: this.compareToFirstPassword,
                },
              ],
            })(<Input.Password prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
            type="password"
            placeholder="Password" onBlur={this.handleConfirmBlur} />)}
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
                SignUp
            </Button>
            or 
            <NavLink to="/login/"> Login
            </NavLink>
        </Form.Item>

        </Form>
      );
    }
  }


const WrappedRegistrationForm = Form.create()(RegistrationForm);
  
  
const mapStatetoProps = (state) => {
    return {
        loading: state.loading,
        error: state.error
    }
}

const mapDispatchToProps = dispatch => {
  return {
    onAuth: (username, email,  password1, password2) => dispatch(actions.signUp(username, email, password1, password2))
  }
}
  
export default connect(mapStatetoProps, mapDispatchToProps)(WrappedRegistrationForm);
