import styled from 'styled-components'
import { color, space } from 'styled-system'

import SummaryBase from '@material-ui/core/ExpansionPanelSummary'

const Summary = styled(SummaryBase)`
  && {
    ${color};
    ${space};
    min-height: ${({ theme }) => theme.space.l};
  }
  &&.Mui-expanded {
    min-height: ${({ theme }) => theme.space.l};
  }
  && .MuiExpansionPanelSummary-content {
    margin: 0;
    justify-content: space-between;
  }
  && .MuiIconButton-root {
    padding: 0;
  }
`
Summary.defaultProps = {
  bg:              'secondary',
  px:              'm',
  py:              's',
  IconButtonProps: {
    disableRipple:      true,
    disableFocusRipple: true,
  },
}

export default Summary
