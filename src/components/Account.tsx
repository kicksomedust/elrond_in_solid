import { Component } from "solid-js";
import { ValueToMoney } from "./Utils";

export const Account: Component<{
	address: () => string;
	balance: () => number;
}> = ({ address, balance }) => {
	return (
		<div class="container">
			<div class="row">
				<div class="col-sm">
					<br />
					<h3>Account details</h3>
					<h6>Address: {address()}</h6>
					<h6>Balance (EGLD): {ValueToMoney(balance())}</h6>
					<br />
				</div>
			</div>
		</div>
	);
};
