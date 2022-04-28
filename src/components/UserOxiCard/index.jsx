import React from 'react';
import { CardContainer, SensorIdText, TagsContainer } from './styles';
import UserInfo from './UserInfo';
import ViewDetailButton from './ViewDetailButton';
import Tag from '../Tag';
import colors from '../../colors';

function UserOxiCard({
  sensorId,
  name,
  gender,
  age,
  spo2,
  bpm,
  onDetailClick,
}) {
  return (
    <CardContainer>
      <div>
        <SensorIdText fontSize={1}>
          SensorID
          {sensorId}
        </SensorIdText>
        <UserInfo name={name} gender={gender} age={age} />
      </div>
      <div>
        <TagsContainer>
          <Tag
            label="SpO2"
            value={spo2}
            color={colors.green[1]}
            borderColor={colors.green[2]}
          />
          <Tag
            label="BPM"
            value={bpm}
            color={colors.red[1]}
            borderColor={colors.red[2]}
          />
        </TagsContainer>
        <ViewDetailButton onClick={onDetailClick} />
      </div>
    </CardContainer>
  );
}

export default UserOxiCard;
