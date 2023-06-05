<template>
    <div>
      <STopHeader></STopHeader>
      <b-container class="mt-5">
        <b-row align-v="center">
          <b-col>
            <h3>Hello {{ user.firstName }} {{ user.lastName }},</h3>
            <h5>Welcome to supplier dashboard</h5>
          </b-col>
          <b-col>
            <img src="/img/svg/overview.svg" alt="" width="300" />
          </b-col>
        </b-row>
      </b-container>
      <MyFooter class="mt-5" />
    
    </div>
  </template>
  
  <script>
  import STopHeader from "@/components/Supplier/STopHeader.vue";
  import MyFooter from "@/components/Common/MyFooter.vue";
  export default {
    name: "AOverview",
    components: {
      STopHeader,
      MyFooter,
    },
    data() {
      return {
        user: this.$store.state.CurrentUser.user,
      };
    },
  };
  </script>
  
  <style lang="scss" scoped></style>
  