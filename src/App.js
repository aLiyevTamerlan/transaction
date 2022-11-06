import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Get, Post, Put, Delete } from "./components/index";
import { Button } from "flowbite-react";
function App() {
  return (
    <BrowserRouter>
      <div className="w-full h-full min-h-screen">
        <div className="w-full mx-auto flex justify-center mt-32">
          <div className="flex gap-4">
            <Link to={"/"}>
              <Button size="lg" color="info">
                Get
              </Button>
            </Link>
            <Link to={"/post-data"}>
              <Button size="lg" color="info">
                Post
              </Button>
            </Link>
            <Link to={"/put-data"}>
              <Button size="lg" color="info">
                Put
              </Button>
            </Link>
            <Link to={"/delete-data"}>
              <Button size="lg" color="info">
                Delete
              </Button>
            </Link>
          </div>
        </div> <div className="flex flex-col w-full p-12 mx-auto max-w-7xl ">
        <Routes>
          <Route path="/" element={<Get />} />
          <Route path="/post-data" element={<Post />} />
          <Route path="/put-data" element={<Put />} />
          <Route path="/delete-data" element={<Delete />} />
        </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
export default App;
