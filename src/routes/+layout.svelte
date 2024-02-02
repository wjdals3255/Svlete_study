<script>
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';

	/** @type {import('./$types').LayoutData} */
	export let data;

	// Create a store and update it when necessary...
	const user = writable();
	$: user.set(data.user);

	// ...and add it to the context for child components to access
	setContext('user', user);
</script>

<nav>
	<a href="/">Home</a>
	<a href="/about">About</a>
	<a href="/settings">Settings</a>
</nav>

<slot />

<!-- <script>
	import { page } from '$app/stores';
</script>

<svelte:head>
	<title>{$page.data.title}</title>
</svelte:head> -->
<form method="POST" action="/login?/register">
	<!-- content -->
</form>
