import { createSignal, createEffect, Component } from "solid-js";
import { render } from "solid-js/web";
import { Image } from "./src/components/Image";
import { Account } from "./src/components/Account";
import { Transactions, Transaction } from "./src/components/Transactions";
import { EnterAddress } from "./src/components/EnterAddress";
import axios from "axios";

const App: Component = () => {
	const [address, setAddress] = createSignal<string>("");
	const [balance, setBalance] = createSignal<number>(0);
	const [transactions, setTransactions] = createSignal<Transaction[]>([]);
	const [page, setPage] = createSignal<number>(1);
	const pageSize: number = 10;

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
			.get(`https://api.elrond.com/address/${address()}/balance`)
			.then((res) => {
				setBalance(res.data.data.balance);
				console.log(balance());
			})
			.catch((response) => {
				console.log(response);
			});
	});

	const getStyle = () => {
		return {
			background: "#b2b2b2",
			padding: "10px",
			borderBottom: "1px #cc dotted",
		};
	};

	return (
		<div class="App" style={getStyle()}>
			<Image logo="https://www.BiteTheBullet.nl//BiteTheBullet.png" />
			<div class="container-fluid py-5">
				<div class="container">
					<EnterAddress
						address={address()}
						onSetAddress={(str) => setAddress(str)}
					/>
					<Account address={address} balance={balance} />
					<Transactions
						transactions={transactions}
						page={page}
						onSetPage={(page) => setPage(page)}
					/>
				</div>
			</div>
		</div>
	);
};

render(() => <App />, document.getElementById("app"));
