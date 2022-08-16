import {
  Courses,
  Dashboard,
  Landing,
  Modules,
  Notfound,
  Profile,
  SignIn,
  SignUp,
  Students,
} from "../pages";

export const appRoutes = [
  {
    path: "/",
    name: "landing",
    component: <Landing />,
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: <Dashboard />,
  },
  {
    path: "/signin",
    name: "Signin",
    component: <SignIn />,
  },
  {
    path: "/signup",
    name: "Signup",
    component: <SignUp />,
  },
  {
    path: "/dashboard/profile",
    name: "Profile",
    component: <Profile />,
  },
  {
    path: "/dashboard/students",
    name: "Students",
    component: <Students />,
  },
  {
    path: "/dashboard/courses",
    name: "Courses",
    component: <Courses />,
  },
  {
    path: "/dashboard/modules",
    name: "Modules",
    component: <Modules />,
  },
  {
    path: "*",
    name: "Notfound",
    component: <Notfound />,
  },
];
