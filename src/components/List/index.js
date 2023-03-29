export default {
  name: 'List',
  props: {
    data: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      type: null,
    };
  },
  mounted() {
    const firstItem = this.data[0];

    if (firstItem.hasOwnProperty('class')) {
      this.type = 'TYPE_1';
    } else if (firstItem.hasOwnProperty('rating')) {
      this.type = 'TYPE_2';
    } else {
      this.type = 'TYPE_3';
    }
  },
};
