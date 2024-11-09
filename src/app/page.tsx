"use client";

import Image from "next/image";
import styles from "./page.module.css";
import React, { useState } from "react";
import { getUser } from "./actions/getUser";
import { CSRFSection } from "./components/CSRFSection";

export default function Home() {
	const [vulnerableCheckbox, setVulnerableCheckbox] = useState(false);
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [userNotFound, setUserNotFound] = useState(false);

	const handleClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault(); // Prevent form submission
		console.log("vulnerableCheckbox:", vulnerableCheckbox);
		console.log("Username sent:", username);
		console.log("Password sent:", password);

		const userData = await getUser(username, password, vulnerableCheckbox);

		if (userData) {
			console.log(userData);
			setUserNotFound(false);
		} else {
			console.log("User not found");
			setUserNotFound(true);
		}

		console.log("Recived user data:", userData);
	};

	return (
		<div className={styles.page}>
			<main className={styles.main}>
				<h1 className={styles.title}>2. Projekt</h1>

				<h2 className={styles.subtitle}>Ranjivost prve kategorije: SQL umetanje</h2>

				<form>
					<label>
						Ranjivost uključena:
						<input type="checkbox" name="vulnerableCheckbox" checked={vulnerableCheckbox} onChange={(e) => setVulnerableCheckbox(e.target.checked)} />
					</label>
					<br />
					<label>
						Username:
						<input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
					</label>
					<br />
					<label>
						Password:
						<input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
					</label>
					<br />
					<button type="submit" onClick={handleClick}>
						Login
					</button>
				</form>

        
        <CSRFSection />
			</main>
			<footer className={styles.footer}>
				{/*
new component:
  link to this page  neka piše ACTIVE pored ako je na ovoj stranici
  link to second page

  login token: token...
  action result: 200 OK, "action successful"


  kad ranjiwost uključena, onda se na second pagu vidi 200 OK, "action successful" i token polje neka bude token...
  kad nije uključena, onda se vidi 401 Unauthorized, "action unsuccessful" i token polje neka bude prazno

  
  */}

				
			</footer>
		</div>
	);
}
