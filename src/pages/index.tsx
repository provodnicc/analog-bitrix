import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { CreateInvoicePage } from "./CreateInvoicePage";
import { GetProductListPage } from "./GetProductListPage";
import { HomePage } from "./HomePage";
import { Routes } from "./routes";
import { SaleProductPage } from "./SaleProductsPage";
import { SignInPage } from "./SignInPage";
import { SignUpPage } from "./SignUpPage";

export const router = createBrowserRouter([
    {
        path: Routes.HOME,
        element: <HomePage/>
    },
    {
        path: Routes.SIGN_IN,
        element: <SignInPage/>
    },
    {
        path: Routes.SIGN_UP,
        element: <SignUpPage/>
    },
    {
        path: Routes.GET_PRODUCT_LIST,
        element: <GetProductListPage/>
    },
    {
        path: Routes.CREATE_INVOICE,
        element: <CreateInvoicePage/>
    },
    {
        path: Routes.SALE_PRODUCTS,
        element: <SaleProductPage/>
    }
])