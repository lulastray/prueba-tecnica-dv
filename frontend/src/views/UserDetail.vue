<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-3 col-xl-2 bd-side">
        <div class="container">
          <div class="row">
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
              <li v-for="group of user.data" :key="group.code">
                {{ group.groupName }}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <section class="col-md-9 col-xl-8 py-md-3 pl-md-5 bd-content">
        <div class="card">
          <div class="card-body">
            <table class="table table-hover">
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
        userFormatted(){
      return this.user.data.map(group => {
        console.log(group)
        return {
        ...group,
        permisions: group.permisions.join(", ")
      }
      })
    }
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
  height: 100vh;
}</style
>>
