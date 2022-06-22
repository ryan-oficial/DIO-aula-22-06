import Item  from './components/item';
import Card from './components/Card';

const App = () =>{
  return(
    <>
      <h1>Minha primeira aplicaçao com React</h1>
      <ul>
           <Item>
            item 1
            </Item>
           <Item>
            item 2
            </Item>
           <Item>
            item 3
            </Item>
      </ul>
      <Card/>
    </>
  )
}

export default App;
