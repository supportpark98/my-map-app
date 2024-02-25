import React, { useState } from 'react';

function App() {
  const [floor, setFloor] = useState(31); // 기본값으로 31층을 설정합니다.
  const imagePaths = {
    31: "https://raw.githubusercontent.com/supportpark98/my-map-app/de9eaac1d0dbb28d1448a0fdfbcea1d7fecbb62e/%EC%95%84%EC%85%88%ED%83%80%EC%9B%8C_31F.jpg",
    32: "https://github.com/supportpark98/my-map-app/blob/main/%EC%95%84%EC%85%88%ED%83%80%EC%9B%8C_32F.jpg?raw=true",
    33: "https://github.com/supportpark98/my-map-app/blob/main/%EC%95%84%EC%85%88%ED%83%80%EC%9B%8C_33F.jpg?raw=true"
  };

  const [depart, setDepart] = useState("");
  const [destination, setDestination] = useState("");
  const [notice, setNotice] = useState("");
  const [directions, setDirections] = useState("");

  const handleFloorChange = (e) => {
    setFloor(parseInt(e.target.value));
  };

  const handleDepartChange = (e) => {
    setDepart(e.target.value);
  };

  const handleDestinationChange = (e) => {
    setDestination(e.target.value);
  };

  const handleConfirmClick = () => {
    // 확인 버튼을 클릭했을 때 실행되는 로직을 작성해주세요.
    // 출발지와 도착지를 사용하여 길안내 정보를 가져오고, setDirections 함수를 사용하여 directions 상태를 업데이트합니다.
  };

  return (
    <div>
      <h1>아셈타워 회의실 안내</h1>
      <div>
        <h2>공지사항</h2>
        <p>{notice}</p>
      </div>
      <div>
        <h2>층 선택</h2>
        <select value={floor} onChange={handleFloorChange}>
          <option value={31}>31층</option>
          <option value={32}>32층</option>
          <option value={33}>33층</option>
        </select>
      </div>
      <div>
        <h2>출발지</h2>
        <input type="text" value={depart} onChange={handleDepartChange} />
      </div>
      <div>
        <h2>도착지</h2>
        <input type="text" value={destination} onChange={handleDestinationChange} />
      </div>
      <button onClick={handleConfirmClick}>확인</button>
      <div>
        <h2>길안내</h2>
        <p>{directions}</p>
      </div>
      <div>
        <img src={imagePaths[floor]} alt="이미지" />
      </div>
    </div>
  );
}

export default App;
