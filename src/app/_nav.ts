export const navItems = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'fa fa-dashboard'
  },
  {
    name: 'Manage Subscriber',
    icon: 'fa fa-inbox',
    children:[
      {
        name: 'Create Subscriber',
        url: '/addCustomer',
        icon: 'fa fa-check-square'
      },
      {
        name: 'Subscriber List',
        url: '/inbox',
        icon: 'fa fa-check-square'
      },  
    ]
  },
  {
    name: 'Manage Event Type',
    url: '/codeReviewCheckList',
    icon: 'fa fa-check-square',
    children:[
      {
        name: 'Create Event Type',
        url: '/addEvent',
        icon: 'fa fa-check-square'
      },
      {
        name: 'Event Type List',
        url: '/eventList',
        icon: 'fa fa-check-square'
      },  
    ]
  }, {
    name: 'Manage Subscription Type',
    icon: 'fa fa-check-square',
    children:[
      {
        name: 'Create Subscription',
        url: '/addSubscription',
        icon: 'fa fa-check-square'
      },
      {
        name: 'Subscription List',
        url: '/subscriptionList',
        icon: 'fa fa-check-square'
      },  
    ]
  },
  {
    name: 'Manage Entity Type',
    icon: 'fa fa-check-square',
    children:[
      {
        name: 'Create entity',
        url: '/addEntity',
        icon: 'fa fa-check-square'
      },
      {
        name: 'Entity List',
        url: '/entitiesList',
        icon: 'fa fa-check-square'
      },  
    ]
  },
  {
    name: 'Manage Role Type',
    icon: 'fa fa-check-square',
    children:[
      {
        name: 'Create Role',
        url: '/addRole',
        icon: 'fa fa-check-square'
      },
      {
        name: 'Role List',
        url: '/roleList',
        icon: 'fa fa-check-square'
      },  
    ]
  },
  {
    name: 'Manage User',
    icon: 'fa fa-check-square',
    children:[
      {
        name: 'Create User',
        url: '/addUser',
        icon: 'fa fa-check-square'
      },
      {
        name: 'User List',
        url: '/userList',
        icon: 'fa fa-check-square'
      },  
    ]
  },
  {
        name: 'Donor List',
        url: '/donorList',
        icon: 'fa fa-check-square'
  },{
    name: 'Manage Events',
    icon: 'fa fa-check-square',
    children:[
      {
        name: 'Create Event',
        url: '/createEvents',
        icon: 'fa fa-check-square'
      },
      // {
      //   name: 'Event Stats',
      //   url: '/eventStats',
      //   icon: 'fa fa-check-square'
      // },  
      {
        name: 'Event List',
        url: '/subEventList',
        icon: 'fa fa-check-square'
      }, 
      // {
      //   name: 'Start/Stop Events',
      //   url: '/events',
      //   icon: 'fa fa-check-square'
      // }
    ]    
  },
  {
    name: 'Add Page List',
      url: '/addPage',
      icon: 'fa fa-check-square'
  },
  {
    name: 'Page List',
      url: '/pagesList',
      icon: 'fa fa-check-square'
  }
  // {
  //   name: 'Project',
  //   url: '/project',
  //   icon: 'fa fa-tasks'
  // }
];
