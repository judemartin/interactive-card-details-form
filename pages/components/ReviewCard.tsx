import React from "react";

function BG(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="327"
      height="360"
      viewBox="0 0 327 360"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_0_1534)">
        <rect
          width="327"
          height="360"
          rx="15"
          fill="url(#paint0_radial_0_1534)"
        />
      </g>
      <defs>
        <radialGradient
          id="paint0_radial_0_1534"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(163.5) rotate(90) scale(356.26 323.603)"
        >
          <stop stop-color="#232A34" />
          <stop offset="1" stop-color="#181E27" />
        </radialGradient>
        <clipPath id="clip0_0_1534">
          <rect width="327" height="360" fill="white" />
        </clipPath>
        <clipPath id="clip1_0_1534">
          <rect
            width="279"
            height="45"
            fill="white"
            transform="translate(24 283)"
          />
        </clipPath>
        <clipPath id="clip2_0_1534">
          <rect
            width="42"
            height="42"
            fill="white"
            transform="translate(24 217)"
          />
        </clipPath>
        <clipPath id="clip3_0_1534">
          <rect
            width="42"
            height="42"
            fill="white"
            transform="translate(83 217)"
          />
        </clipPath>
        <clipPath id="clip4_0_1534">
          <rect
            width="42"
            height="42"
            fill="white"
            transform="translate(143 217)"
          />
        </clipPath>
        <clipPath id="clip5_0_1534">
          <rect
            width="42"
            height="42"
            fill="white"
            transform="translate(203 217)"
          />
        </clipPath>
        <clipPath id="clip6_0_1534">
          <rect
            width="42"
            height="42"
            fill="white"
            transform="translate(263 217)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

function Star(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="20" cy="20" r="20" fill="#262E38" />
      <path
        d="M20.8891 13.6916L22.5473 17.0511C22.641 17.2409 22.822 17.3724 23.0315 17.4028L26.7388 17.9416C26.9811 17.9768 27.1824 18.1465 27.258 18.3794C27.3336 18.6122 27.2704 18.8678 27.095 19.0386L24.4119 21.6535C24.2602 21.8014 24.1914 22.0142 24.2268 22.2225L24.8601 25.9151C24.9014 26.1563 24.8022 26.4001 24.6042 26.5439C24.4062 26.6877 24.1437 26.7067 23.9271 26.5928L20.6107 24.8491C20.4233 24.7507 20.1995 24.7507 20.0121 24.8491L16.6957 26.5928C16.4791 26.7067 16.2166 26.6877 16.0186 26.5439C15.8206 26.4001 15.7214 26.1563 15.7627 25.9151L16.396 22.2225C16.4318 22.0139 16.3626 21.8011 16.2109 21.6535L13.5278 19.0386C13.3524 18.8678 13.2892 18.6122 13.3648 18.3794C13.4404 18.1465 13.6417 17.9768 13.884 17.9416L17.5913 17.4028C17.8008 17.3724 17.9818 17.2409 18.0755 17.0511L19.7337 13.6916C19.9716 13.2139 20.6531 13.2139 20.8891 13.6916Z"
        fill="#FC7614"
      />
    </svg>
  );
}

function Circle(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="42"
      height="42"
      viewBox="0 0 42 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="21" cy="21" r="21" fill="#262E38" />
    </svg>
  );
}
function ReviewCard() {
  return (
    <div className="relative mx-auto mt-[155px] flex-col">
      <BG className="absolute" />
      <Star className="absolute top-5 left-6 h-10 w-10" />
      <h2 className="absolute top-[80px] mx-6 font-overpass text-2xl font-bold text-white">
        How did we do?
      </h2>
      <h3 className="absolute top-[125px] mx-6 font-overpass text-sm font-normal text-[#969FAD]">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </h3>
      <div className="absolute top-[217px] mx-6 flex space-x-[18px] ">
        <div className="relative">
          <Circle className="absolute" />
          <h3 className="absolute left-[18px] top-3 font-overpass text-sm text-[#969FAD]">
            1
          </h3>
        </div>
        <div className="relative">
          <Circle className="absolute" />
          <h3 className="absolute left-4 top-3 font-overpass text-sm text-[#969FAD]">
            2
          </h3>
        </div>
        <div className="relative">
          <Circle className="absolute" />
          <h3 className="absolute left-4 top-3 font-overpass text-sm text-[#969FAD]">
            3
          </h3>
        </div>
        <div className="relative">
          <Circle className="absolute" />
          <h3 className="absolute left-4 top-3 font-overpass text-sm text-[#969FAD]">
            4
          </h3>
        </div>
        <div className="relative">
          <Circle className="absolute" />
          <h3 className="absolute left-4 top-3 font-overpass text-sm text-[#969FAD]">
            5
          </h3>
        </div>
      </div>
      <button className="absolute top-[285px] mx-6 h-[45px] w-[279px] rounded-3xl bg-[#FC7614] font-overpass text-sm font-bold uppercase tracking-wider text-white">
        Submit
      </button>
    </div>
  );
}

export default ReviewCard;
