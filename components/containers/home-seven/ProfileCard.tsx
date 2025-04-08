"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import one from "@/public/images/home-seven/one.png";

const ProfileCard = () => {
  const [isActive, setIsActive] = useState(0);
  return (
    <section className="section profile-showcase bg-blue-500">
    <div className="profile-showcase-wrapper">
      <div
        className={
          "profile-card w-full flex justify-center" +
          (isActive === 0 ? " profile-card-active" : "")
        }
        onClick={() => setIsActive(0)}
      >
        <div className="profile-thumb">
          <Image src={one} alt="Image" priority />
        </div>
        <div className="profile-content">
          <div className="profile-title">
            <h2 className="profile-title-text">
              <Link href="">Smash Boss</Link>
            </h2>
          </div>
          <div className="profile-description">
            <p>
              AI-powered inpainting algorithms seamlessly restore the beauty
              and completeness
            </p>
            <Link href="" className="profile-cta">
              <span className="profile-arrow"></span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};

export default ProfileCard;
