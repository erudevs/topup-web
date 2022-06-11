const getItemMenu = () => ([
  {
    id: 1,
    name: "Overview",
    isActive: true,
    link: "/member",
  },
  {
    id: 2,
    name: "Transactions",
    isActive: false,
    link: "/member/transactions",
  },
  {
    id: 3,
    name: "Messages",
    isActive: false,
    link: "/member/messages",
  },
  {
    id: 4,
    name: "Card",
    isActive: false,
    link: "/member/card",
  },
  {
    id: 5,
    name: "Rewards",
    isActive: false,
    link: "/member/rewards",
  },
  {
    id: 6,
    name: "Settings",
    isActive: false,
    link: "/member/edit-profile",
  },
  {
    id: 7,
    name: "Log Out",
    link: "/logout",
  },
]);

// eslint-disable-next-line import/prefer-default-export
export { getItemMenu };
