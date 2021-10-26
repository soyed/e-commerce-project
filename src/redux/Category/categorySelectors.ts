import { createSelector } from 'reselect';

export const categoryLoading = (state: any) => state.category.status;

export const categoryList = (state: any) => state.category.entities;
