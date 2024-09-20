//0: margin-left: 0px; (-400 * 0) : 0%
//1: margin-left: -400px; (-400 * 1) : -100%
//2: margin-left: -800px; (-400 * 2) : -200%
//3: margin-left: -1200px; (-400 * 3) : -300%
//4: margin-left: -1600px; (-400 * 4) : -400%

const frame = document.querySelector("main");
const panel = frame.querySelector(".panel");
const btns = frame.querySelectorAll(".btns li");

btns.forEach((btn, idx) => {
	btn.addEventListener("click", () => {
		console.log(idx);
		// new Anime(panel, { marginLeft: -400 * idx }, { duration: 500 });
		// new Anime(panel, { marginLeft: -100 * idx + "%" }, { duration: 500 });  //margin, padding 퍼센트 모션 불가 오류 발생
		new Anime(panel, { left: -100 * idx + "%" }, { duration: 500 });
	});
});

//미션 : HTML에서 li의 개수만 수정하면 scss에서 일일이 panel, li의 넓이를 수정할 필요가 없도록 스크립트에서 동적 처리
