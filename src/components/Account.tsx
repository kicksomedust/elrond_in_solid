import { Component } from "solid-js";
import { ValueToMoney } from "./Utils";

export const Account: Component<{
	address: () => string;
	balance: () => number;
}> = ({ address, balance }) => {
	return (
		<div class="container">
			<h2>Account details</h2>
			<h6>Address: {address()}</h6>
			<h6>Balance (EGLD): {ValueToMoney(balance())}</h6>
		</div>
	);
};
