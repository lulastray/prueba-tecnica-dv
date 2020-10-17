<template>
  <section>
    <ul>
      <li>

      </li>
    </ul>
  </section>
</template>

<script>
import { mapGetters, mapActions} from 'vuex'

export default {
  name: "UserList",
  components: {
  },
  computed: {
    ...mapGetters(["users"])
  },
  methods: {
    ...mapActions(["getUsers"])
  },
  mounted(){
    this.getUsers()
  }


};
</script>
