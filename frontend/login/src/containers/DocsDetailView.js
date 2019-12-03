import React from 'react'; 
import axios from 'axios'; 
import { Card } from 'antd'; 
import CForm from '../components/Form';


class DocsDetail extends React.Component {
    state = {
        doc: {} 
      }

      componentDidMount(){
        const docsID = this.props.match.params.docsID
        axios.get(`http://127.0.0.1:8000/api/${docsID}`)
          .then( res => {
            this.setState({
              doc: res.data
            });
            console.log(res.data); 
          })
      }
      
      render () {
        return (
          <div>
           <Card title={this.state.doc.title}>
               <p>
                   {this.state.doc.content}
               </p>
           </Card>
           <CForm requestType='post' docsID={this.props.match.params.docsID} btnText="Update" />
           </div> 
        )
    }
}

export default DocsDetail;