import React from 'react';
import { useParams } from 'react-router-dom';
import DetailBanner from './DetailBanner/DetailBanner';

export default function Detail() {
  const { mediaType, id } = useParams();
  return (
    <div className="bg-gray-900">
      <DetailBanner id={id} mediaType={mediaType} />
    </div>
  );
}
