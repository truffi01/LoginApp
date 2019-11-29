import React from 'react'; 
import Docs from '../components/Docs';
import axios from 'axios'; 
import { Card } from 'antd'; 


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
           <Card title={this.state.doc.title}>
               <p>
                   {this.state.article.content}
               </p>
           </Card>
        )
    }
}

export default DocsDetail;