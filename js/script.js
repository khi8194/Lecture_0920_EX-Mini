//0: margin-left: 0px; (-400 * 0) : 0%
//1: margin-left: -400px; (-400 * 1) : -100%
//2: margin-left: -800px; (-400 * 2) : -200%
//3: margin-left: -1200px; (-400 * 3) : -300%
//4: margin-left: -1600px; (-400 * 4) : -400%

const frame = document.querySelector("main");
const panel = frame.querySelector(".panel");
const btns = frame.querySelectorAll(".btns li");

//html구조에서 패널과 버튼의 개수가 바뀔때마다 일일이 css파일에서
//넓이, 높이값을 재설정하는 번거로움 피하기 위함

//스크립트가 실행되자마자 panel의 넓이값과 높이값을
//btns의 개수에 따라 동적 스타일링
panel.style.width = 100 * btns.length + "%";
panel.style.height = "100%";

//스크립트가 실행되자마자 panel의 자식 li를 모두 찾은 다음
//반복을 돌며 btns의 개수에 따라 넓이, 높이 동적 스타일링
panel.querySelectorAll("li").forEach((li) => {
	li.style.width = 100 / btns.length + "%";
	li.style.height = "100%";
});

btns.forEach((btn, idx) => {
	btn.addEventListener("click", () => {
		console.log(idx);
		new Anime(panel, { left: -100 * idx + "%" }, { duration: 500 });
	});
});
