<script>
	import Nav from "../components/Nav.svelte";
	import Banner from "../components/Banner.svelte";
</script>

<svelte:head>
	<title>Bombas AbelMotor</title>
</svelte:head>

<Nav />
<Banner />
<main>
	<slot />
</main>
