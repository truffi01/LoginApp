import { Form, Input, Button } from 'antd';
import React from 'react'; 
import axios from 'axios'; 

const FormItem = Form.Item 

class CForm extends React.Component {

handleSubmit = (event, requestType, docsID ) => {

    const title = event.target.elements.title.value 
    const content = event.target.elements.content.value

    switch ( requestType ) {
      case 'post': 
        return axios.post('http://127.0.0.1:8000/api/', {
          title: title, 
          content: content 
        })
        .then(res => console.log(res))
        .catch(error => console.err(error));

      case 'put': 
      return axios.post(`http://127.0.0.1:8000/api/${docsID}/`, {
        title: title, 
        content: content 
      })
      .then(res => console.log(res))
      .catch(error => console.err(error));
    }

}

  render() {
    return (
      <div>
        <Form onSubmit={(event) => this.handleSubmit( event, this.props.requestType, this.props.docsID)}>
          <FormItem label="Title">
            <Input name="title" placeholder="Enter Title" />
          </FormItem>
          <FormItem name="content" label="Content">
            <Input placeholder="Enter Content" />
          </FormItem>
          <FormItem>
    <Button type="primary" htmlType="submit" >{this.props.btnText}</Button>
          </FormItem>
        </Form>
      </div>
    );
  }
}

export default CForm 