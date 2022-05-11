import { Component } from "solid-js";

export const EnterAddress: Component<{
	address: string;
	onSetAddress: (str) => void;
}> = ({ address, onSetAddress }) => {
	onsubmit = (e) => {
		e.preventDefault();
		let address = e.currentTarget[0];
		if (address !== undefined) onSetAddress(address.value);
	};

	return (
		<div class="container-fluid">
			<form onSubmit={onsubmit} style={{ display: "flex" }}>
				<input
					type="text"
					id="address"
					placeholder="Elrond account address ..."
					style={{ flex: "10", padding: "5px" }}
					value={address}
				/>
				<input
					type="submit"
					value="Submit"
					className="btn"
					style={{ flex: "1" }}
				/>
			</form>
		</div>
	);
};
