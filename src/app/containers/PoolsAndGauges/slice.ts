import { PayloadAction } from '@reduxjs/toolkit';
import { ContainerState, GaugeItem, LastInfo } from './types';
import { createSlice } from "store/toolkit";
import { useInjectReducer, useInjectSaga } from "store/redux-injectors";

import { poolsAndGaugesSaga } from './saga';

// The initial state of the PoolsAndGauges container
export const initialState: ContainerState = {
  isLoadingUserPoolsAndGauges: false,
  isGettingGauges: false,
  gaugeProxyABI: undefined,
  gaugeContract: undefined,
  gauges: [],
  pools:{},
  gotUserPools: false,
  isLoadingLastInfo: false,
  lastInfo:undefined,
};

const poolsAndGaugesSlice = createSlice({
  name: 'poolsAndGauges',
  initialState,
  reducers: {
    getInitialData(state, action: PayloadAction<void>) {},
    getLastInfo(state, action: PayloadAction<void>) {},
    setLastInfo(state, action: PayloadAction<LastInfo>) {
      state.lastInfo = action.payload;
    },
    setGaugeProxyABI(state, action: PayloadAction<any>) {
      state.gaugeProxyABI = action.payload;
    },
    setGauges(state, action: PayloadAction<GaugeItem[]>) {
      state.gauges = action.payload;
    },
    setPools(state, action: PayloadAction<ContainerState['pools']>) {
      state.pools = action.payload;
    },
    setGaugeContract(state, action: PayloadAction<any>) {
      state.gaugeContract = action.payload;
    },
    setIsGettingPoolsAndGauges(state, action: PayloadAction<boolean>) {
      state.isLoadingUserPoolsAndGauges = action.payload;
    },
    setIsGettingGauges(state, action: PayloadAction<boolean>) {
      state.isGettingGauges = action.payload;
    },
    setIsLoadingLastInfo(state, action: PayloadAction<boolean>) {
      state.isLoadingLastInfo = action.payload;
    },
  },
});

export const { actions:PoolsAndGaugesActions, reducer:PoolsAndGaugesReducer, name: sliceKey } = poolsAndGaugesSlice;

export const usePoolsAndGaugesSlice=()=>{
useInjectReducer({ key: sliceKey, reducer: PoolsAndGaugesReducer });
useInjectSaga({ key: sliceKey, saga: poolsAndGaugesSaga });
return { PoolsAndGaugesActions }
}