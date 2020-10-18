<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-3 col-xl-2 bd-side">
        <div class="container ml-2">
          <div class="row mt-5">
            <p>{{ user.name }} {{ user.lastName }}</p>
          </div>
          <div class="row">
            <p>Age: {{ user.age }}</p>
          </div>
          <div class="row">
            <p>Date: {{ user.date }}</p>
          </div>
          <div class="row">
            <p>Groups:</p>
          </div>
          <div class="row">
            <ul>
              <li v-for="group of userFormatted" :key="group.code">
                {{ group.groupName }}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <section class="col-md-9 col-xl-8 py-md-3 pl-md-5 bd-content mx-auto">
        <div class="card mt-5">
          <div class="card-header bk-color font-weight-bold text-secondary">
            Groups
          </div>
          <div class="card-body table-responsive">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Code</th>
                  <th scope="col">Group Name</th>
                  <th scope="col">Role</th>
                  <th scope="col">Permissions</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="group in userFormatted" :key="group.code">
                  <th scope="row">{{ group.code }}</th>
                  <td>{{ group.groupName }}</td>
                  <td>{{ group.rol }}</td>
                  <td>{{ group.permisions }}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="card-footer">
            <RouterLink to="/" class="btn btn-lg bk-color mx-auto"
              >Back to List</RouterLink
            >
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "UserDetail",
  computed: {
    ...mapGetters(["user"]),
    userFormatted() {
      const group = this.user.data;
      return (
        group &&
        group.map((group) => {
          return {
            ...group,
            groupName: group.groupName.replace("AMZON", "AMAZON"),
            permisions: group.permisions.join(", "),
          };
        })
      );
    },
  },
  methods: {
    ...mapActions(["getDetailUser"]),
  },
  created() {
    this.getDetailUser(this.$route.params.id);
  },
};
</script>

<style scoped>
.bd-side {
  border: 1px solid rgba(0, 0, 0, 0.1);
}

@media (min-width: 700px) {
  .bd-side {
    height: 100vh;
  }
}
</style>
