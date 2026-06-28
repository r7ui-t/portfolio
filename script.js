document.addEventListener("DOMContentLoaded", () => {
	const modal = document.getElementById("work-modal");

	const imageElement = modal.querySelector(".work-modal-image");
	const titleElement = modal.querySelector(".work-modal-title");
	const periodElement = modal.querySelector(".work-modal-period");
	const techElement = modal.querySelector(".work-modal-tech");
	const detailElement = modal.querySelector(".work-modal-detail");
	const processElement = modal.querySelector(".work-modal-process");

	const defaultImage =
		"data:image/svg+xml;charset=UTF-8," +
		encodeURIComponent(`
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800">
			<rect width="1200" height="800" fill="#f4f4f4"/>
			<text x="600" y="400" text-anchor="middle" font-size="40" fill="#666">
			No Image
			</text>
		</svg>
		`);

	// 開く
	const openModal = (trigger) => {
		imageElement.src = trigger.dataset.modalImage || defaultImage;
		titleElement.textContent = trigger.dataset.modalTitle || "";
		periodElement.textContent = trigger.dataset.modalPeriod || "";
		techElement.textContent = trigger.dataset.modalTech || "";
		detailElement.textContent = trigger.dataset.modalDetail || "";
		processElement.textContent = trigger.dataset.modalProcess || "";

		modal.classList.remove("hidden");
	};

	// 閉じる
	const closeModal = () => {
		modal.classList.add("hidden");
	};

	// infoボタン
	document.addEventListener("click", (e) => {
		const trigger = e.target.closest(".js-work-modal-trigger");
		if (trigger) {
		e.preventDefault();
		openModal(trigger);
		}
	});

	// 閉じるボタン & 背景
	document.addEventListener("click", (e) => {
		if (e.target.closest(".js-modal-close")) {
		closeModal();
		}
	});
});
