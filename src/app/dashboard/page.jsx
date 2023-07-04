'use client';

import React, { useEffect, useState } from 'react';
import useSWR from 'swr';
import styles from './page.module.css';

const Dashboard = () => {
	// const [data, setDate] = useState([]);
	// const [err, setErr] = useState(false);
	// const [isLoading, setIsLoading] = useState(false);

	// useEffect(() => {
	// 	const getDate = async () => {
	// 		setIsLoading(true);
	// 		const res = await fetch('http://localhost:3000/api/posts', {
	// 			cache: 'no-store',
	// 		});

	// 		if (!res.ok) {
	// 			setErr(true);
	// 		}

	// 		const data = await res.json();

	// 		setDate(data);
	// 		setIsLoading(false);
	// 	};

	// 	getDate();
	// }, []);

	const fetcher = (...args) => fetch(...args).then((res) => res.json());

	const { data, mutate, error, isLoading } = useSWR(`/api/posts?username=${session?.data?.user.name}`, fetcher);

	return <div className={styles.container}>Dashboard</div>;
};

export default Dashboard;
