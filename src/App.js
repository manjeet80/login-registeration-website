import{ BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import Layout from "./components/pages/Layout";
import Home from './components/pages/Home'
import Contact from './components/pages/Contact'
import LoginReg from './components/pages/LoginReg';
import ResetEmail from './components/pages/ResetEmail';
import ResetPassword from './components/pages/ResetPassword';
import Dashboard from './components/pages/Dashboard'
function App() {
  return (
  <>
<Router>
  <Routes>
    <Route path='/' element={<Layout/>}>
      <Route index element={<Home/>}/>
<Route path="contact" element={<Contact/>} />
<Route path="login" element={<LoginReg/>} />
<Route path="resetemail" element={<ResetEmail/>} />
<Route path="reset" element={<ResetPassword/>} />
    </Route>
    <Route path="/dashboard" element={<Dashboard/>} />
    <Route path="*" element={<h1>Error 404 Page not found !!</h1>} />
  </Routes>
</Router>
  </>
  );
}

export default App;
