const getItemMenu = () => ([
  {
    id: 1,
    title: "Overview",
    isActive: true,
    link: "/member",
  },
  {
    id: 2,
    title: "Transactions",
    isActive: false,
    link: "/member/transactions",
  },
  {
    id: 3,
    title: "Messages",
    isActive: false,
    link: "/member/messages",
  },
  {
    id: 4,
    title: "Card",
    isActive: false,
    link: "/member/card",
  },
  {
    id: 5,
    title: "Rewards",
    isActive: false,
    link: "/member/rewards",
  },
  {
    id: 6,
    title: "Settings",
    isActive: false,
    link: "/member/edit-profile",
  },
  {
    id: 7,
    title: "Log Out",
    link: "/logout",
  },
]);

const formatNumber = new Intl.NumberFormat("id-ID", {
  style: "currency",
  currency: "IDR",
  minimumFractionDigits: 0,
});

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export { getItemMenu, formatNumber, BASE_URL };
