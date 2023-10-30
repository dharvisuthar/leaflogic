import { componentNames } from "../constants";

export const getMenuItems = () => {
  const returnValue = [];

  const homeItem = {};
  homeItem.name = "Home";
  homeItem.component = componentNames.home;
  homeItem.icon = "Home";
  homeItem.active = false;
  homeItem.children = [];
  returnValue.push(homeItem);

  const brandItem = {};
  brandItem.name = "Brand";
  brandItem.component = componentNames.brand;
  brandItem.icon = "BrandingWatermark";
  brandItem.active = false;
  brandItem.children = [];
  returnValue.push(brandItem);

  const customerItem = {};
  customerItem.name = "Customer";
  customerItem.component = componentNames.customer;
  customerItem.icon = "DashboardCustomize";
  customerItem.active = false;
  customerItem.children = [];
  returnValue.push(customerItem);

  const discountsItem = {};
  discountsItem.name = "Discounts";
  discountsItem.component = componentNames.discounts;
  discountsItem.icon = "Discount";
  discountsItem.active = false;
  discountsItem.children = [];
  returnValue.push(discountsItem);

  const employeeItem = {};
  employeeItem.name = "Empolyee";
  employeeItem.component = componentNames.employee;
  employeeItem.icon = "Badge";
  employeeItem.active = false;
  employeeItem.children = [];
  returnValue.push(employeeItem);

  const guestListItem = {};
  guestListItem.name = "Guest List";
  guestListItem.component = componentNames.guest_list;
  guestListItem.icon = "ListAlt";
  guestListItem.active = false;
  guestListItem.children = [];
  returnValue.push(guestListItem);

  const harvestItem = {};
  harvestItem.name = "Harvest";
  harvestItem.component = componentNames.harvest;
  harvestItem.icon = "Agriculture";
  harvestItem.active = false;
  harvestItem.children = [];
  returnValue.push(harvestItem);

  const integrationItem = {};
  integrationItem.name = "Integration";
  integrationItem.component = componentNames.inegration;
  integrationItem.icon = "IntegrationInstructions";
  integrationItem.active = false;
  integrationItem.children = [];
  returnValue.push(integrationItem);

  const inventoryItem = {};
  inventoryItem.name = "Inventory";
  inventoryItem.component = componentNames.inventory;
  inventoryItem.icon = "Inventory";
  inventoryItem.active = false;
  inventoryItem.children = [];
  returnValue.push(inventoryItem);

  const lineageItem = {};
  lineageItem.name = "Lineage";
  lineageItem.component = componentNames.lineage;
  lineageItem.icon = "AppsOutage";
  lineageItem.active = false;
  lineageItem.children = [];
  returnValue.push(lineageItem);

  const paymentItem = {};
  paymentItem.name = "Payment";
  paymentItem.component = componentNames.payment;
  paymentItem.icon = "Payment";
  paymentItem.active = false;
  paymentItem.children = [];
  returnValue.push(paymentItem);

  const plantItem = {};
  plantItem.name = "Plant";
  plantItem.component = componentNames.plant;
  plantItem.icon = "Business";
  plantItem.active = false;
  plantItem.children = [];
  returnValue.push(plantItem);

  const preOrdereItem = {};
  preOrdereItem.name = "PreOrder";
  preOrdereItem.component = componentNames.preorder;
  preOrdereItem.icon = "Reorder";
  preOrdereItem.active = false;
  preOrdereItem.children = [];
  returnValue.push(preOrdereItem);

  const pricingTierItem = {};
  pricingTierItem.name = "PricingTier";
  pricingTierItem.component = componentNames.pricing_tier;
  pricingTierItem.icon = "PriceChange";
  pricingTierItem.active = false;
  pricingTierItem.children = [];
  returnValue.push(pricingTierItem);

  const producerItem = {};
  producerItem.name = "Producer";
  producerItem.component = componentNames.producer;
  producerItem.icon = "Pageview";
  producerItem.active = false;
  producerItem.children = [];
  returnValue.push(producerItem);


  const productItem = {};
  productItem.name = "Product";
  productItem.component = componentNames.product;
  productItem.icon = "Pageview";
  productItem.active = false;
  productItem.children = [];
  returnValue.push(productItem);

  const productCategory = {};
  productCategory.name = "Product Category";
  productCategory.component = componentNames.product_category;
  productCategory.icon = "Dashboard";
  productCategory.active = false;
  productCategory.children = [];
  returnValue.push(productCategory);


  const referenceItem = {};
  referenceItem.name = "ReferenceData";
  referenceItem.component = componentNames.referneced_data;
  referenceItem.icon = "ContactPhone";
  referenceItem.active = false;
  referenceItem.children = [];
  returnValue.push(referenceItem);

  const reportingItem = {};
  reportingItem.name = "Reporting";
  reportingItem.component = componentNames.reporting;
  reportingItem.icon = "ViewDay";
  reportingItem.active = false;
  reportingItem.children = [];
  returnValue.push(reportingItem);

  const roomItem = {};
  roomItem.name = "Room";
  roomItem.component = componentNames.room;
  roomItem.icon = "DashboardCustomize";
  roomItem.active = false;
  roomItem.children = [];
  returnValue.push(roomItem);

  const sizeItem = {};
  sizeItem.name = "Size";
  sizeItem.component = componentNames.size;
  sizeItem.icon = "VerticalSplit";
  sizeItem.active = false;
  sizeItem.children = [];
  returnValue.push(sizeItem);

  const strainsItem = {};
  strainsItem.name = "Straines";
  strainsItem.component = componentNames.strains;
  strainsItem.icon = "Web";
  strainsItem.active = false;
  strainsItem.children = [];
  returnValue.push(strainsItem);

  const tableItem = {};
  tableItem.name = "Table";
  tableItem.component = componentNames.table;
  tableItem.icon = "PersonAdd";
  tableItem.active = false;
  tableItem.children = [];
  returnValue.push(tableItem);

  const tagItem = {};
  tagItem.name = "Tag";
  tagItem.component = componentNames.tag;
  tagItem.icon = "Accessibility";
  tagItem.active = false;
  tagItem.children = [];
  returnValue.push(tagItem);

  const transctionItem = {};
  transctionItem.name = "Transction";
  transctionItem.component = componentNames.transction;
  transctionItem.icon = "People";
  transctionItem.active = false;
  transctionItem.children = [];
  returnValue.push(transctionItem);

  const utilItem = {};
  utilItem.name = "Util";
  utilItem.component = componentNames.util;
  utilItem.icon = "AppsOutage";
  utilItem.active = false;
  utilItem.children = [];
  returnValue.push(utilItem);

  const vendorItem = {};
  vendorItem.name = "Vendor";
  vendorItem.component = componentNames.vendor;
  vendorItem.icon = "Flag";
  vendorItem.active = false;
  vendorItem.children = [];
  returnValue.push(vendorItem);

  const wasteItem = {};
  wasteItem.name = "Waste";
  wasteItem.component = componentNames.waste;
  wasteItem.icon = "AirlineSeatFlat";
  wasteItem.active = false;
  wasteItem.children = [];
  returnValue.push(wasteItem);

  const registerAdjustmentsItem = {};
  registerAdjustmentsItem.name = "RegisterAdjustments";
  registerAdjustmentsItem.component = componentNames.register_adjustments;
  registerAdjustmentsItem.icon = "AutoAwesome";
  registerAdjustmentsItem.active = false;
  registerAdjustmentsItem.children = [];
  returnValue.push(registerAdjustmentsItem);

  const registerTransactions = {};
  registerTransactions.name = "RegisterTransactions";
  registerTransactions.component = componentNames.register_transactions;
  registerTransactions.icon = "Receipt";
  registerTransactions.active = false;
  registerTransactions.children = [];
  returnValue.push(registerTransactions);

  const cashSummary = {};
  cashSummary.name = "CashSummary";
  cashSummary.component = componentNames.cash_summary;
  cashSummary.icon = "AccountBalanceWallet";
  cashSummary.active = false;
  cashSummary.children = [];
  returnValue.push(cashSummary);

  const reportingInventory = {};
  reportingInventory.name = "ReportingInventory";
  reportingInventory.component = componentNames.reporting_inventory;
  reportingInventory.icon = "BugReport";
  reportingInventory.active = false;
  reportingInventory.children = [];
  returnValue.push(reportingInventory);

  const loyaltySnapshot = {};
  loyaltySnapshot.name = "LoyaltySnapshot";
  loyaltySnapshot.component = componentNames.loyalty_snapshot;
  loyaltySnapshot.icon = "Tapas";
  loyaltySnapshot.active = false;
  loyaltySnapshot.children = [];
  returnValue.push(loyaltySnapshot);

  const closingReport = {};
  closingReport.name = "ClosingReport";
  closingReport.component = componentNames.closing_report;
  closingReport.icon = "BlindsClosed";
  closingReport.active = false;
  closingReport.children = [];
  returnValue.push(closingReport);

  return returnValue;
};
