import { Component } from "react";
import { Add } from "./Add";
import { Searchbar } from "./Searchbar";

import 'react-toastify/dist/ReactToastify.css';
import { Container } from "./App.stiled";

export class App extends Component {
  state = {
    imageName:'',
    showModal: false,  
    articls: [{}],
  
  }
//  componentDidMount() { console.log('componentDidMount App') };
//  componentWillUnmount(){ console.log('componentWillUnmount App') };
  componentDidUpdate(prevProps) {
   // console.log('componentDidUpdate App')
    if (prevProps.imageName !== this.props.imageName) {
           // console.log('componentDidUpdate App Новий запит'); 
            this.setState({ articls: [{}] }); 
    }
  };
  

   
  updateImage = imageName => {
    //Збереження в state пошукового слова запиту на пошук картинки.
       this.setState({ imageName});
  }
  
  render() {
   
    return (
      <Container>
        <Searchbar onSubmit={this.updateImage}></Searchbar> 
        <Add/>
      </Container>
    );
  }
};