<script>
  import RainDrop32 from "carbon-icons-svelte/lib/RainDrop32";
</script>

<style>
  #menu-toggle:checked + #menu {
    display: block;
  }
</style>

<nav class="sticky top-0 z-30 w-full font-bold text-white">
  <div
    class="container flex flex-wrap items-center justify-start w-full px-3 py-2 mx-auto mt-0 md:px-0 ">
    <div class="flex flex-row items-center">
      <RainDrop32
        class="inline-block w-12 h-12 mx-auto text-orange-500 fill-current" />
    </div>
    <label for="menu-toggle" class="block cursor-pointer md:hidden">
      <svg
        class="text-gray-900 fill-current"
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20">
        <title>menu</title>
        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
      </svg>
    </label>

    <input class="hidden" type="checkbox" id="menu-toggle" />
    <div
      class="order-3 hidden w-full md:flex md:items-center md:w-auto md:order-1"
      id="menu">
      <nav>
        <ul
          class="items-center justify-start pt-4 text-white md:flex text-md md:text-lg md:pt-0">
          <li class="px-2 hover:text-orange-500">
            <a
              href="/#inicio"
              class="inline-block px-4 py-2 no-underline md:py-0">
              Inicio
            </a>
          </li>
          <li class="px-2 hover:text-orange-500">
            <a
              href="#quienes-somos"
              class="inline-block px-4 py-2 no-underline md:py-0">
              Quienes Somos
            </a>
          </li>
          <li class="px-2 hover:text-orange-500">
            <a
              href="/#mision"
              class="inline-block px-4 py-2 no-underline md:py-0">
              Misión
            </a>
          </li>
          <li class="px-2 hover:text-orange-500">
            <a
              href="/#vision"
              class="inline-block px-4 py-2 no-underline md:py-0">
              Visión
            </a>
          </li>
          <!-- <li class="px-2 hover:text-orange-500">
            <a
              href="/#servicios"
              class="inline-block px-4 py-2 no-underline md:py-0">
              Servicios
            </a>
          </li> -->
          <li class="px-2 hover:text-orange-500">
            <a
              href="/#clientes"
              class="inline-block px-4 py-2 no-underline md:py-0">
              Clientes
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</nav>
