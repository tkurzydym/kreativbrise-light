import Image from "next/image";
// Statischer Import, damit der basePath beim Export automatisch berücksichtigt wird
import logo from "@/assets/kreativbrise-logo.svg";

export default function Logo({
  size,
  className,
  priority,
}: {
  size: number;
  className?: string;
  priority?: boolean;
}) {
  return (
    <Image
      src={logo}
      alt="Kreativbrise Logo"
      width={size}
      height={size}
      className={className}
      priority={priority}
    />
  );
}
