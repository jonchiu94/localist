<template>
</template>

<script>
(() => {
  const data = [];
  const allowed = ['label', 'author'];
  const regex = /\w+:\w+$/g;
  
  Vue.component('search-token', {
    props: [
      'obj'
    ],
    data() {
      return {
        data: data,
      }
    },
    template: `
      <li
        class="search-token"
        :class="'search-token-' + obj.token">
        <span class="token">
          {{ obj.token }}
        </span>
        <span class="value">
          {{ obj.value }}
        </span>
      </li>
    `,
  });
  
  new Vue({
    el: '#app',
    data() {
      return {
        search: '',
        data: data,
      };
    },
    methods: {
      getTokens() {
        const matches = this.search.match(regex);
        
        if (matches) {
          const split = matches[0].split(':');

          if (allowed.indexOf(split[0]) !== -1) {
            this.data.push({
              token: split[0],
              value: split[1],
            });

            this.search = '';
          }
        }
      },
    },
    template: `
      <div class="search-holder">
        <ul
          class="search-list">
          <search-token
            v-for="obj in data"
            :obj="obj"></search-token>
        </ul>
        <input
          type="search"
          class="search-box"
          placeholder="Search..."
          v-model="search"
          @keyup.enter="getTokens" />
      </div>
    `,
  });
})();
</script>

