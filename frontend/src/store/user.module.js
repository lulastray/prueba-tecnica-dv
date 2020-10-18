import service from "@/service/UserService";

const initialState = {
  users: [],
  user: {},
  errorMsg: null,
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
    try{
      const response = await service.findAll();
      if (response.ok) {
        const users = await response.json();
        commit("SET_USERS", users.data);
      } else {
        const error = await response.json();
        commit("SET_ERROR_MESSAGE", (error && error.message) || response.statusText);
      }
    }catch(err){
      commit("SET_ERROR_MESSAGE", "Sorry, we have some internal problems")
    }
    
  },

  async getDetailUser({ commit }, id) {
    const response = await service.findOne(id);
    if (response.ok) {
      const user = await response.json();
      commit("SET_USER", user.data);
    } else {
      const error = await response.json();
      commit ("SET_ERROR_MESSAGE",(error && error.message) || response.statusText);
    }
  },
};

export default { state, mutations, getters, actions };
