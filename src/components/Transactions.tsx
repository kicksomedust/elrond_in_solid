import { For, Component } from "solid-js";
import { ValueToMoney } from "./Utils";
import { TimestampToDate } from "./Utils";

export interface Transaction {
	hash: string;
	timestamp: string;
	sender: string;
	value: string;
}

export const Transactions: Component<{
	transactions: () => Transaction[];
}> = ({ transactions }) => {
	return (
		<div class="container-fluid">
			<h6>Transactions:</h6>
			<table class="table">
				<thead>
					<tr>
						<th>date</th>
						<th>sender</th>
						<th>value (EGLD)</th>
					</tr>
				</thead>
				<tbody>
					<For each={transactions()}>
						{(transaction: Transaction) => (
							<tr id={transaction.hash}>
								<td>{TimestampToDate(transaction.timestamp)}</td>
								<td>{transaction.sender}</td>
								<td>{ValueToMoney(transaction.value)}</td>
							</tr>
						)}
					</For>
				</tbody>
			</table>
		</div>
	);
};
