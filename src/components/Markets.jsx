import useAxios from "../hooks/useAxios";
import Coin from "./Coin";
import Skeleton from "./Skeleton";

const Markets = () => {
  const { response, loading } = useAxios(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=10&page=1&sparkline=false"
  );

  if (loading) {
    return (
      <div className="wrapper-container mt-8">
        <Skeleton className="h-8 w-32" />
        <Skeleton className="h-8 w-full mt-2" />
        <Skeleton className="h-8 w-full mt-2" />
        <Skeleton className="h-8 w-full mt-2" />
        <Skeleton className="h-8 w-full mt-2" />
        <Skeleton className="h-8 w-full mt-2" />
        <Skeleton className="h-8 w-full mt-2" />
        <Skeleton className="h-8 w-full mt-2" />
      </div>
    );
  }

  return (
    <section className="mt-8">
      <h1 className="text-2xl mb-2">Markets</h1>
      {response && response.map((coin) => <Coin key={coin.id} coin={coin} />)}
    </section>
  );
};

export default Markets;
