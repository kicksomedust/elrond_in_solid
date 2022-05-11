import { Component } from "solid-js";

export const Image: Component<{
	logo: string;
}> = ({ logo }) => {
	return (
		<div class="container-fluid">
			<img src={logo} width="250" height="100" />
		</div>
	);
};
