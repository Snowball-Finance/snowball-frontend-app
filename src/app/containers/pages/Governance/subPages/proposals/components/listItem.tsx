import { Box, Chip, styled } from "@mui/material"

import { SnowPaper, SnowPaperInterface } from "app/components/base/SnowPaper"
import { InfoButton } from "app/components/common/buttons/infoButton"
import ChevronRightInCircle from "assets/images/iconComponents/chevronRightInCircle"
import { formatNumber } from "common/format"
import { push } from "connected-react-router"
import { translations } from "locales/i18n"
import { FC } from "react"
import { useTranslation } from "react-i18next"
import { useDispatch } from "react-redux"
import { CssVariables } from "styles/cssVariables/cssVariables"
import { GovernanceSubPages } from "../../../routes"
import { GovernanceActions } from "../../../slice"
import { Proposal, ProposalStates } from "../../../types"
import { forAndAgainst } from "../../../utils/votes"
import { VoteProgressBar, VoteProgressBarType } from "./voteProgressBar"

interface ProposalListItemProps {
  proposal: Proposal,
  short?: boolean
}

export const ProposalListItem: FC<ProposalListItemProps> = ({ proposal, short }) => {
  const { t } = useTranslation()
  const dispatch = useDispatch()

const {forVotes,againstVotes}=forAndAgainst({proposal})

  const handleDetailsClick = () => {
    dispatch(push(`${GovernanceSubPages.proposals}/${proposal.index}`))
  }


  return (
    <Wrapper {...(short &&{marginBottom:'0 !important'})} >
      <StyledSnowPaper active={proposal.state === ProposalStates.active ? 'true' : ''} short={short?'true':''}>
        <IndexNameAndStatusWrapper {...(short && {flex:1,paddingRight:'16px'})} {...(!short &&{width:'310px'})} >
          <DarkText size={12}>
            #{proposal.index}
          </DarkText>
          <DarkText size={16}>
            {proposal.title}
          </DarkText>
          <StatusChip state={proposal.state} label={proposal.state} />
        </IndexNameAndStatusWrapper>

        <DateAndMiscWrapper>
          <DarkText size={12}>
            {proposal.state}
          </DarkText>
          <DateChip label={proposal.startDate} />
          <DarkText size={10}>
            {t(translations.GovernancePage.Proposedby())} :
            {proposal.proposer.substring(0, 6) + '...' + proposal.proposer.substring(proposal.proposer.length - 4, proposal.proposer.length)}
          </DarkText>
        </DateAndMiscWrapper>
        {
          !short &&
          <>
            <VotesBarWrapper>
              <VoteProgressBar title={`${t(translations.Common.For())}: ${forVotes.formattedVotes}`} percent={forVotes.percent} type={VoteProgressBarType.for} />
              <VoteProgressBar title={`${t(translations.Common.Against())}: ${againstVotes.formattedVotes}`} percent={againstVotes.percent} type={VoteProgressBarType.against} />
            </VotesBarWrapper>

            <DetailButtonWrapper>
              <InfoButton
                icon={<ChevronRightInCircle />}
                title={t(translations.Common.Details())}
                onClick={handleDetailsClick}
              />
            </DetailButtonWrapper>
          </>
        }
      </StyledSnowPaper>
    </Wrapper>
  )
}

const DateChip = styled(Chip)({
  background: CssVariables.mildBlue,
  color: CssVariables.primaryBlue,
  borderRadius: CssVariables.paperBorderRadius,
  fontSize: '12px',
  maxHeight: '24px',
  marginBottom: '16px',
  marginTop: '6px'
})

const StatusChip = styled(Chip)<{ state: ProposalStates }>(({ state }) => {
  let background = CssVariables.primaryBlue
  let color = CssVariables.white
  switch (state) {
    case ProposalStates.readyForExecution:
      background = CssVariables.mildBlue
      color = CssVariables.primaryBlue
      break;
    default:
      break;
  }
  return (
    {
      background,
      color,
      borderRadius: CssVariables.paperBorderRadius,
      fontSize: '12px',
      maxHeight: '24px'
    }
  )
})

const DarkText = styled('p')<{ size: number }>(({ size }) => ({
  color: CssVariables.black,
  margin: 0,
  fontSize: `${size}px`
}))

const DetailButtonWrapper = styled('div')({
  display: 'flex',
  alignItems: 'center'
})

const VotesBarWrapper = styled('div')({
  minWidth: "320px",
  display: "flex",
  flexDirection: "column",
  gap: '24px',
  flex: 1,
  padding: '0 32px'
})

const DateAndMiscWrapper = styled('div')({})

const IndexNameAndStatusWrapper = styled(Box)({
  
})

const StyledSnowPaper = styled(SnowPaper)<SnowPaperInterface & { active: 'true' | '',short:'true'|'' }>(({ active,short }) => ({
  padding: '16px 23px',
  display: 'flex',
  ...(active && { borderLeft: `10px solid ${CssVariables.primaryBlue}` }),
  ...(short && { height:'160px' })
}))

const Wrapper = styled(Box)({
  marginBottom: '16px'
})