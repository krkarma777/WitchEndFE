<template>
  <div>
    <h1>User Management</h1>
    <div>
      <h2>Sign Up</h2>
      <form @submit.prevent="signUp">
        <input v-model="signUpData.email" placeholder="Email" type="email"><br>
        <input v-model="signUpData.nickname" placeholder="nickname" type="nickname"><br>
        <input v-model="signUpData.username" placeholder="username" type="username"><br>
        <input v-model="signUpData.password" placeholder="Password" type="password"><br>
        <button type="submit">Sign Up</button>
      </form>
    </div>
    <div>
      <h2>Login</h2>
      <form @submit.prevent="signIn">
        <input v-model="loginData.email" placeholder="Email" type="email"><br>
        <input v-model="loginData.password" placeholder="Password" type="password"><br>
        <button type="submit">Login</button>
      </form>
    </div>
    <div>
      <h2>Delete User</h2>
      <form @submit.prevent="deleteUser">
        <input v-model="userId" placeholder="User ID" type="text"><br>
        <button type="submit">Delete</button>
      </form>
    </div>
    <div>
      <h2>Update User</h2>
      <form @submit.prevent="updateUser">
        <input v-model="updateData.id" placeholder="User ID" type="text"><br>
        <input v-model="updateData.email" placeholder="New Email" type="email"><br>
        <input v-model="updateData.name" placeholder="New Name" type="text"><br>
        <button type="submit">Update</button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      signUpData: {
        email: '',
        password: '',
        username: '',
        nickname: ''
      },
      loginData: {
        email: '',
        password: ''
      },
      userId: '',
      updateData: {
        id: '',
        email: '',
        name: ''
      }
    };
  },
  methods: {
    async signUp() {
      this.loading = true;
      this.errorMessage = '';
      try {
        const response = await axios.post(`${process.env.VUE_APP_API_URL}/users/signup`, this.signUpData);
        alert('Sign up successful! Response: ' + JSON.stringify(response.data));
      } catch (error) {
        this.errorMessage = error.response?.data?.message || 'An unexpected error occurred';
        alert('Sign up failed! Error: ' + this.errorMessage);
      } finally {
        this.loading = false;
      }
    },
    async signIn() {
      try {
        const response = await axios.post(`${process.env.VUE_APP_API_URL}/users/login`, this.loginData);
        alert('Login successful! Response: ' + JSON.stringify(response.data));
      } catch (error) {
        alert('Login failed! Error: ' + error.response.data.message);
      }
    },
    async deleteUser() {
      try {
        const response = await axios.delete(`${process.env.VUE_APP_API_URL}/users/${this.userId}`);
        alert('User deleted successfully! Response: ' + JSON.stringify(response.data));
      } catch (error) {
        alert('User deletion failed! Error: ' + error.response.data.message);
      }
    },
    async updateUser() {
      try {
        const response = await axios.patch(`${process.env.VUE_APP_API_URL}/users/${this.updateData.id}`, {
          email: this.updateData.email,
          name: this.updateData.name
        });
        alert('User updated successfully! Response: ' + JSON.stringify(response.data));
      } catch (error) {
        alert('User update failed! Error: ' + error.response.data.message);
      }
    }

  }
};
</script>