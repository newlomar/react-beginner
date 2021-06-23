import logo from './logo.svg';
import './App.css';
import { Greet } from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FuctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';

function App() {
  return (
    <div className="App">
    <NameList />
    {/*<UserGreeting />
      <ParentComponent />
      <EventBind />
      <FunctionClick />
      <ClassClick />
      <Counter />
      {/*<Message />
      // <Greet name="Beatriz" parentName="Girlfriend" >
      //   <p>This is children props</p>
      // </Greet>
      // <Greet name="Luciene" parentName="Mother">
      //   <button>Botao</button>
      // </Greet>
      // <Greet name="João" parentName="Brother" />
      <Welcome name="Beatriz" parentName="Girlfriend" />
      <Welcome name="Luciene" parentName="Mother" />
      <Welcome name="João" parentName="Brother"/>
      <Hello /> */}
    </div>
  );
}

export default App;
