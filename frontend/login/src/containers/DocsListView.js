import React from 'react'; 
import Docs from '../components/Docs';
import axios from 'axios'; 
import CForm from '../components/Form';

class DocsList extends React.Component {
    state = {
        docs: [] 
      }

      componentDidMount(){
        axios.get('http://127.0.0.1:8000/api/')
          .then( res => {
            this.setState({
              docs: res.data
            });
            console.log(res.data); 
          })
      }
      
      render () {
        return (
          <div>
            <Docs data={this.state.docs}/> 
            <br />
            <h3> Create A Doc</h3>
            <CForm requestType="post" docsID={null} btnText="Create"/>
          </div> 
        )
    }
}

export default DocsList;