import './App.css';
import {useState} from "react";

function App() {

    let post = '강남 우동 맛집';
    let [글제목, 글제목변경] = useState(['남자코트 추천', '강남 우동맛집', '파이썬 독학']);
    let [따봉, 따봉변경] = useState(0);

    function 따봉더하기() {
        console.log("따봉더하기 함수");
        따봉변경(따봉 + 1);
    }

    function 성별변경() {
        console.log("성별변경 함수");
        let 글제목복사본 = [...글제목];
        // console.log(글제목복사본[0]);
        if (글제목복사본[0] === '남자코트 추천') {
            글제목복사본[0] = '여자코트 추천';
        } else {
            글제목복사본[0] = '남자코트 추천';
        }
        글제목변경(글제목복사본);
    }

    return (
        <div className="App">
            <div className="black-nav">
                <h4>ReactBlog</h4>
            </div>
            <div className="list">
                <h4><span id="chkId">{글제목[0]}</span> <span onClick={따봉더하기}>👍</span>{따봉}</h4>
                <button onClick={성별변경}>변경</button>
                <p>2월 17일 발행</p>
            </div>
            <div className="list">
                <h4>{글제목[1]}</h4>
                <p>2월 17일 발행</p>
            </div>
            <div className="list">
                <h4>{글제목[2]}</h4>
                <p>2월 17일 발행</p>
            </div>

            <DivComponents1></DivComponents1>
            {/*<DivComponents1/>*/}

        </div>
    );
}

function DivComponents1() {
    // App() 바깥에 생성해야함.
    // 대문자로 작명
    return (
        <div className="modal">
            <h4>제목</h4>
            <p>날짜</p>
            <p>상세내용</p>
        </div>
    );
}

export default App;
