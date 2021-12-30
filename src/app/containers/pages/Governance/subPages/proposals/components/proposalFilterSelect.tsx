import { styled } from "@mui/material"
import { SnowPaper } from "app/components/base/SnowPaper"
import { SnowSelect } from "app/components/base/SnowSelect"
import { SnowSelectInterface } from "app/components/base/SnowSelect/types"
import { translations } from "locales/i18n"
import { useTranslation } from "react-i18next"
import { useDispatch, useSelector } from "react-redux"
import { selectSelectedProposalFilter } from "../../../selectors"
import { GovernanceActions } from "../../../slice"
import { ProposalFilters } from "../../../types"

const selectOptions = ({ t }): SnowSelectInterface['options'] => ([
  {
    label: t(translations.GovernancePage.AllProposals()),
    value: ProposalFilters.All
  },
  {
    label: t(translations.GovernancePage.NewProposals()),
    value: ProposalFilters.New
  },
])

export const ProposalFilterSelect = () => {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const selectedFilter=useSelector(selectSelectedProposalFilter)
  const handleFilterChange = (v: ProposalFilters) => {
    dispatch(GovernanceActions.setProposalFilter(v))
  }
  return (
    <SnowPaper>
      <StyledSelect
        //@ts-ignore ignored because we know it's ok to pass the value as Proposal filter enum
        onChange={handleFilterChange}
        options={selectOptions({ t })}
        isFilter
        selectedValue={selectedFilter}
      />
    </SnowPaper>
  )
}

const StyledSelect=styled(SnowSelect)({
  minWidth:'195px',
  '.MuiSelect-outlined':{
    paddingLeft:0
  }
})