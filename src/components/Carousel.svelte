<script>
  import Carousel from "@beyonk/svelte-carousel";
  import { ChevronLeftIcon, ChevronRightIcon } from "svelte-feather-icons";
</script>

<Carousel perPage={1} autoplay={5000} controls={false}>
  <span class="control" slot="left-control">
    <ChevronLeftIcon />
  </span>
  <div class="slide-content h-96">
    <img src="drop-water.webp" alt="drop-water" class="w-full" />
  </div>
  <div class="slide-content h-96">
    <img src="gota.webp" alt="gota" class="w-full" />
  </div>
  <div class="slide-content h-96">
    <img src="pedrollo-cover.webp" alt="pedrollo-cover" class="w-full" />
  </div>
  <span class="control" slot="right-control">
    <ChevronRightIcon />
  </span>
</Carousel>
