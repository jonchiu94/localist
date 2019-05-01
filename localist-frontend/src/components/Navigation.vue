<template>
    <div>
    <b-navbar toggleable="lg" type="light" variant="info" class="nav-bar">
      <b-navbar-brand to="/"
            class="nav-item nav-link"
            active-class="active"
            exact>
          Localist
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item
              to="/tours"
              class="nav-item nav-link"
              active-class="active"
              exact>
                Tours
          </b-nav-item>
          <b-nav-item
              to="/guides"
              class="nav-item nav-link"
              active-class="active"
              exact>
                Guides
          </b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input class="col-lg-5" size="md" placeholder="What is your dream experience?"></b-form-input>
            <b-form-input class="col-lg-2" size="md" placeholder="mm/dd/yy"></b-form-input>
            <b-form-input class="col-lg-2" size="md" placeholder="# of Guests"></b-form-input>
            <b-button size="md" id="submit-button" class="my-2 my-sm-0" type="submit">Search</b-button>
          </b-nav-form>

          <!-- <b-nav-item-dropdown text="Lang" right>
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">ES</b-dropdown-item>
            <b-dropdown-item href="#">RU</b-dropdown-item>
            <b-dropdown-item href="#">FA</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown right>
            <template slot="button-content"><em>User</em></template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown> -->
          <b-nav-item
              to="/signin"
              class="nav-item nav-link"
              active-class="active"
              exact>
                Sign In
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<style>
  .nav-bar {
    margin-bottom: 30px;
    color: black;
    background: #1E9600;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #FF0000, #FFF200, #1E9600);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #FF0000, #FFF200, #1E9600); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }

  #submit-button {
    color: black;
    background: #FF0000;  /* fallback for old browsers */
    /* background: -webkit-linear-gradient(to left, #FF0000, #FFF200, #1E9600);
    background: linear-gradient(to left, #FF0000, #FFF200, #1E9600);  */
  }
</style>
