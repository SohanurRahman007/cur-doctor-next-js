import { collectionNameObj, dbConnect } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import Image from "next/image";
import React from "react";

export default async function ServiceDetailsPage({ params }) {
  const p = params;
  const serviceCollection = await dbConnect(
    collectionNameObj.serviceCollection
  );
  const data = await serviceCollection.findOne({ _id: new ObjectId(p.id) });

  return (
    <>
      {/* Banner Section */}
      <section>
        <figure className="relative w-full">
          <Image
            src="/assets/images/checkout/checkout.png"
            height={200}
            width={1000}
            layout="responsive"
            alt="banner"
          />
          <div className="absolute inset-0  bg-opacity-60 flex items-center pl-10">
            <h3 className="text-white text-4xl font-bold">
              Service Details Page
            </h3>
          </div>
        </figure>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 px-4 py-10">
        {/* Left - Service Details */}
        <div className="md:col-span-8 bg-white rounded-lg shadow-md p-6 space-y-6">
          <div>
            <img
              src={data.img}
              alt={data.title}
              className="w-full h-[300px] object-cover rounded-lg"
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-orange-600 mb-2">
              {data.title}
            </h2>
            <p className="text-gray-600 leading-relaxed">{data.description}</p>
          </div>
        </div>

        {/* Right - Checkout Sidebar */}
        <div className="md:col-span-4 bg-gray-100 rounded-lg shadow-md p-6 space-y-6">
          <div className="space-y-2">
            <p className="text-lg font-medium text-gray-700">Service Price</p>
            <p className="text-2xl font-bold text-orange-600">${data.price}</p>
          </div>
          <button className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-lg font-semibold transition">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </>
  );
}
