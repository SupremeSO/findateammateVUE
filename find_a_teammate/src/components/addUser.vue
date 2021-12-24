<template>
    <div class="input-form">
        <input type="text" v-model="user.username" name="username" id="">
        <input type="text" v-model="user.password" name="password" id="">
        <input type="text" v-model="user.email" name="email" id="">
        <input type="text" v-model="user.age" name="age" id="">
        <button @click="addUser()">Add user</button>
    </div>
</template>

<script>
import UsersDataService from "../services/UsersDataService";

export default {
    name: "addUser",
    data() {
        return {
            user: {
                id: null,
                username: "",
                password: "",
                email: "",
                age: null
            }
        };
    },
    methods: {
        addUser() {
            var data = {
                username: this.user.username,
                password: this.user.password,
                email: this.user.email,
                age: this.user.age
            };
            UsersDataService.create(data)
            .then(response => {
                this.user.id = response.data.id;
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            })
        }
    },
}
</script>

<style lang="scss" scoped>

</style>