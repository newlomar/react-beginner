// import logo from './logo.svg';
import React, { Component } from 'react'
import './App.css';
// import { Greet } from './components/Greet';
// import Welcome from './components/Welcome';
// import Hello from './components/Hello';
// import Message from './components/Message';
// import Counter from './components/Counter';
// import FunctionClick from './components/FuctionClick';
// import ClassClick from './components/ClassClick';
// import EventBind from './components/EventBind';
// import ParentComponent from './components/ParentComponent';
// import UserGreeting from './components/UserGreeting';
// import NameList from './components/NameList';
// import Stylesheet from './components/Stylesheet';
// import Inline from './components/Inline';
// import './appStyles.css'
// import styles from './appStyles.module.css'
// import Form from './components/Form'
// import LifecycleA from './components/LifecycleA';
// import FragmentDemo from './components/FragmentDemo';
// import Table from './components/Table';
// import PureComp from './components/PureComp';
// import ParentComp from './components/ParentComp';
// import RefsDemo from './components/RefsDemo';
// import FocusInput from './components/FocusInput';
// import FRParentInput from './components/FRParentInput';
// import PortalDemo from './components/PortalDemo';
// import Hero from './components/Hero';
// import ErrorBoundary from './components/ErrorBoundary';
// import ClickCounter from './components/ClickCounter';
// import HoverCounter from './components/HoverCounter';
// import ClickCounterTwo from './components/ClickCounterTwo';
// import HoverCounterTwo from './components/HoverCounterTwo';
// import User from './components/User';
// import PropCounter from './components/PropCounter';
import ComponentC from './components/ComponentC'
import { UserProvider } from './components/userContext';

class App extends Component {
  render() {
    return (
      <div className="App">
        <UserProvider value="Newton">
          <ComponentC />
        </UserProvider>
      </div>
    )
  }
}
      
    // {/*
    // <PropCounter> 
    //     {(count, incrementCount) => (
    //       <ClickCounterTwo count={count} incrementCount={incrementCount} />
    //     )}
    //   </PropCounter>
    //   <PropCounter> 
    //     {(count, incrementCount) => (
    //       <HoverCounterTwo count={count} incrementCount={incrementCount} />
    //     )}
    // </PropCounter>
    // <ClickCounterTwo />
    // <HoverCounterTwo />
    // <User render={(isLoggedIn) => isLoggedIn ? 'Newton' : 'Guest'} />
    // <ClickCounter name='Newton' />
    // <HoverCounter />
    // <ErrorBoundary>
    //     <Hero heroName="Batman" />
    //   </ErrorBoundary>
    //   <ErrorBoundary>
    //     <Hero heroName="Superman" />
    //   </ErrorBoundary>
    //   <ErrorBoundary>
    //     <Hero heroName="Joker" />
    //   </ErrorBoundary>
    // <PortalDemo />
    // <FRParentInput />
    // <FocusInput />
    // <RefsDemo />
    // <ParentComp />
    // <Table />
    // <FragmentDemo />
    // <LifecycleA /> 
    // <Form />
    // <h1 className='error'>Error</h1>
    // <h1 className={styles.success}>Success</h1>
    // <Inline />
    // <Stylesheet primary={true}/>
    //   <NameList />
    //   <UserGreeting />
    //   <ParentComponent />
    //   <EventBind />
    //   <FunctionClick />
    //   <ClassClick />
    //   <Counter />
    //   <Message />
    //   // <Greet name="Beatriz" parentName="Girlfriend" >
    //   //   <p>This is children props</p>
    //   // </Greet>
    //   // <Greet name="Luciene" parentName="Mother">
    //   //   <button>Botao</button>
    //   // </Greet>
    //   // <Greet name="João" parentName="Brother" />
    //   <Welcome name="Beatriz" parentName="Girlfriend" />
    //   <Welcome name="Luciene" parentName="Mother" />
    //   <Welcome name="João" parentName="Brother"/>
    //   <Hello /> */}

export default App;
