import React from 'react';
import { Form, Icon, Input, Button } from 'antd';
import axios from 'axios';

const FormItem = Form.Item;

class ResetPass extends React.Component {
  constructor() {
    super();
    this.state = {
      confirmDirty: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validateToNextPassword = this.validateToNextPassword.bind(this);
    this.compareToFirstPassword = this.compareToFirstPassword.bind(this);
    this.handleConfirmBlur = this.handleConfirmBlur.bind(this);
  }

  handleConfirmBlur(e) {
    const { value } = e.target;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  }

  compareToFirstPassword(rule, value, callback) {
    const { form } = this.props;
    if (value && value !== form.getFieldValue('password1')) {
      callback('The passwords entered must match');
    } else {
      callback();
    }
  }

  validateToNextPassword(rule, value, callback) {
    const { form } = this.props;
    if (value && this.state.confirmDirty) {
      form.validateFields(['password2'], { force: true });
    }
    callback();
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        axios.put('/resetpass', {
          password: values.password1,
          token: window.location.href.split('/').pop(),
        })
          .then(res => console.log(res.data))
          .catch(error => console.log(error));
      }
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="reset-pass">
        <div className="reset-form">
          <div style={{ textAlign: 'center', marginBottom: 25, fontSize: 30 }}>
            Reset Password
          </div>
          <Form onSubmit={this.handleSubmit} className="login-form">
            <FormItem>
              {getFieldDecorator('password1', {
                rules: [{
                  required: true, message: 'Please enter a password!',
                }, {
                  validator: this.validateToNextPassword,
                }],
              })(<Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="New Password" />)}
            </FormItem>
            <FormItem>
              {getFieldDecorator('password2', {
                rules: [{
                  required: true, message: 'Please confirm your password!',
                }, {
                  validator: this.compareToFirstPassword,
                }],
              })(<Input onBlur={this.handleConfirmBlur} prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Confirm Password" />)}
            </FormItem>
            <FormItem className="reset-password-buttons">
              <a href="/">Go back home</a>
              <Button type="primary" htmlType="submit" className="login-form-button">
                Reset
              </Button>
            </FormItem>
          </Form>
        </div>
      </div>
    );
  }
}

const WrappedNormalLoginForm = Form.create()(ResetPass);

export default WrappedNormalLoginForm;
