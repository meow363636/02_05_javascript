// 1. html 태그에 버튼 클릭 이벤트 등록
// 1-1. 다음 슬라이드 버튼 클릭 이벤트 등록(right-box)
// 1-2. 이전 슬라이드 버튼 클릭 이벤트 등록(left-box)

// 2. 버튼 클릭시 호출 할 함수를 생성
// 2-1. 다음 슬라이드 함수 - nextSlideFn()
// 2-2. 이전 슬라이드 함수 - prevSlideFn()


var cnt = 0; // 증가변수는 반드시 초기값이 설정되어야 함
var $slideWrap = document.querySelector('.slide-wrap');

function nextSlideFn(){
    cnt++;
    cnt > 3 ? cnt=3 : cnt; // 마지막 슬라이드 증가 숫자가 3을 초과하면 3으로 고정
                           // 아니면 증가 값 그대로
    $slideWrap.style = 'left:' + (-1200*cnt) + 'px';
}
// 2-2. 이전 슬라이드 함수 - prevSlideFn()
function prevSlideFn(){
    cnt--;
    cnt < 0 ? cnt=0 : cnt; // 처음 슬라이드(0) 이전이면(-1) 0으로 초기화
                             // 그렇지 않으면 감소 값 그대로
    $slideWrap.style = 'left:' + (-1200*cnt) + 'px';
}

// 3. 생성된 함수와 버튼을 연결
// 3-1. 다음 슬라이드 버튼 클릭 이벤트에 다음 슬라이드 함수 입력

// 4. 연결 테스트
// 4-1. 다음 슬라이드 버튼 클릭 & 확인
// 4-2. 이전 슬라이드 버튼 클릭 & 확인

// 5. 증감 변수 등록 그리고 함수에 증가변수 코딩
// 5-1. 다음 슬라이드 함수 안에 cnt++ 증가 연산식 코딩
// 5-1. 이전 슬라이드 함수 안에 cnt-- 감사 연산식 코딩

// 6. 증감 변수 등록, 함수에 증가변수 테스트 alert
// 6-1. 다음 슬라이드 cnt++ 증가 확인
// 6-2. 이전 슬라이드 cnt-- 감사 확인

// 7. 이동할 슬라이드 박스(.slide-wrap)를 변수 등록

// 8. 스타일 시트(CSS) 에서 이동할 슬라이드 박스(.slide-wrap)에 
//    스타일 설정 position:relative; left:0; transition:all .6s;

// 9. 슬라이드 버튼 클릭 슬라이드 실행
// 9-1. 다음 슬라이드 버튼 클릭 다음 슬라이드 실행
// 9-2. 이전 슬라이드 버튼 클릭 이전 슬라이드 실행