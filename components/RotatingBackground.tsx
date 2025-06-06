

import Image from "next/image";

export default function RotatingBackground() {
  return (
    <div className="fixed inset-0 -z-10 w-full h-full overflow-hidden pointer-events-none">
      {/* Left Big Shape */}
      <div className="shape absolute top-[-200px] left-[-250px] w-[1200px] h-[1200px] animate-spin-slower ">
        <Image
          src="/banner-shape-1.png"
          alt="Left Gradient"
          fill
          className="object-contain"
          priority
        />
      </div>

      {/* Right Big Shape */}
      <div className="shape absolute top-[-100px] right-[-200px] w-[1200px] h-[1200px] animate-spin-slower opacity-60  md:opacity-100 md:block">
        <Image
          src="/banner-shape-1.png"
          alt="Right Gradient"
          fill
          className="object-contain"
          priority
        />
      </div>
    </div>
  );
}
