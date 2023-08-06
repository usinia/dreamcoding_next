import React from "react";

type Props = {
  params: {
    slug: string;
  };
};

export default function PantsPage({ params }: Props) {
  console.log("props", params);
  return <h1>{params.slug} 제품 설명 페이지</h1>;
}

export function generateStaticParams() {
  // dynamic route page 에서 특정 경로에 대해 먼저 렌더링 해두고 싶을 때 사용하는 함수
  const products = ["pants", "skirt"];
  return products.map((product) => ({
    slug: product,
  }));
}
