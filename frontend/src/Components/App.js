import '../Styles/App.css';
import {BrowserRouter,RouterProvider, createBrowserRouter} from 'react-router-dom';
import Main from './Main';

const router = createBrowserRouter([
  {
    path:'/',
    element:<Main></Main>
  },
  {
    path:'/Quiz',
    element:<div>Quiz element</div>
  },
  {
    path:'/Results',
    element:<div>Results element</div>
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
