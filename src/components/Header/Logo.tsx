import { ComponentProps } from "react";

export function Logo(props: ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="172"
      height="172"
      preserveAspectRatio="xMidYMid"
      viewBox="0 0 172 172"
      {...props}
    >
      <path
        fill="#02a9ff"
        fillRule="evenodd"
        d="M111.322 111.157V41.029c0-4.019-2.217-6.237-6.236-6.237H91.365c-4.019 0-6.237 2.218-6.237 6.237v33.304c0 .938 9.037 5.293 9.273 6.214 6.885 26.902 1.496 48.433-5.031 49.438 10.672.528 11.846 5.659 3.897 2.153 1.216-14.354 5.961-14.326 19.602-.528.117.119 2.797 5.741 2.964 5.741h32.217c4.019 0 6.236-2.217 6.236-6.236v-13.721c0-4.019-2.217-6.237-6.236-6.237z"
      ></path>
      <path
        fill="#fefefe"
        fillRule="evenodd"
        d="M54.365 34.792 18.331 137.351h27.996l6.098-17.74h30.49l5.96 17.74h27.857L80.836 34.792zm4.435 62.09 8.731-28.412 9.563 28.412z"
      ></path>
    </svg>
  )
}
