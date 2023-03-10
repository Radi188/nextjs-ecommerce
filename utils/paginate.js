import _ from 'lodash'

export const paginate = (post, pageNumber, pageSize) => {
    const startIndex = (pageNumber - 1) * pageSize;
    return _(post).slice(startIndex).take(pageSize).value();
}   