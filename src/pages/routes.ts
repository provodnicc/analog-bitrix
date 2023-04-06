export enum Routes{
    HOME = '/',
    SIGN_IN = '/sign-in',
    SIGN_UP = '/sign-up',
    GET_PRODUCT_LIST = '/get-product-list',
    CREATE_INVOICE = '/create-invoice',
    SALE_PRODUCTS = '/sale-products',
}


export type RoutesList = [
    'HOME',
    'SIGN_IN',
    'SIGN_UP',
    'GET_PRODUCT_LIST',
    'CREATE_INVOICE',
    'SALE_PRODUCTS',
]

export const RoutesName: Record<Routes, string> = {
    [Routes.HOME] : 'Главная',
    [Routes.SIGN_IN] : 'Вход',
    [Routes.SIGN_UP] : 'Регистрация',
    [Routes.GET_PRODUCT_LIST] : 'Список товаров',
    [Routes.CREATE_INVOICE] : 'Приход',
    [Routes.SALE_PRODUCTS] : 'Реализация',
}