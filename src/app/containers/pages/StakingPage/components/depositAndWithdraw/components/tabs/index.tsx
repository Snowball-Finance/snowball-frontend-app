import { styled, Tab, Tabs } from "@mui/material";
import { selectSelectedWithdrawAndDepositTab } from "app/containers/pages/StakingPage/selectors";
import { StakingPageActions } from "app/containers/pages/StakingPage/slice";
import { DepositAndWithdrawTab } from "app/containers/pages/StakingPage/types";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { CssVariables } from "styles/cssVariables/cssVariables";

const tabs = (t: any): { title: string; value: DepositAndWithdrawTab }[] => [
  {
    title: "deposit",
    value: DepositAndWithdrawTab.Deposit,
  },
  {
    title: "withdraw",
    value: DepositAndWithdrawTab.Withdraw,
  },
];

export const StakingTabs = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const selectedTab: DepositAndWithdrawTab = useSelector(
    selectSelectedWithdrawAndDepositTab
  );

  const handleTabChange = (tab: DepositAndWithdrawTab) => {
    dispatch(StakingPageActions.setSelectedDepositAndWithdrawTab(tab));
  };

  return (
    <Wrapper>
      <Tabs
        value={selectedTab}
        onChange={(_, v) => handleTabChange(v)}
        indicatorColor="primary"
        textColor="primary"
      >
        {tabs(t).map((item, index: number) => {
          return (
            <Tab
              disableRipple
              value={item.value}
              key={"segment" + index}
              label={
                <>
                  <span>{item.title}</span>
                </>
              }
            />
          );
        })}
      </Tabs>
    </Wrapper>
  );
};
const Wrapper = styled("div")({
  ".MuiTabs-indicator": {
    backgroundColor: CssVariables.primaryBlue,
  },
  span: {
    textTransform: "none",
    fontSize: "16px",
    fontWeight: 600,
    color: CssVariables.navigationTabTextColor,
  },
  ".Mui-selected": {
    span: {
      color: CssVariables.primaryBlue,
    },
  },
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,
});
