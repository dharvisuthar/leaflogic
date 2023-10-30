import { PictureAsPdf } from '@mui/icons-material';
import { Button, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLayout, useAllApi } from '../../common/hooks'

const Brand = () => {
    const { menuName, menuItems } = useLayout();
    const { onGetData, onAllGetData, dataStatus, data, dataAll } = useAllApi();
    console.log('dataStatus', dataStatus)
    useEffect(() => {
        console.log('dataAll', dataAll)

        // let arr = []
        // dataStatus?.map((item, i) => {
        //     dataAll.filter((item2, i2) => {
        //         if (item2.id === item.id) {
        //             // console.log('item2', item2)
        //         }
        //     })
        // })
        // dataStatus?.map((item, i) => {
        //     dataAll.filter((item2) => item2.index === i ? item2 : "").map((item3, i3) => arr.push(item3))
        // })
        // console.log('arr', arr)
    }, [dataAll])
    const [isOpen, setIsOpen] = useState();
    var testOpen;
    const getData = async () => {
        if (menuName === "Brand") {
            await onGetData("http://10.192.21.174/leafLogicApi/api/v1/Brand/GetBrands")
        } else if (menuName === "Customer") {
            await onGetData("http://10.192.21.174/leafLogicApi/api/v1/Customer/GetCustomers")
        } else if (menuName === "Discounts") {
            await onGetData("http://10.192.21.174/leafLogicApi/api/v1/Discount/GetDiscounts")
        } else if (menuName === "Empolyee") {
            await onGetData("http://10.192.21.174/leafLogicApi/api/v1/Employee/GetEmployees")
        } else if (menuName === "Guest List") {
            await onGetData("http://10.192.21.174/leafLogicApi/api/v1/GuestList/GetGuestList")
        } else if (menuName === "ListAlt") {
            await onGetData("http://10.192.21.174/leafLogicApi/api/v1/LeafLogic/GetBrands")
        } else if (menuName === "Harvest") {
            await onGetData("http://10.192.21.174/leafLogicApi/api/v1/Harvest/GetHarvests")
        } else if (menuName === "Integration") {
            await onGetData("http://10.192.21.174/leafLogicApi/api/v1/Integration/GetIntegrationRecon")
        } else if (menuName === "Inventory") {
            await onGetData("http://10.192.21.174/leafLogicApi/api/v1/Inventory/GetInventoryItems")
        } else if (menuName === "Lineage") {
            await onGetData("http://10.192.21.174/leafLogicApi/api/v1/Lineage/GetLineages")
        } else if (menuName === "Payment") {
            await onGetData("http://10.192.21.174/leafLogicApi/api/v1/payment")
        } else if (menuName === "Plant") {
            await onGetData("http://10.192.21.174/leafLogicApi/api/v1/Plant/GetPlants")
        } else if (menuName === "PreOrder") {
            await onGetData("http://10.192.21.174/leafLogicApi/api/v1/PreOrder/GetPreOrderStatus")
        } else if (menuName === "PricingTier") {
            await onGetData("http://10.192.21.174/leafLogicApi/api/v1/PricingTier/GetPricingTiers")
        } else if (menuName === "Producer") {
            await onGetData("http://10.192.21.174/leafLogicApi/api/v1/Producer/GetProducers")
        } else if (menuName === "Product") {
            await onGetData("http://10.192.21.174/leafLogicApi/api/v1/Product/GetProducts")
        } else if (menuName === "Product Category") {
            await onGetData("http://10.192.21.174/leafLogicApi/api/v1/ProductCategory/GetProductCategories")
        } else if (menuName === "ReferenceData") {
            await onGetData("http://10.192.21.174/leafLogicApi/api/v1/ReferenceData/GetReferenceUnits")
        } else if (menuName === "Reporting") {
            await onGetData("http://10.192.21.174/leafLogicApi/api/v1/Reporting/GetReportingCustomers")
        } else if (menuName === "Room") {
            await onGetData("http://10.192.21.174/leafLogicApi/GetRooms")
        } else if (menuName === "Size") {
            await onGetData("http://10.192.21.174/leafLogicApi/api/v1/Size/GetSizes")
        } else if (menuName === "Straines") {
            await onGetData("http://10.192.21.174/leafLogicApi/api/v1/Strain/GetStrains")
        } else if (menuName === "Table") {
            await onGetData("http://10.192.21.174/leafLogicApi/api/v1/Table/GetTables")
        } else if (menuName === "Tag") {
            await onGetData("http://10.192.21.174/leafLogicApi/api/v1/Tag/GetTags")
        } else if (menuName === "Transction") {
            await onGetData("http://10.192.21.174/leafLogicApi/api/v1/Reporting/GetReportingTransactions")
        } else if (menuName === "Util") {
            await onGetData("http://10.192.21.174/leafLogicApi/api/v1/Util/GetAuthorizationHeader?apiKey=Basic ZGZlM2UwYThjYTU2NDU0OWFlNmVmYjI1NzBlNjI1ZmM=")
        } else if (menuName === "Vendor") {
            await onGetData("http://10.192.21.174/leafLogicApi/api/v1/Vendor/GetVendors")
        } else if (menuName === "Waste") {
            await onGetData("http://10.192.21.174/leafLogicApi/api/v1/Waste/GetWaste")
        } else if (menuName === "Waste") {
            await onGetData("http://10.192.21.174/leafLogicApi/api/v1/Waste/GetWaste")
        } else if (menuName === "RegisterAdjustments") {
            await onGetData("http://10.192.21.174/leafLogicApi/api/v1/Reporting/GetReportingRegisterAdjustments")
        } else if (menuName === "RegisterTransactions") {
            await onGetData("http://10.192.21.174/leafLogicApi/api/v1/Reporting/GetReportingRegisterTransactions")
        } else if (menuName === "ReportingCashSummary") {
            await onGetData("http://10.192.21.174/leafLogicApi/api/v1/Reporting/GetReportingCashSummary")
        } else if (menuName === "ReportingInventory") {
            await onGetData("http://10.192.21.174/leafLogicApi/api/v1/Reporting/GetReportingInventory")
        } else if (menuName === "LoyaltySnapshot") {
            await onGetData("http://10.192.21.174/leafLogicApi/api/v1/Reporting/GetReportingLoyaltySnapshot")
        } else if (menuName === "ClosingReport") {
            await onGetData("http://10.192.21.174/leafLogicApi/api/v1/Reporting/GetReportingClosingReport?fromDateUTC=2022-01-05&toDateUTC=2022-01-30")
        } else {
            await onAllGetData()
        }
    }
    const getDataAutomatically = async (data) => {
        if (data) {
            if (menuName === "Brand") {
                await onGetData("http://10.192.21.174/leafLogicApi/api/v1/Brand/GetBrands")
            } else if (menuName === "Customer") {
                await onGetData("http://10.192.21.174/leafLogicApi/api/v1/Customer/GetCustomers")
            } else if (menuName === "Discounts") {
                await onGetData("http://10.192.21.174/leafLogicApi/api/v1/Discount/GetDiscounts")
            } else if (menuName === "Empolyee") {
                await onGetData("http://10.192.21.174/leafLogicApi/api/v1/Employee/GetEmployees")
            } else if (menuName === "Guest List") {
                await onGetData("http://10.192.21.174/leafLogicApi/api/v1/GuestList/GetGuestList")
            } else if (menuName === "ListAlt") {
                await onGetData("http://10.192.21.174/leafLogicApi/api/v1/LeafLogic/GetBrands")
            } else if (menuName === "Harvest") {
                await onGetData("http://10.192.21.174/leafLogicApi/api/v1/Harvest/GetHarvests")
            } else if (menuName === "Integration") {
                await onGetData("http://10.192.21.174/leafLogicApi/api/v1/Integration/GetIntegrationRecon")
            } else if (menuName === "Inventory") {
                await onGetData("http://10.192.21.174/leafLogicApi/api/v1/Inventory/GetInventoryItems")
            } else if (menuName === "Lineage") {
                await onGetData("http://10.192.21.174/leafLogicApi/api/v1/Lineage/GetLineages")
            } else if (menuName === "Payment") {
                await onGetData("http://10.192.21.174/leafLogicApi/api/v1/payment")
            } else if (menuName === "Plant") {
                await onGetData("http://10.192.21.174/leafLogicApi/api/v1/Plant/GetPlants")
            } else if (menuName === "PreOrder") {
                await onGetData("http://10.192.21.174/leafLogicApi/api/v1/PreOrder/GetPreOrderStatus")
            } else if (menuName === "PricingTier") {
                await onGetData("http://10.192.21.174/leafLogicApi/api/v1/PricingTier/GetPricingTiers")
            } else if (menuName === "Producer") {
                await onGetData("http://10.192.21.174/leafLogicApi/api/v1/Producer/GetProducers")
            } else if (menuName === "Product") {
                await onGetData("http://10.192.21.174/leafLogicApi/api/v1/Product/GetProducts")
            } else if (menuName === "Product Category") {
                await onGetData("http://10.192.21.174/leafLogicApi/api/v1/ProductCategory/GetProductCategories")
            } else if (menuName === "ReferenceData") {
                await onGetData("http://10.192.21.174/leafLogicApi/api/v1/ReferenceData/GetReferenceUnits")
            } else if (menuName === "Reporting") {
                await onGetData("http://10.192.21.174/leafLogicApi/api/v1/Reporting/GetReportingCustomers")
            } else if (menuName === "Room") {
                await onGetData("http://10.192.21.174/leafLogicApi/GetRooms")
            } else if (menuName === "Size") {
                await onGetData("http://10.192.21.174/leafLogicApi/api/v1/Size/GetSizes")
            } else if (menuName === "Straines") {
                await onGetData("http://10.192.21.174/leafLogicApi/api/v1/Strain/GetStrains")
            } else if (menuName === "Table") {
                await onGetData("http://10.192.21.174/leafLogicApi/api/v1/Table/GetTables")
            } else if (menuName === "Tag") {
                await onGetData("http://10.192.21.174/leafLogicApi/api/v1/Tag/GetTags")
            } else if (menuName === "Transction") {
                await onGetData("http://10.192.21.174/leafLogicApi/api/v1/Reporting/GetReportingTransactions")
            } else if (menuName === "Util") {
                await onGetData("http://10.192.21.174/leafLogicApi/api/v1/Util/GetAuthorizationHeader?apiKey=Basic ZGZlM2UwYThjYTU2NDU0OWFlNmVmYjI1NzBlNjI1ZmM=")
            } else if (menuName === "Vendor") {
                await onGetData("http://10.192.21.174/leafLogicApi/api/v1/Vendor/GetVendors")
            } else if (menuName === "Waste") {
                await onGetData("http://10.192.21.174/leafLogicApi/api/v1/Waste/GetWaste")
            } else if (menuName === "RegisterAdjustments") {
                await onGetData("http://10.192.21.174/leafLogicApi/api/v1/Reporting/GetReportingRegisterAdjustments")
            } else if (menuName === "RegisterTransactions") {
                await onGetData("http://10.192.21.174/leafLogicApi/api/v1/Reporting/GetReportingRegisterTransactions")
            } else if (menuName === "CashSummary") {
                await onGetData("http://10.192.21.174/leafLogicApi/api/v1/Reporting/GetReportingCashSummary")
            } else if (menuName === "ReportingInventory") {
                await onGetData("http://10.192.21.174/leafLogicApi/api/v1/Reporting/GetReportingInventory")
            } else if (menuName === "LoyaltySnapshot") {
                await onGetData("http://10.192.21.174/leafLogicApi/api/v1/Reporting/GetReportingLoyaltySnapshot")
            } else if (menuName === "ClosingReport") {
                await onGetData("http://10.192.21.174/leafLogicApi/api/v1/Reporting/GetReportingClosingReport?fromDateUTC=2022-01-05&toDateUTC=2022-01-30")
            } else {
                await onAllGetData()
            }
        }

    }

    let intveral = React.useRef()

    const hendalClickStart = () => {
        testOpen = true
        setIsOpen(true);
        !isOpen && getDataAutomatically(testOpen);
        intveral.current = setInterval(() => {
            getDataAutomatically(testOpen);
        }, 1000 * 60 * 60);
    }
    const stopinterval = () => {
        testOpen = false
        clearInterval(intveral.current);
        setIsOpen(false);
    }
    useEffect(() => {
    }, [isOpen])
    let success = 200
    const printPDF = () => {
        var printContents = document.getElementById("pdf").innerHTML;
        var originalContents = document.body.innerHTML;
        document.body.innerHTML = printContents;
        window.print();
        document.body.innerHTML = originalContents;
        var afterPrint = function () {
            window.location.reload();
        };
        window.onafterprint = afterPrint;
        window.location.reload();
    }
    return (
        <div style={{ padding: "0 10px" }}>
            <div style={{ display: 'flex', justifyContent: "space-between", alignItems: "center" }}>
                <div>
                    {!isOpen ? <Button variant='contained' color='primary' onClick={() => hendalClickStart()}>Sync {menuName === "Home" ? "All" : menuName} Automatically</Button>
                        : <Button variant="contained" color="primary" onClick={() => stopinterval()}>Sync {menuName === "Home" ? "All" : menuName} Automatically Stop</Button>}
                    {!isOpen ? <Button variant='contained' color='primary' style={{ margin: 10 }} onClick={() => getData()}>Sync {menuName === "Home" ? "All" : menuName}</Button> : null}
                </div>
                <IconButton onClick={() => printPDF()} ><PictureAsPdf /></IconButton>
            </div>
            <fieldset style={{ borderColor: "#d6dadd" }} id="pdf">
                <legend>API LOGS:</legend>
                <TableContainer component={Paper}>
                    <Table size="small" aria-label="a dense table">
                        <TableHead>
                            <TableRow>
                                <TableCell style={{ fontWeight: 600 }}>API Name</TableCell>
                                <TableCell style={{ fontWeight: 600 }}>No of records affected</TableCell>
                                <TableCell style={{ fontWeight: 600 }}>Status</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {menuName === "Home" ?
                                menuItems?.map((row, i) => (
                                    row?.name === "Home" ? null :
                                        <TableRow
                                            key={i}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell>{row?.name}</TableCell>
                                            {/* <TableCell>{
                                                dataStatus?.map((item, i) => {
                                                    dataAll.filter((item2) => item2.index === i).map((item3, i3) => item3)
                                                })
                                            }
                                            </TableCell> */}
                                            {/* <TableCell>{dataStatus && dataStatus?.map((item, index) => {
                                                return (
                                                    <p>{i === index ? item?.status === 200 ? `${"Sync" + " " + row?.name + " Data " + "Success"}` : `${"Sync" + " " + row?.name + " Data " + "Failed"}    ` : ""}</p>
                                                )
                                            })

                                                // dataStatus.map((item, index) => {
                                                //     return item.then(res => {
                                                //         return <p>{i === index ? res?.status === 200 ? `${"Sync" + " " + row?.name + " Data " + "Success"}` : `${"Sync" + " " + row?.name + " Data " + "Failed"}    ` : ""}</p>
                                                //     }).catch(err => console.log(first))
                                                // })
                                            }
                                            </TableCell> */}
                                        </TableRow>
                                ))
                                :
                                <TableRow
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell>{menuName ? menuName : "All"}</TableCell>
                                    <TableCell>{data?.length}</TableCell>
                                    <TableCell>{!dataStatus === 200 ? `${"Sync" + " " + menuName + " Data " + "Failed"}` : dataStatus && dataStatus === 200 ? `${"Sync" + " " + menuName + " Data " + "Success"}` : ""}</TableCell>
                                </TableRow>
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
            </fieldset>
        </div >
    )
}

export default Brand