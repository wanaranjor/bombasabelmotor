<script>
	import Banner from "../components/Banner.svelte";
	import Footer from "../components/Footer.svelte";
	import Nav from "../components/Nav.svelte";
</script>

<svelte:head>
	<title>Bombas AbelMotor</title>
</svelte:head>

<Nav />
<Banner />
<main>
	<slot />
</main>
<Footer />
