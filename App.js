import logo from './logo.svg';
import './App.css';
import ParentCounter from './components/parents';
import InputForm from './components/form';
import Nav from './components/menu';
import HoverRating from './components/rating';
import BasicList from './components/list';
import PropType from './components/propType';
import Greetings from './components/greetings';
import Counter from './components/counter';
import MessagesList from './components/messages';
import ThemeSwitcher from './components/themeSwitcher';
import TextDisplayForm from './components/TextDisplay';
import TemperatureConverter from './components/temperatureConverter';
import TodoList from './components/toDolist';

function App() {
  return (
    <div> 
      <TextDisplayForm/>
      
      <Nav/>
      <ParentCounter/>
      <InputForm/>
      <HoverRating/>
      <BasicList/>
      <PropType name = 'Pavel' age = {43} isStudent={true}/>
      <Greetings name = "Pavel" />
      <Counter/>
      <MessagesList/>
      <ThemeSwitcher />
      <TemperatureConverter/>
      <TodoList/>
    </div>
  );
}

export default App;
