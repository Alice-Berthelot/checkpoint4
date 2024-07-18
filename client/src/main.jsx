import React from "react";
import ReactDOM from "react-dom/client";

import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";

import {
  baseFieldsUrl,
  baseClientsUrl,
  baseLawyersUrl,
  baseAppointmentsUrl,
  baseTimeSlotsUrl,
} from "./services/url";
import { fetchApi, sendData } from "./services/api.service";

import App from "./App";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Lawyers from "./pages/Lawyers";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: async () => {
          const [fields, lawyers, timeSlots] = await Promise.all([
            fetchApi(baseFieldsUrl),
            fetchApi(baseLawyersUrl),
            fetchApi(baseTimeSlotsUrl),
          ]);
          return { fields, lawyers, timeSlots };
        },
        action: async ({ request }) => {
          const formData = await request.formData();
          const firstname = formData.get("firstname");
          const lastname = formData.get("lastname");
          const email = formData.get("email");
          const phoneNumber = formData.get("phone_number");
          const lawyerId = formData.get("lawyer");
          const field = formData.get("field");
          const timeSlotId = formData.get("date");
          const note = formData.get("note");

          try {
            const clientResponse = await sendData(
              `${baseClientsUrl}`,
              {
                firstname,
                lastname,
                email,
                phoneNumber,
                lawyerId,
              },
              "POST"
            );

            if (clientResponse.status !== 201) {
              throw new Error("Failed to create client record");
            }

            const clientData = await clientResponse.json();
            const clientId = clientData.insertId;

            if (!clientId) {
              throw new Error("Client ID is missing in the response");
            }

            const appointmentResponse = await sendData(
              `${baseAppointmentsUrl}`,
              {
                is_first_time: 0,
                note,
                status: "Pending",
                field_id: field,
                clientId,
                lawyerId,
                timeSlotId,
              },
              "POST"
            );

            if (appointmentResponse.status === 201) {
              return redirect("/");
            }
            throw new Error("Failed to create appointment record");
          } catch (error) {
            return null;
          }
        },
      },
      {
        path: "/lawyers",
        element: <Lawyers />,
        loader: () => fetchApi(baseLawyersUrl),
      },
      {
        path: "/admin",
        element: <Admin />,
        loader: () => fetchApi(baseAppointmentsUrl),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
