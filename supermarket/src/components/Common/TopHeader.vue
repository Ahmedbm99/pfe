<template>
    <div>
      <b-row>
        <b-col>
          <b-navbar
            class="py-3"
            toggleable="lg"
            type="dark"
            style="background-color: #ffd60a"
          >
            <b-navbar-brand href="/">
              <b-img src="http://localhost:8084/public/company/EShopping/logo.png" al t="logo" width="70px" height="60px" />
            </b-navbar-brand>
            <b-navbar-toggle target="nav-top-header-collapse" />
            <b-collapse id="nav-top-header-collapse" is-nav>
              <b-navbar-nav class="mr-auto">
                <b-dropdown
                  id="dropdown-right"
                  :text="searchCategoryName"
                  style="background-color: #ffd60a "
                  variant="light"
                  class="mr-auto"
                >
                  <b-dropdown-item
                    variant="light"
                    @click="set_category({ id: 0, name: 'Toutes les catégories' })"
                  >
                 
                  </b-dropdown-item>
                  <b-dropdown-item
                    variant="dark"
                    @click="set_category(category)"
                    v-for="category in categoryList"
                    :key="category.id"
                  >
                    {{ category.name }}
                  </b-dropdown-item>
                </b-dropdown>
  
                <b-nav-form class="mr-auto" v-on:submit.prevent="search">
                  <b-form-input
                    class="mr-sm-2 searchField"
                    v-model="searchTxt"
                    placeholder="Chercher par catégories"
                    
                  />
                  <b-button type="submit"  @click="search" variant="white">
                    <b-icon icon="search"></b-icon
                  ></b-button>
                </b-nav-form>
              </b-navbar-nav>
  
              <b-navbar-nav class="ml-auto">
                <b-nav-item class="mr-auto" @click="wishlist" >
                  <div  style ="color: #000814">
                    <b-icon scale="0.8" icon="suit-heart" />
                    Liste de souhaits
                  </div>
                </b-nav-item>
                <b-nav-item class="mr-auto" @click="cart">
                  <div  style ="color: #000814">
                    <b-icon icon="cart2"   />
                    Chariot
                  </div>
                </b-nav-item>
                <b-nav-item class="mr-auto" v-if="userLoggedIn">
                  <b-img height="35px" width="35px" :src="user.profileImage" />
                </b-nav-item>
                <b-nav-item-dropdown class="mr-auto" right v-if="userLoggedIn">
                  <template #button-content>
                    <em v-if="user.username" style="color: #000814">
                      {{ user.username }}
                    </em>
                    <em v-if="!user.username" style="color: #000814">
                      {{ user.firstName }} {{ user.lastName }}
                    </em>
                  </template>
                  <b-dropdown-item v-if="user.priority==1" to="/admin">
                    Panneau d'Administration
                  </b-dropdown-item>
                  <b-dropdown-item v-if="user.priority==2" to="/supplier">
                    Panneau Fournisseur
                  </b-dropdown-item>
                  <b-dropdown-item to="/profile">Profile</b-dropdown-item>
                  <b-dropdown-item @click="logout()">Log Out</b-dropdown-item>
                </b-nav-item-dropdown>
                <b-button
                  class="mr-auto"
                  v-if="!userLoggedIn"
                  pill
                  variant="success"
                  to="/login"
                >
                  S'inscrire &amp; Connexion
                </b-button>
              </b-navbar-nav>
            </b-collapse>
          </b-navbar>
        </b-col>
      </b-row>
      <hr class="m-0" style="background-color: #000" />
    </div>
  </template>
  
  <script>
  export default {
    name: "TopHeader",
    data() {
      return {
        user: {},
        admin: false,
        companyLogo: "",
        userLoggedIn: false,
        categoryList: [],
        searchTxt: "",
        searchCategoryId: 0,
        searchCategoryName: "Toutes les catégories",

      };
    },
    async mounted() {
      this.companyLogo = await this.$store.dispatch("http://localhost:8084/public/company/EShopping/eshopping.png"); 
      this.user = this.$store.state.CurrentUser.user;
      this.admin = this.$store.state.CurrentUser.admin;
      this.userLoggedIn = this.$store.state.CurrentUser.userLoggedIn;
      this.categoryList = await this.$store.dispatch("Category/getCategoryList");
    },
    computed: {},
    methods: {
      wishlist() {
        if (!this.userLoggedIn) {
          this.$bvToast.toast("Veuillez vous connecter pour la Liste de souhaits", {
            title: "Liste de souhaits",
            variant: "primary",
            toaster: "b-toaster-top-center",
            noCloseButton: false,
            solid: true,
          });
        } else {
          this.$router.push({ path: "/wishlist" });
        }
      },
      cart() {
        if (!this.userLoggedIn) {
          this.$bvToast.toast("Veuillez vous connecter pour le chariot", {
            title: "Chariot",
            variant: "primary",
            toaster: "b-toaster-top-center",
            noCloseButton: false,
            solid: true,
          });
        } else {
          this.$router.push({ path: "/cart-view" });
        }
      },
      async logout() {
        this.$store.dispatch("CurrentUser/setToken", "");
        this.$store.dispatch("CurrentUser/setUser", {});
        this.$store.dispatch("Wishlist/clearWishlist");
        
        this.$store.dispatch("Cart/clearCart" , [] );
        window.location.reload();
      },
      set_category(category) {
        this.searchCategoryId = category.id;
        this.searchCategoryName = category.name;
      },
      search() {
        var newRoute = "/products";
        if (this.searchCategoryId != 0) {
          const category = this.searchCategoryName;
          newRoute += "/" + category;
        }
        if (this.searchTxt.trim() != "") {
          const text = this.searchTxt.trim();
          newRoute += "?q=" + text;
          this.$router.push({ path: newRoute });
        }
      },
    },
  };
  </script>
  
  <style scoped lang="scss"></style>
  