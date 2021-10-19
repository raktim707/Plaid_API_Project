import React, { useContext } from "react";

import Endpoint from "../Endpoint";
import Context from "../../Context";
import ProductTypesContainer from "./ProductTypesContainer";
import {
  transactionsCategories,
  authCategories,
  identityCategories,
  balanceCategories,
  investmentsCategories,
  paymentCategories,
  assetsCategories,
  transferCategories,
  transformAuthData,
  transformTransactionsData,
  transformBalanceData,
  transformInvestmentsData,
  transformIdentityData,
  transformPaymentData,
  transformAssetsData,
  transformTransferData,
} from "../../dataUtilities";

const Products = () => {
  const { products } = useContext(Context);
  return (
    <ProductTypesContainer productType="You can check your bank account and credit card details, transaction history and more here">
      <Endpoint
        endpoint="auth"
        name="Account and Routing number"
        categories={authCategories}
        description="Retrieve account and routing numbers for checking and savings accounts."
        transformData={transformAuthData}
      />
      <Endpoint
        endpoint="transactions"
        name="Transactions"
        categories={transactionsCategories}
        description="Retrieve latest transactions for credit and depository accounts."
        transformData={transformTransactionsData}
      />
      <Endpoint
        endpoint="identity"
        name="Identity"
        categories={identityCategories}
        description="Retrieve Identity information on file with the bank. Reduce
        fraud by comparing user-submitted data to validate identity."
        transformData={transformIdentityData}
      />
      {products.includes("assets") && (
        <Endpoint
          endpoint="assets"
          name="Assets"
          categories={assetsCategories}
          description="Create and retrieve assets information an asset report"
          transformData={transformAssetsData}
        />
      )}
      <Endpoint
        endpoint="balance"
        name="Balance"
        categories={balanceCategories}
        description="Check all your balances in real time."
        transformData={transformBalanceData}
      />
    </ProductTypesContainer>
  );
};

Products.displayName = "Products";

export default Products;
