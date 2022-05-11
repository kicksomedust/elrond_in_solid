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

	createEffect(() => {
		setTransactions([]);
		setBalance(0);

		if (address() !== undefined) {
			if (address() !== "") {
				console.log(address());
				axios
					.get(`https://api.elrond.com/address/${address()}/transactions`)
					.then((res) => {
						setTransactions(res.data.data.transactions);
						//console.log(this.state.transactions);
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
			}
		}
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
					<Transactions transactions={transactions} />
				</div>
			</div>
		</div>
	);
};

render(() => <App />, document.getElementById("app"));
