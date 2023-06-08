import type { ReactElement } from "react"
import styles from "./OneFieldRow.module.scss"

interface IProps {
  children: React.ReactNode
}

export function OneFieldRow(props: IProps): ReactElement {
  const { children } = props
  return (
    <div className={styles.container}>
      {children}
    </div>
  )
}
