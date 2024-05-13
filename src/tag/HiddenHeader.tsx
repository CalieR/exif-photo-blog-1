import { Photo, photoQuantityText } from '@/photo';
import PhotoSetHeader from '@/photo/PhotoSetHeader';
import HiddenTag from './HiddenTag';

export default function HiddenHeader({
  photos,
  selectedPhoto,
  count,
}: {
  photos: Photo[]
  selectedPhoto?: Photo
  count: number
}) {
  return (
    <PhotoSetHeader
      key="HiddenHeader"
      entity={<HiddenTag contrast="high" />}
      entityDescription={photoQuantityText(count, false)}
      photos={photos}
      selectedPhoto={selectedPhoto}
    />
  );
}
