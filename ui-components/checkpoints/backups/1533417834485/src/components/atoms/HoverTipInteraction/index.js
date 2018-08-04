import React, { Component } from 'react'
import styles from './styles.css'

const HoverTipInteractionPresenter = ({ children, className, ...props }) => {
  <span className={[ styles.root, className ].join(' ')} { ...props }>
    { children }
  </span>
}

const HoverTipInteractionContainer = ({ presenter, ...props }) => {
  children = React.Children.map(children, child => {
    if (child.type.displayName === 'Tip') {
      const grandChild = React.Children.only(child.props.children)
      return React.cloneElement(grandChild, {
        className: [styles.tip, grandChild.props.className ].join(' '),
      })
    } else if (child.type.displayName === 'Marker') {
      const grandChild = child.props.children
      return React.cloneElement(grandChild, {
        className: [ styles.marker, grandChild.props.className ].join(' '),
      })
    }
    return child
  })

  return presenter({ children, ...props })
}

const HoverTipInteraction = props => (
  <HoverTipInteractionContainer
    presenter={ presenterProps => <HoverTipInteractionPresenter { ...presenterProps } /> }
    { ...props }
  />
)

export default HoverTipInteraction

export const Tip = () => <span>これはレンダリングされないもの</span>
export const Marker = () => <span>これはレンダリングされないもの</span>
