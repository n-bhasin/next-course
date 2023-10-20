import React from "react";

interface Props {
  params: { id: string; photoId: string };
}

const Photos = ({ params: { id, photoId } }: Props) => {
  return (
    <div>
      Photos {id}, {photoId}
    </div>
  );
};

export default Photos;
