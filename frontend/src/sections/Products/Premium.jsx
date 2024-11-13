import ProductCard from '../../components/ProductCard';
import { useGetProductsQuery } from '../../slices/productsApiSlice';
import Loader from '../../components/Loader';
import Message from '../../components/Message';

const Premium = () => {
  const { data: products, isLoading, error } = useGetProductsQuery();

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>
          {error?.data.message || error.error}
        </Message>
      ) : (
        <div className="flex flex-col px-4 md:px-8 lg:px-16">
          <h1 className="text-4xl font-bebas font-bold mb-8 mt-16 text-left sm:text-left">Shop by Category</h1>

          <div className="flex flex-wrap justify-around gap-2 space-x-0 sm:space-x-8 mb-10">
            <button className="text-2xl font-bebas text-gray-500">Protein</button>
            <button className="text-2xl font-bebas text-gray-500">Pre-Workout</button>
            <button className="text-2xl font-bebas text-gray-500">Vitamins & Wellness</button>
            <button className="text-2xl font-bebas text-gray-500">Healthy Weight</button>
            <button className="text-2xl font-bebas text-gray-500">Clothing & Equipment</button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="h-[100%] w-full bg-black flex flex-col justify-between">
              <h2 className="text-white pl-3 pt-3 font-sans">75 products</h2>
              <h1 className="text-center text-white font-bangers text-[80px] font-bold px-1">Protein</h1>
              <h2 className="text-center text-2xl underline pb-3 font-bangers text-blue-500">Shop all protein</h2>
            </div>
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Premium;
