import {useState} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Index from "./pages/Index.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Todo from "./pages/Todo.jsx";
import {ThemeContext} from "./helpers/context.js";
import routers from "./helpers/routers.js";


function App() {
    const colorState = useState({
        color: 'blue',
        // backgroundColor: 'grey'
    });
  return (
      <ThemeContext.Provider value={colorState}>
          <BrowserRouter>
              <div className="container mx-auto flex flex-col h-100" style = {{backgroundColor: colorState.backgroundColor}} >
                  <Header />
                  <Routes>
                      <Route path={routers.main} element = {<Index />} />
                      <Route path={routers.about} element = {<About />} />
                      <Route path={routers.contact} element = {<Contact />} />
                      <Route path={routers.todo} element = {<Todo />} />
                  </Routes>
                  <Footer />
              </div>
          </BrowserRouter>
      </ThemeContext.Provider>

    )
}

export default App
