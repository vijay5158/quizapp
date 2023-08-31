import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './components/Layout';
import Quiz from './components/Quiz/Quiz';
import AddQuiz from './pages/AddQuiz';



function App() {


  return (
    <>
    <section className="min-h-screen w-full">
    <BrowserRouter>
        <Routes>
        <Route exact path='/' element={<Layout><Home /></Layout>} />
        <Route exact path='/:id' element={<Layout><Quiz /></Layout>} />
        <Route exact path='/add-quiz' element={<Layout><AddQuiz /></Layout>} />
        </Routes>
    </BrowserRouter>
    </section>
    </>
  )
}

export default App
