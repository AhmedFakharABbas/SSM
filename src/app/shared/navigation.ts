import { SSSMNavigation } from "./types";

export const navigation: SSSMNavigation[] = [
    {
        id: 'applications',
        title: 'Applications',
        type: 'group',
        icon: 'apps',
        children: [
            {
                id: 'dashboard',
                title: 'Dashboard',
                type: 'item',
                icon: 'dashboard',
                url: '/admin/dashboard'
            },
            {
                id: 'configuration',
                title: 'Configuration',
                type: 'collapsable',
                icon: 'lock',
                children: [
                    {
                        id: 'distributorManagement',
                        title: 'Distributor Management',
                        type: 'collapsable',
                        icon: 'lock',
                        children: [
                            {
                                id: 'GeoHierarchy',
                                title: 'Geo Hierarchy',
                                type: 'item',
                                icon: 'lock',
                                url: 'configuration/GeoHierarchy'
                            },
                            {
                                id: 'TownClassification',
                                title: 'Town Classification',
                                type: 'item',
                                icon: 'lock',
                                url: 'configuration/TownClassification'
                            },
                            {
                                id: 'NewLocation',
                                title: 'New Location',
                                type: 'item',
                                icon: 'lock',
                                url: 'configuration/NewLocation'
                            },
                            {
                                id: 'TownAssignment',
                                title: 'Town Assignment',
                                type: 'item',
                                icon: 'lock',
                                url: 'configuration/TownAssignment'
                            },
                            {
                                id: 'SectionHierarchy',
                                title: 'Section Hierarchy',
                                type: 'item',
                                icon: 'lock',
                                url: 'configuration/SectionHierarchy'
                            },
                            {
                                id: 'AreaAssignment',
                                title: 'Area Assignment',
                                type: 'item',
                                icon: 'lock',
                                url: 'configuration/AreaAssignment'
                            },
                            {
                                id: 'DistributorMapping',
                                title: 'Distributor Mapping',
                                type: 'item',
                                icon: 'lock',
                                url: 'configuration/dashboard'
                            },
                            {
                                id: 'DistributorDataShifting',
                                title: 'Distributor Data Shifting',
                                type: 'item',
                                icon: 'lock',
                                url: 'configuration/DistributorDataShifting'
                            },
                            {
                                id: 'BankAssignment',
                                title: 'Bank Assignment',
                                type: 'item',
                                icon: 'lock',
                                url: 'configuration/BankAssignment'
                            },
                            {
                                id: 'ROIInput',
                                title: 'ROI Input',
                                type: 'item',
                                icon: 'lock',
                                url: 'configuration/ROIInput'
                            },
                            {
                                id: 'ROITradeMarketingClaim',
                                title: 'ROI Trade Marketing Claim',
                                type: 'item',
                                icon: 'lock',
                                url: 'configuration/ROITradeMarketingClaim'
                            }
                        ]
                    },
                    {
                        id: 'SecurityRightsManagement',
                        title: 'Security & Rights Management',
                        type: 'collapsable',
                        icon: 'lock',
                        children: [
                            {
                                id: 'UploadNotifications',
                                title: 'Upload Notifications',
                                type: 'item',
                                icon: 'lock',
                                url: 'configuration/UploadNotifications'
                            },
                            {
                                id: 'Designation',
                                title: 'Designation',
                                type: 'item',
                                icon: 'lock',
                                url: 'configuration/Designation'
                            },
                            {
                                id: 'EmployeeInformation',
                                title: 'Employee Information',
                                type: 'item',
                                icon: 'lock',
                                url: 'configuration/EmployeeInformation'
                            },
                            {
                                id: 'RoleManagment',
                                title: 'Role Managment',
                                type: 'item',
                                icon: 'lock',
                                url: 'configuration/RoleManagment'
                            },
                            {
                                id: 'UserLogin',
                                title: 'User Login',
                                type: 'item',
                                icon: 'lock',
                                url: 'configuration/UserLogin'
                            },
                            {
                                id: 'ChangePassword',
                                title: 'Change Password',
                                type: 'item',
                                icon: 'lock',
                                url: 'configuration/ChangePassword'
                            },
                            {
                                id: 'UserAssignment',
                                title: 'User Assignment',
                                type: 'item',
                                icon: 'lock',
                                url: 'configuration/UserAssignment'
                            },
                            {
                                id: 'SalesForceAssignment',
                                title: 'Sales Force Assignment',
                                type: 'item',
                                icon: 'lock',
                                url: 'configuration/SalesForceAssignment'
                            },
                            {
                                id: 'FieldForeceMapping',
                                title: 'Field Forece Mapping',
                                type: 'item',
                                icon: 'lock',
                                url: 'configuration/FieldForeceMapping'
                            },
                            {
                                id: 'DSRMapping',
                                title: 'DSR Mapping',
                                type: 'item',
                                icon: 'lock',
                                url: 'configuration/DSRMapping'
                            },
                            {
                                id: 'MobileDevice',
                                title: 'Mobile Device',
                                type: 'item',
                                icon: 'lock',
                                url: 'configuration/MobileDevice'
                            },
                            {
                                id: 'PermnentJourneyProgram',
                                title: 'Permnent Journey Program',
                                type: 'item',
                                icon: 'lock',
                                url: 'configuration/PermnentJourneyProgram'
                            },
                            {
                                id: 'UploadLogo',
                                title: 'Upload Logo',
                                type: 'item',
                                icon: 'lock',
                                url: 'configuration/UploadLogo'
                            },
                        ]
                    },
                    {
                        id: 'SKUManagemen',
                        title: 'SKU Managemen',
                        type: 'collapsable',
                        icon: 'lock',
                        children: [
                            {
                                id: 'SKUHierarchy',
                                title: 'SKU Hierarchy',
                                type: 'item',
                                icon: 'lock',
                                url: 'configuration/SKUHierarchy'
                            },
                            {
                                id: 'MAsterSKUInformation',
                                title: 'Master SKU Information',
                                type: 'item',
                                icon: 'lock',
                                url: 'configuration/MAsterSKUInformation'
                            },
                            {
                                id: 'SKUInformation',
                                title: 'SKU Information',
                                type: 'item',
                                icon: 'lock',
                                url: 'configuration/SKUInformation'
                            },
                            {
                                id: 'SKUHierarchyProximity',
                                title: 'SKU Hierarchy Proximity',
                                type: 'item',
                                icon: 'lock',
                                url: 'configuration/SKUHierarchyProximity'
                            },
                            {
                                id: 'SKUPrice',
                                title: 'SKU Price',
                                type: 'item',
                                icon: 'lock',
                                url: 'configuration/SKUPrice'
                            },
                            {
                                id: 'CustomerWisePrice',
                                title: 'Customer Wise Price',
                                type: 'item',
                                icon: 'lock',
                                url: 'configuration/CustomerWisePrice'
                            },
                            {
                                id: 'SKUPriceImport',
                                title: 'SKU Price Import',
                                type: 'item',
                                icon: 'lock',
                                url: 'configuration/SKUPriceImport'
                            },
                            {
                                id: 'SKUGroup',
                                title: 'SKU Group',
                                type: 'item',
                                icon: 'lock',
                                url: 'configuration/SKUGroup'
                            },
                            {
                                id: 'Scheme&Promotion',
                                title: 'Scheme & Promotion',
                                type: 'item',
                                icon: 'lock',
                                url: 'configuration/Scheme&Promotion'
                            },
                        ]
                    },
                    {
                        id: 'Outlet Management',
                        title: 'Outlet Management',
                        type: 'collapsable',
                        icon: 'lock',
                        children: [
                            {
                                id: 'ChannelHierarchy',
                                title: 'Channel Hierarchy',
                                type: 'item',
                                icon: 'lock',
                                url: 'configuration/ChannelHierarchy'
                            },
                            {
                                id: 'NewOutlet',
                                title: 'New Outlet',
                                type: 'item',
                                icon: 'lock',
                                url: 'configuration/NewOutlet'
                            },
                            {
                                id: 'OutletProximity',
                                title: 'Outlet Proximity',
                                type: 'item',
                                icon: 'lock',
                                url: 'configuration/OutletProximity'
                            },
                            {
                                id: 'OutletShifting',
                                title: 'Outlet Shifting',
                                type: 'item',
                                icon: 'lock',
                                url: 'configuration/OutletShifting'
                            },
                            {
                                id: 'ImportData',
                                title: 'Import Data',
                                type: 'item',
                                icon: 'lock',
                                url: 'configuration/ImportData'
                            },
                            {
                                id: 'CreateNewOutlet',
                                title: 'Create New Outlet',
                                type: 'item',
                                icon: 'lock',
                                url: 'configuration/CreateNewOutlet'
                            },
                            {
                                id: 'OutletApproval',
                                title: 'Outlet Approval',
                                type: 'item',
                                icon: 'lock',
                                url: 'configuration/OutletApproval'
                            },
                            {
                                id: 'AddOutletDetails',
                                title: 'Add Outlet Details',
                                type: 'item',
                                icon: 'lock',
                                url: 'configuration/AddOutletDetails'
                            }
                        ]
                    }
                ]
            },
            {
                id: 'SalesPurchase',
                title: 'Sales & Purchase',
                type: 'collapsable',
                icon: 'help',
                children: [
                    {
                        id: 'InventoryTransaction',
                        title: 'Inventory Transaction',
                        type: 'collapsable',
                        icon: 'lock',
                        children: [
                            {
                                id: 'PurchaseOrder',
                                title: 'Purchase Order',
                                type: 'item',
                                icon: 'lock',
                                url: 'procurement/PurchaseOrder'
                            },
                            {
                                id: 'DispatchOrder',
                                title: 'Dispatch Order',
                                type: 'item',
                                icon: 'lock',
                                url: 'procurement/DispatchOrder'
                            },
                            {
                                id: 'GoodReceiptNote',
                                title: 'Good Receipt Note (GRN)',
                                type: 'item',
                                icon: 'lock',
                                url: 'procurement/GoodReceiptNote'
                            },
                            {
                                id: 'InventoryTransferOut',
                                title: 'Inventory Transfer Out',
                                type: 'item',
                                icon: 'lock',
                                url: 'procurement/InventoryTransferOut'
                            },
                            {
                                id: 'PurchaseReturn',
                                title: 'Purchase Return',
                                type: 'item',
                                icon: 'lock',
                                url: 'procurement/PurchaseReturn'
                            },
                            {
                                id: 'InventoryTransferIn',
                                title: 'Inventory Transfer In (Manual)',
                                type: 'item',
                                icon: 'lock',
                                url: 'procurement/InventoryTransferIn'
                            },
                            {
                                id: 'PhysicalStockTaking',
                                title: 'Physical Stock Taking',
                                type: 'item',
                                icon: 'lock',
                                url: 'procurement/PhysicalStockTaking'
                            },
                            {
                                id: 'StockAdjustment',
                                title: 'Stock Adjustment',
                                type: 'item',
                                icon: 'lock',
                                url: 'procurement/StockAdjustment'
                            },
                            {
                                id: 'OutletStockPosition',
                                title: 'Outlet Stock Position',
                                type: 'item',
                                icon: 'lock',
                                url: 'procurement/OutletStockPosition'
                            },
                            {
                                id: 'AddPurchase',
                                title: 'Add Purchase',
                                type: 'item',
                                icon: 'lock',
                                url: 'procurement/AddPurchase'
                            },
                            {
                                id: 'InventoryTransferIn',
                                title: 'Inventory Transfer In',
                                type: 'item',
                                icon: 'lock',
                                url: 'procurement/InventoryTransferIn'
                            }
                        ]
                    },
                    {
                        id: 'SalesTransaction',
                        title: 'Sales Transaction',
                        type: 'collapsable',
                        icon: 'lock',
                        children: [
                            {
                                id: 'OrderInvoiceentry',
                                title: 'Order / Invoiceentry',
                                type: 'item',
                                icon: 'lock',
                                url: 'procurement/OrderInvoiceentry'
                            },
                            {
                                id: 'SalesReturn',
                                title: 'Sales Return',
                                type: 'item',
                                icon: 'lock',
                                url: 'procurement/SalesReturn'
                            },
                            {
                                id: 'FullSaleReturnByInvoice',
                                title: 'Full Sale Return By Invoice',
                                type: 'item',
                                icon: 'lock',
                                url: 'procurement/FullSaleReturnByInvoice'
                            },
                            {
                                id: 'RollbackTransaction',
                                title: 'Rollback Transaction',
                                type: 'item',
                                icon: 'lock',
                                url: 'procurement/RollbackTransaction'
                            },
                            {
                                id: 'SalesTargtes',
                                title: 'Sales Targtes',
                                type: 'item',
                                icon: 'lock',
                                url: 'procurement/SalesTargtes'
                            },
                            {
                                id: 'ImportSalesTargets',
                                title: 'Import Sales Targets',
                                type: 'item',
                                icon: 'lock',
                                url: 'procurement/ImportSalesTargets'
                            },
                            {
                                id: 'CreditTaggingEntry',
                                title: 'Credit Tagging Entry',
                                type: 'item',
                                icon: 'lock',
                                url: 'procurement/CreditTaggingEntry'
                            },
                            {
                                id: 'OpenngCredit',
                                title: 'Openng Credit',
                                type: 'item',
                                icon: 'lock',
                                url: 'procurement/OpenngCredit'
                            },
                            {
                                id: 'UnorderdOutletStatus',
                                title: 'Unorderd Outlet Status',
                                type: 'item',
                                icon: 'lock',
                                url: 'procurement/UnorderdOutletStatus'
                            },
                            {
                                id: 'MobileOrderPosting',
                                title: 'Mobile Order Posting',
                                type: 'item',
                                icon: 'lock',
                                url: 'procurement/MobileOrderPosting'
                            },
                            {
                                id: 'MonthlyProductivityTarget',
                                title: 'Monthly Productivity Target',
                                type: 'item',
                                icon: 'lock',
                                url: 'procurement/MonthlyProductivityTarget'
                            }
                        ]
                    },

                ]
            },
            {
                id: 'AccountFinance',
                title: 'Account & Finance',
                type: 'collapsable',
                icon: 'help',
                children: [
                    {

                        id: 'AccountTransaction',
                        title: 'Account Transaction',
                        type: 'collapsable',
                        icon: 'lock',
                        children: [
                            {
                                id: 'ChartOfAccount',
                                title: 'Chart Of Account',
                                type: 'item',
                                icon: 'lock',
                                url: 'procurement/ChartOfAccount    '
                            },
                            {
                                id: 'Voucherentry',
                                title: 'Voucher Entry',
                                type: 'item',
                                icon: 'lock',
                                url: 'procurement/Voucherentry'
                            },
                            {
                                id: 'OutletClaim',
                                title: 'Outlet Claim',
                                type: 'item',
                                icon: 'lock',
                                url: 'procurement/OutletClaim'
                            },
                            {
                                id: 'FrieghtEntry',
                                title: 'Frieght Entry',
                                type: 'item',
                                icon: 'lock',
                                url: 'procurement/FrieghtEntry'
                            },
                            {
                                id: 'MonthlyExpense',
                                title: 'Monthly Expense',
                                type: 'item',
                                icon: 'lock',
                                url: 'procurement/MonthlyExpense'
                            },
                            {
                                id: 'VoucherEditing',
                                title: 'Voucher Editing',
                                type: 'item',
                                icon: 'lock',
                                url: 'procurement/VoucherEditing'
                            },
                            {
                                id: 'VoucherPosting',
                                title: 'Voucher Posting',
                                type: 'item',
                                icon: 'lock',
                                url: 'procurement/VoucherPosting'
                            },
                            {
                                id: 'CustomerCashReceipt',
                                title: 'Customer Cash Receipt',
                                type: 'item',
                                icon: 'lock',
                                url: 'procurement/CustomerCashReceipt'
                            },
                            {
                                id: 'CustomerBankReceip',
                                title: 'Customer Bank Receip',
                                type: 'item',
                                icon: 'lock',
                                url: 'procurement/CustomerBankReceip'
                            }
                        ]
                    }
                ]
            },
            {
                id: 'Reports',
                title: 'Reports',
                type: 'collapsable',
                icon: 'help',
                children: [
                    {
                        id: 'SalesReports',
                        title: 'Sales Reports',
                        type: 'collapsable',
                        icon: 'lock',
                        children: [
                            {
                                id: 'PrintCashMemo',
                                title: 'Print Cash Memo',
                                type: 'item',
                                icon: 'lock',
                                url: 'procurement/PrintCashMemo'

                            },
                            {
                                id: 'OutletUniverseReport',
                                title: 'Outlet Universe Report',
                                type: 'item',
                                icon: 'lock',
                                url: 'procurement/OutletUniverseReport'

                            },
                            {
                                id: 'SalePersonDSR',
                                title: 'Sale Person DSR',
                                type: 'item',
                                icon: 'lock',
                                url: 'procurement/SalePersonDSR'

                            },
                            {
                                id: 'ValueReconciliation',
                                title: 'Value Reconciliation',
                                type: 'item',
                                icon: 'lock',
                                url: 'procurement/ValueReconciliation'

                            },
                            {
                                id: 'Sales&ClosingStock',
                                title: 'Sales & Closing Stock',
                                type: 'item',
                                icon: 'lock',
                                url: 'procurement/Sales&ClosingStock'

                            },
                            {
                                id: 'DayCloseStatus',
                                title: 'Day Close Status',
                                type: 'item',
                                icon: 'lock',
                                url: 'procurement/DayCloseStatus'

                            },
                            {
                                id: 'OrderBookerReports',
                                title: 'Order Booker Reports',
                                type: 'item',
                                icon: 'lock',
                                url: 'procurement/OrderBookerReports'

                            },
                            {
                                id: 'SKUPriceList',
                                title: 'SKU Price List',
                                type: 'item',
                                icon: 'lock',
                                url: 'procurement/SKUPriceList'

                            },
                            {
                                id: 'PromotionReport',
                                title: 'Promotion Report',
                                type: 'item',
                                icon: 'lock',
                                url: 'procurement/PromotionReport'

                            },
                            {
                                id: 'TradeChannelSales',
                                title: 'Trade Channel Sales',
                                type: 'item',
                                icon: 'lock',
                                url: 'procurement/TradeChannelSales'

                            }
                            ,
                            {
                                id: 'GrossProfitReport',
                                title: 'Gross Profit Report',
                                type: 'item',
                                icon: 'lock',
                                url: 'procurement/GrossProfitReport'

                            }
                            ,
                            {
                                id: 'SKUPriceStructure',
                                title: 'SKU Price Structure',
                                type: 'item',
                                icon: 'lock',
                                url: 'procurement/SKUPriceStructure'

                            }
                            ,
                            {
                                id: 'CreditTaggingReport',
                                title: 'Credit Tagging Report',
                                type: 'item',
                                icon: 'lock',
                                url: 'procurement/CreditTaggingReport'

                            }
                            ,
                            {
                                id: 'DateWiseDiscount',
                                title: 'DateWise Discount',
                                type: 'item',
                                icon: 'lock',
                                url: 'procurement/DateWiseDiscount'

                            }
                            ,
                            {
                                id: 'UserLoginHistory',
                                title: 'User Login History',
                                type: 'item',
                                icon: 'lock',
                                url: 'procurement/UserLoginHistory'

                            }
                            ,
                            {
                                id: 'SKUPriceHistory',
                                title: 'SKU Price History',
                                type: 'item',
                                icon: 'lock',
                                url: 'procurement/SKUPriceHistory'

                            }
                            ,
                            {
                                id: 'LoadFromReport',
                                title: 'Load From Report',
                                type: 'item',
                                icon: 'lock',
                                url: 'procurement/LoadFromReport'

                            }
                            ,
                            {
                                id: 'TargetvsAchievement(SKUwise)',
                                title: 'Target vs Achievement (SKU wise)',
                                type: 'item',
                                icon: 'lock',
                                url: 'procurement/TargetvsAchievement(SKUwise)'

                            }
                            ,
                            {
                                id: 'DailySaleReport(DSR)',
                                title: 'Daily Sale Report (DSR)',
                                type: 'item',
                                icon: 'lock',
                                url: 'procurement/DailySaleReport(DSR)'

                            }
                            ,
                            {
                                id: 'KPISaleAnalysis',
                                title: 'KPI Sale Analysis',
                                type: 'item',
                                icon: 'lock',
                                url: 'procurement/KPISaleAnalysis'

                            }
                            ,
                            {
                                id: 'OutletStockPositionReport',
                                title: 'Outlet Stock Position Report',
                                type: 'item',
                                icon: 'lock',
                                url: 'procurement/OutletStockPositionReport'

                            }
                            ,
                            {
                                id: 'ListofCashMemo',
                                title: 'List of Cash Memo',
                                type: 'item',
                                icon: 'lock',
                                url: 'procurement/ListofCashMemo'

                            }
                            ,
                            {
                                id: 'ROIReportNew',
                                title: 'ROI Report New',
                                type: 'item',
                                icon: 'lock',
                                url: 'procurement/ROIReportNew'

                            }
                            ,
                            {
                                id: 'MTDReport',
                                title: 'MTD Report',
                                type: 'item',
                                icon: 'lock',
                                url: 'procurement/MTDReport'
                            },
                            {
                                id: 'SaleEfficiencyReport',
                                title: 'Sale Efficiency Report',
                                type: 'item',
                                icon: 'lock',
                                url: 'procurement/SaleEfficiencyReport'

                            }
                            ,
                            {
                                id: 'DistributorWiseSale',
                                title: 'Distributor Wise Sale',
                                type: 'item',
                                icon: 'lock',
                                url: 'procurement/DistributorWiseSale'

                            }
                            ,
                            {
                                id: 'OutletUniversebyClassification',
                                title: 'Outlet Universe by Classification',
                                type: 'item',
                                icon: 'lock',
                                url: 'procurement/OutletUniversebyClassification'

                            }
                            ,
                            {
                                id: 'SkuWiseSaleReport',
                                title: 'Sku Wise Sale Report',
                                type: 'item',
                                icon: 'lock',
                                url: 'procurement/SkuWiseSaleReport'

                            }
                            ,
                            {
                                id: 'AnalysisReport',
                                title: 'Analysis Report',
                                type: 'item',
                                icon: 'lock',
                                url: 'procurement/AnalysisReport'

                            }
                            ,
                            {
                                id: 'TownWiseSalePeport',
                                title: 'Town Wise Sale Peport',
                                type: 'item',
                                icon: 'lock',
                                url: 'procurement/TownWiseSalePeport'

                            }
                            ,
                            {
                                id: 'MTDReportSkuWise',
                                title: 'MTD Report (Sku wise)',
                                type: 'item',
                                icon: 'lock',
                                url: 'procurement/MTDReportSkuWise'

                            }
                            ,
                            {
                                id: 'InvoiceWiseTaxtReport',
                                title: 'Invoice Wise Taxt Report',
                                type: 'item',
                                icon: 'lock',
                                url: 'procurement/InvoiceWiseTaxtReport'

                            }
                            ,
                            {
                                id: 'TargetvsAchievementReportValueWise',
                                title: 'Target VS Achievement Report (Value Wise)',
                                type: 'item',
                                icon: 'lock',
                                url: 'procurement/TargetvsAchievementReport(Value Wise)'

                            }
                            ,
                            {
                                id: 'OrderCalculationSheet',
                                title: 'Order Calculation Sheet',
                                type: 'item',
                                icon: 'lock',
                                url: 'procurement/OrderCalculationSheet'

                            }
                            ,
                            {
                                id: 'ChannelBrandwiseOutletProductivityReport',
                                title: 'Channel / Brand Wise Outlet Productivity Report',
                                type: 'item',
                                icon: 'lock',
                                url: 'procurement/Channel/BrandwiseOutletProductivityReport'

                            }
                            ,
                            {
                                id: 'PrintCashMemoNew',
                                title: 'Print Cash Memo New',
                                type: 'item',
                                icon: 'lock',
                                url: 'procurement/PrintCashMemoNew'

                            }
                            ,
                            {
                                id: 'StockCoverDaysReport',
                                title: 'Stock Cover Days Report',
                                type: 'item',
                                icon: 'lock',
                                url: 'procurement/StockCoverDaysReport'

                            }
                            ,
                            {
                                id: 'SettlementSheet',
                                title: 'Setalement Sheet',
                                type: 'item',
                                icon: 'lock',
                                url: 'procurement/SettlementSheet'

                            }
                            ,
                            {
                                id: 'RawData',
                                title: 'Raw Data',
                                type: 'item',
                                icon: 'lock',
                                url: 'procurement/RawData'

                            }
                            ,
                            {
                                id: 'OutletComplains',
                                title: 'Outlet Complains',
                                type: 'item',
                                icon: 'lock',
                                url: 'procurement/OutletComplains'

                            }
                            ,
                            {
                                id: 'MonthlyProductivityTargetvsAchievmentReport',
                                title: 'Monthly Productivity Target VS Achievment Report',
                                type: 'item',
                                icon: 'lock',
                                url: 'procurement/MonthlyProductivityTargetvsAchievmentReport'

                            }
                            ,
                            {
                                id: 'MonthlySalesTargetVsAchievementReport',
                                title: 'Monthly Sales Target Vs Achievement Report',
                                type: 'item',
                                icon: 'lock',
                                url: 'procurement/MonthlySalesTargetVsAchievementReport'

                            }
                            ,
                            {
                                id: 'OrderBookerProductivityStatus',
                                title: 'Order Booker Productivity Status',
                                type: 'item',
                                icon: 'lock',
                                url: 'procurement/OrderBookerProductivityStatus'

                            }
                        ]
                    },
                    {
                        id: 'InventoryReports',
                        title: 'Inventory Reports',
                        type: 'collapsable',
                        icon: 'lock',
                        children: [
                            {

                                id: 'StockReconciliation',
                                title: 'Stock Reconciliation',
                                type: 'item',
                                icon: 'lock',
                                url: 'procurement/StockReconciliation'

                            },
                            {

                                id: 'DateWiseStockReport ',
                                title: 'Date Wise Stock Report ',
                                type: 'item',
                                icon: 'lock',
                                url: 'procurement/DateWiseStockReport '

                            },
                            {

                                id: 'TransferInOutReport ',
                                title: 'Transfer In / Out Report ',
                                type: 'item',
                                icon: 'lock',
                                url: 'procurement/TransferInOutReport '

                            },
                            {

                                id: 'PhysicalRetirnReport ',
                                title: 'Physical Retirn Report ',
                                type: 'item',
                                icon: 'lock',
                                url: 'procurement/PhysicalRetirnReport '

                            },
                            {

                                id: 'ClosingStockReportBySKU',
                                title: 'Closing Stock Report By SKU',
                                type: 'item',
                                icon: 'lock',
                                url: 'procurement/ClosingStockReportBySKU'

                            },
                            {

                                id: 'DeliveryChallan',
                                title: 'Delivery Challan',
                                type: 'item',
                                icon: 'lock',
                                url: 'procurement/DeliveryChallan'

                            },
                            {

                                id: 'StockDispatchDetailNew',
                                title: 'Stock Dispatch Detail New',
                                type: 'item',
                                icon: 'lock',
                                url: 'procurement/StockDispatchDetailNew'

                            },
                            {

                                id: 'GoodsReceiptNote(GRN)Report',
                                title: 'Goods Receipt Note (GRN) Report',
                                type: 'item',
                                icon: 'lock',
                                url: 'procurement/GoodsReceiptNote(GRN)Report'

                            },
                            {

                                id: 'TargetExportReport',
                                title: 'Target Export Report',
                                type: 'item',
                                icon: 'lock',
                                url: 'procurement/TargetExportReport'

                            },
                            {

                                id: 'ClosingStockReportbyMasterSKU',
                                title: 'Closing Stock Report by Master SKU',
                                type: 'item',
                                icon: 'lock',
                                url: 'procurement/ClosingStockReportbyMasterSKU'

                            },
                            {

                                id: 'DamageDetailReport',
                                title: 'Damage Detail Report',
                                type: 'item',
                                icon: 'lock',
                                url: 'procurement/DamageDetailReport'

                            },
                            {

                                id: 'SDSaleandClosingStockReport',
                                title: 'SD Saleand Closing Stock Report',
                                type: 'item',
                                icon: 'lock',
                                url: 'procurement/SDSaleandClosingStockReport'

                            },
                            {

                                id: 'Distributor&SKUWiseSale$StockReport',
                                title: 'Distributor & SKU Wise Sale Stock Report',
                                type: 'item',
                                icon: 'lock',
                                url: 'procurement/Distributor&SKUWiseSale$StockReport'

                            },
                            {

                                id: 'PurchaseOrderReport',
                                title: 'Purchase Order Report',
                                type: 'item',
                                icon: 'lock',
                                url: 'procurement/PurchaseOrderReport'

                            },
                            {

                                id: 'Invoice/DeliveryChallanReport',
                                title: 'Invoice / Delivery Challan Report',
                                type: 'item',
                                icon: 'lock',
                                url: 'procurement/Invoice/DeliveryChallanReport'

                            },
                            {

                                id: 'StockReconciliationNew',
                                title: 'Stock Reconciliation New',
                                type: 'item',
                                icon: 'lock',
                                url: 'procurement/StockReconciliationNew'

                            }
                        ]
                    },
                    {
                        id: 'AccountsReport',
                        title: 'Accounts Report',
                        type: 'collapsable',
                        icon: 'lock',
                        children: [
                            {

                                id: 'VoucherView',
                                title: 'Voucher View',
                                type: 'item',
                                icon: 'lock',
                                url: 'procurement/VoucherView'

                            },
                            {

                                id: 'PettyExpenseReport',
                                title: 'Petty Expense Report',
                                type: 'item',
                                icon: 'lock',
                                url: 'procurement/PettyExpenseReport'

                            },
                            {

                                id: 'DepositSlipDatail',
                                title: 'Deposit Slip Datail',
                                type: 'item',
                                icon: 'lock',
                                url: 'procurement/DepositSlipDatail'

                            },
                            {

                                id: 'GeneralSlipLedger',
                                title: 'General Slip Ledger',
                                type: 'item',
                                icon: 'lock',
                                url: 'procurement/GeneralSlipLedger'

                            },
                            {

                                id: 'PeetyExpenseSummary',
                                title: 'Peety Expense Summary',
                                type: 'item',
                                icon: 'lock',
                                url: 'procurement/PeetyExpenseSummary'

                            },
                            {

                                id: 'TrialBalance',
                                title: 'Trial Balance',
                                type: 'item',
                                icon: 'lock',
                                url: 'procurement/TrialBalance'

                            },
                            {

                                id: 'ChartofAccount',
                                title: 'Chart of Account',
                                type: 'item',
                                icon: 'lock',
                                url: 'procurement/ChartofAccount'

                            },
                            {

                                id: 'DailyNCSvsDeposit',
                                title: 'Daily NCS vs Deposit',
                                type: 'item',
                                icon: 'lock',
                                url: 'procurement/DailyNCSvsDeposit'

                            },
                            {

                                id: 'GLLogDetail',
                                title: 'GL Log Detail',
                                type: 'item',
                                icon: 'lock',
                                url: 'procurement/GLLogDetai'

                            }
                        ]
                    },
                    {
                        id: 'Outlet Reports',
                        title: 'Outlet Reports',
                        type: 'collapsable',
                        icon: 'lock',
                        children: [
                            {

                                id: 'CreditReport ',
                                title: 'Credit Report',
                                type: 'item',
                                icon: 'lock',
                                url: 'procurement/CreditReport '

                            },
                            {

                                id: 'OutletSummaryReport ',
                                title: 'Outlet Summary Report',
                                type: 'item',
                                icon: 'lock',
                                url: 'procurement/OutletSummaryReport '

                            },
                            {

                                id: 'BookingvsExecutionbyDate  ',
                                title: 'Booking vs Execution by Date ',
                                type: 'item',
                                icon: 'lock',
                                url: 'procurement/BookingvsExecutionbyDate  '

                            },
                            {

                                id: 'OutletInvoiceWiseSales  ',
                                title: 'Outlet Invoice Wise Sales ',
                                type: 'item',
                                icon: 'lock',
                                url: 'procurement/OutletInvoiceWiseSales  '

                            },
                            {

                                id: 'OutletLedger',
                                title: 'Outlet Ledger',
                                type: 'item',
                                icon: 'lock',
                                url: 'procurement/OutletLedger '

                            },
                            {

                                id: 'CreditAgingReport',
                                title: 'Credit Aging Report ',
                                type: 'item',
                                icon: 'lock',
                                url: 'procurement/TradeOfferClaimSummary '

                            },
                            {

                                id: 'ChequeDetailReport ',
                                title: 'Cheque Detail Report',
                                type: 'item',
                                icon: 'lock',
                                url: 'procurement/ChequeDetailReport'

                            },
                            {

                                id: 'OrderBookerCreditAging',
                                title: 'Order Booker Credit Aging',
                                type: 'item',
                                icon: 'lock',
                                url: 'procurement/OrderBookerCreditAging'

                            },
                            {

                                id: 'OutletSaleReport',
                                title: 'Outlet Sale Report',
                                type: 'item',
                                icon: 'lock',
                                url: 'procurement/OutletSaleReport '

                            },
                            {

                                id: 'UnProductiveOutletReport',
                                title: 'UnProductive Outlet Report',
                                type: 'item',
                                icon: 'lock',
                                url: 'procurement/UnProductiveOutletReport '

                            },
                            {

                                id: 'OutlteProductivityReportbyBrand',
                                title: 'Outlte Productivity Report by Brand',
                                type: 'item',
                                icon: 'lock',
                                url: 'procurement/OutlteProductivityReportbyBrand'

                            },
                            {

                                id: 'OutlteProductivityReportbySKU ',
                                title: 'Outlte Productivity Report by SKU',
                                type: 'item',
                                icon: 'lock',
                                url: 'procurement/OutlteProductivityReportbySKU '

                            },
                            {

                                id: 'BookingvsExecutionbyDSR ',
                                title: 'Booking vs Execution by DSR',
                                type: 'item',
                                icon: 'lock',
                                url: 'procurement/BookingvsExecutionbyDSR '

                            },
                            {

                                id: 'DistributorFactSheet ',
                                title: 'Distributor Fact Sheet',
                                type: 'item',
                                icon: 'lock',
                                url: 'procurement/DistributorFactSheet '

                            },
                            {

                                id: 'DashBoardReport',
                                title: 'Dashboard Report',
                                type: 'item',
                                icon: 'lock',
                                url: 'procurement/DashBoardReport'

                            },
                            {

                                id: 'CustomerClosingBalance',
                                title: 'Customer Closing Balance',
                                type: 'item',
                                icon: 'lock',
                                url: 'procurement/CustomerClosingBalance'

                            }
                        ]
                    },
                    {
                        id: 'ClaimReports',
                        title: 'Claim Reports',
                        type: 'collapsable',
                        icon: 'lock',
                        children: [
                            {

                                id: 'TradeOfferClaimSummary ',
                                title: 'Trade Offer Claim Summary',
                                type: 'item',
                                icon: 'lock',
                                url: 'procurement/TradeOfferClaimSummary '

                            },
                            {

                                id: 'OutletWiseDiscountSummary  ',
                                title: 'Outlet Wise Discount Summary ',
                                type: 'item',
                                icon: 'lock',
                                url: 'procurement/OutletWiseDiscountSummary  '

                            },
                            {

                                id: 'TradeOfferFreeSKU',
                                title: 'Trade Offer Free SKU',
                                type: 'item',
                                icon: 'lock',
                                url: 'procurement/TradeOfferFreeSKU'

                            },
                            {

                                id: 'ClaimSummaryReport ',
                                title: 'Claim Summary Report',
                                type: 'item',
                                icon: 'lock',
                                url: 'procurement/ClaimSummaryReport '

                            },
                        ]
                    }

                ]
            }
            // {
            //     id: 'knowledge-base',
            //     title: 'Knowledge Base',
            //     type: 'item',
            //     icon: 'import_contacts',
            //     url: '/pages/knowledge-base'
            // }
        ]
    },
];
