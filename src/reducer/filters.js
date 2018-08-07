import {CHANGE_SELECTION, CHANGE_DATE, DELETE_ARTICLE} from '../constants';

const defaultFilters = {
  selected: [],
  selectedDates: {
    from: '',
    to: ''
  }
};

export default (filters = defaultFilters, action) => {
  const {type, payload} = action;

  switch (type) {
    case CHANGE_DATE: return {...filters, selectedDates: {from: payload.from, to: payload.to}};
    case CHANGE_SELECTION: return {...filters, selected: payload.selected};
    case DELETE_ARTICLE: return {...filters, selected: filters.selected.map((select) => select.id !== select.value)}
  }

  return filters;
}