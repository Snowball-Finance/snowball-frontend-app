import { CircularProgress, styled, Typography } from "@mui/material";
import { selectIsLoadingSnowConeBalance, selectSnowConeBalance } from "app/containers/BlockChain/selectors";
import { FC } from "react";
import { useSelector } from "react-redux";
import { BNToFloat } from "common/format";

export const XSnobBalance: FC = () => {
  const isLoading = useSelector(selectIsLoadingSnowConeBalance)
  const balance = useSelector(selectSnowConeBalance)

  return (
    <Wrapper>
      <h5>XSNOB: {isLoading ? <CircularProgress /> : balance ? BNToFloat(balance) : '-'}</h5>
    </Wrapper>
  )
}

const Wrapper = styled('div')({
  background: 'green',
})