import React from "react";

const Container = () => {
  return (
    <>
      <div id="container">
        <div class="item">1</div>
        <div class="item self">2</div>
        <div class="item">3</div>
      </div>
    </>
  );
};

export default Container;
// justify-content : flex컨테이너의 주축에서 어떤식으로 요소를 배치할지 결정하는 속성
// center(가운데), flex-start(앞), flex-end(뒤),
//space-around(요소간 여백을 동일하게 맞추겠다.), space-between(맨처음거 맨앞에, 맨마지막거 맨끝에, 나머지 여백을 동일하게.)

// align-items : flex컨테이너의 교차축에서 어떤식으로 배치할지 결정하는 속성
// flex-end(끝에다가 배치한다.), flex-start(맨 앞에다가), center(교차축에서의 가운데 방향)

// align-self : 교차축에서 요소 하나의 배치방법을 결정하는 속성.
// *특정 요소만* flex-end(끝에다가 배치한다.), flex-start(맨 앞에다가), center(교차축에서의 가운데 방향)

// flex요소는 자식 요소가 자신보다 커지게 된다면 flex컨테이너는 자식 요소를 수축시키는 특성이 있음.
// 이 특성이 싫다면 아래 속성 사용
// flex-wrap : flex컨테이너의 하위 요소들이 flex 컨테이너보다 커져버렸을 때의 처리방법을 결정.
// no-wrap(기본), wrap(하위 요소가 더 커져버린다면 두 행 이상으로 처리하는것을 허용.)
// wrap-reverse(wrap은 하긴하되, 반대방향으로 처리.)
