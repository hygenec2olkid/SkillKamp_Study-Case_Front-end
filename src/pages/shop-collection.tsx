import Carousel from "../components/Carousel";
import { Meta } from "@/layouts/Meta";
import { Main } from "@/templates/Main";
import ProductsAPI from "@/api/products";
import { useEffect, useState } from "react";
import { APIResponse } from "@/api/request";
import Link from "next/link";
import { useRouter } from "next/router";
import { Plus } from "react-feather";

const Shop = () => {
  const [data, setData] = useState<APIResponse | undefined>(undefined);
  const router = useRouter();
  const [order, setOrder] = useState(0);
  useEffect(() => {
    const result = ProductsAPI.getAllProductsAPI().then((res) => {
      setData(res);
    });
  }, []);
  return (
    <Main
      meta={
        <Meta
          title="Next.js Boilerplate Presentation"
          description="Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework."
        />
      }
    >
      <div className="Shop Collection">
        {data && (
          // JSON.stringify(
          //   data.detail.data.catalog.category.productsWithMetaData.list[0])
          <div>
            <header className="my-[50px] text-2xl flex justify-center tracking-wider">
              Shop Collection
            </header>
            <div className="flex">
              <div className="demo-filter w-[240px] font-light ">
                <div className="text-2xl border-b-[1px] border-primary-main1 pb-1 ml-9 mb-5">
                  Filter by
                </div>
                <div className="text-xl border-b-[1px] border-primary-main1 pb-1 ml-9 mb-5 flex justify-between">
                  Collection
                  <Plus size={18} />
                </div>
                <div className="text-xl border-b-[1px] border-primary-main1 pb-1 ml-9 mb-5 flex justify-between">
                  Price
                  <Plus size={18} />
                </div>
                <div className="text-xl border-b-[1px] border-primary-main1 pb-1 ml-9 mb-5 flex justify-between">
                  Color
                  <Plus size={18} />
                </div>
                <div className="text-xl border-b-[1px] border-primary-main1 pb-1 ml-9 mb-5 flex justify-between">
                  Size
                  <Plus size={18} />
                </div>
                <div></div>
              </div>
              <div className="grid grid-cols-3 grow justify-items-center gap-5 mb-8">
                {data.detail?.data.catalog.category.productsWithMetaData.list.map(
                  (product) => (
                    <div key={product.id}>
                      {product.media.length > 0 && (
                        <div className="relative">
                          <Link href={`/product-page/${product.sku}`}>
                            <img
                              key={product.media[0].index}
                              src={product.media[0].url}
                              width={368}
                              height={368}
                              className="cursor-pointer"
                            />
                          </Link>
                          {product.price > product.discountedPrice ? (
                            <div>
                              <div className="absolute top-0 bg-primary-main3 text-primary-main2 w-16 text-center font-light">
                                SALE
                              </div>
                              <div className="text-center font-light text-sm cursor-pointer">
                                {product.name}
                                <div className="h-3"></div>
                                <div className="h-3 border-t-[1px] w-5 border-primary-main1  mx-auto"></div>
                                <div className="relative">
                                  <div className="h-[1px] w-10 bg-primary-main1 absolute inset-0 top-[50%] left-[38%]"></div>
                                  {product.price}₺ {product.discountedPrice}₺
                                </div>
                                <div className="h-3"></div>
                              </div>
                              <Link
                                className="text-primary-main1 hover:border-0"
                                href={`/product-page/${product.sku}`}
                              >
                                <button className="text-center font-light text-sm border-[1px] w-full border-primary-main1 py-2 hover:text-primary-main4">
                                  Add to Cart
                                </button>
                              </Link>
                            </div>
                          ) : (
                            <div>
                              {product.ribbon && (
                                <div className="absolute top-0 bg-primary-main3 text-primary-main2 w-[110px] h-7 text-center font-light">
                                  {product.ribbon}
                                </div>
                              )}
                              <div className="text-center font-light text-sm cursor-pointer">
                                {product.name}
                                <div className="h-3"></div>
                                <div className="h-3 border-t-[1px] w-5 border-primary-main1 mx-auto"></div>
                                {product.price}₺<div className="h-3"></div>
                                <Link
                                  className="text-primary-main1 hover:border-0"
                                  href={`/product-page/${product.sku}`}
                                >
                                  <button className="text-center font-light text-sm border-[1px] w-full border-primary-main1 py-2 hover:text-primary-main4">
                                    Add to Cart
                                  </button>
                                </Link>
                              </div>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </Main>
  );
};

export default Shop;
// href={`/product-page/${product.name.replaceAll(" ", "-")}-${parseInt(product.sku, 10)}`}
