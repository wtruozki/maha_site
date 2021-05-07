import Layout from "../components/Layout";
import OtherWrap from "../components/OtherWrap";
import CarendarBord from "../components/CalendarBoard/index";

const Schedule = ({ schedule }) => {
  return (
    <Layout title="SCHEDULE">
      <OtherWrap heading="schedule">
        <CarendarBord data={schedule} />
      </OtherWrap>
    </Layout>
  );
};

export const getStaticProps = async () => {
  const schedule_data = await fetch("http://localhost:5000/data")
    .then((res) => res.json())
    .catch(() => null);

  return {
    props: {
      schedule: schedule_data,
    },
  };
};

export default Schedule;
