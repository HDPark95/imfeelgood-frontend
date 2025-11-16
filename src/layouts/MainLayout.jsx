import { Outlet } from 'react-router-dom'
import BottomNavigation from '../components/BottomNavigation'

function MainLayout() {
  return (
    <div className="flex flex-col h-screen max-w-md mx-auto bg-gray-50">
      <main className="flex-1 overflow-y-auto pb-16 bg-gray-50">
        <Outlet />
      </main>
      <BottomNavigation />
    </div>
  )
}

export default MainLayout
