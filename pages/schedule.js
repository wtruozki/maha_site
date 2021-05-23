import Layout from "../components/Layout";
import OtherWrap from "../components/OtherWrap";
import CarendarBord from "../components/CalendarBoard/index";

const Schedule = () => {
  return (
    <Layout title="SCHEDULE">
      <OtherWrap heading="schedule">
        <CarendarBord />
      </OtherWrap>
    </Layout>
  );
};

export default Schedule;
