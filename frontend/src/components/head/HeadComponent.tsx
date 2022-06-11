import Head from 'next/head'
import React, { Fragment } from 'react'

interface Props {
  titleName?: string
}

export function HeadComponent({
  titleName,
  children,
}: React.PropsWithChildren<Props>) {
  return (
    <Fragment>
      <Head>
        <title>{titleName}</title>
      </Head>
      {children}
    </Fragment>
  )
}
