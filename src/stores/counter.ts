import { computed, reactive } from "vue";

const state = reactive({
  count: 0,
});

const getters = reactive({
  times2: computed(() => state.count * 2),
});

const actions = {
  inc(by: number) {
    // imcrement by a given value
    state.count += by;
  },
};

export default { state, getters, ...actions };
