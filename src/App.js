import './input.css'
import './App.css';
import Firstwidget from './Firstwidget';
import line from './Rectangle 5.png'
import Secondwidget from './Secondwidget';
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <div className="App flex justify-end">

      {/* <div>
hi
      </div> */}
<div className=' mt-[10vh] '>
<BrowserRouter>
      <Firstwidget/>

      <img className=' mt-5 mb-5 w-[80%] ml-[30px]' src={line} alt=''/>
<Secondwidget/>
<img className=' mt-5 mb-5 w-[80%] ml-[30px]' src={line} alt=''/>
      </BrowserRouter>
</div>

   

    </div>
  );
}

export default App;