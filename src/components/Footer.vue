<template>
  <div class="container">
    <footer
      class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top"
    >
      <div class="col-md-4 d-flex align-items-center">
        <a
          href="/"
          class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
        >
        </a>
        <span class="text-muted">&copy; 2021 Company, Inc</span>
      </div>

      <ul class="nav col-md-4 justify-content-end list-unstyled d-flex text-light">
        <li class="ms-3">
          <a class="text-muted" href="https://twitter.com/ceeliatt">
            <font-awesome-icon
              class="align-middle fs-1"
              :icon="['fab', 'twitter']"
          /></a>
        </li>
        <li class="ms-3">
          <a class="text-muted" href="https://t.me/celiaetg"
            ><font-awesome-icon
              class="align-middle fs-1"
              :icon="['fab', 'telegram-plane']"
          /></a>
        </li>
      </ul>
    </footer>
  </div>
</template>
