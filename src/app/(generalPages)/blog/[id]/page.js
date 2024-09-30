"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import parse from "html-react-parser";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";


export default function BlogDetails({ params }) {
    const { id } = params; // Extract the `id` from `params`
    const [dynamicData, setDynamicData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (id) {
            const getData = async () => {
                try {
                    setLoading(true);
                    const response = await axios.post(
                        "https://api.blog.coderzhunt.com/Blogs/getSingleblog",
                        { blogId: id, apiKey: "amqnwb@1019" }
                    );
                    setDynamicData(response.data?.result);
                    setLoading(false);
                } catch (error) {
                    console.error("Error fetching blog data:", error);
                    setLoading(false);
                }
            };
            getData();
        }
    }, [id]);

    console.log(dynamicData)
    return (
        <>
<section className="py-10">
  <div className="container mx-auto px-4">
    <div className="flex flex-wrap">
      <div className="w-full">
        <div className="bg-white shadow-lg rounded-lg p-6">
          <div className="mb-6">
            <figure className="overflow-hidden rounded-lg">
              {/* Display skeleton while loading */}
              {loading ? (
                <Skeleton className="h-96" />
              ) : (
                <img src={dynamicData?.image} alt="" className="w-full h-auto object-cover" />
              )}
            </figure>
          </div>
          <div className="space-y-4">
            <ul className="flex space-x-4 mb-4 text-gray-600 text-sm">
              <li>
                {loading ? (
                  <Skeleton className="w-24" />
                ) : (
                  dynamicData?.createdBy?.firstName + " " + dynamicData?.createdBy?.lastName
                )}
              </li>
              <li>
                {loading ? (
                  <Skeleton className="w-24" />
                ) : (
                  new Date(dynamicData?.updatedAt).toDateString()
                )}
              </li>
            </ul>
            <h1 className="text-3xl font-bold">
              {loading ? <Skeleton className="w-72" /> : dynamicData?.title}
            </h1>
            <p className="text-gray-700">
              {loading ? (
                <Skeleton count={3} />
              ) : dynamicData?.shortDescription ? (
                dynamicData?.shortDescription
              ) : (
                "Description"
              )}
            </p>
            <div>
              {loading ? (
                <Skeleton count={5} />
              ) : (
                dynamicData && parse(`${dynamicData?.description}`)
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

        </>
    )
}
