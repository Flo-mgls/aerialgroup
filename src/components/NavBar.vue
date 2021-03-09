<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
    <div class="container-fluid">
      <router-link :to="{ name: 'Home' }" class="navbar-brand" href="#"
        ><img
          src="../assets/logo-ad.svg"
          alt=""
          width="50"
          height="50"
          class="d-inline-block align-top"
      /></router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="collapse navbar-collapse justify-content-between"
        id="navbarNavDropdown"
      >
        <ul class="navbar-nav">
          <h1 class="d-block d-lg-none">
            <router-link :to="{ name: 'Home' }" class="navbar-brand" href="#"
              >AerialDiscount</router-link
            >
          </h1>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Features</a>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Dropdown link
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
        </ul>
        <h1 class="d-none d-lg-block">
          <router-link :to="{ name: 'Home' }" class="navbar-brand" href="#"
            >AerialDiscount</router-link
          >
        </h1>
        <form class="d-flex">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style scoped lang="scss">
</style>