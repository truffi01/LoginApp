import React from 'react'; 
import Docs from '../components/Docs';
import axios from 'axios'; 

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
            <Docs data={this.state.docs}/> 
        )
    }
}

export default DocsList;