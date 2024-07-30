import { Rate } from "antd";
import React from "react";

export default function StarRating({ rating }) {
  const star = parseFloat(rating);
  // console.log(typeof rating); //str
  // console.log(star); //num
  return <>{rating && <Rate defaultValue={star} allowHalf />}</>;
}
