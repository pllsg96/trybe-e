import logo from './logo.svg';
import './App.css';
import Image from './Image.js'

function App() {
  const linkImg = 'https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg';
  return (
    <Image source={linkImg} alternativeText='Cute cat staring' />
  );
}

export default App;
