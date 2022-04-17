import React from "react";
import dayjs from "dayjs";
import DetailContainer from "./styles";
import UserInfo from "./UserInfo";
import SpO2Ring from "../../../components/SpO2Ring";
import HeartRateAnimated from "../../../components/HeartRateAnimated";
import useHttpReqData from "../../../hooks/useHttpReqData";
import { useParams } from "react-router-dom";

const UserDetail = () => {
  const { patientId } = useParams();

  const { data } = useHttpReqData({
    baseUrl: "http://localhost:3000",
    path: `/health/patients/${patientId}`,
  });

  return (
    <DetailContainer>
      <UserInfo
        name={data?.name}
        gender={data?.gender}
        age={dayjs().diff(data?.birthdate, "years")}
        spo2LastUpdated={data?.health_update?._time_spo2}
        bpmLastUpdated={data?.health_update?._time_bpm}
      />
      <HeartRateAnimated value={data?.health_update?._value_bpm} />
      <SpO2Ring value={data?.health_update?._value_spo2} />
    </DetailContainer>
  );
};

export default UserDetail;
