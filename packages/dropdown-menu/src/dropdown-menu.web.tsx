import type {
  MenuContentProps,
  MenuGroupProps,
  MenuItemProps,
  MenuItemSubtitleProps,
  MenuItemTitleProps,
  MenuRootProps,
  MenuTriggerItemProps,
  MenuTriggerProps,
} from '@zeeg/menu'
import { Text, View, StyleSheet } from 'react-native'
import { createElement, forwardRef } from 'react'

import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

const Root = ({ children }: MenuRootProps) => {
  return <DropdownMenu.Root>{children}</DropdownMenu.Root>
}

const TriggerView = forwardRef<unknown, any>((props, ref) => {
  return (
    <View ref={ref} {...props} onClickCapture={props.onPointerDown}>
      {props.children}
    </View>
  )
})

const Trigger = ({ children, style }: MenuTriggerProps) => {
  return (
    <DropdownMenu.Trigger asChild>
      <TriggerView style={style}>{children}</TriggerView>
    </DropdownMenu.Trigger>
  )
}

const ContentView = forwardRef<unknown, any>((props, ref) => {
  return (
    <View ref={ref} {...props} onClickCapture={props.onPointerDown}>
      {props.children}
    </View>
  )
})

const Content = ({ children, style }: MenuContentProps) => {
  return (
    <DropdownMenu.Content>
      <ContentView style={style}>{children}</ContentView>
    </DropdownMenu.Content>
  )
}

const Item = ({ children, disabled, onSelect, style }: MenuItemProps) => {
  const Component = typeof children == 'string' ? Text : View
  return (
    <DropdownMenu.Item disabled={disabled} onSelect={onSelect}>
      {createElement(
        Component,
        {
          style,
        },
        children
      )}
    </DropdownMenu.Item>
  )
}

const TriggerItem = ({ children, style }: MenuTriggerItemProps) => {
  return (
    <DropdownMenu.TriggerItem>
      <Text style={style}>{children}</Text>
    </DropdownMenu.TriggerItem>
  )
}

const ItemTitle = ({ children, style }: MenuItemTitleProps) => {
  return <Text style={style}>{children}</Text>
}

const ItemSubtitle = ({ children, style }: MenuItemSubtitleProps) => {
  return <Text style={style}>{children}</Text>
}

const Group = ({ children }: MenuGroupProps) => {
  return <DropdownMenu.Group>{children}</DropdownMenu.Group>
}

export {
  Root,
  Trigger,
  Content,
  Item,
  ItemTitle,
  ItemSubtitle,
  TriggerItem,
  Group,
}