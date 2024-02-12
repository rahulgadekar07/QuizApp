import '../Styles/App.css';
import {BrowserRouter,RouterProvider, createBrowserRouter} from 'react-router-dom';
import Main from './Main';
import Quiz from './Quiz';
import Result from './Result';

const router = createBrowserRouter([
  {
    path:'/',
    element:<Main></Main>
  },
  {
    path:'/Quiz',
    element:<Quiz></Quiz>
  },
  {
    path:'/Result',
    element:<Result></Result>
  }
])
function App() {
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
