//client/App.jsx
import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import SignupPage from "./pages/SignupPage/SignupPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import PostsPage from './pages/PostsPage/PostsPage';
import IsPrivate from "./components/IsPrivate/IsPrivate";
import IsAnon from "./components/IsAnon/IsAnon";
import Header from './components/Header/Header';
import NewPost from './pages/PostsPage/NewPost';
import StartupsPage from "./pages/StartupsPage/StartupsPage";
import ArticlePage from "./pages/ArticlePage/ArticlePage"
import Footer from "./components/Footer/Footer";
import EditPost from './pages/PostsPage/EditPost';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

function App() {
  return (
    <div className="App">
    <Header/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<IsPrivate><ProfilePage /></IsPrivate>} />
        <Route path="/signup" element={ <IsAnon> <SignupPage /> </IsAnon> } />
        <Route path="/login" element={ <IsAnon><LoginPage /></IsAnon> } />
        <Route path="/posts" element={ <IsPrivate><PostsPage /></IsPrivate> } /> 
        <Route path="/new-post" element={<IsPrivate><NewPost /></IsPrivate>} />
        <Route path="/startups" element={<IsPrivate><StartupsPage/></IsPrivate>} />
        <Route path="/posts/:postId" element={ <IsPrivate><ArticlePage/></IsPrivate>} />
        <Route path="/posts/edit/:postId" element={<IsPrivate><EditPost /></IsPrivate>} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    <Footer/>
    </div>
  );
}
export default App;
