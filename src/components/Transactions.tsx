import { For, Component } from "solid-js";
import { ValueToMoney } from "./Utils";
import { TimestampToDate } from "./Utils";
import { NavigateTransactions } from "./NavigateTransactions";

export interface Transaction {
	hash: string;
	timestamp: string;
	sender: string;
	value: string;
}

export const Transactions: Component<{
	transactions: () => Transaction[];
	page: () => number;
	onSetPage: (page) => void;
}> = ({ transactions, page, onSetPage }) => {
	//

	return (
		<div>
			<div class="container">
				<div class="row" style={{ display: "flex" }}>
					<div class="col-sm" style={{ flex: "10" }}>
						<h6>Transactions:</h6>
					</div>
					<div class="col-sm">
						<NavigateTransactions
							page={page}
							onSetPage={(page) => onSetPage(page)}
						/>
					</div>
				</div>
			</div>
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
