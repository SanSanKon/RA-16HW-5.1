import './App.css'
import CardWithImg from './components/CardWithImg'
import rect from "./img/srcImg.jpg"

function App() {

  let imgSrc;// если присвоить imgSrc значение "rect", тогда отрисовывается компонент с картинкой. По дефолту, без нее.
  const title = 'Some title';
  const paragraph = 'Some paragraph';
  const link = 'Go somewhere';

  return (
    <>
      <h1>Hw 5.1</h1>
      <CardWithImg img={imgSrc} title={title} paragraph={paragraph} link={link} />
    </>
  )
}

export default App

//Возможно, я не так понял задание, поэтому релизовал такой вариант, 
//когда отрисовка того или доруго вида карточки зависит от наличия
//либо отсутствия присвоенного значения картинке.
