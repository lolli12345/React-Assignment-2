
import './App.css';
import data from './data.json'
import ImgGrid from './ImgGrid/ImgGrid'
import Navbar from './Navbar/navbar'
import Posts from './Posts/Posts'


function App() {
  return (
    <div className="App">
       <Navbar />
       <Posts />
      <ImgGrid data ={data}/>
      
    </div>
  );
}

export default App;
