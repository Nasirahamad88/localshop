import React from 'react';
import { createClient } from 'next-sanity';
import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import Image from 'next/image';


const client = createClient({
  projectId: 'k0ev8ln1',
  dataset: 'production',
  apiVersion: '2022-03-25',
  useCdn: true,
});
const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);

async function getProducts() {
  const res = await client.fetch(`*[_type == "product"]`);
  return res;
  
}

export default async function Shop() {
  const products = await getProducts();
  

  return (
    <section class="text-gray-600 body-font ">
    <div className="container px-5 py-24 mx-auto ">
    <div className="flex flex-wrap -m-4 ">
      {products.map((product) => (
        <div key={product._id} className="p-4 md:w-1/3 ">
          <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden bg-gray-200">
            {product.image && (
              <Image
                className="lg:h-48 md:h-36 w-full object-cover object-center"
                src={urlFor(product.image).url()}
                width={300}
                height={300}
                alt="product"
              />
            )}
            <div className="p-6">
              <h1 className="title-font text-lg font-medium text-gray-900 bold mb-3">
                {product.name}
              </h1>
              <h1 className='text-blue-500'>${product.price}</h1>
              <p className="leading-relaxed mb-3">
                {product.description}...
              </p>
              {/* Additional content */}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
  </section>
  );
}