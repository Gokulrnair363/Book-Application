import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./Context/AuthContext";
import RouteProtection from "./Routes/RouteProtection";


import Login from "./Pages/Login";
import Register from "./Pages/Register";
import BookList from "./Pages/BookList";
import BookDetails from "./Pages/BookDetails";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
       
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />


          <Route 
            path="/books" 
            element={
              <RouteProtection>
                <BookList />
              </RouteProtection>
            } 
          />
          <Route 
            path="/books/:id" 
            element={
              <RouteProtection>
                <BookDetails />
              </RouteProtection>
            } 
          />

          <Route path="*" element={<Login />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
