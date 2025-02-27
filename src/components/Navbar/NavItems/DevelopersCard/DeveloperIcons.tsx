type IconProps = {
  isActive?: boolean;
  colors?: string[];
};

export const DocumentationIcon = ({
  colors = ["#9896ff", "#bdbbff"],
}: IconProps) => (
  <svg
    // class="styles_menuLinkIcon__8pMoP"
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="0.5"
      y="0.5"
      width="47"
      height="47"
      rx="3.5"
      stroke="#F1F1F0"
      fill="#fff"
    ></rect>
    <path
      d="M11 16.0172V30.3485C11 32.3417 12.9077 33.7807 14.8242 33.2331L24.8242 30.376C26.1121 30.008 27 28.8308 27 27.4914V11.6515C27 9.65832 25.0923 8.21933 23.1758 8.76689L14.6264 11.2096C12.4799 11.8229 11 13.7848 11 16.0172Z"
      fill={colors[1]}
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M19.5 20.5086V36.3485C19.5 38.6739 21.7257 40.3527 23.9615 39.7139L33.9615 36.8567C35.4641 36.4274 36.5 35.0541 36.5 33.4914V17.6515C36.5 15.3261 34.2743 13.6473 32.0385 14.2861L22.0385 17.1433C20.5359 17.5726 19.5 18.9459 19.5 20.5086Z"
      fill={colors[0]}
      stroke="white"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
  </svg>
);

export const SecurityIcon = ({
  colors = ["#9896ff", "#bdbbff"],
}: IconProps) => (
  <svg
    // class="styles_menuLinkIcon__8pMoP"
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="0.5"
      y="0.5"
      width="47"
      height="47"
      rx="3.5"
      stroke="#F1F1F0"
      fill="#fff"
    ></rect>
    <path
      d="M33 10.5H15C12.5147 10.5 10.5 12.5147 10.5 15V24C10.5 31.4558 16.5442 37.5 24 37.5C31.4558 37.5 37.5 31.4558 37.5 24V15C37.5 12.5147 35.4853 10.5 33 10.5Z"
      fill={colors[0]}
      stroke="white"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M15.1073 32.0324C14.8124 32.3273 14.6536 32.7317 14.669 33.1486C14.6844 33.5654 14.8727 33.9569 15.1886 34.2292C17.5523 36.2666 20.6333 37.4999 23.9986 37.4999C31.4545 37.4999 37.4986 31.4557 37.4986 23.9999V14.9999C37.4986 14.2475 37.3128 13.534 36.9832 12.9073C36.7612 12.4853 36.352 12.194 35.8806 12.1225C35.4093 12.0509 34.932 12.2077 34.5949 12.5448L15.1073 32.0324Z"
      fill={colors[1]}
      stroke="white"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
  </svg>
);

export const BugBounty = ({
  colors = ["#9896ff", "#bdbbff"],
}: IconProps) => (
  <svg
    // class="styles_menuLinkIcon__8pMoP"
    xmlns="http://www.w3.org/2000/svg"
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
  >
    <rect
      x="0.5"
      y="0.5"
      width="47"
      height="47"
      rx="3.5"
      stroke="#F1F1F0"
      fill="#fff"
    ></rect>
    <path
      d="M24 34C27.1591 34 30.0687 33.3619 32.2254 32.2835C34.3223 31.2351 36 29.6016 36 27.5C36 25.3984 34.3223 23.7649 32.2254 22.7165C30.0687 21.6381 27.1591 21 24 21C20.8409 21 17.9313 21.6381 15.7746 22.7165C13.6777 23.7649 12 25.3984 12 27.5C12 29.6016 13.6777 31.2351 15.7746 32.2835C17.9313 33.3619 20.8409 34 24 34Z"
      fill={colors[0]}
      stroke="white"
      strokeWidth="2"
    ></path>
    <path
      d="M24 26.5C27.2199 26.5 30.2092 25.8506 32.449 24.7307C34.5991 23.6557 36.5 21.893 36.5 19.5C36.5 17.107 34.5991 15.3443 32.449 14.2693C30.2092 13.1494 27.2199 12.5 24 12.5C20.7801 12.5 17.7908 13.1494 15.551 14.2693C13.4009 15.3443 11.5 17.107 11.5 19.5C11.5 21.893 13.4009 23.6557 15.551 24.7307C17.7908 25.8506 20.7801 26.5 24 26.5Z"
      fill={colors[1]}
      stroke="white"
      strokeWidth="3"
    ></path>
  </svg>
);
