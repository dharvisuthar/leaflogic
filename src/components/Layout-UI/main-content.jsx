import React, { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import { componentRoutes } from "../../common/constants";
import Brand from "../brand";
import { MainContentWrapper } from "./main-content-wrapper";

export const MainContent = () => {
  const renderSwitch = () => {
    return (
      <Fragment>
        <Routes>
          <Fragment>
            <Route path={componentRoutes.brand} element={<Brand />} />
            <Route path={componentRoutes.customer} element={<Brand />} />
            <Route path={componentRoutes.discounts} element={<Brand />} />
            <Route path={componentRoutes.employee} element={<Brand />} />
            <Route path={componentRoutes.guest_list} element={<Brand />} />
            <Route path={componentRoutes.harvest} element={<Brand />} />
            <Route path={componentRoutes.inegration} element={<Brand />} />
            <Route path={componentRoutes.inventory} element={<Brand />} />
            <Route path={componentRoutes.lineage} element={<Brand />} />
            <Route path={componentRoutes.payment} element={<Brand />} />
            <Route path={componentRoutes.plant} element={<Brand />} />
            <Route path={componentRoutes.preorder} element={<Brand />} />
            <Route path={componentRoutes.pricing_tier} element={<Brand />} />
            <Route path={componentRoutes.producer} element={<Brand />} />
            <Route path={componentRoutes.product} element={<Brand />} />
            <Route path={componentRoutes.product_category} element={<Brand />} />
            <Route path={componentRoutes.referneced_data} element={<Brand />} />
            <Route path={componentRoutes.reporting} element={<Brand />} />
            <Route path={componentRoutes.room} element={<Brand />} />
            <Route path={componentRoutes.size} element={<Brand />} />
            <Route path={componentRoutes.table} element={<Brand />} />
            <Route path={componentRoutes.tag} element={<Brand />} />
            <Route path={componentRoutes.transction} element={<Brand />} />
            <Route path={componentRoutes.strains} element={<Brand />} />
            <Route path={componentRoutes.util} element={<Brand />} />
            <Route path={componentRoutes.vendor} element={<Brand />} />
            <Route path={componentRoutes.waste} element={<Brand />} />
            <Route path={componentRoutes.register_adjustments} element={<Brand />} />
            <Route path={componentRoutes.register_transactions} element={<Brand />} />
            <Route path={componentRoutes.cash_summary} element={<Brand />} />
            <Route path={componentRoutes.loyalty_snapshot} element={<Brand />} />
            <Route path={componentRoutes.reporting_inventory} element={<Brand />} />
            <Route path={componentRoutes.closing_report} element={<Brand />} />
            <Route path={componentRoutes.home} element={<Brand />} />
          </Fragment>
        </Routes>
      </Fragment>
    );
  };

  return <MainContentWrapper>{renderSwitch()}</MainContentWrapper>;
};
