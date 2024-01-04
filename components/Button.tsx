import Image from "next/image";
import React from "react";
interface btnProp {
  type: "button" | "submit";
  icons?: string;
  title: string;
  varient: string;
  full?: boolean;
}

const Button = ({ title, icons, type, varient , full}: btnProp) => {
  return (
    <button type={type} className={`flexCenter gap-3 border rounded-full cursor-pointer ${varient} ${full && 'w-full'}`}>
      {icons && <Image src={icons} alt={title}  width={24} height={24}/>}
      <label className="bold-16 whitespace-nowrap cursor-pointer">{title}</label>
    </button>
  );
};

export default Button;
