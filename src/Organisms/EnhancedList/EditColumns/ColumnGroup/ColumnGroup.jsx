import React from 'react'

import List from '@material-ui/core/List'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'

import { ListItemIcon, ListItemText, ListSubheader, ListItem } from '../../../../Molecules/List'
import Checkbox from '../../../../Atoms/Checkbox'
import Trans from '../../../../Atoms/Trans'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  gutters: {
    paddingLeft: theme.spacing(4),
  },
}))

const ColumnGroup = ({
  label,
  columns,
  onChange = () => {},
  checked,
  disabled = false,
}) => {
  const classes = useStyles()

  return <List
    dense={true}
    subheader={<ListSubheader disableSticky={true} classes={classes}>{label}</ListSubheader>}
  >
    {columns.map(({ name, translationKey, description }) =>
      <ListItem button key={name} onClick={() => !disabled && onChange(name)} classes={classes}>
        <ListItemIcon>
          <Checkbox disabled={disabled} checked={checked} color="default" edge="start"/>
        </ListItemIcon>
        <ListItemText
          id={name}
          primary={<Trans>{translationKey}</Trans>}
          secondary={<Trans>{description}</Trans>}
        />
        <ListItemSecondaryAction/>
      </ListItem>,
    )}
  </List>
}

export default ColumnGroup
