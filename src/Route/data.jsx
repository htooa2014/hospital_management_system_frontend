import NotFound from "@/components/NotFound/NotFound.jsx";
import Main from "../Layout/Main/Main.jsx";
import { Home } from "../Pages/Home/Home.jsx";
import Appointment from "@/Pages/Appointment/Appointment.jsx";
import AddAppointment from "@/Pages/Appointment/AddAppointment.jsx";
import Room from "@/Pages/Room/Room.jsx";
import Disease from "@/Pages/Disease/Disease.jsx";
import DoctorContainer from "@/Pages/Doctor/Doctor.jsx";
import DoctorSpecialist from "@/Pages/DoctorSpecialist/DoctorSpecialist.jsx";
import Pateint from "@/Pages/patient/Pateint.jsx";
import Medical from "@/Pages/MedicalRecord/Medical.jsx";

export const routes = [
  {
    path: "/",
    Component: Main,
    handle: { title: "Home" },
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "doctor",
        handle: { title: "Doctor" },
        children: [
          {
            index: true,
            Component: DoctorContainer,
          },
          {
            path: "doctorSpecialist",
            handle: { title: "Doctor Specialist" },
            Component: DoctorSpecialist,
          },
        ],
      },
      {
        path: "patient",
        handle: { title: "Patient" },
        children: [
          {
            index: true,
            Component: Pateint,
          },
          {
            path: "medicalRecords",
            handle: { title: "Medical Records" },
           Component:Medical
          },
        ],
      },
      {
        path: "appointment",
        handle: { title: "Appointment List"},
        children: [
          {
            index: true,
            Component: Appointment,
          },
          {
            path: "/appointment/add",
            handle: { title: "New Appointment"},
            Component: AddAppointment,
          },
        ],
      },
      {
        path: "general",
        handle: { title: "Room"},
        children: [
          {
            index: true,
            Component: Room,
          },
          {
            path: "/general/disease",
            handle: { title: "Disease" },
            Component: Disease,
          },
        ]
      }
    ],
  },
];
