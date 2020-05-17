import {VIEW_TYPES} from '../chart/utils';

export const prepareLikedUsersForChart = (likedUsers) => {
  const labels = likedUsers.map(
      ({user}) => user.firstName + ' ' + user.lastName);
  const data = likedUsers.map(
      ({likedPhotos, likedPosts}) => likedPhotos.length + likedPosts.length);
  return {
    labels: labels,
    dataset: {
      label: 'Количество лайков',
      data: data,
    },
  };
};

export const compareLikedUsersDesc = (first, second) => {
  const firstCount = first.likedPhotos.length + first.likedPosts.length;
  const secondCount = second.likedPhotos.length + second.likedPosts.length;
  if (firstCount > secondCount) {
    return -1;
  }
  if (firstCount < secondCount) {
    return 1;
  }
  return 0;
};

export const isChartViewType = (viewType) => {
  return viewType === VIEW_TYPES.HORIZONTAL_BAR;
};
