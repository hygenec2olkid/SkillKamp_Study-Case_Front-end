import { useRouter } from "next/router";
import Carousel from "../components/Carousel";
import { Meta } from "@/layouts/Meta";
import { Main } from "@/templates/Main";
import ProductsAPI from "@/api/products";
import { useEffect, useState } from "react";
import { APIResponse } from "@/api/request";
import Link from "next/link";

const Index = () => {
  const router = useRouter();
  const images = [
    `${router.basePath}/assets/images/Banner1.png`,
    `${router.basePath}/assets/images/Banner2.png`,
    `${router.basePath}/assets/images/Banner3.png`,
  ];

  const [data, setData] = useState<APIResponse | undefined | never[]>(
    undefined
  );
  useEffect(() => {
    ProductsAPI.getNewArrivalsAPI().then((res) => setData(res));
  }, []);

  return (
    <Main meta={<Meta title="Happy kid" description="Happy kid description" />}>
      <Carousel images={images} autoSlide={true} />

      <div className="New Arrivals mt-[80px]">
        <header className="text-2xl font-light flex justify-center h-16">
          New Arrivals
        </header>
        <div className="flex w-full justify-around">
          {data &&
            data.detail?.data.catalog.category.productsWithMetaData.list
              .slice(0, 4)
              .map((product) => (
                <div className="relative" key={product.id}>
                  {
                    <Link href={`/product-page/${product.sku}`}>
                      <img
                        src={product.media[0].url}
                        width={321}
                        height={321}
                        className="cursor-pointer"
                      />
                    </Link>
                  }

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
                          <div className="h-[1px] w-10 bg-primary-main1 absolute inset-0 top-[50%] left-[36%]"></div>
                          {product.price}₺ {product.discountedPrice}₺
                        </div>
                        <div className="h-3"></div>
                      </div>
                      <Link
                        href={`/product-page/${product.sku}`}
                        className="text-primary-main1 hover:border-0"
                      >
                        <button className=" text-center font-light text-sm border-[1px] w-full border-primary-main1 py-2 hover:text-primary-main4">
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
                          href={`/product-page/${product.sku}`}
                          className="text-primary-main1 hover:border-0"
                        >
                          <button className="border-[1px] w-full border-primary-main1 py-2 hover:text-primary-main4">
                            Add to Cart
                          </button>
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              ))}
        </div>

        <Link
          className="border-none mt-[80px] mb-4 mx-auto bg-primary-main1 text-primary-main2 w-[150px] h-10 font-light flex justify-center items-center text-sm hover:bg-primary-main3"
          href="/shop-collection/"
        >
          Shop All
        </Link>
      </div>
    </Main>
  );
};

export default Index;
