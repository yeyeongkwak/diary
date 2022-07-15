import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Posts from "./component/Posts";
import Pagenation from "./component/Pagenation";

function App() {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(10);

  useEffect(() => {
    const data = async () => {
      const response = await axios.get(
        "/api/diary?page=1&size=200"
      );
      console.log(response.data.dtoList);
      setPosts(response.data.dtoList);
    };
    data();
  }, []);

  //현재 페이지
  //size
  //총 데이터의 개수
  //끝 페이지

  const lastPage = currentPage * postPerPage;

  const firstPage = lastPage - postPerPage;

  const currentPosts = (posts) => {
    //slice 함수를 이용해 배열 자르기
    let currentPosts = 0;
    currentPosts = posts.slice(firstPage, lastPage);
    return currentPosts;
  };

  return (
    <div className="App">
      <Posts currentPosts={currentPosts(posts)} />
      <Pagenation
        postPerPage={postPerPage}
        totalPosts={posts.length}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}

export default App;
