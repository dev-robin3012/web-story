import React from "react";
import getRelatedStories from "../services/getRelatedSories";

const WidgetPost = () => {
  getRelatedStories({
    slug: "why-you-shouldnt-always-use-usestate",
    categories: `"react", "javascript", "webdev"`,
  });

  return (
    <div className="bg-white p-5 rounded-md">
      <h2>THis is widget post</h2>
    </div>
  );
};

export default WidgetPost;
