<script>
  import Nav from "../components/Nav.svelte";
  import Contact from "./Contact.svelte";
</script>

<section class="flex flex-row">
  <div
    class="w-3/5 h-64 bg-center bg-cover md:h-sm"
    style="background-image: url(banner.webp)">
    <Nav />
  </div>
  <div class="flex flex-col items-start justify-center w-2/5 px-24 text-left">
    <h1 class="text-4xl font-bold tracking-tight sm:text-3xl md:text-5xl">
      Bombas AbelMotor
    </h1>
    <p class="text-2xl text-gray-500">Juntos Protegiendo el Agua</p>
    <p class="my-3 text-sm text-gray-500">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
    </p>
    <!-- <a
        href="/contact"
        class="px-4 py-2 font-bold text-white bg-orange-500 rounded-full hover:bg-orange-700">Contáctenos</a> -->
    <Contact />
  </div>
</section>
