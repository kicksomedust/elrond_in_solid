import { Component } from "solid-js";

export const EnterAddress: Component<{
	address: string;
	onSetAddress: (str) => void;
}> = ({ address, onSetAddress }) => {
	//
	onsubmit = (e) => {
		e.preventDefault();
		let address = e.currentTarget[0];
		if (address !== undefined) onSetAddress(address.value);
	};

	return (
		<div class="container-fluid">
			<form
				onSubmit={onsubmit}
				style={{ display: "flex" }}
				class="bg-dark text-white"
			>
				<input
					type="text"
					id="address"
					placeholder="Elrond account address ..."
					value={address}
					style={{ flex: "10" }}
					class="rounded"
				/>
				<input
					type="submit"
					value="Search"
					style={{ flex: "1" }}
					class="rounded"
				/>
			</form>
		</div>
	);
};
