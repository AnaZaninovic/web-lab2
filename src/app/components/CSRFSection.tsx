"use client";

import { PAGE_1, PAGE_2 } from "@/config";
import { useEffect, useState } from "react";

export const CSRFSection = () => {
	const [vulnerableCheckbox, setVulnerableCheckbox] = useState(false);

	const [token, setToken] = useState("");
	const [actionResponse, setActionResponse] = useState("");

	const handleGetToken = async () => {
		const response = await fetch("/api/getToken");
		const data = await response.json();
		setToken(data.token);
	};

	const handleDoAction = async () => {
		const response = await fetch("/api/doAction", {
			headers: {
				"Content-Type": "application/json",
				"CSRF-Token": token,
			},
		});
		const data = await response.json();
		setActionResponse(data.action);
	};

	const [isPage1, setIsPage1] = useState(false);
	const [isPage2, setIsPage2] = useState(false);

	useEffect(() => {
		setIsPage1(window.location.href === PAGE_1);
		setIsPage2(window.location.href === PAGE_2);
	}, []);

	return (
		<div>
			<h2>Ranjivost druge kategorije: Lažiranje zahtjeva na drugom sjedištu (Cross Site Request Forgery, CSRF)</h2>
			<a href={PAGE_1} target="_blank" rel="noreferrer">
				Otvori stranicu 1
			</a>{" "}
			{isPage1 && <span>(Ova stranica)</span>}
			<br />
			<a href={PAGE_2} target="_blank" rel="noreferrer">
				Otvori stranicu 2
			</a>{" "}
			{isPage2 && <span>(Ova stranica)</span>}
			<br />
			<label>
				Ranjivost uključena:
				<input type="checkbox" name="vulnerableCheckbox" checked={vulnerableCheckbox} onChange={(e) => setVulnerableCheckbox(e.target.checked)} />
			</label>
			<br />
			<button onClick={handleGetToken}>Get Token</button>
			<button onClick={handleDoAction}>Do Action</button>
			<p>Token: {token}</p>
			<p>Action response: {actionResponse}</p>
		</div>
	);
};
