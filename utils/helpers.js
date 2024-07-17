const { format } = require('date-fns');

module.exports = {
  formatDate: (date) => {
    return format(new Date(date), 'MMMM dd, yyyy');
  },
};
