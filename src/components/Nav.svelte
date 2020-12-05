<script>
  import RainDrop32 from "carbon-icons-svelte/lib/RainDrop32";
</script>

<style>
  #menu-toggle:checked + #menu {
    display: block;
  }
</style>

<nav
  class="w-full sticky top-0 z-30 border-orange-500 border-b-2 bg-white shadow-md">
  <div
    class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2 px-3 md:px-0 ">
    <div class="flex flex-row items-center">
      <RainDrop32
        class="fill-current text-orange-500 inline-block h-12 w-12 mx-auto" />
      <span class="px-1 text-gray-800 text-lg font-black">BOMBAS ABELMOTOR</span>
    </div>
    <label for="menu-toggle" class="cursor-pointer md:hidden block">
      <svg
        class="fill-current text-gray-900"
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
      class="hidden md:flex md:items-center md:w-auto w-full order-3 md:order-1"
      id="menu">
      <nav>
        <ul
          class="md:flex items-center justify-between text-md md:text-lg text-gray-800 pt-4 md:pt-0">
          <li class="px-2 hover:text-orange-500">
            <a
              href="/#inicio"
              class="inline-block no-underline py-2 md:py-0 px-4">
              Inicio
            </a>
          </li>
          <li class="px-2 hover:text-orange-500">
            <a
              href="#quienes-somos"
              class="inline-block no-underline py-2 md:py-0 px-4">
              Quienes Somos
            </a>
          </li>
          <li class="px-2 hover:text-orange-500">
            <a
              href="/#mision"
              class="inline-block no-underline py-2 md:py-0 px-4">
              Misión
            </a>
          </li>
          <li class="px-2 hover:text-orange-500">
            <a
              href="/#vision"
              class="inline-block no-underline py-2 md:py-0 px-4">
              Visión
            </a>
          </li>
          <!-- <li class="px-2 hover:text-orange-500">
            <a
              href="/#servicios"
              class="inline-block no-underline py-2 md:py-0 px-4">
              Servicios
            </a>
          </li> -->
          <li class="px-2 hover:text-orange-500">
            <a
              href="/#clientes"
              class="inline-block no-underline py-2 md:py-0 px-4">
              Clientes
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</nav>
