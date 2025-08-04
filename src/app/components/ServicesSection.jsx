import { FaArrowCircleRight } from "react-icons/fa";
import { collectionNameObj, dbConnect } from "@/lib/dbConnect";
import Image from "next/image";
import React from "react";
import Link from "next/link";

export default async function ServicesSection() {
  const servicesCollection = await dbConnect(
    collectionNameObj.serviceCollection
  );
  const data = await servicesCollection.find({}).toArray();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 py-8">
      {data.map((item) => (
        <div key={item._id} className="card bg-base-100 shadow-md rounded-lg">
          <figure>
            <Image
              src={item.img}
              alt={item.title}
              height={214}
              width={320}
              className="w-full h-52 object-cover"
            />
          </figure>
          <div className="card-body">
            <div>
              <h2 className="card-title text-lg font-bold">
                {item.title}
                <div className="badge bg-orange-600 text-white">Service</div>
              </h2>
              <p className="text-sm text-gray-600 line-clamp-3">
                {item.description}
              </p>
            </div>
            <div className="flex justify-between items-center ">
              <p className=" font-semibold text-orange-600">
                Price: ${item.price}
              </p>
              <Link href={`/services/${item._id}`} className="text-orange-700">
                <FaArrowCircleRight />
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
