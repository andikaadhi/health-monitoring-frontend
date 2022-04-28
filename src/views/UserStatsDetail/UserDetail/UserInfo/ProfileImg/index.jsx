import React from 'react';
import { ImageContainer, Image, AspectRatioArea } from './styles';

function ProfileImg() {
  return (
    <ImageContainer>
      <AspectRatioArea>
        <Image src="/no-profile.png" alt="Profile" />
      </AspectRatioArea>
    </ImageContainer>
  );
}

export default ProfileImg;
