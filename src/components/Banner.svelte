<script>
  import Carousel from "./Carousel.svelte";
</script>

<section class="bg-black">
  <div
    class="flex flex-col items-center justify-center text-center sm:flex-row md:justify-start sm:text-left">
    <div
      class="flex flex-col w-full px-10 mx-auto my-5 text-white sm:w-2/5 sm:my-0">
      <h1
        class="text-4xl font-bold tracking-tight bg-black sm:text-3xl md:text-6xl">
        Bombas Abelmotor
      </h1>
      <p class="text-2xl">Juntos Protegiendo el Agua</p>
      <h2 class="py-3 text-xl font-bold leading-none">EDGAR SORA</h2>
    </div>
    <div class="flex w-full sm:w-3/5">
      <Carousel />
    </div>
  </div>
</section>

<!-- class="bg-center bg-cover h-96"
  style="background-image: url(drop-water.webp)"> -->
