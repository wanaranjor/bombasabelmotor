<script>
	import Nav from "../components/Nav.svelte";
	// import Banner from "../components/Banner.svelte";
	// import Footer from "../components/Footer.svelte";
	export let segment;
</script>

<svelte:head>
	<title>Bombas Abel Motor</title>
</svelte:head>

<Nav {segment} />

<main>
	<slot />
</main>
