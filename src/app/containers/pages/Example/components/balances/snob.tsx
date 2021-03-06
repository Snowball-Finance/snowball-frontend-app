import { CircularProgress, styled } from "@mui/material";
import { selectIsLoadingSnobBalance, selectSnobBalance } from "app/containers/BlockChain/selectors";
import { FC } from "react";
import { useSelector } from "react-redux";
import { BNToFloat } from "common/format";

export const SnobBalance: FC = () => {
  const isLoading = useSelector(selectIsLoadingSnobBalance)
  const balance = useSelector(selectSnobBalance)

  return (
    <Wrapper>
      <h5>SNOB: {isLoading ? <CircularProgress /> : balance ? BNToFloat(balance) : '-'}</h5>
    </Wrapper>
  )
}

const Wrapper = styled('div')({
  background: 'magenta',
})