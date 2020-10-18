<template>
  <div v-if="errorMsg" class="container mt-4">
    <div
      class="alert alert-red fade show text-center alert-dismissible"
      role="alert"
    >
      {{ errorMsg }}
      <button
        type="button"
        class="close"
        data-dismiss="alert"
        aria-label="Close"
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "ErrorMessage",
  computed: {
    ...mapGetters(["errorMsg"]),
  },
};
</script>

<style>
.alert-red {
  color: #b33939;
  border-color: #b33939;
}
</style>
