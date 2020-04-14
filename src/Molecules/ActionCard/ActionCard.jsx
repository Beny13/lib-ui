import React from 'react'

import { Times } from '@styled-icons/fa-solid/Times'
import { Check } from 'styled-icons/material/Check'
import { Edit } from 'styled-icons/material/Edit'

import Card from '../../Atoms/Card'
import Trans from '../../Atoms/Trans'
import FlexBox from '../../Templates/FlexBox'

let originalValue

const Action = props => <FlexBox
  css={{ cursor: 'pointer' }}
  fontSize="fontSize"
  fontFamily="fontFamily"
  alignItems="center"
  border="none"
  mt={4}
  {...props}
/>

const Title = props => <FlexBox
  fontSize="title"
  fontFamily="fontFamily"
  color="primary.main"
  {...props}
/>

const Description = props => <FlexBox
  fontSize="fontSize"
  fontFamily="fontFamily"
  {...props}
/>

const Actions = ({
  edit,
  setEdit,
  value,
  setValue,
}) => {
  const onCancel = () => {
    setValue(originalValue)
    setEdit(false)
  }

  const onEdit = () => {
    originalValue = value
    setEdit(true)
  }

  const onSave = () => {
    setEdit(false)
  }

  return edit ? (
    <>
      <Action onClick={onCancel}>
        <Times size={16} />
        <FlexBox marginLeft={0.5}><Trans>global.action.cancel</Trans></FlexBox>
      </Action>
      <Action onClick={onSave}>
        <Check size={16} />
        <FlexBox marginLeft={0.5}><Trans>global.action.save</Trans></FlexBox>
      </Action>
    </>
  ) : (
    <Action onClick={onEdit}>
      <Edit size={16} />
      <FlexBox marginLeft={0.5}><Trans>global.action.edit</Trans></FlexBox>
    </Action>
  )
}

const ActionCard = ({
  title,
  description,
  children,
  setEdit,
  edit = false,
  value,
  setValue,
  ...props
}) => {
  return (
    <Card {...props}>
      <Title>
        {title}
      </Title>
      <Description>
        {description}
      </Description>
      {children}
      <FlexBox justifyContent="space-between">
        <Actions edit={edit} setEdit={setEdit} value={value} setValue={setValue} />
      </FlexBox>
    </Card>
  )
}

export default ActionCard
