<template>
  <v-form>
    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="signupState.firstName"
            :rules="nameRules"
            :counter="10"
            label="First name"
            required
          />
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="signupState.lastName"
            :rules="nameRules"
            :counter="10"
            label="Last name"
            required
          />
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="signupState.email"
            :rules="emailRules"
            label="E-mail"
            required
          />
        </v-col>

        <v-btn @click="submitForm">
          Button
        </v-btn>
      </v-row>
    </v-container>
  </v-form>
</template>

<script setup>

const signupState = reactive({
  firstName: "",
  lastName: "",
  email: "",
});

const nameRules = [
  (v) => !!v || "Name is required",
  (v) => v.length <= 10 || "Name must be less than 10 characters",
];

const emailRules = [
  (v) => !!v || "E-mail is required",
  (v) => /.+@.+/.test(v) || "E-mail must be valid",
];

const submitForm = () => {
  console.log(signupState);
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/main.scss";
</style>
