import React from "react";

import Endpoint from "../Endpoint";
import ProductTypesContainer from "./ProductTypesContainer";
import {
  transformItemData,
  transformAccountsData,
  itemCategories,
  accountsCategories,
} from "../../dataUtilities";

const Items = () => (
  <>
    <ProductTypesContainer productType="All accounts details">
      <Endpoint
        endpoint="accounts"
        categories={accountsCategories}
        description="Retrieve high-level information about all accounts."
        transformData={transformAccountsData}
      />
    </ProductTypesContainer>
  </>
);

Items.displayName = "Items";

export default Items;
