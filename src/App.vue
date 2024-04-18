<template>
  <div>
    <UserForm></UserForm>
  </div>
</template>

<script>
import UserForm from './components/UserForm.vue'

export default {
  name: 'App',
  components: {
    UserForm
  }
}
</script>

<style>
@font-face {
    font-family: 'MYHaemalgeunSangsang';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2206-02@1.0/MYHaemalgeunSangsang.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}

body {
    font-family: 'MYHaemalgeunSangsang', sans-serif;
}

</style>
