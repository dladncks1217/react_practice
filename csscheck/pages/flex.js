import React from "react";

const Flex = () => {
  return (
    <>
      <div id="flex">
        <div class="check">adsf</div>
        <div class="check">adsf</div>
        <div class="check">adsf</div>
      </div>
    </>
  );
};

export default Flex;

// flexbox에는 주축과 교차축이 있음.
// 주축은 가로방향(행 방향임)
// 교차축은 세로방향 (열 방향 )
// 축 바꿀라면 flex-direction 사용
