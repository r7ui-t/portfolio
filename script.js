document.addEventListener('DOMContentLoaded', () => {
	const modal = document.getElementById('work-modal');

	if (!modal) {
		return;
	}

	const defaultImage =
		"data:image/svg+xml;charset=UTF-8," +
		encodeURIComponent(`
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800">
			  <rect width="1200" height="800" fill="#f4f4f4"/>
			  <rect x="60" y="60" width="1080" height="680" rx="28" fill="#ffffff" stroke="#111" stroke-width="4" stroke-dasharray="18 12"/>
			  <text x="600" y="392" text-anchor="middle" font-family="sans-serif" font-size="54" fill="#666">Preview Image</text>
			</svg>
		`);

	const imageElement = modal.querySelector('.work-modal-image');
	const titleElement = modal.querySelector('.work-modal-title');
	const periodElement = modal.querySelector('.work-modal-period');
	const techElement = modal.querySelector('.work-modal-tech');
	const detailElement = modal.querySelector('.work-modal-detail');
    const processElement = modal.querySelector(".work-modal-process");
	const closeButton = modal.querySelector('.work-modal-close');

	const openModal = (trigger) => {
		imageElement.src = trigger.dataset.modalImage || defaultImage;
		imageElement.alt = trigger.dataset.modalTitle || '作品プレビュー';
		titleElement.textContent = trigger.dataset.modalTitle || '';
		periodElement.textContent = trigger.dataset.modalPeriod || '未設定';
		techElement.textContent = trigger.dataset.modalTech || '未設定';
		detailElement.textContent = trigger.dataset.modalDetail || '';
        processElement.textContent = trigger.dataset.modalProcess || '';

		if (typeof modal.showModal === 'function') {
			modal.showModal();
		} else {
			modal.setAttribute('open', '');
		}
	};

	const closeModal = () => {
		if (typeof modal.close === 'function') {
			modal.close();
		} else {
			modal.removeAttribute('open');
		}
	};

	document.addEventListener('click', (event) => {
		const trigger = event.target.closest('.js-work-modal-trigger');

		if (!trigger) {
			return;
		}

		event.preventDefault();
		openModal(trigger);
	});

	closeButton?.addEventListener('click', closeModal);

	modal.addEventListener('click', (event) => {
		if (event.target === modal) {
			closeModal();
		}
	});
});
