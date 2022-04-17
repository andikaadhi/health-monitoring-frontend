import React, { useEffect, useState } from "react";
import { Text } from "../../style-system/components";
import { RingContainer, RingSvg } from "./styles";
import colors from "../../colors";

const CONFIG = {
  radius: 80,
  stroke: 10,
};

const SpO2Ring = ({ value = 100 }) => {
  const [circle, setCircle] = useState();

  useEffect(() => {
    const radius = CONFIG.radius;
    const normalizedRadius = CONFIG.radius - CONFIG.stroke * 2;

    setCircle({
      radius,
      normalizedRadius,
      circumference: normalizedRadius * 2 * Math.PI,
    });
  }, []);

  if (!circle) return null;

  return (
    <RingContainer>
      <RingSvg height={circle.radius * 2} width={circle.radius * 2}>
        <circle
          className="circle-progress"
          stroke={colors.green[1]}
          fill="transparent"
          strokeWidth={CONFIG.stroke}
          strokeDasharray={`${circle.circumference} ${circle.circumference}`}
          strokeLinecap="round"
          style={{
            strokeDashoffset:
              circle.circumference - (value / 100) * circle.circumference, // progress
          }}
          r={circle.normalizedRadius}
          cx={circle.radius}
          cy={circle.radius}
        />
      </RingSvg>
      <div>
        <Text fontSize={1}>SpO2</Text>
        <Text fontSize={4} bold>
          {value}%
        </Text>
      </div>
    </RingContainer>
  );
};

export default SpO2Ring;
