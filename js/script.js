const frame = document.querySelector("main");
const panel = frame.querySelector(".panel");
const btns = frame.querySelectorAll(".btns li");

//스크립트 로딩시 패널 너비, 높이 동적 초기화
panel.style.width = 100 * btns.length + "%";
panel.style.height = "100%";

panel.querySelectorAll("li").forEach((li) => {
	li.style.width = 100 / btns.length + "%";
	li.style.height = "100%";
});

//각 버튼 클릭 이벤트 연결
btns.forEach((btn, idx) => {
	btn.addEventListener("click", () => {
		console.log(idx);
		// new Anime(panel, { left: -100 * idx + "%" }, { duration: 500 });
		new Anime(panel, { left: -100 * idx + "%" }, { duration: 1000 });

		//버튼 클릭시마다 순간적으로 모든 버튼을 반복돌며 on을 제거
		btns.forEach((btn) => btn.classList.remove("on"));
		//idx에 해당하는 현재 순전의 버튼만 on을 붙여 활성화
		btns[idx].classList.add("on");
	});
});

/*
    특정 요소만 활성화 시키는 로직
    - 순간적으로 모든 그룹요소를 비활성화 처리
    - 그 직후 원하는 요소만 활성화 처리
*/
