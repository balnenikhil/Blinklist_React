import React from 'react';
import { styled } from '@mui/material/styles';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 12,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    borderRadius: 0,
    backgroundColor: theme.palette.background.paper
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 0,
    backgroundColor: '#E1ECFC'
  }
}));

export interface ProgressBarProps {
  progressValue : number | undefined;
}
const ProgressBars = (props: ProgressBarProps) => {
  
  return <BorderLinearProgress variant="determinate" value={props.progressValue} />;
};

export default ProgressBars;