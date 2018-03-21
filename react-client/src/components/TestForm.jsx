/* eslint react/jsx-closing-tag-location: 1 */
import React from 'react';
// import Select, { Form, Input, Checkbox, InputNumber, TextArea } from 'antd'; // Upload
import { Form, Row, Input, Select, Checkbox, InputNumber, Button } from 'antd';

const { Option } = Select;
const { TextArea } = Input;

class TestForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // formData: {},
    };
    this.onSubmit = this.onSubmit.bind(this);
  }

  // onChange(e) {
  //   this.setState({});
  //   console.log('change', e);
  // }

  onSubmit(e) {
    e.preventDefault();
    console.log(e.isMix, e.mixChecked);
    console.log('THIS:', this);
    this.props.form.validateFieldsAndScroll({}, (errors, values) => {
      if (errors) {
        // console.log('ERRORS ', errors);
        return errors;
      }
      this.setState(values, () => {
        console.log('VALUES: ', values);
        const dog = {
          name: values.name, // required
          breed: values.breed === 'null' ? null : values.breed, // required
          isMix: Boolean(values.isMix),
          isMale: values.isMale === 'null' ? null : Boolean(values.isMale), // required
          isAggressive: Boolean(values.isAggressive),
          isAnxious: Boolean(values.hasAnxiety),
          lifestage: values.lifestage === 'null' ? null : values.lifestage, // required
          age: values.age || null,
          size: values.size === 'null' ? null : values.size, // required
          isFixed: values.isFixed === 'null' ? null : Boolean(values.isFixed), // required
          hasDiet: Boolean(values.hasDiet),
          hasMedical: Boolean(values.hasMedical),
          energyLevel: values.energyLevel === 'null' ? null : values.energyLevel, // required
          photo: values.photo || null,
          description: values.description || null,
        };
        console.log('DOG VALUES,', dog);
      });
      return true;
    });
  }

  // handleBlur(e) {
  //   console.log();
  // }


  render() {
    const { getFieldDecorator } = this.props.form;
    // const formItemLayout = {
    //   labelCol: {
    //     xs: { span: 24 },
    //     sm: { span: 8 },
    //   },
    //   wrapperCol: {
    //     xs: { span: 24 },
    //     sm: { span: 16 },
    //   },
    // };
    return (
      <div style={{ margin: 50 }}>
        <Form layout="inline" onSubmit={this.onSubmit}>

          <Row>

            <Form.Item label="Name">
              {getFieldDecorator('name', {
                rules: [
                  {
                    required: true,
                    message: 'Please provide name',
                  },
                ],
              })(<Input onBlur={this.handleBlur} style={{ width: 300 }} />)}

            </Form.Item>

          </Row>

          <Row>

            <Form.Item label="Breed">
              {getFieldDecorator('breed', {
                  rules: [{
                    required: true,
                    message: 'Please choose a breed',
                  },
                ],
              })(<Select
                showSearch
                style={{ width: 300 }}
                onChange={this.onChange}
              >
                <Option value="null"> Unknown </Option>
                <Option value="pug"> Pug </Option>
                <Option value="beagle"> Beagle </Option>
                <Option value="chihuahua"> Chihuahua </Option>
                <Option value="greatdane"> Great Dane </Option>
                <Option value="dachshund"> Daschshund </Option>
                <Option value="shihtzu"> Shih Tzu </Option>
                <Option value="pitbill"> Pit Bull </Option>
                <Option value="greyhound"> Greyhound </Option>
              </Select>)}

            </Form.Item>

            <Form.Item label="Mix?">
              {getFieldDecorator('isMix', {
                valuePropName: 'mixChecked',
              })(<Checkbox />)}

            </Form.Item>
          </Row>

          <Row>
            <Form.Item label="Good">
              {getFieldDecorator('isMale', {
                  rules: [{
                    required: true,
                    message: 'Please choose an option',
                  },
                ],
              })(<Select style={{ width: 200 }} onChange={this.onChange}>
                <Option value="true"> boy </Option>
                <Option value="false"> girl </Option>
                <Option value="null"> Unknown </Option>
              </Select>)}

            </Form.Item>

            <Form.Item label="Fixed?">
              {getFieldDecorator('isFixed', {
                  rules: [{
                    required: true,
                    message: 'Please choose an option',
                  },
                ],
              })(<Select style={{ width: 150 }}>
                <Option value="true"> Yes </Option>
                <Option value="false"> No </Option>
                <Option value="null"> Unknown </Option>
              </Select>)}
            </Form.Item>
          </Row>

          <Row>
            <Form.Item label="Life stage">
              {getFieldDecorator('lifestage', {
                  rules: [{
                    required: true,
                    message: 'Please choose an option',
                  },
                ],
              })(<Select style={{ width: 300 }}>
                <Option value="puppy"> Puppy </Option>
                <Option value="adolescent"> Adolescent </Option>
                <Option value="adult"> Adult </Option>
                <Option value="senior"> Senior </Option>
                <Option value="null"> Unknown </Option>
              </Select>)}
            </Form.Item>

            <Form.Item label="Age">
              {getFieldDecorator('age', {
                })(<InputNumber min={0} max={99} />)}
            </Form.Item>
          </Row>

          <Row>
            <Form.Item label="Size">
              {getFieldDecorator('size', {
                  rules: [{
                    required: true,
                    message: 'Please choose an option',
                  },
                ],
              })(<Select style={{ width: 300 }}>
                <Option value="tiny"> Tiny </Option>
                <Option value="small"> Small </Option>
                <Option value="medium"> Medium </Option>
                <Option value="large"> Large </Option>
                <Option value="huge"> Huge </Option>
                <Option value="null"> Unknown </Option>
              </Select>)}
            </Form.Item>
          </Row>

          <Row>
            <Form.Item label="Energy Level">
              {getFieldDecorator('energyLevel', {
                rules: [{
                  required: true,
                  message: 'Please choose an option',
                }],
              })(<Select style={{ width: 300 }}>
                <Option value="low"> Low </Option>
                <Option value="medium"> Medium </Option>
                <Option value="high"> High </Option>
                <Option value="null"> Unknown </Option>
              </Select>)}
            </Form.Item>
          </Row>

          <Row>
            <Form.Item label="Aggression">
              {getFieldDecorator('isAggressive', {
                valuePropName: 'aggressiveChecked',
              })(<Checkbox />)}
            </Form.Item>

            <Form.Item label="Anxiety">
              {getFieldDecorator('hasAnxiety', {
                valuePropName: 'medicalChecked',
              })(<Checkbox />)}
            </Form.Item>
          </Row>

          <Row>
            <Form.Item label="Dietary">
              {getFieldDecorator('hasDiet', {
                  valuePropName: 'dietChecked',
                })(<Checkbox />)}
            </Form.Item>

            <Form.Item label="Medical">
              {getFieldDecorator('hasMedical', {
                valuePropName: 'medicalChecked',
              })(<Checkbox />)}
            </Form.Item>
          </Row>

          <Row>
            <Form.Item label="Photo">
              {getFieldDecorator('photo', {
                })(<Input style={{ width: 500 }} placeholder="URL" />)}
            </Form.Item>
          </Row>

          <Row>
            <Form.Item style={{ marginTop: 10 }} label="Description">
              {getFieldDecorator('description', {})(<TextArea rows={4} style={{ width: 600 }} />)}
            </Form.Item>
          </Row>
          <Row>
            <Button type="primary" htmlType="submit" style={{ marginTop: 20 }}> Submit </Button>
          </Row>
        </Form>
      </div>
    );
  }
}

const RealTestForm = Form.create()(TestForm);

export default RealTestForm;
