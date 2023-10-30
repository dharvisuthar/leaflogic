import React, { useState, useCallback, createContext, useContext } from "react";
import { executeApi } from "./base-context";
import { NotificationContext } from "./notification-context";
import { LoaderContext } from "./loader-context";
import { AllApi } from "../api/all-api";
import { LayoutContext } from "./layout-context";
import axios from "axios";

export const AllContext = createContext();

export const AllProvider = ({ children }) => {
    const [data, setData] = useState();
    const [dataStatus, setDataStatus] = useState();
    const [dataAll, setDataAll] = useState();
    let sample = [
        "http://10.192.21.174/leafLogicApi/api/v1/Brand/GetBrands",
        "http://10.192.21.174/leafLogicApi/api/v1/Customer/GetCustomers",
        "http://10.192.21.174/leafLogicApi/api/v1/Discount/GetDiscounts",
        "http://10.192.21.174/leafLogicApi/api/v1/Employee/GetEmployees",
        "http://10.192.21.174/leafLogicApi/api/v1/GuestList/GetGuestList",
        "http://10.192.21.174/leafLogicApi/api/v1/LeafLogic/GetBrands",
        "http://10.192.21.174/leafLogicApi/api/v1/Harvest/GetHarvests",
        "http://10.192.21.174/leafLogicApi/api/v1/Integration/GetIntegrationRecon",
        "http://10.192.21.174/leafLogicApi/api/v1/Inventory/GetInventoryItems",
        "http://10.192.21.174/leafLogicApi/api/v1/Lineage/GetLineages",
        "http://10.192.21.174/leafLogicApi/api/v1/Plant/GetPlants",
        "http://10.192.21.174/leafLogicApi/api/v1/PreOrder/GetPreOrderStatus",
        "http://10.192.21.174/leafLogicApi/api/v1/PricingTier/GetPricingTiers",
        "http://10.192.21.174/leafLogicApi/api/v1/Product/GetProducts",
        "http://10.192.21.174/leafLogicApi/api/v1/Producer/GetProducers",
        "http://10.192.21.174/leafLogicApi/api/v1/ProductCategory/GetProductCategories",
        "http://10.192.21.174/leafLogicApi/api/v1/ReferenceData/GetReferenceUnits",
        "http://10.192.21.174/leafLogicApi/api/v1/Reporting/GetReportingCustomers",
        "http://10.192.21.174/leafLogicApi/GetRooms",
        "http://10.192.21.174/leafLogicApi/api/v1/Size/GetSizes",
        "http://10.192.21.174/leafLogicApi/api/v1/Strain/GetStrains",
        "http://10.192.21.174/leafLogicApi/api/v1/Table/GetTables",
        "http://10.192.21.174/leafLogicApi/api/v1/Tag/GetTags",
        "http://10.192.21.174/leafLogicApi/api/v1/Reporting/GetReportingTransactions",
        "http://10.192.21.174/leafLogicApi/api/v1/Util/GetAuthorizationHeader?apiKey=Basic ZGZlM2UwYThjYTU2NDU0OWFlNmVmYjI1NzBlNjI1ZmM=",
        "http://10.192.21.174/leafLogicApi/api/v1/Vendor/GetVendors",
        "http://10.192.21.174/leafLogicApi/api/v1/Waste/GetWaste",
        "http://10.192.21.174/leafLogicApi/api/v1/Reporting/GetReportingRegisterAdjustments",
        "http://10.192.21.174/leafLogicApi/api/v1/Reporting/GetReportingRegisterTransactions",
        "http://10.192.21.174/leafLogicApi/api/v1/Reporting/GetReportingCashSummary",
        "http://10.192.21.174/leafLogicApi/api/v1/Reporting/GetReportingInventory",
        "http://10.192.21.174/leafLogicApi/api/v1/Reporting/GetReportingLoyaltySnapshot",
        "http://10.192.21.174/leafLogicApi/api/v1/Reporting/GetReportingProductDetails",
        "http://10.192.21.174/leafLogicApi/api/v1/Reporting/GetReportingClosingReport?fromDateUTC=2022-01-05&toDateUTC=2022-01-30",
    ]
    const { addMessage } = useContext(NotificationContext);
    const { showLoading } = useContext(LoaderContext);
    const { menuName } = useContext(LayoutContext);

    const executeAllApi = async (apiFunction, request) => {
        const response = await executeApi(
            apiFunction,
            request,
            showLoading,
            addMessage
        );

        return response;
    };

    const getData = async (request) => {
        showLoading(true);
        try {
            const response = await executeAllApi(
                AllApi.getData,
                request
            );
            if (response) {
                showLoading(false);
                setData(response);
                setDataStatus(200)
                // toast.success(`Sync ${menuName} Data successfully`);
                // addMessage({ message: 'Sync Data successfully' });
            } else {
                // addMessage({ message: 'Sync not successfully', type: 'error' });
                showLoading(false);
                // toast.error(`Sync ${menuName} not successfully`);
            }
        } catch (error) {
            showLoading(false);
            // toast.error(`Sync ${menuName} not successfully`);
            // addMessage({ message: 'Sync not unsuccessfully', type: 'error' });
            console.log(error);
        }
    };

    const fetchAll = async () => {
        showLoading(true);
        // let data = axios.get("http://10.192.21.174/leafLogicApi/api/v1/Brand/GetBrands");
        // let data1 = axios.get("http://10.192.21.174/leafLogicApi/api/v1/Customer/GetCustomers");
        // let data2 = axios.get("http://10.192.21.174/leafLogicApi/api/v1/Discount/GetDiscounts");
        // let data3 = axios.get("http://10.192.21.174/leafLogicApi/api/v1/Employee/GetEmployees");
        // let data4 = axios.get("http://10.192.21.174/leafLogicApi/api/v1/GuestList/GetGuestList");
        // let data5 = axios.get("http://10.192.21.174/leafLogicApi/api/v1/LeafLogic/GetBrands");
        // let data6 = axios.get("http://10.192.21.174/leafLogicApi/api/v1/Harvest/GetHarvests");
        // let data7 = axios.get("http://10.192.21.174/leafLogicApi/api/v1/Integration/GetIntegrationRecon");
        // let data8 = axios.get("http://10.192.21.174/leafLogicApi/api/v1/Inventory/GetInventoryItems");
        // let data9 = axios.get("http://10.192.21.174/leafLogicApi/api/v1/Lineage/GetLineages");
        // let data10 = axios.get("http://10.192.21.174/leafLogicApi/api/v1/Plant/GetPlants");
        // let data11 = axios.get("http://10.192.21.174/leafLogicApi/api/v1/PreOrder/GetPreOrderStatus");
        // let data12 = axios.get("http://10.192.21.174/leafLogicApi/api/v1/PricingTier/GetPricingTiers");
        // let data13 = axios.get("http://10.192.21.174/leafLogicApi/api/v1/Product/GetProducts");
        // let data14 = axios.get("http://10.192.21.174/leafLogicApi/api/v1/Producer/GetProducers");
        // let data15 = axios.get("http://10.192.21.174/leafLogicApi/api/v1/ProductCategory/GetProductCategories");
        // let data16 = axios.get("http://10.192.21.174/leafLogicApi/api/v1/ReferenceData/GetReferenceUnits");
        // let data17 = axios.get("http://10.192.21.174/leafLogicApi/api/v1/Reporting/GetReportingCustomers");
        // let data18 = axios.get("http://10.192.21.174/leafLogicApi/GetRooms");
        // let data19 = axios.get("http://10.192.21.174/leafLogicApi/api/v1/Size/GetSizes");
        // let data20 = axios.get("http://10.192.21.174/leafLogicApi/api/v1/Strain/GetStrains");
        // let data21 = axios.get("http://10.192.21.174/leafLogicApi/api/v1/Table/GetTables");
        // let data22 = axios.get("http://10.192.21.174/leafLogicApi/api/v1/Tag/GetTags");
        // let data23 = axios.get("http://10.192.21.174/leafLogicApi/api/v1/Reporting/GetReportingTransactions");
        // let data24 = axios.get("http://10.192.21.174/leafLogicApi/api/v1/Util/GetAuthorizationHeader");
        // let data25 = axios.get("http://10.192.21.174/leafLogicApi/api/v1/Vendor/GetVendors");
        // let data26 = axios.get("http://10.192.21.174/leafLogicApi/api/v1/Waste/GetWaste");
        // let data27 = axios.get("http://10.192.21.174/leafLogicApi/api/v1/Reporting/GetReportingRegisterAdjustments");
        // let data28 = axios.get("http://10.192.21.174/leafLogicApi/api/v1/Reporting/GetReportingRegisterTransactions");
        // let data29 = axios.get("http://10.192.21.174/leafLogicApi/api/v1/Reporting/GetReportingCashSummary");
        // let data30 = axios.get("http://10.192.21.174/leafLogicApi/api/v1/Reporting/GetReportingInventory");
        // let data31 = axios.get("http://10.192.21.174/leafLogicApi/api/v1/Reporting/GetReportingLoyaltySnapshot");
        // let data32 = axios.get("http://10.192.21.174/leafLogicApi/api/v1/Reporting/GetReportingProductDetails");
        // let data33 = axios.get("http://10.192.21.174/leafLogicApi/api/v1/Reporting/GetReportingClosingReport");
        let sample = [
            "http://10.192.21.174/leafLogicApi/api/v1/Brand/GetBrands",
            "http://10.192.21.174/leafLogicApi/api/v1/Customer/GetCustomers",
            "http://10.192.21.174/leafLogicApi/api/v1/Discount/GetDiscounts",
            "http://10.192.21.174/leafLogicApi/api/v1/Employee/GetEmployees",
            "http://10.192.21.174/leafLogicApi/api/v1/GuestList/GetGuestList",
            "http://10.192.21.174/leafLogicApi/api/v1/LeafLogic/GetBrands",
            "http://10.192.21.174/leafLogicApi/api/v1/Harvest/GetHarvests",
            "http://10.192.21.174/leafLogicApi/api/v1/Integration/GetIntegrationRecon",
            "http://10.192.21.174/leafLogicApi/api/v1/Inventory/GetInventoryItems",
            "http://10.192.21.174/leafLogicApi/api/v1/Lineage/GetLineages",
            "http://10.192.21.174/leafLogicApi/api/v1/Plant/GetPlants",
            "http://10.192.21.174/leafLogicApi/api/v1/PreOrder/GetPreOrderStatus",
            "http://10.192.21.174/leafLogicApi/api/v1/PricingTier/GetPricingTiers",
            "http://10.192.21.174/leafLogicApi/api/v1/Product/GetProducts",
            "http://10.192.21.174/leafLogicApi/api/v1/Producer/GetProducers",
            "http://10.192.21.174/leafLogicApi/api/v1/ProductCategory/GetProductCategories",
            "http://10.192.21.174/leafLogicApi/api/v1/ReferenceData/GetReferenceUnits",
            "http://10.192.21.174/leafLogicApi/api/v1/Reporting/GetReportingCustomers",
            "http://10.192.21.174/leafLogicApi/GetRooms",
            "http://10.192.21.174/leafLogicApi/api/v1/Size/GetSizes",
            "http://10.192.21.174/leafLogicApi/api/v1/Strain/GetStrains",
            "http://10.192.21.174/leafLogicApi/api/v1/Table/GetTables",
            "http://10.192.21.174/leafLogicApi/api/v1/Tag/GetTags",
            "http://10.192.21.174/leafLogicApi/api/v1/Reporting/GetReportingTransactions",
            "http://10.192.21.174/leafLogicApi/api/v1/Util/GetAuthorizationHeader?apiKey=Basic ZGZlM2UwYThjYTU2NDU0OWFlNmVmYjI1NzBlNjI1ZmM=",
            "http://10.192.21.174/leafLogicApi/api/v1/Vendor/GetVendors",
            "http://10.192.21.174/leafLogicApi/api/v1/Waste/GetWaste",
            "http://10.192.21.174/leafLogicApi/api/v1/Reporting/GetReportingRegisterAdjustments",
            "http://10.192.21.174/leafLogicApi/api/v1/Reporting/GetReportingRegisterTransactions",
            "http://10.192.21.174/leafLogicApi/api/v1/Reporting/GetReportingCashSummary",
            "http://10.192.21.174/leafLogicApi/api/v1/Reporting/GetReportingInventory",
            "http://10.192.21.174/leafLogicApi/api/v1/Reporting/GetReportingLoyaltySnapshot",
            "http://10.192.21.174/leafLogicApi/api/v1/Reporting/GetReportingProductDetails",
            "http://10.192.21.174/leafLogicApi/api/v1/Reporting/GetReportingClosingReport?fromDateUTC=2022-01-05&toDateUTC=2022-01-30",
        ]
        let arr = [];
        sample.map((item) => {
            return new Promise((resolve, reject) => {
                try {
                    const res = axios.get(`${item}`)
                    // console.log('res', res)
                    // setDataStatus(res)
                    showLoading(false);
                    resolve(res)
                } catch (err) {
                    reject(err);
                }
            })

        }).map((item, index) => {
            return item.then(res => {
                arr.push({ status: res.status, data: res.data, index: index })
                showLoading(false);
            })
        })
        console.log('arr', arr)
        setDataAll(arr)

        // if (promises) {
        //     console.log('promisddddddddes', promises)
        //     await Promise.all(promises).then(values => {
        //         const data = promises.map((res) => res.data);
        //         console.log(data.flat());
        //         console.log('values', values.data)
        //         setDataStatus(values.map(item => item));

        //     }).catch(err => {
        //         setDataStatus([])
        //         throw err
        //     })
        // }

    };


    const fetchNames = async () => {
        showLoading(true);
        let arr = []
        let arr1 = []
        let data1;
        await Promise.all(
            sample.map(async (id, index) => {
                await fetch(`${id}`).then((item) => (
                    data1 = arr1.push(item.status),
                    console.log('data1', data1),
                    setDataStatus(data1),
                    item.json()

                    // return (
                    //     // arr.push({ index: index, status: item.status }),
                    //     setDataStatus(item),
                    //     item.json()
                    // )
                )).then(data => {
                    arr.push({ index: index, data: data })
                    console.log('arr', arr)
                    return setDataAll(arr)
                })
                showLoading(false);
            })
        );
        // showLoading(true);
        // try {
        //     await Promise.all([
        //         fetch("http://10.192.21.174/leafLogicApi/api/v1/Brand/GetBrands"),
        //         fetch("http://10.192.21.174/leafLogicApi/api/v1/Customer/GetCustomers"),
        //         fetch("http://10.192.21.174/leafLogicApi/api/v1/Discount/GetDiscounts"),
        //         fetch("http://10.192.21.174/leafLogicApi/api/v1/Employee/GetEmployees"),
        //         fetch("http://10.192.21.174/leafLogicApi/api/v1/GuestList/GetGuestList"),
        //         fetch("http://10.192.21.174/leafLogicApi/api/v1/LeafLogic/GetBrands"),
        //         fetch("http://10.192.21.174/leafLogicApi/api/v1/Harvest/GetHarvests"),
        //         fetch("http://10.192.21.174/leafLogicApi/api/v1/Integration/GetIntegrationRecon"),
        //         fetch("http://10.192.21.174/leafLogicApi/api/v1/Inventory/GetInventoryItems"),
        //         fetch("http://10.192.21.174/leafLogicApi/api/v1/Lineage/GetLineages"),
        //         fetch("http://10.192.21.174/leafLogicApi/api/v1/Plant/GetPlants"),
        //         fetch("http://10.192.21.174/leafLogicApi/api/v1/PreOrder/GetPreOrderStatus"),
        //         fetch("http://10.192.21.174/leafLogicApi/api/v1/PricingTier/GetPricingTiers"),
        //         fetch("http://10.192.21.174/leafLogicApi/api/v1/Product/GetProducts"),
        //         fetch("http://10.192.21.174/leafLogicApi/api/v1/Producer/GetProducers"),
        //         fetch("http://10.192.21.174/leafLogicApi/api/v1/ProductCategory/GetProductCategories"),
        //         fetch("http://10.192.21.174/leafLogicApi/api/v1/ReferenceData/GetReferenceUnits"),
        //         fetch("http://10.192.21.174/leafLogicApi/api/v1/Reporting/GetReportingCustomers"),
        //         fetch("http://10.192.21.174/leafLogicApi/GetRooms"),
        //         fetch("http://10.192.21.174/leafLogicApi/api/v1/Size/GetSizes"),
        //         fetch("http://10.192.21.174/leafLogicApi/api/v1/Strain/GetStrains"),
        //         fetch("http://10.192.21.174/leafLogicApi/api/v1/Table/GetTables"),
        //         fetch("http://10.192.21.174/leafLogicApi/api/v1/Tag/GetTags"),
        //         fetch("http://10.192.21.174/leafLogicApi/api/v1/Reporting/GetReportingTransactions"),
        //         fetch("http://10.192.21.174/leafLogicApi/api/v1/Util/GetAuthorizationHeader?apiKey=Basic ZGZlM2UwYThjYTU2NDU0OWFlNmVmYjI1NzBlNjI1ZmM="),
        //         fetch("http://10.192.21.174/leafLogicApi/api/v1/Vendor/GetVendors"),
        //         fetch("http://10.192.21.174/leafLogicApi/api/v1/Waste/GetWaste"),
        //         fetch("http://10.192.21.174/leafLogicApi/api/v1/Reporting/GetReportingRegisterAdjustments"),
        //         fetch("http://10.192.21.174/leafLogicApi/api/v1/Reporting/GetReportingRegisterTransactions"),
        //         fetch("http://10.192.21.174/leafLogicApi/api/v1/Reporting/GetReportingCashSummary"),
        //         fetch("http://10.192.21.174/leafLogicApi/api/v1/Reporting/GetReportingInventory"),
        //         fetch("http://10.192.21.174/leafLogicApi/api/v1/Reporting/GetReportingLoyaltySnapshot"),
        //         fetch("http://10.192.21.174/leafLogicApi/api/v1/Reporting/GetReportingProductDetails"),
        //         fetch("http://10.192.21.174/leafLogicApi/api/v1/Reporting/GetReportingClosingReport?fromDateUTC=2022-01-05&toDateUTC=2022-01-30"),
        //     ]).then((response, i) => {
        //         setDataStatus(response);
        //         fetchAll()
        //         showLoading(false);
        //     }).then(data => console.log(data));
        // } catch (error) {
        //     showLoading(false);
        // }
    };
    const contextValue = {
        data,
        dataStatus,
        setData,
        dataAll,
        setDataStatus,
        onGetData: useCallback((request) => {
            getData(request);
        }, []),
        onAllGetData: useCallback((request) => {
            fetchNames(request);
        }, []),
    };

    return (
        <AllContext.Provider value={contextValue}>{children}</AllContext.Provider>
    );
};
