// components/ServerImage.js
import Image from "next/image";

export default function ServerImage({ src, alt }) {
  return <Image src={src} alt={alt} fill   priority/>;
}
