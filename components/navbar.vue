<template>
    <v-layout>
      <v-navigation-drawer
          rail
          class="bg-deep-purple"
          :permanent="true"
          :touchless="false"
          :disable-route-watcher="true"
          :disable-resize-watcher="true"
      >
        <v-list density="compact" nav>
          <v-list-item prepend-icon="mdi-home"
                       title="Home"
                       value="home"
                       @click="this.$router.push('/')"
                       active-class="v-list-item--active"
          ></v-list-item>
          <v-list-item prepend-icon="mdi-information-outline"
                       title="About"
                       value="about"
                       @click="this.$router.push('/about')"
                       active-class="v-list-item--active"
          ></v-list-item>
          <v-list-item prepend-icon="mdi-apps"
                       title="Projects"
                       value="projects"
                       @click="this.$router.push('/projects')"
                       active-class="v-list-item--active"
          ></v-list-item>
        </v-list>
        <template v-slot:append>
          <v-list density="compact" nav>
            <v-list-item prepend-icon="mdi-account-plus"
                         value="Register" v-if="!user.auth"
                         @click="this.$router.push('/registration')"
                         active-class="v-list-item--active"
            >
              <template v-slot:title>Register</template>
            </v-list-item>
            <v-list-item prepend-icon="mdi-account-arrow-right"
                         value="Login" v-if="!user.auth"
                         @click="this.$router.push('/login')"
                         active-class="v-list-item--active"
            >
              <template v-slot:title>Login</template>
            </v-list-item>
            <v-list-item prepend-icon="mdi-account-arrow-left"
                         value="Logout"
                         v-if="user.auth"
                         @click="logout"
                         active-class="v-list-item--active"
            >
              <template v-slot:title>Logout</template>
            </v-list-item>
          </v-list>
        </template>
      </v-navigation-drawer>
    </v-layout>
</template>

<script>
import {mapMutations, mapState} from "vuex";

export default {
  name: "navbar",
  computed: {
    ...mapState({
      user: state => state.user
    })
  },
  methods: {
    ...mapMutations({
      logout: commit => commit('logout')
    })
  },
  data () {
    return {
      menu: false
    }
  }
}
</script>

<style scoped>
  ul {
    list-style: none;
    display: flex;
    align-items: center;
    gap: 20px;
  }
</style>