<template>
  <div>
    <input v-model="email" ref="emailField" type="email" placeholder="email" />
    <input v-model="password" type="password" placeholder="password" />
    <button @click="submit">submit</button>
    <button @click="show">show</button>
    <button @click="logout">logout</button>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  name: "SignIn",
  data() {
    return {
      email: "",
      password: "",
      user: "null",
    };
  },

  methods: {
    submit() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          this.email = "";
          this.password = "";
          alert("user signed in successfully");
        })
        .catch((err) => {
          this.error = err.message;
        });
    },
    show() {
      alert(JSON.stringify(firebase.auth().currentUser));
    },
    logout() {
      firebase.auth().signOut();
    },
  },
};
</script>

<style scoped></style>
