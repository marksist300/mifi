/* eslint-disable react-hooks/rules-of-hooks */
import { NextPage } from "next";
import { useGetStocksQuery } from "@/features/stocks/stocksApiSlice";

const stocks: NextPage = () => {
  const { data, error, isLoading } = useGetStocksQuery("");
  console.log(data);
  return <div>Stocks</div>;
};

export default stocks;
