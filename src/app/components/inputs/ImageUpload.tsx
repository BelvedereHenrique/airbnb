'use client';

import { CldUploadWidget } from 'next-cloudinary';
import Image from 'next/image';
import { useCallback } from 'react';
import { TbPhotoPlus } from 'react-icons/tb';

declare global {
  let cloudinary: any;
}

interface ImageUploadProps {
  onChange: (imageSrc: string) => void;
  value: string;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ onChange, value }) => {
  const handleUpload = useCallback(
    (image: any) => {
      onChange(image.info.secure_url);
    },
    [onChange],
  );

  return (
    <div>
      <CldUploadWidget
        onUpload={handleUpload}
        uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET}
        options={{
          maxFiles: 1,
          sources: ['local'],
          resourceType: 'image',
          clientAllowedFormats: ['png', 'jpeg', 'jpg'],
        }}
      >
        {({ open }) => {
          return (
            <div
              onClick={() => open?.()}
              className='relative
              cursor-pointer
              hover:opacity-70
              transition
              border-2
              p-20
              border-neutral-300
              flex
              flex-col
              justify-center
              items-center
              gap-4
              text-neutral-600'
            >
              <TbPhotoPlus size={50} />
              <div className='font-semibold text-lg'>
                Click to upload an image
              </div>
              {value && (
                <div className='absolute inset-0 w-full h-full'>
                  <Image
                    alt={'Upload'}
                    fill
                    style={{ objectFit: 'cover' }}
                    src={value}
                  />
                </div>
              )}
            </div>
          );
        }}
      </CldUploadWidget>
    </div>
  );
};

export default ImageUpload;