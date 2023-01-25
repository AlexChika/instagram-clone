import React from "react";

const WhatsappIcon = ({ color, class: cs }) => {
  return (
    <svg
      aria-label="Share to WhatsApp"
      className={cs}
      color={color}
      fill="currentColor"
      //   color="#262626"
      //   fill="#262626"
      height="24"
      role="img"
      viewBox="0 0 31 31"
      width="24"
    >
      <path
        clipRule="evenodd"
        d="M15.662.263A15.166 15.166 0 0 1 26.06 4.48a15.048 15.048 0 0 1 4.653 10.381 15.164 15.164 0 0 1-3.77 10.568 15.063 15.063 0 0 1-11.37 5.138c-2.273 0-4.526-.513-6.567-1.495l-7.93 1.764a.116.116 0 0 1-.138-.13l1.34-8.019a15.181 15.181 0 0 1-1.85-6.837A15.052 15.052 0 0 1 4.555 5.012 15.061 15.061 0 0 1 15.586.263h.075Zm-.085 2.629c-.12 0-.242.002-.364.005-6.902.198-12.356 5.975-12.158 12.877.06 2.107.654 4.176 1.717 5.982l.231.392-.993 5.441 5.385-1.271.407.212a12.527 12.527 0 0 0 6.13 1.402c6.901-.198 12.356-5.974 12.158-12.876-.195-6.78-5.773-12.164-12.513-12.164ZM10.34 8.095c.253.008.507.015.728.032.271.019.57.04.836.683.315.763.996 2.668 1.085 2.86.09.194.146.418.011.668-.134.25-.203.407-.4.623-.196.216-.414.484-.59.649-.197.184-.4.384-.19.771.21.388.934 1.657 2.033 2.7 1.413 1.34 2.546 1.783 2.996 1.993a.998.998 0 0 0 .415.112c.162 0 .292-.068.415-.193.237-.24.95-1.071 1.25-1.454.156-.2.299-.271.453-.271.123 0 .255.045.408.107.345.137 2.185 1.115 2.56 1.317.374.202.625.305.715.466.09.162.066.924-.278 1.803-.344.878-1.922 1.688-2.621 1.73-.205.012-.406.04-.668.04-.634 0-1.621-.166-3.865-1.133-3.817-1.643-6.136-5.683-6.318-5.942-.182-.26-1.489-2.111-1.432-3.983C7.94 9.8 8.951 8.91 9.311 8.54c.345-.355.74-.445.996-.445h.032Z"
        fill="currentColor"
        fillRule="evenodd"
      ></path>
    </svg>
  );
};

export default WhatsappIcon;