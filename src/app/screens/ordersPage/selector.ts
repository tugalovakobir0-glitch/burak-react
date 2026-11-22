import { createSelector } from "reselect";
import { AppRootState } from "../../../lib/types/screen";

const selectOrderPage = (state: AppRootState) => state.ordersPage;

export const retrievePausedOrder = createSelector(
  selectOrderPage,
  (orderPage) => orderPage.pausedOrder,
);
export const retrieveProcessOrder = createSelector(
  selectOrderPage,
  (orderPage) => orderPage.processOrder,
);
export const retrieveFineshedOrder = createSelector(
  selectOrderPage,
  (orderPage) => orderPage.fineshedOrder,
);
