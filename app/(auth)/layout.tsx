import { FC, ReactNode } from 'react'

interface layoutProps {
  children: ReactNode
}

const layout: FC<layoutProps> = ({children}) => {
  return <div className='bg-red-400 h-screen'>{children}</div>
}

export default layout