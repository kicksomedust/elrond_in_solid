import { Component, createSignal, createEffect } from "solid-js";
import { ValueToMoney } from "./Utils";
import { Transactions, Transaction } from "./Transactions";
import axios from "axios";
import { pageSize } from "./consts";

export const Account: Component<{
	address: () => string;
}> = ({ address }) => {
	//
	const [transactions, setTransactions] = createSignal<Transaction[]>([]);
	const [page, setPage] = createSignal<number>(1);
	const [transactionCount, setTransactionCount] = createSignal<number>(0);
	const [balance, setBalance] = createSignal<number>(0);

	createEffect(() => {
		if (address() === undefined || address() === "") {
			setTransactions([]);
			setBalance(0);
			return;
		}

		const from = page() * pageSize;
		axios
			.get(
				`https://api.elrond.com/accounts/${address()}/transactions?from=${from}&size=${pageSize}&withLogs=false`
			)
			.then((res) => {
				setTransactions(res.data);
			})
			.catch((response) => {
				console.log(response);
			});

		axios
			.get(`https://api.elrond.com/accounts/${address()}/transactions/count`)
			.then((res) => {
				setTransactionCount(res.data);
				console.log(balance());
			})
			.catch((response) => {
				console.log(response);
			});

		axios
			.get(`https://api.elrond.com/address/${address()}/balance`)
			.then((res) => {
				setBalance(res.data.data.balance);
				console.log(balance());
			})
			.catch((response) => {
				console.log(response);
			});
	});

	return (
		<div class="row">
			<div class="col-sm">
				<br />
				<h5>Account details</h5>
				<br />
				<h6>Address: {address()}</h6>
				<h6>Balance (EGLD): {ValueToMoney(balance())}</h6>
				<Transactions
					transactions={transactions}
					page={page}
					onSetPage={(page) => setPage(page)}
					transactionCount={transactionCount}
				/>
			</div>
		</div>
	);
};
