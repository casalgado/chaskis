<template>
  <div>
    <progress value="0" max="100" id="progressBar">0%</progress>
    <input type="file" value="upload" id="fileButton" @change="upload" />
  </div>
</template>

<script>
import { storage } from "../firebase";
export default {
  name: "UploadMedia",
  methods: {
    upload: function(event) {
      let progressBar = document.getElementById("progressBar");
      let file = event.target.files[0];
      let ref = storage.child("images/" + file.name);
      let task = ref.put(file);
      task.on(
        "state_changed",
        function progress(snapshot) {
          var p = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          progressBar.value = p;
        },
        function error(err) {
          console.log(err);
        },
        function complete() {
          console.log("upload complete");
        }
      );
    },
  },
};
</script>

<style scoped></style>
