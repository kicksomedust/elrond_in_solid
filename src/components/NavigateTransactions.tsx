import { Component, createEffect } from "solid-js";
import { pageSize } from "./consts";

export const NavigateTransactions: Component<{
	page: () => number;
	onSetPage: (page) => void;
	transactionCount: () => number;
}> = ({ page, onSetPage, transactionCount }) => {
	//
	createEffect(() => {
		{
			const button = document.getElementById("first");
			button["disabled"] = isFirst();
		}
		{
			const button = document.getElementById("prev");
			button["disabled"] = isFirst();
		}
		{
			const button = document.getElementById("next");
			button["disabled"] = isLast();
		}
		{
			const button = document.getElementById("last");
			button["disabled"] = isLast();
		}
	});

	function firstPage() {
		onSetPage(1);
	}

	function prevPage() {
		if (page() > 1) {
			onSetPage(page() - 1);
		}
	}

	function nextPage() {
		const last = Math.floor(transactionCount() / pageSize);
		onSetPage(Math.min(page() + 1, last));
	}

	function lastPage() {
		const last = Math.floor(transactionCount() / pageSize);
		onSetPage(last);
	}

	function isLast(): boolean {
		return page() >= Math.floor(transactionCount() / pageSize);
	}

	function isFirst() {
		return page() <= 1;
	}

	return (
		<>
			<div class="container">
				<form onSubmit={onsubmit} style={{ display: "flex" }}>
					<input
						value="&laquo;"
						id="first"
						onClick={firstPage}
						type="button"
					/>
					<input
						value="&lsaquo;"
						id="prev"
						onClick={prevPage}
						type="button"
					/>
					<input value={page()} id="current" readOnly={true} />
					<input
						value="&rsaquo;"
						id="next"
						onClick={nextPage}
						type="button"
					/>
					<input
						value="&raquo;"
						id="last"
						onClick={lastPage}
						type="button"
					/>
				</form>
			</div>
		</>
	);
};
