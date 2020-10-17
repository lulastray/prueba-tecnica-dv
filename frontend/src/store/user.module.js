import service from "@/service/UserService";

const initialState = {
  users: [],
  user: {},
  errorMsg: "",
};

const state = { ...initialState };

export const mutations = {
  SET_USERS(state, users) {
    state.users = users;
  },

  SET_USER(state, user) {
    state.user = user;
  },

  SET_ERROR_MESSAGE(state, errorMsg) {
    state.errorMsg = errorMsg;
  },
};

export const getters = {
  users(state) {
    return state.users;
  },
  user(state) {
    return state.user;
  },
  errorMsg(state) {
    return state.errorMsg;
  },
};

export const actions = {
  async getUsers({ commit }) {
    const response = await service.findAll();
    if (response.ok) {
      const users = await response.json();
      commit("SET_USERS", users);
    } else {
      const error = await response.json();
      commit("SET_ERROR_MESSAGE", (error && error.message) || response.statusText);
    }
  },

  async getDetailUser({ commit }, id) {
    const response = await service.findOne(id);
    if (response.ok) {
      const user = await response.json();
      commit("SET_USER", user);
    } else {
      const error = await response.json();
      commit ("SET_ERROR_MESSAGE",(error && error.message) || response.statusText);
    }
  },
};

export default { state, mutations, getters, actions };
