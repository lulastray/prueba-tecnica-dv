<template>
  <main class="container">
    <div class="card">
      <h5 class="card-header">Users List</h5>
      <div class="card-body">
        <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">Name</th>
              <th scope="col">Group</th>
              <th scope="col">Rol</th>
              <th scope="col">Permissions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in usersFormatted" :key="user.id" @click="goToUserDetail(user.id)">
              <th scope="row">{{ user.id }}</th>
              <td>{{ user.name }}</td>
              <td>{{ user.group }}</td>
              <td>{{ user.role }}</td>
              <td>{{ user.permissions }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </main>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "UserList",
  components: {},
  computed: {
    ...mapGetters(["users"]),
    usersFormatted(){
      return this.users.map(user => {
        return {
          ...user,
          permissions: user.permissions.join(", ")
        }
      })
    }
  },
  methods: {
    ...mapActions(["getUsers"]),

    goToUserDetail(id){
      this.$router.push(`/${id}`)
    },

  },
  created() {
    this.getUsers();
  },
};
</script>
