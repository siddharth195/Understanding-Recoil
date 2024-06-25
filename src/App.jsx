import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil'
import { jobsAtom, messagingAtom, networkAtom, notificationAtom, totalNotifcationSelector } from './atoms'

function App() {
  


  return (
    <RecoilRoot>
    <MainApp></MainApp>
    </RecoilRoot>
  )
}

function MainApp(){
  const networkNotificationCount = useRecoilValue(networkAtom)
  const jobsAtomCount = useRecoilValue(jobsAtom)
  const notificationAtomCount = useRecoilValue(notificationAtom)
  const [messagingAtomCount,setMessagingAtomCount] = useRecoilState(messagingAtom)
  const totalNotificationCount = useRecoilValue(totalNotifcationSelector)

  return <>

        <button>Home</button>
        <button>My network ({networkNotificationCount > 100 ? "99+": networkNotificationCount})</button>
        <button>Jobs ({jobsAtomCount})</button>
        <button>Messaging({messagingAtomCount})</button>
        <button>Notification ({notificationAtomCount})</button>
        <button>Me ({totalNotificationCount})</button>

  </>
}
export default App
