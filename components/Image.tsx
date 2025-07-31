import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  layout?: "fill" | "fixed" | "intrinsic" | "responsive";
  objectFit?: "contain" | "cover" | "fill" | "none" | "scale-down";
  className?: string;
};

const ImageCom = ({ src, width, height, alt, layout, objectFit }: Props) => {
  // const imageLoader = () => {
  //   return `${src}`;
  // };

  return (
    <Image
      // loader={imageLoader}
      src={src}
      width={width}
      height={height}
      alt={alt}
      layout={layout}
      objectFit={objectFit}
    />
  );
};

export default ImageCom;
