/* eslint-disable react-hooks/rules-of-hooks */
import { NextPage } from "next";
import { useGetSavingsQuery } from "@/features/savings/savingsApiSlice";
import { useGetSpendingQuery } from "@/features/spending/spendingApiSlice";
const savings: NextPage = () => {
  const {
    data: savingData,
    isError: savingError,
    isLoading: savingIsLoading,
  } = useGetSavingsQuery("");
  const {
    data: spendingData,
    isError: spendingError,
    isLoading: spendingIsLoading,
  } = useGetSpendingQuery("");

  console.log(spendingData, savingData);
  return <div>Savings</div>;
};

export default savings;
