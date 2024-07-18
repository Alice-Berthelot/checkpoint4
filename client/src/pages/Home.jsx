import { useLoaderData } from "react-router-dom";
import AppointmentForm from "../components/AppointmentForm";
import Fields from "../components/Fields";
import Welcome from "../components/Welcome";
import FirmIntro from "../components/FirmIntro";
import Values from "../components/Values";

function Home() {
  const iconUrl = import.meta.env.VITE_API_URL;
  const { fields, lawyers, timeSlots } = useLoaderData();

  return (
    <>
      <Welcome />
      <FirmIntro fields={fields} lawyers={lawyers} />
      <Values />
      <Fields iconUrl={iconUrl} fields={fields} />
      <AppointmentForm
        fields={fields}
        lawyers={lawyers}
        timeSlots={timeSlots}
      />
    </>
  );
}

export default Home;
