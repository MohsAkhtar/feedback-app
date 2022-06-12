import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header.component";
import FeedbackList from "./components/FeedbackList.component";
import FeedbackStats from "./components/FeedbackStats.component";
import FeedbackForm from "./components/FeedbackForm.component";
import AboutPage from "./pages/AboutPage";
import AboutIconLink from "./components/shared/AboutIconLink";
import { FeedbackProvider } from "./context/FeedbackContext";

function App() {
  return (
    <FeedbackProvider>
      <BrowserRouter>
        <Header />

        <div className="container">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                </>
              }
            ></Route>
            <Route path="/about" element={<AboutPage />} />
          </Routes>
          <AboutIconLink />
        </div>
      </BrowserRouter>
    </FeedbackProvider>
  );
}

export default App;
