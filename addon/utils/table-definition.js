import Ember from 'ember';

export default Ember.Object.extend({

  // Search
  enableSearch: true,
  searchText: '',

  // Sort
  enableSort: true,
  sortColumnId: '',
  sortOrder: '',

  // Pagination
  enablePagination: true,
  pageNum: 1,
  rowCount: 10,
  rowCountOptions: [5, 10, 25, 50, 100],

  enableColumnResize: true,

  minRowsForFooter: 25,

  columns: []
});
