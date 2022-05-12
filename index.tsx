import { createSignal, Component } from "solid-js";
import { render } from "solid-js/web";
import { Image } from "./src/components/Image";
import { Account } from "./src/components/Account";
import { EnterAddress } from "./src/components/EnterAddress";

const App: Component = () => {
	const [address, setAddress] = createSignal<string>("");

	const getStyle = () => {
		return {
			background: "#b7bfd7",
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
					<Account address={address} />
				</div>
			</div>
		</div>
	);
};

render(() => <App />, document.getElementById("app"));
