import React from "react";
import { DetailChartContainer, ChartCard } from "./styles";
import Chart from "../../../components/Chart";
import colors from "../../../colors";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import useHttpReqData from "../../../hooks/useHttpReqData";
import dayjs from "dayjs";

// const DATA = [98, 99, 95, 95, 96, 98, 99, 98, 98, 98, 97, 97, 97];

const DetailChart = () => {
  const { patientId } = useParams();

  const { data } = useHttpReqData({
    baseUrl: "http://192.168.100.69:3000",
    path: `/health/patients/${patientId}/history`,
  });

  if (!data) return null;

  return (
    <DetailChartContainer>
      <ChartCard>
        <Chart
          title="Oxygen Saturation (SpO2)"
          dataLabel="SpO2"
          labels={data?.spo2?.map((item) => dayjs(item._time).format('HH:mm'))}
          dataPoints={data?.spo2?.map((item) => item._value)}
          lineColor={colors.green[1]}
        />
      </ChartCard>
      <ChartCard>
        <Chart
          title="Heart Rate"
          dataLabel="BPM"
          labels={data?.bpm?.map((item) => dayjs(item._time).format('HH:mm'))}
          dataPoints={data?.bpm?.map((item) => item._value)}
          lineColor={colors.red[1]}
        />
      </ChartCard>
    </DetailChartContainer>
  );
};

export default DetailChart;
