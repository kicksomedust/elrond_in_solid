import { Component } from "solid-js";

export const NavigateTransactions: Component<{
	page: () => number;
	onSetPage: (page) => void;
}> = ({ page, onSetPage }) => {
	//

	function prevPage() {
		if (page() > 1) {
			onSetPage(page() - 1);
		}
	}

	function nextPage() {
		onSetPage(page() + 1);
	}

	return (
		<div class="container-fluid">
			<form
				onSubmit={onsubmit}
				style={{ display: "flex" }}
				class="bg-dark text-white"
			>
				<input
					value="Prev"
					id="prev"
					onClick={prevPage}
					type="button"
					style={{ flex: "1" }}
					class="rounded"
				/>
				<input
					value="Next"
					id="next"
					onClick={nextPage}
					type="button"
					style={{ flex: "1" }}
					class="rounded"
				/>
			</form>
		</div>
	);
};
