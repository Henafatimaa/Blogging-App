import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Link,Route,Routes} from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header'
import BlogList from  './components/BlogList';
import BlogCreate from './components/BlogCreate';
import BlogUpdate from './components/BlogUpdate';
import BlogDetails from './components/BlogDetails';
import BlogSearch from './components/BlogSearch'
function App() {
  return (
    <div className="App">
      <>
        <BrowserRouter>
        <Header />
          <Routes>
            
            <Route path="/list" element={<BlogList />} />
            <Route path="/create" element={<BlogCreate />} />
            <Route path="/update/:id" element={<BlogUpdate />} />
            <Route path="/details/:id" element={<BlogDetails />} />
            <Route path="/search" element={<BlogSearch />} />
            <Route exact path="/" element={<BlogList />} />
          </Routes>
        </BrowserRouter>
      </>
    </div>
  );
}

export default App;
