export const data = [
    {
      name: "Home",
      to: "/",
    },
    {
      name: "Profile",
      to: "/profile",
      children: [
        {
          name: "Details",
          to: "details",
          children: [
            {
              name: "Location",
              to: "location",
              children: [
                {
                  name: "City",
                  to: "city",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "Settings",
      to: "/settings",
      children: [
        {
          name: "Account",
          to: "account",
        },
        {
          name: "Security",
          to: "security",
          children: [
            {
              name: "Login",
              to: "login",
            },
            {
              name: "Register",
              to: "register",
              children : [
                  {
                      name : 'Random data',
                      to : ''
                  }
              ]
            },
          ],
        },
      ],
    },
  ];
  
  export default data;