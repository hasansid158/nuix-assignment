import apiInterceptor from './apiInterceptor';

export const fetchAllItems = async () => {
  const res = await apiInterceptor.get('items');
  return res?.data;
};

export const fetchImage = async (imageId = '') => {
  const res = await apiInterceptor.get(`image/${imageId}`);
  return res?.data;
};
