
var cnt = 0;
var $slideWrap = document.querySelector('.slide-wrap');

// 다음 슬라이드
function nextSlideFn(){
    cnt++;
    cnt > 3 ? cnt=3 : cnt;
    $slideWrap.style = 'left:' + (-1200*cnt) + 'px';
}

// 이전 슬라이드
function prevSlideFn(){
    cut--;
    cut < 0 ? cnt=0 : cnt;
    $slideWrap.style = 'left:' + (-1200*cnt) + 'px';
}