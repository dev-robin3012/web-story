import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const WidgetCard = ({ widget }) => {
  const { featuredImage, title, author, createdAt, slug } = widget;

  return (
    <div className="bg-white p-3 rounded-md flex shadow-lg gap-3">
      <div className={`h-20 w-32 rounded-md relative overflow-hidden`}>
        <Image src={featuredImage.url} alt={title} unoptimized layout="fill" />
      </div>
      <div className="w-full flex flex-col tablet:justify-between">
        <h2 className="text-xl font-semibold line-clamp-2 hover:text-[#6B58FA] hover:drop-shadow-md transition-all delay-100">
          <Link href={`/story/${slug}`}>{title}</Link>
        </h2>
        <div className="flex justify-between items-center">
          <p>
            By <span className="font-medium">{author.name}</span>
          </p>
          <time className="text-sm">{moment(createdAt).fromNow()}</time>
        </div>
      </div>
    </div>
  );
};

export default WidgetCard;
