export const actionTypes = {
    AUTH_START: "AUTH_START",
    AUTH_SUCCESS: "AUTH_SUCCESS",
    AUTH_FAIL: "AUTH_FAIL",
    USER_LOGOUT:"USER_LOGOUT",

    REGISTER_START: "REGISTER_START",
    REGISTER_SUCCESS: "REGISTER_SUCCESS",
    REGISTER_FAIL: "REGISTER_FAIL",
    REGISTER_COMPLETE:"REGISTER_COMPLETE",

    UPDATE_ORGANIZATION_PROFILE_START: "UPDATE_ORGANIZATION_PROFILE_START",
    UPDATE_ORGANIZATION_PROFILE_SUCCESS: "UPDATE_ORGANIZATION_PROFILE_SUCCESS",
    UPDATE_ORGANIZATION_PROFILE_FAIL: "UPDATE_ORGANIZATION_PROFILE_FAIL",
    UPDATE_ORGANIZATION_PROFILE_COMPLETE:"UPDATE_ORGANIZATION_PROFILE_COMPLETE",

    INVITE_USER_START: "INVITE_USER_START",
    INVITE_USER_SUCCESS: "INVITE_USER_SUCCESS",
    INVITE_USER_FAIL: "INVITE_USER_FAIL",
    INVITE_USER_COMPLETE:"INVITE_USER_COMPLETE",

    ADD_USER_ROLE_START: "ADD_USER_ROLE_START",
    ADD_USER_ROLE_SUCCESS: "ADD_USER_ROLE_SUCCESS",
    ADD_USER_ROLE_FAIL: "ADD_USER_ROLE_FAIL",
    ADD_USER_ROLE_COMPLETE:"ADD_USER_ROLE_COMPLETE",

    GET_MODULES_START: "GET_MODULES_START",
    GET_MODULES_SUCCESS: "GET_MODULES_SUCCESS",
    GET_MODULES_FAIL: "GET_MODULES_FAIL",

    GET_USERS_START: "GET_USERS_START",
    GET_USERS_SUCCESS: "GET_USERS_SUCCESS",
    GET_USERS_FAIL: "GET_USERS_FAIL",

    ADD_MANUFACTURER_START: "ADD_MANUFACTURER_START",
    ADD_MANUFACTURER_SUCCESS: "ADD_MANUFACTURER_SUCCESS",
    ADD_MANUFACTURER_FAIL: "ADD_MANUFACTURER_FAIL",
    ADD_MANUFACTURER_COMPLETE:"ADD_MANUFACTURER_COMPLETE",

    GET_MANUFACTURERS_START: "GET_MANUFACTURERS_START",
    GET_MANUFACTURERS_SUCCESS: "GET_MANUFACTURERS_SUCCESS",
    GET_MANUFACTURERS_FAIL: "GET_MANUFACTURERS_FAIL",

    GET_BRANDS_START: "GET_BRANDS_START",
    GET_BRANDS_SUCCESS: "GET_BRANDS_SUCCESS",
    GET_BRANDS_FAIL: "GET_BRANDS_FAIL",

    ADD_BRANDS_START: "ADD_BRANDS_START",
    ADD_BRANDS_SUCCESS: "ADD_BRANDS_SUCCESS",
    ADD_BRANDS_FAIL: "ADD_BRANDS_FAIL",
    ADD_BRANDS_COMPLETE:"ADD_BRANDS_COMPLETE",

    GET_UNITS_START: "GET_UNITS_START",
    GET_UNITS_SUCCESS: "GET_UNITS_SUCCESS",
    GET_UNITS_FAIL: "GET_UNITS_FAIL",

    ADD_UNITS_START: "ADD_UNITS_START",
    ADD_UNITS_SUCCESS: "ADD_UNITS_SUCCESS",
    ADD_UNITS_FAIL: "ADD_UNITS_FAIL",
    ADD_UNITS_COMPLETE:"ADD_UNITS_COMPLETE",

    GET_MANUFACTURER_DETAIL_START: "GET_MANUFACTURER_DETAIL_START",
    GET_MANUFACTURER_DETAIL_SUCCESS: "GET_MANUFACTURER_DETAIL_SUCCESS",
    GET_MANUFACTURER_DETAIL_FAIL: "GET_MANUFACTURER_DETAIL_FAIL",

    UPDATE_MANUFACTURER_START: "UPDATE_MANUFACTURER_START",
    UPDATE_MANUFACTURER_SUCCESS: "UPDATE_MANUFACTURER_SUCCESS",
    UPDATE_MANUFACTURER_FAIL: "UPDATE_MANUFACTURER_FAIL",
    UPDATE_MANUFACTURER_COMPLETE:"UPDATE_MANUFACTURER_COMPLETE",

    DELETE_MANUFACTURER_START: "DELETE_MANUFACTURER_START",
    DELETE_MANUFACTURER_SUCCESS: "DELETE_MANUFACTURER_SUCCESS",
    DELETE_MANUFACTURER_FAIL: "DELETE_MANUFACTURER_FAIL",
    DELETE_MANUFACTURER_COMPLETE:"DELETE_MANUFACTURER_COMPLETE",

    GET_BRAND_DETAIL_START: "GET_BRAND_DETAIL_START",
    GET_BRAND_DETAIL_SUCCESS: "GET_BRAND_DETAIL_SUCCESS",
    GET_BRAND_DETAIL_FAIL: "GET_BRAND_DETAIL_FAIL",

    UPDATE_BRAND_START: "UPDATE_BRAND_START",
    UPDATE_BRAND_SUCCESS: "UPDATE_BRAND_SUCCESS",
    UPDATE_BRAND_FAIL: "UPDATE_BRAND_FAIL",
    UPDATE_BRAND_COMPLETE:"UPDATE_BRAND_COMPLETE",

    DELETE_BRAND_START: "DELETE_BRAND_START",
    DELETE_BRAND_SUCCESS: "DELETE_BRAND_SUCCESS",
    DELETE_BRAND_FAIL: "DELETE_BRAND_FAIL",
    DELETE_BRAND_COMPLETE:"DELETE_BRAND_COMPLETE",

    GET_UNIT_DETAIL_START: "GET_UNIT_DETAIL_START",
    GET_UNIT_DETAIL_SUCCESS: "GET_UNIT_DETAIL_SUCCESS",
    GET_UNIT_DETAIL_FAIL: "GET_UNIT_DETAIL_FAIL",

    UPDATE_UNIT_START: "UPDATE_UNIT_START",
    UPDATE_UNIT_SUCCESS: "UPDATE_UNIT_SUCCESS",
    UPDATE_UNIT_FAIL: "UPDATE_UNIT_FAIL",
    UPDATE_UNIT_COMPLETE:"UPDATE_UNIT_COMPLETE",

    DELETE_UNIT_START: "DELETE_UNIT_START",
    DELETE_UNIT_SUCCESS: "DELETE_UNIT_SUCCESS",
    DELETE_UNIT_FAIL: "DELETE_UNIT_FAIL",
    DELETE_UNIT_COMPLETE:"DELETE_UNIT_COMPLETE",

    ADD_TAX_START: "ADD_TAX_START",
    ADD_TAX_SUCCESS: "ADD_TAX_SUCCESS",
    ADD_TAX_FAIL: "ADD_TAX_FAIL",
    ADD_TAX_COMPLETE:"ADD_TAX_COMPLETE",

    GET_TAXES_START: "GET_TAXES_START",
    GET_TAXES_SUCCESS: "GET_TAXES_SUCCESS",
    GET_TAXES_FAIL: "GET_TAXES_FAIL",

    GET_TAX_DETAIL_START: "GET_TAX_DETAIL_START",
    GET_TAX_DETAIL_SUCCESS: "GET_TAX_DETAIL_SUCCESS",
    GET_TAX_DETAIL_FAIL: "GET_TAX_DETAIL_FAIL",

    UPDATE_TAX_START: "UPDATE_TAX_START",
    UPDATE_TAX_SUCCESS: "UPDATE_TAX_SUCCESS",
    UPDATE_TAX_FAIL: "UPDATE_TAX_FAIL",
    UPDATE_TAX_COMPLETE:"UPDATE_TAX_COMPLETE",

    DELETE_TAX_START: "DELETE_TAX_START",
    DELETE_TAX_SUCCESS: "DELETE_UNIT_SUCCESS",
    DELETE_TAX_FAIL: "DELETE_TAX_FAIL",
    DELETE_TAX_COMPLETE:"DELETE_TAX_COMPLETE",

    ADD_PRODUCT_START: "ADD_PRODUCT_START",
    ADD_PRODUCT_SUCCESS: "ADD_PRODUCT_SUCCESS",
    ADD_PRODUCT_FAIL: "ADD_PRODUCT_FAIL",
    ADD_PRODUCT_COMPLETE:"ADD_PRODUCT_COMPLETE",

    GET_PRODUCTS_START: "GET_PRODUCTS_START",
    GET_PRODUCTS_SUCCESS: "GET_PRODUCTS_SUCCESS",
    GET_PRODUCTS_FAIL: "GET_PRODUCTS_FAIL",

    GET_PRODUCT_DETAIL_START: "GET_PRODUCT_DETAIL_START",
    GET_PRODUCT_DETAIL_SUCCESS: "GET_PRODUCT_DETAIL_SUCCESS",
    GET_PRODUCT_DETAIL_FAIL: "GET_PRODUCT_DETAIL_FAIL",

    UPDATE_PRODUCT_START: "UPDATE_PRODUCT_START",
    UPDATE_PRODUCT_SUCCESS: "UPDATE_PRODUCT_SUCCESS",
    UPDATE_PRODUCT_FAIL: "UPDATE_PRODUCT_FAIL",
    UPDATE_PRODUCT_COMPLETE:"UPDATE_PRODUCT_COMPLETE",

    DELETE_PRODUCT_START: "DELETE_PRODUCT_START",
    DELETE_PRODUCT_SUCCESS: "DELETE_PRODUCT_SUCCESS",
    DELETE_PRODUCT_FAIL: "DELETE_PRODUCT_FAIL",
    DELETE_PRODUCT_COMPLETE:"DELETE_PRODUCT_COMPLETE",

    ADD_PRODUCT_GROUP_START: "ADD_PRODUCT_GROUP_START",
    ADD_PRODUCT_GROUP_SUCCESS: "ADD_PRODUCT_GROUP_SUCCESS",
    ADD_PRODUCT_GROUP_FAIL: "ADD_PRODUCT_GROUP_FAIL",
    ADD_PRODUCT_GROUP_COMPLETE:"ADD_PRODUCT_GROUP_COMPLETE",

    GET_PRODUCT_GROUPS_START: "GET_PRODUCT_GROUPS_START",
    GET_PRODUCT_GROUPS_SUCCESS: "GET_PRODUCT_GROUPS_SUCCESS",
    GET_PRODUCT_GROUPS_FAIL: "GET_PRODUCT_GROUPS_FAIL",

    GET_PRODUCT_GROUP_DETAIL_START: "GET_PRODUCT_GROUP_DETAIL_START",
    GET_PRODUCT_GROUP_DETAIL_SUCCESS: "GET_PRODUCT_GROUP_DETAIL_SUCCESS",
    GET_PRODUCT_GROUP_DETAIL_FAIL: "GET_PRODUCT_GROUP_DETAIL_FAIL",

    UPDATE_PRODUCT_GROUP_START: "UPDATE_PRODUCT_GROUP_START",
    UPDATE_PRODUCT_GROUP_SUCCESS: "UPDATE_PRODUCT_GROUP_SUCCESS",
    UPDATE_PRODUCT_GROUP_FAIL: "UPDATE_PRODUCT_GROUP_FAIL",
    UPDATE_PRODUCT_GROUP_COMPLETE:"UPDATE_PRODUCT_GROUP_COMPLETE",

    DELETE_PRODUCT_GROUP_START: "DELETE_PRODUCT_GROUP_START",
    DELETE_PRODUCT_GROUP_SUCCESS: "DELETE_PRODUCT_GROUP_SUCCESS",
    DELETE_PRODUCT_GROUP_FAIL: "DELETE_PRODUCT_GROUP_FAIL",
    DELETE_PRODUCT_GROUP_COMPLETE:"DELETE_PRODUCT_GROUP_COMPLETE",

    ADD_PRICE_LIST_START: "ADD_PRICE_LIST_START",
    ADD_PRICE_LIST_SUCCESS: "ADD_PRICE_LIST_SUCCESS",
    ADD_PRICE_LIST_FAIL: "ADD_PRICE_LIST_FAIL",
    ADD_PRICE_LIST_COMPLETE:"ADD_PRICE_LIST_COMPLETE",

    GET_PRICE_LISTS_START: "GET_PRICE_LISTS_START",
    GET_PRICE_LISTS_SUCCESS: "GET_PRICE_LISTS_SUCCESS",
    GET_PRICE_LISTS_FAIL: "GET_PRICE_LISTS_FAIL",

    GET_PRICE_LIST_DETAIL_START: "GET_PRICE_LIST_DETAIL_START",
    GET_PRICE_LIST_DETAIL_SUCCESS: "GET_PRICE_LIST_DETAIL_SUCCESS",
    GET_PRICE_LIST_DETAIL_FAIL: "GET_PRICE_LIST_DETAIL_FAIL",

    UPDATE_PRICE_LIST_START: "UPDATE_PRICE_LIST_START",
    UPDATE_PRICE_LIST_SUCCESS: "UPDATE_PRICE_LIST_SUCCESS",
    UPDATE_PRICE_LIST_FAIL: "UPDATE_PRICE_LIST_FAIL",
    UPDATE_PRICE_LIST_COMPLETE:"UPDATE_PRICE_LIST_COMPLETE",

    DELETE_PRICE_LIST_START: "DELETE_PRICE_LIST_START",
    DELETE_PRICE_LIST_SUCCESS: "DELETE_PRICE_LIST_SUCCESS",
    DELETE_PRICE_LIST_FAIL: "DELETE_PRICE_LIST_FAIL",
    DELETE_PRICE_LIST_COMPLETE:"DELETE_PRICE_LIST_COMPLETE",

    ADD_INVENTORY_ADJUSTMENT_START: "ADD_INVENTORY_ADJUSTMENT_START",
    ADD_INVENTORY_ADJUSTMENT_SUCCESS: "ADD_INVENTORY_ADJUSTMENT_SUCCESS",
    ADD_INVENTORY_ADJUSTMENT_FAIL: "ADD_INVENTORY_ADJUSTMENT_FAIL",
    ADD_INVENTORY_ADJUSTMENT_COMPLETE:"ADD_INVENTORY_ADJUSTMENT_COMPLETE",

    GET_INVENTORY_ADJUSTMENTS_START: "GET_INVENTORY_ADJUSTMENTS_START",
    GET_INVENTORY_ADJUSTMENTS_SUCCESS: "GET_INVENTORY_ADJUSTMENTS_SUCCESS",
    GET_INVENTORY_ADJUSTMENTS_FAIL: "GET_INVENTORY_ADJUSTMENTS_FAIL",

    GET_INVENTORY_ADJUSTMENT_DETAIL_START: "GET_INVENTORY_ADJUSTMENT_DETAIL_START",
    GET_INVENTORY_ADJUSTMENT_DETAIL_SUCCESS: "GET_INVENTORY_ADJUSTMENT_DETAIL_SUCCESS",
    GET_INVENTORY_ADJUSTMENT_DETAIL_FAIL: "GET_INVENTORY_ADJUSTMENT_DETAIL_FAIL",

    UPDATE_INVENTORY_ADJUSTMENT_START: "UPDATE_INVENTORY_ADJUSTMENT_START",
    UPDATE_INVENTORY_ADJUSTMENT_SUCCESS: "UPDATE_INVENTORY_ADJUSTMENT_SUCCESS",
    UPDATE_INVENTORY_ADJUSTMENT_FAIL: "UPDATE_INVENTORY_ADJUSTMENT_FAIL",
    UPDATE_INVENTORY_ADJUSTMENT_COMPLETE:"UPDATE_INVENTORY_ADJUSTMENT_COMPLETE",

    DELETE_INVENTORY_ADJUSTMENT_START: "DELETE_INVENTORY_ADJUSTMENT_START",
    DELETE_INVENTORY_ADJUSTMENT_SUCCESS: "DELETE_INVENTORY_ADJUSTMENT_SUCCESS",
    DELETE_INVENTORY_ADJUSTMENT_FAIL: "DELETE_INVENTORY_ADJUSTMENT_FAIL",
    DELETE_INVENTORY_ADJUSTMENT_COMPLETE:"DELETE_INVENTORY_ADJUSTMENT_COMPLETE",

    ADD_PRODUCT_CATEGORY_START: "ADD_PRODUCT_CATEGORY_START",
    ADD_PRODUCT_CATEGORY_SUCCESS: "ADD_PRODUCT_CATEGORY_SUCCESS",
    ADD_PRODUCT_CATEGORY_FAIL: "ADD_PRODUCT_CATEGORY_FAIL",
    ADD_PRODUCT_CATEGORY_COMPLETE:"ADD_PRODUCT_CATEGORY_COMPLETE",

    GET_PRODUCT_CATEGORIES_START: "GET_PRODUCT_CATEGORIES_START",
    GET_PRODUCT_CATEGORIES_SUCCESS: "GET_PRODUCT_CATEGORIES_SUCCESS",
    GET_PRODUCT_CATEGORIES_FAIL: "GET_PRODUCT_CATEGORIES_FAIL",

    GET_PRODUCT_CATEGORY_DETAIL_START: "GET_PRODUCT_CATEGORY_DETAIL_START",
    GET_PRODUCT_CATEGORY_DETAIL_SUCCESS: "GET_PRODUCT_CATEGORY_DETAIL_SUCCESS",
    GET_PRODUCT_CATEGORY_DETAIL_FAIL: "GET_PRODUCT_CATEGORY_DETAIL_FAIL",

    UPDATE_PRODUCT_CATEGORY_START: "UPDATE_PRODUCT_CATEGORY_START",
    UPDATE_PRODUCT_CATEGORY_SUCCESS: "UPDATE_PRODUCT_CATEGORY_SUCCESS",
    UPDATE_PRODUCT_CATEGORY_FAIL: "UPDATE_PRODUCT_CATEGORY_FAIL",
    UPDATE_PRODUCT_CATEGORY_COMPLETE:"UPDATE_PRODUCT_CATEGORY_COMPLETE",

    DELETE_PRODUCT_CATEGORY_START: "DELETE_PRODUCT_CATEGORY_START",
    DELETE_PRODUCT_CATEGORY_SUCCESS: "DELETE_PRODUCT_CATEGORY_SUCCESS",
    DELETE_PRODUCT_CATEGORY_FAIL: "DELETE_PRODUCT_CATEGORY_FAIL",
    DELETE_PRODUCT_CATEGORY_COMPLETE:"DELETE_PRODUCT_CATEGORY_COMPLETE"

}
