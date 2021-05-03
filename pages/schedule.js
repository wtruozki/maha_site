import Layout from "../components/Layout";
import OtherWrap from "../components/OtherWrap";
import CarendarBord from "../components/CalendarBoard/index";
import { useState } from "react";

const Schedule = () => {
  const [value, onChange] = useState(new Date());
  return (
    <Layout title="SCHEDULE">
      <OtherWrap heading="schedule">
        <CarendarBord />
      </OtherWrap>
    </Layout>
  );
};

export default Schedule;
