
import './App.css';
import { Route} from "react-router-dom"
import { Button } from '@chakra-ui/react'
import Home from './pages/Home';
import Chat from './pages/Chat';

function App() {
  return (
    <div className="App">
      <Route path="/"  component={Home} exact/>
      <Route path="/chats" component={Chat}  />
    
     <Button colorScheme='blue'>Button</Button>
    </div>
  );
}

export default App;
