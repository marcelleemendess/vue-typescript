import { computed, reactive } from "vue";
import * as Resquest from "../requests"; // for actions

const state = reactive({
  name: "",
  username: "",
  error: "",
});

const getters = reactive({
  // check if the user is logged in
  isLoggedIn: computed(() => state.username !== ""),
});

const actions = {
  //load the user if they are logged in, needs to be called when the app is initially loaded
  // to check if the user is currently logged in or not
  async getUser() {
    const user = await Resquest.getUser();
    if (user == null) return;
    // return from request and update the state
    state.name = user.name;
    state.username = user.username;
  },
  //check if the user is valid
  async login(username: string, password: string) {
    const user = await Resquest.login(username, password);
    // if the user is null
    if (user == null) {
      state.error = "Could not find user.";
      return false;
    }
    //if the user is valid
    state.name = user.name;
    state.username = username;
    state.error = "";

    return true;
  },
  async logout() {
    // to log out simply reset store state
    (state.name = ""), (state.username = "");
  },
};

export default { state, getters, ...actions };
